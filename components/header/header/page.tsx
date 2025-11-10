import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import User from "../../../public/user.png";

const Header = () => {
    return(
        <header className="flex fixed top-0 w-[100%] items-center justify-between bg-white px-5 py-2">
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
                <Image src={User} width={40} className="rounded-4xl cursor-pointer" alt="User profile"/>
            </nav>
        </header>
    )
}
export default Header;