"use client";
import Image from "next/image";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { motion } from "framer-motion";
import Vision from "../../public/vision.png";
import Mission from "../../public/mission2.png";
import Direct from "../../public/direct.png";
import Fair from "../../public/fair.png";
import Support from "../../public/support.png";
import Fresh from "../../public/fresh.png";
import Sourcing from "../../public/supporting.png";
import Choice from "../../public/choice.png";

const About = () => {
  return (
    <div>
      <Header />

      <section className="flex flex-col items-center justify-center py-10 bg-[url('/rotate.png')] bg-cover bg-right min-h-[70vh] text-center">
        <motion.h1 
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:1}}
        className="text-5xl md:text-7xl font-bold w-[85%] md:w-[60%] mb-6">
          Cultivating a Better Tomorrow, Together
        </motion.h1>
        <motion.p 
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.5}}
          className="text-lg md:text-2xl text-gray-500 w-[85%] md:w-[70%]">
          AgroLink was founded on a simple yet powerful idea: to bridge the gap between hard-working farmers and conscious consumers. 
          We believe in the power of direct connections to cultivate a fairer, more sustainable food system worldwide. 
          Join us on our journey.
        </motion.p>
      </section>

      <main>
        <section className="bg-gray-100 py-20 mt-20">
          <h2 className="text-center font-bold text-4xl md:text-5xl">Our Vision & Mission</h2>

          <div className="flex flex-col md:flex-row justify-center gap-10 mt-16 px-6">
            <div className="flex flex-col items-center w-full md:w-[35%] py-8 bg-white rounded-lg shadow-md text-center">
              <Image src={Vision} alt="Vision" width={100} height={100} />
              <h4 className="font-bold text-3xl mt-4">Our Vision</h4>
              <p className="mt-3 text-lg w-[90%] text-gray-700">
                To create a global ecosystem where farmers thrive, sustainability flourishes, 
                and everyone has access to wholesome, locally-sourced produce — fostering a healthier planet.
              </p>
            </div>

            <div className="flex flex-col items-center w-full md:w-[35%] py-8 bg-white rounded-lg shadow-md text-center">
              <Image src={Mission} alt="Mission" width={100} height={100} />
              <h4 className="font-bold text-3xl mt-4">Our Mission</h4>
              <p className="mt-3 text-lg w-[90%] text-gray-700">
                To empower agricultural communities by connecting farmers directly with buyers, ensuring fair prices, 
                transparent trade, and a sustainable, resilient future for food production globally.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold">Benefits for Farmers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-[95%] mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Direct} width={150} height={150} alt="Direct Market Access" />
              <h4 className="text-2xl my-3 font-bold">Direct Market Access</h4>
              <p className="text-[17px] text-gray-700">
                Connect directly with a wide network of buyers, eliminating middlemen and expanding your reach.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Fair} width={150} height={150} alt="Fair Pricing" />
              <h4 className="text-2xl my-3 font-bold">Fair Pricing</h4>
              <p className="text-[17px] text-gray-700">
                Set your own prices transparently and receive a fair share for your dedication and quality produce.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Mission} width={150} height={150} alt="Sustainable Practices" />
              <h4 className="text-2xl my-3 font-bold">Sustainable Practices</h4>
              <p className="text-[17px] text-gray-700">
                Support and grow a community dedicated to eco-friendly farming and responsible resource management.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Support} width={150} height={150} alt="Community Support" />
              <h4 className="text-2xl my-3 font-bold">Community Support</h4>
              <p className="text-[17px] text-gray-700">
                Join a global network of farmers, share knowledge, and grow together with collective strength.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-6 mb-20">
          <h2 className="text-center text-4xl md:text-5xl font-bold">Benefits for Buyers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-[95%] mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Fresh} width={100} height={100} alt="Fresh Produce" />
              <h4 className="text-2xl my-3 font-bold">Fresh, Local Produce</h4>
              <p className="text-[17px] text-gray-700">
                Access high-quality, fresh produce directly from local and international farmers, delivered to your door.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Vision} width={100} height={100} alt="Support Farmers" />
              <h4 className="text-2xl my-3 font-bold">Support Farmers Directly</h4>
              <p className="text-[17px] text-gray-700">
                Know where your food comes from and contribute directly to farmer livelihoods and sustainable growth.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Sourcing} width={100} height={100} alt="Transparent Sourcing" />
              <h4 className="text-2xl my-3 font-bold">Transparent Sourcing</h4>
              <p className="text-[17px] text-gray-700">
                Gain insights into farming practices, origins, and the complete journey of your food, from farm to table.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
              <Image src={Choice} width={100} height={100} alt="Sustainable Choices" />
              <h4 className="text-2xl my-3 font-bold">Sustainable Choices</h4>
              <p className="text-[17px] text-gray-700">
                Make environmentally conscious purchasing decisions, supporting a greener planet and ethical production.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
