import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Top = () => {
	const [link, setLink] = React.useState("");
	const [linkError, setLinkError] = useState("");
	const [numbers, setNumbers] = React.useState<number[]>([]);
	const [left, setLeft] = React.useState(["1"]);
	const [right, setRight] = React.useState(["1"]);
	const [position, setPosition] = React.useState(0);

	const callApi = async () => {
		if (link) {
			console.log(link);
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					link,
				}),
			};
			const response = await fetch(
				"https://ur-tuki.onrender.com/api/post-link",
				requestOptions,
			);
			const data = await response.json();

			const shortLink = data["message"]["shorted_link"];
			const shortUrl = `https://ur-tuki.onrender.com/api/get-link/${shortLink}`;
			setLinkError("");
			const newLeft = [...left, link];
			setLeft(newLeft);

			const newRight = [...right, shortUrl];
			setRight(newRight);

			setPosition(position + 1);

			const newNumbers = [...numbers, position];
			setNumbers(newNumbers);
		} else {
			setLinkError("Please add a link.");
		}
	};

	const changeColorAndText = (event: MouseEvent, textToCopy: String) => {
		const target = event.currentTarget as HTMLButtonElement;
		target.classList.remove("bg-teal-300");
		target.classList.add("bg-violet-950");
		target.innerHTML = "Copied!";
		navigator.clipboard
			.writeText(`${textToCopy}`)
			.then(() => {
				console.log("Text copied to clipboard:", textToCopy);
			})
			.catch((error) => {
				console.error("Failed to copy text:", error);
			});
	};

	return (
		<div>
			{/* Second */}
			{/* sm:bg-yellow-200 md:bg-blue-400 lg:bg-green-400 */}
			<div className="flex sm:flex-col-reverse md:flex-row  md:mt-8 lg:mt-8 md:ml-10 sm:mr-0 md:mr-10 lg:mr-4 lg:ml-40 ">
				<div className="pt-10 md:w-full lg:w-2/3">
					<div className="box-content ">
						<h1 className="sm:text-4xl sm:p-4 md:p-0 lg:p-0 sm:text-center md:text-left lg:text-left md:text-4xl lg:text-7xl sans-serif font-bold">
							More than just shorter links
						</h1>
					</div>
					<div className="mt-4">
						<p className=" sm:text-center sm:p-4 md:p-0 lg:p-0 md:text-left md:text-1xl lg:text-2xl text-gray-500 sans-serif">
							Build your brand recognitions and get detailed
							insights on how your links are performing{" "}
						</p>
					</div>
					<div className="sm:flex sm:justify-center md:justify-start mt-8 mb-20">
						<Link
							href=""
							className="rounded-full text-white  bg-teal-300 px-8 py-4 sans-serif font-bold"
						>
							Get Started
						</Link>
					</div>
				</div>
				<div className="sm:m-4 md:ml-20">
					<Image
						src="/illustration-working.svg"
						alt="Illustration"
						width={900}
						height={500}
					/>
				</div>
			</div>

			{/* Third */}
			{/* md:-mb-20 lg:-mb-20 */}
			{/* <div className=" ">

			</div> */}
			<div
				className="box-border rounded-md mt-8 sm:-mb-20 md:-mb-20 lg:-mb-20 md:ml-10 lg:ml-40 md:mr-10 lg:ml-40 lg:mr-40 sm:m-4 relative   bg-center  bg-cover   py-10 px-10 "
				style={{
					backgroundColor: "rgb(59, 48, 84)",
					backgroundImage: "url(/bg-shorten-desktop.svg)",
				}}
			>
				<div className="flex sm:flex-col md:flex-row">
					<div className="  md:ml-2 md:w-2/3 lg:ml-14 sm:mb-1 md:mb-0 lg:mb-0">
						<input
							type="text"
							value={link}
							onChange={(e) => setLink(e.target.value)}
							placeholder="Shorten a link here..."
							className={`sm:w-full sm:h-10 md:h-full  md:w-full  md:py-2 sm:px-4 md:py-2 md:px-4 md:py-2 sm:px-4 md:py-2 md:px-4l  border border-gray-300 rounded-md sm:py-2    lg:py-2 lg:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								linkError
									? "border-red-500 placeholder-red-400"
									: " placeholder-gray-400 focus:border-blue-500"
							}`}
						/>
						{linkError && (
							<div className=" sm:hidden md:block mt-1 text-red-500 text-xs">
								{linkError}
							</div>
						)}
					</div>

					<div className="md:hidden">
						{linkError && (
							<div className=" text-red-500 text-xs">
								{linkError}
							</div>
						)}
					</div>

					<div
						className=" md:w-40 sm:mt-2 md:mt-0 md:ml-8 lg:ml-8 rounded-md text-white  bg-teal-300 sm:py-2 sm:text-center  md:text-center md:px-4 md:py-4 lg:px-8  sans-serif font-bold"
						onClick={callApi}
					>
						Shorten it!
					</div>
				</div>
			</div>
			{/* position */}

			<div className="sm:p-1 bg-gray-200 md:pb-60  lg:pb-60">
				<div className="sm:mt-24 md:mt-24">
					{numbers.map((number, index) => (
						<div
							key={number}
							className="flex sm:flex-col md:flex-row  sm:m-4 md:space-x-4 md:ml-10 md:mr-10 lg:ml-40 lg:mr-40 mb-2 rounded-md  bg-white sm:p-0 md:p-4"
						>
							<div className="truncate text-left text-justify md:w-2/3 bg-white sm:p-4 md:p-2 ">
								{/* left textBuild your brand recognitions and get detailed */}
								{left[number + 1]}
							</div>
							<div className=" md:hidden h-1 w-full bg-gray-100"></div>
							<div className=" md:truncate text-teal-600 md:w-1/4 bg-white sm:p-4 md:p-2">
								{/* right text Build your brand */}
								{right[number + 1]}
							</div>
							<button
								className={`bg-teal-300 text-white text-center sm:m-4 md:m-0 sm:py-2 md:py-0 md:w-24  rounded `}
								onClick={(event) => {
									changeColorAndText(
										event,
										right[number + 1],
									);
								}}
							>
								copy
							</button>
						</div>
					))}
				</div>

				<div className="sm:pt-20 md:pt-40">
					<h1 className="text-center  sm:text-2xl md:text-4xl sans-serif font-bold">
						Advanced Statistics
					</h1>
					<p className=" mt-4 text-center   text-gray-500 sans-serif">
						Track how your links are performing across the web with
					</p>
					<p className="  text-center  text-gray-500 sans-serif">
						our advanced statistics dashboard
					</p>
				</div>

				<div className=" md:pl-4 lg:pl-40 pt-20">
					<div className=" sm:hidden md:block md:relative md:top-40 lg:top-44 bg-teal-300  md:h-2 md:mr-40 lg:mr-60"></div>
					<div className="  left-0 right-0 m-auto md:hidden absolute  bg-teal-300  h-3/4 w-4 mt-40"></div>

					<div className=" flex sm:flex-col md:flex-row md:space-x-8 lg:space-x-8 sm:relative md:relative ">
						{/* 1 */}
						<div className="bg-white rounded-md sm:w-auto md:w-80 lg:w-80">
							<div
								className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 -mt-10 sm:mx-auto  md:ml-10 rounded-full flex items-center justify-center"
								style={{
									backgroundColor: "rgb(59, 48, 84)",
								}}
							>
								<Image
									src="/icon-brand-recognition.svg"
									alt="Illustration"
									width={50}
									height={50}
								/>
							</div>
							<div className="sm:p-10 md:p-4 lg:p-10">
								<h1 className="sm:text-center md:text-left  sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">
									Brand Recognition
								</h1>
								<p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">
									Boost your brand recognition with each
									click.Generic links don't mean a thing.
									Branded links help instil confidence in your
									content
								</p>
							</div>
						</div>

						{/* 2 */}
						<div className="bg-white sm:mt-20 md:mt-10 md:-mb-10 lg:mt-10 lg:-mb-10 rounded-md sm:w-auto md:w-80 lg:w-80">
							<div
								className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 -mt-10 sm:mx-auto md:ml-10 rounded-full flex items-center justify-center"
								style={{
									backgroundColor: "rgb(59, 48, 84)",
								}}
							>
								<Image
									src="/icon-detailed-records.svg"
									alt="Illustration"
									width={50}
									height={50}
								/>
							</div>
							<div className="sm:p-10 md:p-4 lg:p-10">
								<h1 className="sm:text-center md:text-left   sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">
									Detailed Records
								</h1>
								<p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">
									Gain insights into who is clicking your
									link. Knowing where and when people engage
									with your content helps inform beter
									decisions.
								</p>
							</div>
						</div>

						{/* 3 */}
						<div className="bg-white sm:mt-20 md:mt-20 md:-mb-20 lg:mt-20 lg:-mb-20 rounded-md sm:w-auto md:w-80 lg:w-80">
							<div
								className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 -mt-10 sm:mx-auto md:ml-10 rounded-full flex items-center justify-center"
								style={{
									backgroundColor: "rgb(59, 48, 84)",
								}}
							>
								<Image
									src="/icon-fully-customizable.svg"
									alt="Illustration"
									width={50}
									height={50}
								/>
							</div>
							<div className="sm:p-10 md:p-4 lg:p-10">
								<h1 className="sm:text-center md:text-left  sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">
									Fully Customizable
								</h1>
								<p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">
									Improve brand awareness and content
									discoverabiliy through customizable links.
									supercharging audience engagement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
