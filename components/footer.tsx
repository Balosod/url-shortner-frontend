import { AiFillFacebook } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<div
				className="py-20"
				style={{
					backgroundColor: "rgb(35, 33, 39)",
				}}
			>
				<div className="flex sm:flex-col md:flex-row md:space-x-20 lg:space-x-60 md:pl-10 lg:pl-40">
					<div className="sm:text-center text-white text-4xl sans-serif font-bold">
						Shortly
					</div>
					<div className="flex sm:mt-10 md:mt-0 sm:flex-col md:flex-row md:space-x-6 lg:space-x-20">
						<div>
							<h1 className=" sm:text-center md:text-left text-white  text-1xl sans-serif font-bold">
								Features
							</h1>
							<p className=" sm:text-center md:text-left mt-4 text-sm text-gray-400 sans-serif">
								Link Shortening
							</p>
							<p className=" sm:text-center md:text-left mt-2  text-sm text-gray-400 sans-serif">
								Branded Links
							</p>
							<p className=" sm:text-center md:text-left mt-2 text-sm text-gray-400 sans-serif">
								Analytics
							</p>
						</div>
						<div>
							<h1 className="sm:mt-8 md:mt-0 sm:text-center md:text-left text-white  text-1xl sans-serif font-bold">
								Resources
							</h1>
							<p className=" sm:text-center md:text-left mt-4 text-sm text-gray-400 sans-serif">
								Blog
							</p>
							<p className=" sm:text-center md:text-left  mt-2 text-sm text-gray-400 sans-serif">
								Developer
							</p>
							<p className=" sm:text-center md:text-left mt-2  text-sm text-gray-400 sans-serif">
								Support
							</p>
						</div>
						<div>
							<h1 className=" sm:mt-8 md:mt-0 sm:text-center md:text-left text-white  text-1xl sans-serif font-bold">
								Company
							</h1>
							<p className=" sm:text-center md:text-left mt-4 text-sm text-gray-400 sans-serif">
								About
							</p>
							<p className=" sm:text-center md:text-left mt-2 text-sm text-gray-400 sans-serif">
								Our Team
							</p>
							<p className=" sm:text-center md:text-left mt-2 text-sm text-gray-400 sans-serif">
								Careers
							</p>
							<p className=" sm:text-center md:text-left mt-2 text-sm text-gray-400 sans-serif">
								Contact
							</p>
						</div>
						<div>
							<div className="flex items-center justify-center  sm:m-auto sm:pt-10 md:pt-0 md:pl0 flex flex-row space-x-2">
								<AiFillFacebook
									className="sm:w-10 sm:h-10 md:w-7 md:h-7 lg:w-10 lg:h-10"
									style={{
										color: "white",
									}}
								/>
								<BiLogoTwitter
									className="sm:w-10 sm:h-10 md:w-7 md:h-7 lg:w-10 lg:h-10"
									style={{
										color: "white",
									}}
								/>
								<BsPinterest
									className="sm:w-10 sm:h-10 md:w-7 md:h-7 lg:w-10 lg:h-10"
									style={{
										color: "white",
									}}
								/>
								<FaInstagram
									className="sm:w-10 sm:h-10 md:w-7 md:h-7 lg:w-10 lg:h-10"
									style={{
										color: "white",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
