"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("Buyer");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userType: userType,
        createdAt: new Date(),
      });

      // 3️⃣ Send email verification
      await sendEmailVerification(user);

      alert("Account created! Please check your email for verification link.");
      router.push("/login");
    } catch (error: any) {
      console.error("Error during registration:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-[100vh]">
      <form onSubmit={handleRegister} className="flex flex-1 flex-col items-center pt-6">
        <Image src={Logo} width={200} alt="logo" />
        <h4 className="font-bold text-3xl mb-8">Register Now!</h4>

        <nav className="flex flex-col w-[80%] mb-6">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
            placeholder="Enter Your Email Address"
            required
          />
        </nav>

        <nav className="flex flex-col w-[80%] mb-6">
          <label>User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
          >
            <option value="Buyer">Buyer</option>
            <option value="Farmer">Farmer</option>
          </select>
        </nav>

        <nav className="flex flex-col w-[80%] mb-6">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
            placeholder="Enter Password"
            required
          />
        </nav>

        <nav className="flex flex-col w-[80%] mb-8">
          <label>Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-100 min-h-15 pl-4 rounded-sm"
            placeholder="Confirm Password"
            required
          />
        </nav>
        <nav className="w-[80%] mb-6">
            <button
                type="submit"
                className="bg-[#1E8449] w-[100%] min-h-15 text-white rounded-sm hover:bg-[#166936] transition-all"
                >
                Sign Up
            </button>
        </nav>
        

        <p className="my-10">
          Already have an account?{" "}
          <Link href="/login" className="text-[#1E8449] underline">
            Login
          </Link>
        </p>
      </form>

      <div className="flex-1 bg-[url('/loginbg.jpg')] bg-cover bg-center"></div>
    </div>
  );
};

export default Register;
