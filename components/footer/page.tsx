import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo1.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#1E8449] pb-10 pt-16">
      {/* Newsletter Section */}
      <section className="flex flex-col items-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-2xl">
          Subscribe to our newsletter to receive exclusive offers, product
          updates, and marketing tips directly to your inbox.
        </p>
        <nav className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            id="email"
            className="bg-white w-full sm:w-80 px-5 h-12 outline-none rounded-3xl text-gray-700"
          />
          <Link href="/">
            <button className="bg-gray-300 min-w-90 sm:w-40 h-13 rounded-3xl cursor-pointer text-[#1E8449] font-semibold hover:bg-white transition">
              Subscribe Now!
            </button>
          </Link>
        </nav>
      </section>

      <section className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 px-6 sm:px-10 md:px-20 mt-20">
        <div className="flex-1 text-center md:text-left">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto md:mx-0"
            />
          </Link>
          <p className="mt-5 text-white max-w-sm mx-auto md:mx-0 text-sm sm:text-base">
            Fostering fair trade and sustainability in agriculture by directly
            connecting farmers and buyers.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <nav className="flex flex-col">
            <h4 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/how" className="text-white hover:text-gray-200">
              How It Works
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex-1 text-center md:text-left">
          <nav className="flex flex-col">
            <h4 className="text-white text-lg font-semibold mb-3">Legal</h4>
            <p className="text-white hover:text-gray-200 cursor-pointer">
              Terms of Service
            </p>
            <p className="text-white hover:text-gray-200 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-white hover:text-gray-200 cursor-pointer">
              Data Policy
            </p>
            <p className="text-white hover:text-gray-200 cursor-pointer">
              Contact
            </p>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <nav>
            <h4 className="text-white text-lg font-semibold mb-3">
              Contact Us
            </h4>
            <p className="text-white text-sm sm:text-base">
              Email: support@agrolink.com
            </p>
            <p className="text-white text-sm sm:text-base">
              Phone: +1 (555) 123-4567
            </p>
          </nav>
        </div>
      </section>

      <p className="mt-16 text-center text-white text-sm sm:text-base px-4">
        © 2025 AgroLink. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
