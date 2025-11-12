"use client";

import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields before logging in.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      const userType = userDoc.exists() ? userDoc.data().userType : null;

      if (userType === "Farmer") {
        toast.success("Login successful! Redirecting to Farmer Dashboard...");
        router.push("/farmer");
      } else if (userType === "Buyer") {
        toast.success("Login successful! Redirecting to Buyer Dashboard...");
        router.push("/buyyer");
      } else {
        toast.error("User type not found!");
      }
    } catch (error: any) {
      toast.error("Invalid info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh]">
      <div className="hidden md:flex flex-1 bg-[url('/loginbg.jpg')] bg-cover bg-center" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:py-6"
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Image src={Logo} width={150} alt="logo" className="mb-4 md:mb-6" />
        <h4 className="font-bold text-2xl md:text-3xl mb-8 text-center">Welcome Back!</h4>

        <nav className="flex flex-col w-full md:w-[80%] mb-6">
          <label className="mb-2 font-medium">Your Email</label>
          <input
            type="email"
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email Address"
          />
        </nav>

        <nav className="flex flex-col w-full md:w-[80%] mb-8">
          <label className="mb-2 font-medium">Your Password</label>
          <input
            type="password"
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
          />
        </nav>

        <nav className="flex flex-col w-full md:w-[80%]">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1E8449] min-h-12 cursor-pointer text-white font-semibold rounded-sm hover:bg-[#166936] transition-all disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </nav>

        <p className="my-8 text-center text-sm md:text-base">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#1E8449] underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
