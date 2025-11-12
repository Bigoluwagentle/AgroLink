"use client";
import Header from "@/components/header/page";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Work from "../../public/work.png";
import Mission from "../../public/mission.png";
import Touch from "../../public/touch.png";
import Footer from "@/components/footer/page";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="w-full flex flex-col items-center justify-center text-center min-h-screen bg-[#2ECC71] bg-[url('/bg-hero.jpg')] bg-cover bg-center px-4">
          <motion.h1 
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:1}}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#222] leading-tight">
            Buy Fresh. Sell Direct.{" "}
            <span className="text-[#1E8449]">Empower Farmers Worldwide.</span>
          </motion.h1>
          <motion.p 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5}}
          className="text-white text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 max-w-3xl mx-auto">
            AgroLink connects farmers and buyers globally, eliminating middlemen,
            ensuring fair trade, and promoting sustainable agriculture.
          </motion.p>
          <nav className="flex flex-col md:flex-row items-center gap-6 mt-10">
            <Link href="/register">
              <motion.button 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.5}}
                className="min-w-100 sm:w-60 h-13 bg-[#1E8449] rounded-3xl text-white font-semibold cursor-pointer hover:bg-[#27AE60] transition">
                Get Started
              </motion.button>
            </Link>

            <Link href="/">
              <motion.button 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1.5}}
              className="min-w-100 sm:w-60 h-13 bg-white rounded-3xl text-[#1E8449] hover:bg-[#27AE60] cursor-pointer font-semibold hover:bg-gray-100 transition">
                Download App
              </motion.button>
            </Link>
          </nav>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 md:mt-30 mx-auto w-[90%] min-h-20 bg-[url('/bghow.png')] bg-cover bg-right px-4 py-10">
          <nav className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              How AgroLink Works
            </h2>
            <p className="text-base sm:text-lg md:text-[18px] text-gray-700 max-w-lg mx-auto md:mx-0">
              AgroLink simplifies the journey from farm to table. Farmers list
              their fresh produce, buyers browse and purchase directly, ensuring
              fair prices and quality. Discover a transparent marketplace that
              benefits everyone.
            </p>
            <Link href="/how">
              <motion.button 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{type:"spring", stiffness:150}}
                whileHover={{scale:1.1}}
              className="mt-7 text-white rounded-sm cursor-pointer w-40 h-10 bg-[#1E8449] hover:bg-[#27AE60] transition">
                Learn More
              </motion.button>
            </Link>
          </nav>
          <div className="flex justify-center mb-10 md:mb-0">
            <Image
              src={Work}
              alt="Work"
              width={500}
              height={500}
              className="w-full max-w-md md:max-w-lg h-auto"
            />
          </div>
        </section>

        <section className="bg-gray-100 py-20 mt-20">
          <section className="flex flex-col md:flex-row items-center mx-auto w-[90%] gap-10 md:gap-20 min-h-20 px-4">
            <div className="flex justify-center mb-10 md:mb-0">
              <Image
                src={Mission}
                alt="Mission"
                width={500}
                height={400}
                className="w-full max-w-md md:max-w-lg h-auto"
              />
            </div>
            <nav className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                Our Mission & Values
              </h2>
              <p className="text-base sm:text-lg md:text-[18px] text-gray-700 max-w-lg mx-auto md:mx-0">
                AgroLink is dedicated to fostering fair trade and sustainable
                agriculture globally. We empower farming communities by
                connecting them directly with buyers, promoting transparency and
                equitable partnerships.
              </p>
              <Link href="/about">
                <motion.button 
                  initial={{x:100, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{type:"spring", stiffness:150}}
                whileHover={{scale:1.1}}
                className="mt-7 text-white rounded-sm cursor-pointer w-40 h-10 bg-[#1E8449] hover:bg-[#27AE60] transition">
                  Our Mission
                </motion.button>
              </Link>
            </nav>
          </section>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 mx-auto w-[90%] min-h-20 px-4 py-10">
          <nav className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-[18px] text-gray-700 max-w-lg mx-auto md:mx-0">
              Have questions or need support? Our team is here to help you.
              Connect with us to learn more about AgroLink, provide feedback, or
              get assistance with your account.
            </p>
            <Link href="/contact"
              
            >
              <motion.button 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{type:"spring", stiffness:150}}
                whileHover={{scale:1.1}}
              className="mt-7 text-white rounded-sm cursor-pointer w-40 h-10 bg-[#1E8449] hover:bg-[#27AE60] transition">
                Contact Us
              </motion.button>
            </Link>
          </nav>
          <div className="flex justify-center mb-10 md:mb-0">
            <Image
              src={Touch}
              alt="Touch"
              width={500}
              height={400}
              className="w-full max-w-md md:max-w-lg h-auto"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
