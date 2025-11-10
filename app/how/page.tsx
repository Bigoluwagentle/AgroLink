import Header from "@/components/header/page";
import Link from "next/link";
import Image from "next/image";
import one from "../../public/one.png";
import Two from "../../public/two.png";
import Work from "../../public/three.png";
import Mission from "../../public/four.png";
import Footer from "@/components/footer/page";

const HowItWork = () => {
    return(
        <div>
            <Header/>
            <nav className="flex flex-col items-center mt-20">
                <h1 className="text-5xl w-[60%] text-center font-bold mb-5">How AgroLink Empowers Your Agricultural Journey</h1>
                <p className="w-[50%] text-center text-gray-500">Experience a transparent and sustainable marketplace connecting farmers directly with buyers. Here's how it works:</p>
            </nav>

            <main>
                <section className="flex items-center gap-10 mt-30 mx-auto w-[80%] min-h-20">
                    <Image
                        src={one}
                        alt="Work"
                        width={1200}
                    />
                    <nav>
                        <p className="text-[#1E8449]">1.</p>
                        <h2 className="text-3xl font-bold mb-3 w-[70%]">Join AgroLink: Your Gateway to Global Trade</h2>
                        <p className="w-[70%] text-[15px] text-[#1A1A1A]-500">Register as a farmer to showcase your produce to a global audience or as a buyer to discover fresh, high-quality products directly from the source. Our simple signup process gets you connected in minutes.</p>
                        <Link href="/register">
                            <button className="mt-7 text-white rounded-sm cursor-pointer min-w-30 min-h-10 bg-[#1E8449]">Join Now</button>
                        </Link>
                    </nav>
                    
                </section>

                <section className="flex justify-center mt-40">
                    <section className="flex items-center bg-gray-100 py-15 mx-auto w-[80%] gap-20 min-h-20">
                        <nav>
                            <p className="text-[#1E8449]">2.</p>
                            <h2 className="text-3xl font-bold mb-3 w-[90%]">Showcase Your Produce: Reach a Global Market</h2>
                            <p className="w-[80%] text-[15px] text-[#1A1A1A]-500">Farmers can easily list their products, specifying details like type, quantity, price, and origin. Upload high-quality photos to attract buyers and ensure fair value for your hard work.</p>
                        </nav>
                        <Image
                            src={Two}
                            alt="Mission"
                            width={1000}
                        />
                    </section>
                </section>

                <section className="flex items-center gap-10 mt-30 mx-auto w-[80%] min-h-20">
                    <Image
                        src={Work}
                        alt="Work"
                        width={1200}
                    />
                    <nav>
                        <p className="text-[#1E8449]">3.</p>
                        <h2 className="text-3xl font-bold mb-3 w-[70%]">Discover Quality Produce: Connect Directly</h2>
                        <p className="w-[70%] text-[15px] text-[#1A1A1A]-500">Buyers can browse a diverse range of agricultural products, filtered by type, location, and certification. Connect directly with farmers, discuss terms, and build lasting relationships.</p>
                    </nav>
                    
                </section>

                <section className="flex justify-center mt-40">
                    <section className="flex items-center bg-gray-100 py-15 mx-auto w-[80%] gap-20 min-h-20">
                        <nav>
                            <p className="text-[#1E8449]">4.</p>
                            <h2 className="text-3xl font-bold mb-3 w-[90%]">Secure Transactions & Reliable Delivery</h2>
                            <p className="w-[80%] text-[15px] text-[#1A1A1A]-500">AgroLink ensures secure payment processing and facilitates reliable delivery options, offering peace of mind for both farmers and buyers. Track your orders from farm to destination.</p>
                        </nav>
                        <Image
                            src={Mission}
                            alt="Mission"
                            width={1000}
                        />
                    </section>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
export default HowItWork;