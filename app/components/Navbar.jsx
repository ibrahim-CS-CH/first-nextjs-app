import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png"
export default function Navbar () {
    return (
        <nav>
            <Image 
                src={Logo}
                alt="App Logo"
                placeholder="blur"
                width={70}
                quality={100}
                />
            <Link href={"/"}> Dashboard</Link>
            <Link href={"/tickets"}> tickets</Link>
        </nav>
    )
}