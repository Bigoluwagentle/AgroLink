import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const Header = () => {
    return(
        <header className="flex items-center justify-between bg-[#FAFAF5]-500 px-5 py-2">
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </Link>

            <nav className="flex items-center gap-8">
                <Link href="/">Home</Link>
                <Link href="/how">How it Works</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            <nav className="flex items-center gap-8">
                <Link href="/login"><button className="text-[#1E8449] cursor-pointer">Login</button></Link>
                <Link href="/register">
                    <button className="bg-[#1E8449] min-w-28 min-h-9 text-white rounded-sm cursor-pointer">Sign Up</button>
                </Link>
            </nav>
        </header>
    )
}
export default Header;