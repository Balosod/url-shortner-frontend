import Image from 'next/image';

const Middle = () => {
    return (
        <div>
            {/* Fouth */}
     <div className="sm:p-10 bg-gray-200 md:pb-60 lg:pb-60">
       <div className="sm:pt-20 md:pt-40">
          <h1 className="text-center  sm:text-2xl md:text-4xl sans-serif font-bold">Advanced Statistics</h1>
          <p className=" mt-4 text-center   text-gray-400 sans-serif">Track how your links are performing across the web with</p>
          <p className="  text-center  text-gray-400 sans-serif">our advanced statistics dashboard</p>
       </div>

       <div className=" md:pl-4 lg:pl-40 pt-20">

       <div
          className=" sm:hidden md:block md:relative md:top-44 lg:top-44 bg-teal-300  md:h-2 md:mr-40 lg:mr-60"
        ></div>
        <div
          className="  left-0 right-0 m-auto md:hidden absolute  bg-teal-300  h-3/4 w-4 mt-40"
        ></div>

        <div className=" flex sm:flex-col md:flex-row md:space-x-8 lg:space-x-8 sm:relative md:relative ">
          {/* 1 */}
          <div className="bg-white rounded-md sm:w-auto md:w-80 lg:w-80">
              <div 
                  className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 -mt-10 sm:mx-auto  md:ml-10 rounded-full flex items-center justify-center" 
                  style={{
                    backgroundColor: 'rgb(59, 48, 84)', 
                  }}>
                  <Image 
                  
                  src="/icon-brand-recognition.svg"
                  alt="Illustration" width={50} height={50} />
              </div>
              <div className="sm:p-10 md:p-4 lg:p-10">
              <h1 className="sm:text-center md:text-left  sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">Brand Recognition</h1>
              <p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instil confidence in your content</p>
              </div>
          </div>

              {/* 2 */}
          <div className="bg-white sm:mt-20 md:mt-10 md:-mb-10 lg:mt-10 lg:-mb-10 rounded-md sm:w-auto md:w-80 lg:w-80">
              <div 
                  className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 -mt-10 sm:mx-auto md:ml-10 rounded-full flex items-center justify-center" 
                  style={{
                    backgroundColor: 'rgb(59, 48, 84)', 
                  }}>
                  <Image 
                  
                  src="/icon-detailed-records.svg"
                  alt="Illustration" width={50} height={50} />
              </div>
              <div className="sm:p-10 md:p-4 lg:p-10">
              <h1 className="sm:text-center md:text-left   sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">Brand Recognition</h1>
              <p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instil confidence in your content</p>
              </div>
          </div>

               {/* 3 */}
          <div className="bg-white sm:mt-20 md:mt-20 md:-mb-20 lg:mt-20 lg:-mb-20 rounded-md sm:w-auto md:w-80 lg:w-80">
              <div 
                  className="sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 -mt-10 sm:mx-auto md:ml-10 rounded-full flex items-center justify-center" 
                  style={{
                    backgroundColor: 'rgb(59, 48, 84)', 
                  }}>
                  <Image 
                  
                  src="/icon-fully-customizable.svg"
                  alt="Illustration" width={50} height={50} />
              </div>
              <div className="sm:p-10 md:p-4 lg:p-10">
              <h1 className="sm:text-center md:text-left  sm:text-1xl md:text-1xl lg:text-2xl sans-serif font-bold">Brand Recognition</h1>
              <p className=" sm:text-center md:text-left md:mt-4 text-left text-sm   text-gray-500 sans-serif">Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instil confidence in your content</p>
              </div>
          </div>
    
          
        </div>

       </div>
     </div>
        </div>
    )
}

export default Middle;