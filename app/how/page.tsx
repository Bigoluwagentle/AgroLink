"use client";
import Header from "@/components/header/page";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import one from "../../public/one.png";
import Two from "../../public/two.png";
import Work from "../../public/three.png";
import Mission from "../../public/four.png";
import Footer from "@/components/footer/page";

const HowItWork = () => {
  return (
    <div>
      <Header />

      <nav className="flex flex-col items-center justify-center py-10 md:py-20 bg-[url('/rotate.png')] bg-cover bg-right min-h-[60vh] px-4">
        <motion.h1 
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:1}}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-full md:w-3/4 text-center font-bold mb-6 text-[#1A1A1A] leading-tight">
          How AgroLink Empowers Your Agricultural Journey
        </motion.h1>
        <motion.p 
          initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5}}
        className="w-full md:w-2/3 text-center text-lg sm:text-xl md:text-2xl text-gray-600">
          Experience a transparent and sustainable marketplace connecting
          farmers directly with buyers. Here's how it works:
        </motion.p>
      </nav>

      <main className="bg-[url('/bghow.png')] bg-cover bg-end px-4 md:px-10 lg:px-20">
        <section className="flex flex-col md:flex-row items-center gap-10 py-10 md:py-20 mt-10 md:mt-20 w-full md:w-[85%] mx-auto">
          <div className="flex justify-center md:w-1/2">
            <Image
              src={one}
              alt="Join AgroLink"
              width={600}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
          <nav className="md:w-1/2 text-center md:text-left">
            <p className="text-[#1E8449] text-2xl md:text-3xl font-semibold">1.</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Join AgroLink: Your Gateway to Global Trade
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Register as a farmer to showcase your produce to a global audience
              or as a buyer to discover fresh, high-quality products directly
              from the source. Our simple signup process gets you connected in
              minutes.
            </p>
            <Link href="/register">
              <button className="mt-3 text-white rounded-sm cursor-pointer w-40 h-10 bg-[#1E8449] hover:bg-[#27AE60] transition">
                Join Now
              </button>
            </Link>
          </nav>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 py-10 md:py-20 w-full md:w-[85%] mx-auto">
          <nav className="md:w-1/2 text-center md:text-left">
            <p className="text-[#1E8449] text-2xl md:text-3xl font-semibold">2.</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Showcase Your Produce: Reach a Global Market
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Farmers can easily list their products, specifying details like
              type, quantity, price, and origin. Upload high-quality photos to
              attract buyers and ensure fair value for your hard work.
            </p>
          </nav>
          <div className="flex justify-center md:w-1/2">
            <Image
              src={Two}
              alt="Showcase Produce"
              width={600}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-10 md:py-20 w-full md:w-[85%] mx-auto">
          <div className="flex justify-center md:w-1/2">
            <Image
              src={Work}
              alt="Discover Quality"
              width={600}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
          <nav className="md:w-1/2 text-center md:text-left">
            <p className="text-[#1E8449] text-2xl md:text-3xl font-semibold">3.</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Discover Quality Produce: Connect Directly
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Buyers can browse a diverse range of agricultural products,
              filtered by type, location, and certification. Connect directly
              with farmers, discuss terms, and build lasting relationships.
            </p>
          </nav>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 py-10 md:py-20 w-full md:w-[85%] mx-auto">
          <nav className="md:w-1/2 text-center md:text-left">
            <p className="text-[#1E8449] text-2xl md:text-3xl font-semibold">4.</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Secure Transactions & Reliable Delivery
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              AgroLink ensures secure payment processing and facilitates
              reliable delivery options, offering peace of mind for both farmers
              and buyers. Track your orders from farm to destination.
            </p>
          </nav>
          <div className="flex justify-center md:w-1/2">
            <Image
              src={Mission}
              alt="Secure Transactions"
              width={600}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWork;
