import Header from "@/components/header/page";
import Image from "next/image";
import Chat from "../../public/chat.png";
import Email from "../../public/email.png";
import Call from "../../public/call.png";
import Footer from "@/components/footer/page";

const Contact = () => {
    return(
        <div>
            <Header/>
            <nav className="flex flex-col items-center mt-20">
                <h1 className="text-5xl text-center font-bold mb-5">We're Here to Help You Grow</h1>
                <p className="w-[55%] text-center text-gray-500">Whether you're a farmer with a question or a buyer needing assistance, our dedicated support team is ready to provide you with timely and effective solutions.</p>
            </nav>
            <h1 className="text-center text-3xl mt-20 font-bold">How Can We Help You?</h1>
            <section  className="flex justify-center w-[80%] mx-auto mt-10 gap-20 text-center">
                <div className="flex flex-col items-center w-[30%] bg-gray-100 min-h-50 py-3">
                    <Image src={Chat} alt="Chat" width={100} height={100} />
                    <h4 className="font-bold mt-4">Live Chat Support</h4>
                    <p className="w-[95%] mt-3">Get immediate answers and real-time assistance from our support agents.</p>
                    <button className="mt-5 bg-[#1E8449] min-w-40 min-h-10 text-white rounded-sm">Start Live Chat</button>
                </div>
                <div className="flex flex-col items-center w-[30%] bg-gray-100 min-h-50 py-3">
                    <Image src={Email} alt="Chat" width={100} height={100} />
                    <h4 className="font-bold mt-4">Email Support</h4>
                    <p className="w-[95%] mt-3">Send us a detailed message, and we'll respond within 24 hours.</p>
                    <button className="mt-5 bg-[#1E8449] min-w-40 min-h-10 text-white rounded-sm">Send Email</button>
                </div>
                <div className="flex flex-col items-center w-[30%] bg-gray-100 min-h-50 py-3">
                    <Image src={Call} alt="Chat" width={100} height={100} />
                    <h4 className="font-bold mt-4">Call Us</h4>
                    <p className="w-[95%] mt-3">Speak directly to our support team for urgent inquiries. +1 (555) 123-4567</p>
                    <button className="mt-5 bg-[#1E8449] min-w-40 min-h-10 text-white rounded-sm">Call Now</button>
                </div>
            </section>

            <form className="flex flex-col items-center w-[80%] mx-auto mt-40 min-h-40">
                <legend className="text-3xl font-bold">Send Us a Message</legend>
                <p className="text-gray-500 text-sm mb-20">Fill out the form below and our support team will get back to you within 24 hours.</p>
                <nav className="w-[80%] flex flex-col mb-10">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="bg-gray-100 min-h-12 pl-3 rounded-sm mt-1" placeholder="What is your request about" />
                </nav>
                <nav className="flex flex-col w-[80%] mb-10">
                    <label htmlFor="email">Your Email</label>
                    <input type="text" className="bg-gray-100 min-h-12 pl-3 rounded-sm mt-1" placeholder="name@example.com" />
                </nav>
                <nav className="w-[80%] flex flex-col mb-10">
                    <label htmlFor="name">Detailed Description</label>
                    <textarea className="bg-gray-100 min-h-20 pl-3 rounded-sm mt-1" placeholder="Please provide as much detail as possible to help us assist you better."></textarea>
                </nav>
                <nav className="w-[80%] flex flex-col mb-10">
                    <label htmlFor="name">Attachments (Optional)</label>
                    <input className="bg-gray-100 min-h-12 pl-3 rounded-sm mt-1" type="file" />
                </nav>
                <nav className="w-[80%]">
                    <button type="submit" className="bg-[#1E8449] w-[100%] min-h-10 rounded-lg text-white">Submit Request</button>
                </nav>
                <p className="mt-10 text-sm">By submitting, you agree to our privacy policy and terms of service.</p>
            </form>
            <Footer/>
        </div>
    )
}
export default Contact;