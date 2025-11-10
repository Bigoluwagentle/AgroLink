"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header/header/page";
import Footer from "@/components/footer/page";
import ProductPlaceholder from "../../public/product.png";
import { auth, db } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  farmerName: string;
  imageUrl: string;
  farmerId?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Buyer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeSection, setActiveSection] = useState<string>("Dashboard");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  const user = auth.currentUser;

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const productList: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        setProducts(productList);
        setFilteredProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch buyer orders
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        const q = query(collection(db, "orders"), where("buyerId", "==", user.uid));
        const snapshot = await getDocs(q);
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [user]);

  // Search functionality
  useEffect(() => {
    if (!searchTerm.trim()) setFilteredProducts(products);
    else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Add to Cart
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (id: string, change: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Checkout
  const handleCheckout = async () => {
  if (!user) {
    alert("Please log in to checkout.");
    router.push("/login");
    return;
  }

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  try {
    // Group cart items by farmerId
    const itemsByFarmer: Record<string, CartItem[]> = {};
    cartItems.forEach((item) => {
      if (!item.farmerId) return; // skip if no farmerId
      if (!itemsByFarmer[item.farmerId]) itemsByFarmer[item.farmerId] = [];
      itemsByFarmer[item.farmerId].push(item);
    });

    // Create one order per farmer
    for (const [farmerId, items] of Object.entries(itemsByFarmer)) {
      await addDoc(collection(db, "orders"), {
        buyerId: user.uid,
        buyerName: user.displayName || "Anonymous",
        farmerId,
        items: items.map((i) => ({
          productId: i.id,
          productName: i.name,
          quantity: i.quantity,
          price: i.price,
          totalPrice: i.price * i.quantity,
        })),
        status: "pending",
        createdAt: serverTimestamp(),
      });
    }

    setCartItems([]); // clear cart
    alert("Order placed successfully!");
    setActiveSection("Order"); // go to orders section
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Failed to place order. Try again.");
  }
};


  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="mt-5">
            <h2 className="text-3xl font-bold mb-5">Buyer Dashboard</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Total Orders", "Pending", "Delivered", "Cancelled"].map(
                (title, i) => (
                  <div
                    key={title}
                    className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow-sm"
                  >
                    <p className="font-semibold">{title}</p>
                    <h4 className="text-3xl font-bold mt-2">
                      {i === 0
                        ? orders.length
                        : orders.filter((o) => o.status === title.toLowerCase())
                            .length}
                    </h4>
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "Store":
        return (
          <div className="mt-5">
            <h2 className="text-3xl font-bold mb-5">Buyer Store</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-400 rounded"
              placeholder="Search for product or crop type..."
            />

            <section className="flex flex-wrap justify-between mt-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="border w-[30%] border-gray-300 mb-10 rounded-lg overflow-hidden shadow-sm"
                  >
                    <Image
                      src={p.imageUrl || ProductPlaceholder}
                      width={300}
                      height={250}
                      alt={p.name}
                      className="object-cover w-full h-[250px]"
                    />
                    <nav className="p-4">
                      <h4 className="font-bold">{p.name}</h4>
                      <p>${p.price}</p>
                      <p className="text-sm text-gray-600">
                        From: {p.farmerName || "US"}
                      </p>
                      <button
                        onClick={() => addToCart(p)}
                        className="bg-[#1E8449] my-3 py-2 text-white rounded w-full"
                      >
                        Add To Cart
                      </button>
                    </nav>
                  </div>
                ))
              ) : (
                <p>No products match your search.</p>
              )}
            </section>
          </div>
        );

      case "Cart":
        const total = cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        return (
          <div className="mt-5">
            <h2 className="text-3xl font-bold mb-5">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border p-4 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p>${item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <p className="text-xl font-bold mb-3">
                    Total: ${total.toFixed(2)}
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="bg-green-600 text-white px-6 py-3 rounded"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        );

      case "Order":
        return (
          <div className="mt-5">
            <h2 className="text-3xl font-bold mb-5">Your Orders</h2>
            {orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {orders.map((o) => (
                    <div key={o.id} className="border p-4 rounded">
                        <p className="font-semibold">Order ID: {o.id}</p>
                        <p>Status: {o.status}</p>
                        <p>Items: {o.items?.length || 0}</p>
                    </div>
                    ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <main className="flex mt-20">
        <aside className="w-[20%] bg-[#1E8449] min-h-[100vh] text-white p-5">
          <nav className="flex flex-col gap-6">
            {["Dashboard", "Store", "Cart", "Order"].map((item) => (
              <p
                key={item}
                onClick={() => setActiveSection(item)}
                className={`cursor-pointer ${
                  activeSection === item
                    ? "font-bold underline text-yellow-200"
                    : ""
                }`}
              >
                {item}
                {item === "Cart" && cartItems.length > 0 && (
                  <span className="ml-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs">
                    {cartItems.length}
                  </span>
                )}
              </p>
            ))}
            <p
              onClick={handleLogout}
              className="cursor-pointer text-red-200 hover:text-white mt-4"
            >
              Logout
            </p>
          </nav>
        </aside>
        <section className="flex-1 pl-20 pr-10 pb-10">{renderContent()}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Buyer;
