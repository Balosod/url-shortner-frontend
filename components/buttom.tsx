import Link from "next/link";

const Buttom = () => {
	return (
		<div>
			{/* fifth */}
			<div
				className="relative pt-20 bg-no-repeat"
				style={{
					backgroundColor: "rgb(59, 48, 84)",
					backgroundImage: "url(/bg-boost-desktop.svg)",
				}}
			>
				<div className="pb-8">
					<h1 className="text-center text-white  sm:text-2xl md:text-4xl sans-serif font-bold">
						Boot your links today.
					</h1>
					<div className="flex justify-center sm:mt-4 md:mt-10">
						<Link
							href=""
							className="  rounded-full text-white  bg-teal-300 px-8 py-4 sans-serif font-bold"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buttom;
