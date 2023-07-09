import Navbar from "@/components/Navbar";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Top from "@/components/top";
import Middle from "@/components/middle";
import Buttom from "@/components/buttom";

export default function Home() {
	return (
		<div>
			<Navbar />
			{/* Second section */}
			<Top />
			{/* third and Fouth section*/}
			<Middle />
			{/* fifth */}
			<Buttom />
			{/* sixth */}
			<Footer />
		</div>
	);
}
