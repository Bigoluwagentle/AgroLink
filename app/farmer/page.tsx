"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Image from "next/image";
import Header from "@/components/header/header/page";
import ProductPlaceholder from "../../public/product.png";
import Footer from "@/components/footer/page";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: string;
  available: string;
  description?: string;
  imageUrl?: string;
  farmerId: string;
  createdAt?: any;
}

interface Order {
  id: string;
  buyerId: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  status: string;
  createdAt: any;
}

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/db1uamf9c/image/upload";
const UPLOAD_PRESET = "farmer_unsigned";

const Farmer = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<"dashboard" | "listings" | "orders">("listings");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [available, setAvailable] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const currentUser = auth.currentUser;

  const fetchProducts = async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const fetched: Product[] = snapshot.docs
        .map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Product, "id">) }))
        .filter((p) => p.farmerId === currentUser.uid);
      setProducts(fetched);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  const fetchOrders = async () => {
    if (!currentUser) return;
    try {
      const q = query(
        collection(db, "orders"),
        where("farmerId", "==", currentUser.uid),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const orderList: Order[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Order, "id">),
      }));
      setOrders(orderList);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddOrEdit = async (e: FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    let imageUrl: string | undefined = undefined;
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", UPLOAD_PRESET);
      try {
        const response = await axios.post(CLOUDINARY_URL, formData);
        imageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Cloudinary upload error:", error);
        alert("Image upload failed!");
        return;
      }
    }

    try {
      if (editId) {
        await updateDoc(doc(db, "products", editId), {
          name,
          price,
          available,
          description,
          imageUrl,
          farmerId: currentUser.uid,
        });
      } else {
        await addDoc(collection(db, "products"), {
          name,
          price,
          available,
          description,
          imageUrl,
          farmerId: currentUser.uid,
          createdAt: serverTimestamp(),
        });
      }
      setShowForm(false);
      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error adding/editing product:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEdit = (product: Product) => {
    setName(product.name);
    setPrice(product.price);
    setAvailable(product.available);
    setDescription(product.description || "");
    setEditId(product.id);
    setShowForm(true);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.available.toLowerCase().includes(search.toLowerCase())
  );

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: newStatus });
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <Header />

      {showForm && (
        <main className="flex justify-center fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.4)] min-h-[100vh] z-50 overflow-y-auto px-4 sm:px-8">
          <section className="w-full sm:w-[80%] bg-white p-6 sm:p-10 rounded-lg shadow-md mt-10 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl mb-5 font-semibold">{editId ? "Edit Listing" : "Add New Listing"}</h2>
            <form onSubmit={handleAddOrEdit}>
              <nav className="flex flex-col mb-4">
                <label>Product Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
              </nav>
              <nav className="flex flex-col mb-4">
                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded" required />
              </nav>
              <nav className="flex flex-col mb-4">
                <label>Available</label>
                <input type="text" value={available} onChange={(e) => setAvailable(e.target.value)} className="border p-2 rounded" required />
              </nav>
              <nav className="flex flex-col mb-4">
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded" />
              </nav>
              <nav className="flex flex-col mb-4">
                <label>Image</label>
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
              </nav>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">{editId ? "Update" : "Add Listing"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 border rounded w-full sm:w-auto">Cancel</button>
              </div>
            </form>
          </section>
        </main>
      )}

      <main className="flex flex-col sm:flex-row mt-10 sm:mt-20">
        <aside className="w-full sm:w-[20%] bg-[#1E8449] min-h-[50vh] sm:min-h-[100vh] text-white p-5">
          <nav className="flex sm:flex-col flex-row sm:gap-6 gap-4 flex-wrap justify-around sm:justify-start">
            <p className={`cursor-pointer ${activeSection === "dashboard" ? "font-bold text-yellow-300" : ""}`} onClick={() => setActiveSection("dashboard")}>Dashboard</p>
            <p className={`cursor-pointer ${activeSection === "listings" ? "font-bold text-yellow-300" : ""}`} onClick={() => setActiveSection("listings")}>Listings</p>
            <p className={`cursor-pointer ${activeSection === "orders" ? "font-bold text-yellow-300" : ""}`} onClick={() => setActiveSection("orders")}>Orders</p>
            <p className="cursor-pointer">Messages</p>
            <p className="cursor-pointer">Notifications</p>
            <p className="cursor-pointer text-red-200 hover:text-white" onClick={handleLogout}>Logout</p>
          </nav>
        </aside>

        <section className="flex-1 p-4 sm:p-10">
          {activeSection === "dashboard" && (
            <article>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">Farmer Dashboard</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gray-100 p-6 rounded-md text-center">
                  <h4 className="text-lg sm:text-xl font-semibold">Total Listings</h4>
                  <p className="text-2xl sm:text-3xl mt-3">{products.length}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-md text-center">
                  <h4 className="text-lg sm:text-xl font-semibold">Orders Received</h4>
                  <p className="text-2xl sm:text-3xl mt-3">{orders.length}</p>
                </div>
              </div>
            </article>
          )}

          {activeSection === "listings" && (
            <article>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">Your Listings</h2>
                <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-green-600 text-white rounded w-full sm:w-auto">Add New Listing</button>
              </div>

              <input type="text" className="w-full mt-4 mb-8 p-3 border border-gray-400 rounded" placeholder="Search your listings..." value={search} onChange={(e) => setSearch(e.target.value)} />

              {loading ? <p>Loading...</p> :
                filteredProducts.length === 0 ? <p>No listings found.</p> :
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((p) => (
                      <div key={p.id} className="flex flex-col justify-between border rounded p-3 shadow-sm">
                        <Image src={p.imageUrl || ProductPlaceholder} alt={p.name} width={300} height={300} className="object-cover w-full h-[250px]" />
                        <h3 className="font-bold mt-2">{p.name}</h3>
                        <p>${p.price}</p>
                        <p>{p.available}</p>
                        <p>{p.description}</p>
                        <div className="flex justify-between mt-3">
                          <button className="px-4 py-1 border rounded" onClick={() => handleEdit(p)}>Edit</button>
                          <button className="px-4 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(p.id)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
              }
            </article>
          )}

          {activeSection === "orders" && (
            <article className="overflow-x-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">Orders Received</h2>
              {orders.length === 0 ? <p>No orders yet.</p> :
                <table className="w-full border text-sm sm:text-base">
                  <thead>
                    <tr className="bg-gray-200 text-left">
                      <th className="p-3 border">Buyer ID</th>
                      <th className="p-3 border">Product</th>
                      <th className="p-3 border">Qty</th>
                      <th className="p-3 border">Total</th>
                      <th className="p-3 border">Status</th>
                      <th className="p-3 border">Date</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="p-3 border break-all">{order.buyerId}</td>
                        <td className="p-3 border">{order.productName}</td>
                        <td className="p-3 border">{order.quantity}</td>
                        <td className="p-3 border">${(order.price * order.quantity).toFixed(2)}</td>
                        <td className="p-3 border">{order.status}</td>
                        <td className="p-3 border text-xs sm:text-sm">{order.createdAt?.toDate?.()?.toLocaleString() || ""}</td>
                        <td className="p-3 border flex flex-col sm:flex-row gap-2">
                          {order.status === "pending" && (
                            <>
                              <button onClick={() => updateOrderStatus(order.id, "delivered")} className="px-2 py-1 bg-green-500 text-white rounded">Delivered</button>
                              <button onClick={() => updateOrderStatus(order.id, "cancelled")} className="px-2 py-1 bg-red-500 text-white rounded">Cancel</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </article>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Farmer;