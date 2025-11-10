import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo1.png";

const Footer = () => {
    return(
        <footer className="mt-50 bg-[#1E8449] min-h-100 pb-20">

            <section className="flex flex-col items-center pt-20">
                <h2 className="text-5xl text-white">Subscribe to Our Newsletter</h2>
                <p className="text-[17px] mt-5 text-gray-300 w-[60%] text-center">Subscribe to our newsletter to receive exclusive offers, product updates, and marketing tips directly to your inbox.</p>
                <nav className="mt-10">
                    <input type="email" placeholder="Enter Your Email Address" name="email" id="email" className="bg-[#FFF] w-100 px-5 min-h-12 outline-none rounded-4xl" />
                    <Link href="/">
                        <button className="ml-5 bg-gray-300 min-w-50 min-h-12 rounded-4xl cursor-pointer text-[#1E8449]">Subscribe Now!</button>
                    </Link>
                </nav>
            </section>

 
            <section className="flex justify-between px-20 mt-30">
                <div className="flex-1">
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt="Logo"
                            width={200}
                            height={200}
                        />
                    </Link>
                    <p className="w-[90%] mt-5 text-white">Fostering fair trade and sustainability in agriculture by directly connecting farmers and buyers.</p>
                </div>
                <div className="flex-1">
                    <nav className="flex flex-col">
                        <h4 className="text-white mb-3">Quick Links</h4>
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/how" className="text-white">How is Work</Link>
                        <Link href="/about" className="text-white">About</Link>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </nav>
                </div>
                <div className="flex-1">
                    <nav>
                        <h4 className="text-white mb-3">Legal</h4>
                        <p className="text-white">Terms of Service</p>
                        <p className="text-white">Privacy Policy</p>
                        <p className="text-white">Data Policy</p>
                        <p className="text-white">Contact</p>
                    </nav>
                </div>
                <div className="flex-1">
                    <nav>
                        <h4 className="text-white mb-3">Contact Us</h4>
                        <p className="text-white">Email: support@agrolink.com</p>
                        <p className="text-white">Phone: +1 (555) 123-4567</p>
                        
                    </nav>
                </div>
            </section>
            <p className="mt-20 text-center">© 2025 AgroLink. All rights reserved.</p>
        </footer>
    )
}
export default Footer;