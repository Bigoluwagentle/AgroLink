import Header from "@/components/header/page";
import Link from "next/link";
import Image from "next/image";
import Work from "../../public/work.png";
import Mission from "../../public/mission.png";
import Touch from "../../public/touch.png";

import Footer from "@/components/footer/page";

const LandingPage = () => {
    return(
        <div>
            <Header/>
            <main>
                <section className="flex items-center text-center flex-col min-h-[100vh] bg-[#2ECC71] bg-[url('/bg-hero.jpg')] bg-cover bg-center">
                    <h1 className="mt-20 text-7xl text-[#222]">Buy Fresh. Sell Direct. <span className="text-[#1E8449]">Empower Farmers WorldWide.</span></h1>
                    <p className="text-white text-2xl mt-8 w-[70%] mb-18">AgroLink connects farmers and buyers globaly eliminating middlemen, ensuring fair trade, and promoting sustainable agriculture.</p>
                    <nav className="flex gap-10">
                        <Link href="/register">
                            <button className="min-w-50 min-h-12 bg-[#1E8449] rounded-3xl text-white cursor-pointer">Get Started</button>
                        </Link>

                        <Link href="/">
                            <button className="min-w-50 min-h-12 bg-[#FFF] rounded-3xl cursor-pointer">Download App</button>
                        </Link>
                    </nav>
                </section>

                <section className="flex items-center justify-between mt-30 mx-auto w-[90%] min-h-20">
                    <nav>
                        <h2 className="text-5xl font-700 mb-3">How AgroLink Works</h2>
                        <p className="w-[70%] text-[15px] text-[#1A1A1A]-500">AgroLink simplifies the journey from farm to table. Farmers list their fresh produce, buyers browse and purchase directly, ensuring fair prices and quality. Discover a transparent marketplace that benefits everyone.</p>
                        <Link href="/how">
                            <button className="mt-7 text-white rounded-sm cursor-pointer min-w-30 min-h-10 bg-[#1E8449]">Learn More</button>
                        </Link>
                    </nav>
                    <Image
                        src={Work}
                        alt="Work"
                        width={1000}
                    />
                </section>

                <section className="flex justify-between bg-gray-100 py-15 mt-40">
                    <section className="flex items-center mx-auto w-[90%] gap-20 min-h-20">
                        <Image
                            src={Mission}
                            alt="Mission"
                            width={1000}
                        />
                        <nav>
                            <h2 className="text-5xl font-700 mb-3">Our Mission & Values</h2>
                            <p className="w-[70%] text-[15px] text-[#1A1A1A]-500">AgroLink is dedicated to fostering fair trade and sustainable agriculture globally. We empower farming communities by connecting them directly with buyers, promoting transparency and equitable partnerships.</p>
                            <Link href="/about">
                                <button className="mt-7 text-white rounded-sm cursor-pointer min-w-30 min-h-10 bg-[#1E8449]">Our Mission</button>
                            </Link>
                        </nav>
                    </section>
                </section>

                <section className="flex items-center justify-between mt-30 mx-auto w-[90%] min-h-20">
                    <nav>
                        <h2 className="text-5xl font-700 mb-3">Get in Touch</h2>
                        <p className="w-[70%] text-[15px] text-[#1A1A1A]-500">Have questions or need support? Our team is here to help you. Connect with us to learn more about AgroLink, provide feedback, or get assistance with your account.</p>
                        <Link href="/contact">
                            <button className="mt-7 text-white rounded-sm cursor-pointer min-w-30 min-h-10 bg-[#1E8449]">Contact Us</button>
                        </Link>
                    </nav>
                    <Image
                        src={Touch}
                        alt="Work"
                        width={1000}
                    />
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export default LandingPage;