"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("Buyer");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userType: userType,
        createdAt: new Date(),
      });

      await sendEmailVerification(user);

      toast.success("Account created! Please check your email for verification link.");
      router.push("/login");
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh]">
      <Toaster position="top-right" reverseOrder={false} />

      <form
        onSubmit={handleRegister}
        className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:py-6"
      >
        <Image src={Logo} width={150} alt="logo" className="mb-4 md:mb-6" />
        <h4 className="font-bold text-2xl md:text-3xl mb-8 text-center">Register Now!</h4>

        <nav className="flex flex-col w-full md:w-[80%] mb-6">
          <label htmlFor="email" className="mb-2 font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
            placeholder="Enter Your Email Address"
            required
          />
        </nav>

        <nav className="flex flex-col w-full md:w-[80%] mb-6">
          <label className="mb-2 font-medium">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
          >
            <option value="Buyer">Buyer</option>
            <option value="Farmer">Farmer</option>
          </select>
        </nav>

        <nav className="flex flex-col w-full md:w-[80%] mb-6">
          <label className="mb-2 font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
            placeholder="Enter Password"
            required
          />
        </nav>

        <nav className="flex flex-col w-full md:w-[80%] mb-8">
          <label className="mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-100 min-h-12 pl-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
            placeholder="Confirm Password"
            required
          />
        </nav>

        <nav className="w-full md:w-[80%] mb-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1E8449] w-full min-h-12 text-white rounded-sm hover:bg-[#166936] transition-all disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </nav>

        <p className="my-8 text-center text-sm md:text-base">
          Already have an account?{" "}
          <Link href="/login" className="text-[#1E8449] underline">
            Login
          </Link>
        </p>
      </form>

      <div className="hidden md:flex flex-1 bg-[url('/loginbg.jpg')] bg-cover bg-center"></div>
    </div>
  );
};

export default Register;
