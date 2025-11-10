"use client";

import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields before logging in.");
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
        alert("Please verify your email before logging in.");
        return;
      }

      const userDoc = await getDoc(
        doc(db, "users", userCredential.user.uid)
      );
      const userType = userDoc.exists() ? userDoc.data().userType : null;

      if (userType === "Farmer") router.push("/farmer");
      else if (userType === "Buyer") router.push("/buyyer");
      else alert("User type not found!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100vh]">
      <div className="flex-1 bg-[url('/loginbg.jpg')] bg-cover bg-center" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col items-center pt-6"
      >
        <Image src={Logo} width={200} alt="logo" className="mb-6" />
        <h4 className="font-bold text-3xl mb-8">Welcome Back!</h4>

        <nav className="flex flex-col w-[80%] mb-6">
          <label>Your Email</label>
          <input
            type="email"
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email Address"
          />
        </nav>

        <nav className="flex flex-col w-[80%] mb-8">
          <label>Your Password</label>
          <input
            type="password"
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
          />
        </nav>

        <nav className="flex flex-col w-[80%]">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1E8449] min-h-15 cursor-pointer text-white font-semibold rounded-sm hover:bg-[#166936] transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </nav>

        <p className="my-10">
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
