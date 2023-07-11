import Navbar from "@/components/Navbar";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Top from "@/components/top";
import Buttom from "@/components/buttom";

export default function Home() {
	return (
		<div>
			<Navbar />
			{/* Second section */}
			<Top />

			{/* fifth */}
			<Buttom />
			{/* sixth */}
			<Footer />
		</div>
	);
}
