"use client";
import React, { useState, useEffect } from "react";
import { Playball } from "next/font/google";
const openSans = Playball({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
import styles from "../styles/Home.module.css";

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

      <div className={styles["full-frame"]}>
        <div className={styles["frame-346"]}>
          <div className={styles["web-page-title-main-30-px-medim-4"]}>
            <p className={styles["web-page-title-main-30-px-medim-11"]}>
              <span
                className={styles["web-page-title-main-30-px-medim-11-sub-0"]}
              >
                Trusted by all leading apparel manufacturers worldwide for
              </span>
              <span>Product Quality</span>
            </p>
          </div>
          <div className={styles["frame-345"]}>
            <div className={styles["frame-203"]}>
              <div id="frame-1" className={styles["frame-13"]}></div>
              <div id="frame-2" className={styles["frame-14"]}></div>
              <div id="frame-3" className={styles["frame-171"]}></div>
              <div id="frame-4" className={styles["frame-18"]}></div>
            </div>
            <div className={styles["frame-344"]}>
              <div className={styles["ellipse"]} id="ellipse-1"></div>
              <div className={styles["ellipse"]} id="ellipse-2"></div>
              <div className={styles["ellipse"]} id="ellipse-3"></div>
              <div className={styles["ellipse"]} id="ellipse-4"></div>
            </div>
          </div>
        </div>
        <div className={styles["frame-348"]}>
          <div className={styles["frame-172"]}></div>
          <div className={styles["frame-347"]}>
            <div className={styles["group-1"]}>
              <div className={styles["web-page-title-main-30-px-medim-5"]}>
                <span className={styles["web-page-title-main-30-px-medim-12"]}>
                  Indian Stitches Pvt. Ltd
                </span>
              </div>
              <div className={styles["frame-3341"]}></div>
            </div>
            <div className={styles["frame-1471"]}>
              <div className={styles["web-paragraph-16-px-reg-27"]}>
                <span className={styles["web-paragraph-16-px-reg-61"]}>
                  Indian stitches is one of the South India’s largest vertical
                  integrated textile <br />
                  company dealing with knitted fabric export business. Head{" "}
                  <br />
                  quartered in dollar city of the country – “Tirupur” -Tamilnadu
                  and processing <br />
                  unit facilitated in the State Industrial Promotion Corporation
                  of Tamilnadu <br />
                  (SIPCOT- Perundurai).
                  <br />
                  With successful 18 years of industrial experience, <br />
                  today we are a vendor of choice for the good quality knitted
                  fabric in the <br />
                  region with global compliance quality standards, also an
                  international price <br />
                  competitor with best in class onshore delivery lead times.
                  <br />
                </span>
              </div>
              <div className={styles["web-paragraph-16-px-reg-28"]}>
                <span className={styles["web-paragraph-16-px-reg-62"]}>
                  As a market competitor, our company has been keenly involved
                  in adaptation <br />
                  of new process technologies and constantly training the team
                  towards <br />
                  excellence in delivering the quality products to our valuable
                  customers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white flex flex-row flex-wrap justify-between pt-20 pb-20">
        <div className="bg-slate-200 flex flex-row flex-wrap justify-start sm:pl-10 lg:pl-36 w-1/2">
          <div className="flex flex-col justify-center">
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
        <div
          className="w-1/2"
          style={{
            position: "absolute",
            left: "45%",
            overflow: "hidden",
            marginTop: "7%",
          }}
        >
          <div class="rounded-[20px] bg-[url('../assets/images/frame_177.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat w-[832px] h-[532px]"></div>
        </div>
      </div>

      <div className="min-h-screen bg-white flex flex-row flex-wrap pt-20 pb-20 justify-center">
        <div class="m-[0_78.5px_204px_82px] flex flex-col w-[fit-content] box-sizing-border">
          <h1
            className={`${openSans.className} text-3xl md:text-2xl lg:text-3xl`}
          >
            We Spread <span className="text-orange-500">Around The World</span>
          </h1>
          <div class="flex flex-col items-center w-[fit-content] box-sizing-border">
            <div class="m-[0_0_35px_0] flex flex-row gap-[0_20.5px] w-[fit-content] box-sizing-border">
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_51.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0.4px_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      KNITTING
                    </span>
                  </div>
                  <div class="rounded-[8px] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_511.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_17.6px_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      DYEING
                    </span>
                  </div>
                  <div class="rounded-[8px] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_514.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0.9px_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      PRINTING
                    </span>
                  </div>
                  <div class="rounded-[8px] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_513.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      LABORATORY
                    </span>
                  </div>
                  <div class="rounded-[8px] flex self-start box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-[0_20.5px] w-[fit-content] box-sizing-border">
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_512.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      FINISHING
                    </span>
                  </div>
                  <div class="rounded-[8px] m-[0_4.3px_0_0] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_517.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      BRUSHING
                    </span>
                  </div>
                  <div class="rounded-[8px] m-[0_6.5px_0_0] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_516.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_10px_0_10px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                  <div class="m-[0_0_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      SINGEING
                    </span>
                  </div>
                  <div class="rounded-[8px] m-[0_0.9px_0_0] flex box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center box-sizing-border">
                <div class="rounded-[16px] bg-[url('../assets/images/frame_515.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_34px_0] w-[304.5px] h-[349px]"></div>
                <div class="m-[0_16px_0_10px] flex flex-col w-[fit-content] box-sizing-border">
                  <div class="m-[0_0_24px_0] flex box-sizing-border">
                    <span class="break-words font-['Outfit'] font-medium text-[20px] text-[#000000]">
                      EFFIUENT TREATMENT PLANT
                    </span>
                  </div>
                  <div class="rounded-[8px] flex self-start box-sizing-border">
                    <span class="break-words font-['Open_Sans'] font-semibold text-[18px] text-[#FF5618]">
                      View more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pl-10 pr-10 pb-10 bg-white">
        <div class="rounded-[12px] bg-[url('../assets/images/frame_74.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat relative flex flex-col p-[50px_0_50px_48px] w-full box-sizing-border">
          <div class="rounded-[12px] bg-[rgba(15,15,15,0.3)] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]"></div>
          <div class="relative m-[0_0_114px_0] flex self-start box-sizing-border">
            <span class="break-words font-['Outfit'] font-normal text-[48px] text-[#FFFFFF]">
              Let’s Connect
            </span>
          </div>
          <div class="relative m-[0_0_47px_0] flex self-start box-sizing-border">
            <span class="break-words font-['Space_Grotesk'] font-medium text-[24px] text-[#FFFFFF]">
              Join us on our journey to drive innovation, <br />
              shape the future of textiles, and make a lasting impact.
            </span>
          </div>
          
          <div class="relative">
          <button
            className={
              "bg-orange-500 hover:bg-orange-400 text-white font-outfit rounded-full py-2 px-2 mt-5"
            }            
          >
            Contact now
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Homepage;
