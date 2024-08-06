"use client";
import React, { useState, useEffect } from "react";
import { Playball } from "next/font/google";
const openSans = Playball({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Homepage() {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="h-screen bg-[url('/homepageimg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center p-5">
        <div>
          <h1
            className={`text-3xl lg:text-4xl ${
              windowSize > 375 ? "text-2xl" : "text-xl"
            } text-white font-outfit`}
          >
            Leading the Way in High-Quality Knitted Fabrics Worldwide <br />
            Supplying Superior Knitted Fabrics Worldwide
          </h1>
          <p className="text-lg mt-5 text-white font-outfit">
            “Leading the way in producing high quality knitted fabrics through
            sustainability and <br />
            innovation”
          </p>
          <p className="text-lg mt-5 text-white font-outfit">
            We ensure top-quality fabrics, global compliance, and competitive
            pricing, <br />
            while embracing new technologies to exceed customer expectations.
          </p>
          <button
            className={
              "bg-orange-500 hover:bg-orange-400 text-white font-outfit rounded-full py-2 px-4 mt-5"
            }
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Scroll to know more
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-row flex-wrap justify-between">

        
        <div className="bg-slate-200 flex flex-row flex-wrap justify-start sm:pl-10 lg:pl-36 w-1/2">
          <div
            className="flex flex-col justify-center"            
          >
            <h1
              className={`${openSans.className} text-3xl md:text-2xl lg:text-3xl`}
            >
              We Spread{" "}
              <span className="text-orange-500">Around The World</span>
            </h1>
            <div className="bg-[#FF5618] self-start w-[105px] h-[7px] mt-10 md:w-[80px] lg:w-[105px]"></div>
            <div className="mt-5">
              <p>
                Laoreet lorem consectetuer hendrerit dictumst curae volutpat
                cubilia <br />
                elit velit natoque. Eleifend diam volutpat lectus aliquam
                aenean. <br />
                Dolor sed orci scelerisque taciti sodales tortor.
              </p>
            </div>
            <div className="mt-5 flex  gap-[15px]  box-sizing-border flex-col lg:flex-row">
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="m-[0_0_20px_0.1px] flex box-sizing-border">
                  <span className="break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    21+
                  </span>
                </div>
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    years of <br />
                    experience
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="relative m-[0_0_20px_0] w-[103px] h-[80px] md:w-[80px] md:h-[60px] lg:w-[103px] lg:h-[80px]">
                  <span className="absolute left-[50%] bottom-[0px] translate-x-[-50%] break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    10
                  </span>
                </div>
                <div className="m-[0_0_10px_0.4px] flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    Countries exported <br />
                    world wide
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="relative m-[0_0_20px_0] w-[103px] h-[80px] md:w-[80px] md:h-[60px] lg:w-[103px] lg:h-[80px]">
                  <span className="absolute left-[50%] bottom-[0px] translate-x-[-50%] break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    600+
                  </span>
                </div>
                <div className="m-[0_0_0_0.4px] flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    People
                    <br />
                    Employed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-slate-200 flex flex-row flex-wrap justify-end sm:pl-10 lg:pl-36 w-1/2">
          <div
            className="flex flex-col justify-center"            
          >
            <h1
              className={`${openSans.className} text-3xl md:text-2xl lg:text-3xl`}
            >
              We Spread{" "}
              <span className="text-orange-500">Around The World</span>
            </h1>
            <div className="bg-[#FF5618] self-start w-[105px] h-[7px] mt-10 md:w-[80px] lg:w-[105px]"></div>
            <div className="mt-5">
              <p>
                Laoreet lorem consectetuer hendrerit dictumst curae volutpat
                cubilia <br />
                elit velit natoque. Eleifend diam volutpat lectus aliquam
                aenean. <br />
                Dolor sed orci scelerisque taciti sodales tortor.
              </p>
            </div>
            <div className="mt-5 flex  gap-[15px]  box-sizing-border flex-col lg:flex-row">
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="m-[0_0_20px_0.1px] flex box-sizing-border">
                  <span className="break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    21+
                  </span>
                </div>
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    years of <br />
                    experience
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="relative m-[0_0_20px_0] w-[103px] h-[80px] md:w-[80px] md:h-[60px] lg:w-[103px] lg:h-[80px]">
                  <span className="absolute left-[50%] bottom-[0px] translate-x-[-50%] break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    10
                  </span>
                </div>
                <div className="m-[0_0_10px_0.4px] flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    Countries exported <br />
                    world wide
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#FEC1AA] flex flex-col justify-center items-center w-[172px] md:w-[140px] lg:w-[172px]">
                <div className="relative m-[0_0_20px_0] w-[103px] h-[80px] md:w-[80px] md:h-[60px] lg:w-[103px] lg:h-[80px]">
                  <span className="absolute left-[50%] bottom-[0px] translate-x-[-50%] break-words font-['Outfit'] font-normal text-[48px] text-[#000000] md:text-[36px] lg:text-[48px]">
                    600+
                  </span>
                </div>
                <div className="m-[0_0_0_0.4px] flex box-sizing-border">
                  <span className="break-words font-['Space_Grotesk'] font-normal text-[16px] text-[#000000] md:text-[14px] lg:text-[16px]">
                    People
                    <br />
                    Employed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
