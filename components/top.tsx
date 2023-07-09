import Link from "next/link"
import Image from 'next/image';

const Top = () => {
    return(
        <div>


     {/* Second */}
     {/* sm:bg-yellow-200 md:bg-blue-400 lg:bg-green-400 */}
     <div className="flex sm:flex-col-reverse md:flex-row  md:mt-8 lg:mt-8 md:ml-10 sm:mr-0 md:mr-10 lg:mr-4 lg:ml-40 " >
        <div className="pt-10 md:w-full lg:w-2/3">
          <div className="box-content ">
          <h1 className="sm:text-4xl sm:p-4 md:p-0 lg:p-0 sm:text-center md:text-left lg:text-left md:text-4xl lg:text-7xl sans-serif font-bold">More than just shorter links</h1>
        </div>
        <div className="mt-4">
        <p className=" sm:text-center sm:p-4 md:p-0 lg:p-0 md:text-left md:text-1xl lg:text-2xl text-gray-500 sans-serif">Build your brand recognitions and get detailed insights on how your links are performing </p>
        </div>
        <div className="sm:flex sm:justify-center md:justify-start mt-8 mb-20">
        <Link href="" className="rounded-full text-white  bg-teal-300 px-8 py-4 sans-serif font-bold"  >Get Started</Link>
        </div>
        
      </div>
      <div className="sm:m-4 md:ml-20">
         <Image src="/illustration-working.svg" alt="Illustration" width={900} height={500} />
      </div>
     </div>



     {/* Third */}

     <div 
         className="box-border rounded-md mt-8 md:-mb-20 lg:-mb-20 md:ml-10 lg:ml-40 md:mr-10 lg:ml-40 lg:mr-40 sm:m-4 relative   bg-center  bg-cover   py-10 px-10 "
         style={{
          backgroundColor: 'rgb(59, 48, 84)',
          backgroundImage: 'url(/bg-shorten-desktop.svg)',
        }}
          >
      <div className="flex sm:flex-col md:flex-row">
         <input
            type="text"
            placeholder="Shorten a link here..."
            className="sm:w-full  md:w-full md:ml-2 lg:w-2/3 lg:ml-14 sm:mb-4 md:mb-0 lg:mb-0 border border-gray-300 rounded-md sm:py-2 sm:px-4 md:py-2 md:px-4 lg:py-2 lg:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
         <Link href="" className=" md:w-40 md:ml-8 lg:w-40 lg:ml-8 rounded-md text-white  bg-teal-300 sm:py-2 sm:text-center  md:text-center md:px-4 md:py-4 lg:px-8 lg:py-4 sans-serif font-bold"  >Shorten it!</Link>
      </div>
     </div>

        </div>
    )
}

export default Top;