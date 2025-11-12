"use client";
import Header from "@/components/header/page";
import { motion } from "framer-motion";
import Image from "next/image";
import Chat from "../../public/chat.png";
import Email from "../../public/email.png";
import Call from "../../public/call.png";
import Footer from "@/components/footer/page";

const Contact = () => {
  return (
    <div>
      <Header />

      <section className="flex flex-col items-center justify-center py-10 bg-[url('/rotate.png')] bg-cover bg-right min-h-[70vh] text-center">
        <motion.h1 
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:1}}
        className="text-5xl md:text-7xl font-bold w-[85%] md:w-[60%] mb-6">
          We're Here to Help You Grow
        </motion.h1>
        <motion.p 
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.5}}
        className="text-lg md:text-2xl text-gray-500 w-[85%] md:w-[60%]">
          Whether you're a farmer with a question or a buyer needing assistance,
          our dedicated support team is ready to provide you with timely and
          effective solutions.
        </motion.p>
      </section>

      <section className="text-center mt-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          How Can We Help You?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[95%] md:w-[90%] mx-auto">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow p-8">
            <Image src={Chat} alt="Chat Support" width={100} height={100} />
            <h4 className="font-bold text-2xl mt-4">Live Chat Support</h4>
            <p className="text-[17px] mt-3 text-gray-700">
              Get immediate answers and real-time assistance from our support
              agents.
            </p>
            <button className="mt-5 bg-[#1E8449] hover:bg-[#166939] transition text-white rounded-md px-8 py-3">
              Start Live Chat
            </button>
          </div>

          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow p-8">
            <Image src={Email} alt="Email Support" width={100} height={100} />
            <h4 className="font-bold text-2xl mt-4">Email Support</h4>
            <p className="text-[17px] mt-3 text-gray-700">
              Send us a detailed message, and we'll respond within 24 hours.
            </p>
            <button className="mt-5 bg-[#1E8449] hover:bg-[#166939] transition text-white rounded-md px-8 py-3">
              Send Email
            </button>
          </div>

          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow p-8">
            <Image src={Call} alt="Phone Support" width={100} height={100} />
            <h4 className="font-bold text-2xl mt-4">Call Us</h4>
            <p className="text-[17px] mt-3 text-gray-700">
              Speak directly to our support team.<br /> +1 (555) 123-4567
            </p>
            <button className="mt-5 bg-[#1E8449] hover:bg-[#166939] transition text-white rounded-md px-8 py-3">
              Call Now
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-[90%] md:w-[80%] mx-auto mt-32 mb-32 text-center">
        <legend className="text-4xl md:text-5xl font-bold">
          Send Us a Message
        </legend>
        <p className="text-gray-500 text-[16px] mt-3 mb-16">
          Fill out the form below and our support team will get back to you
          within 24 hours.
        </p>

        <form className="w-full md:w-[80%] flex flex-col gap-8">
          <div className="flex flex-col text-left">
            <label htmlFor="subject" className="text-[18px] font-semibold">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="bg-gray-100 min-h-[3.5rem] pl-4 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
              placeholder="What is your request about?"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-[18px] font-semibold">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-gray-100 min-h-[3.5rem] pl-4 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
              placeholder="name@example.com"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-[18px] font-semibold">
              Detailed Description
            </label>
            <textarea
              id="message"
              className="bg-gray-100 min-h-[10rem] pl-4 pt-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
              placeholder="Please provide as much detail as possible to help us assist you better."
            ></textarea>
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="file" className="text-[18px] font-semibold">
              Attachments (Optional)
            </label>
            <input
              id="file"
              type="file"
              className="bg-gray-100 min-h-[3rem] pl-3 py-2 rounded-md mt-2 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1E8449] hover:bg-[#166939] transition text-white w-full py-5 rounded-lg text-lg font-semibold"
          >
            Submit Request
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-500">
          By submitting, you agree to our privacy policy and terms of service.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
