"use client";
import React, { useEffect, useState } from "react";
import Img from "../public/bmw.png";
import Image from "next/image";


export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [windowsize,setWindowsize]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to your server or API
    console.log("Form submitted:", {
      name,
      phone,
      email,
      company,
      subject,
      message,
    });
  };

  

  window.addEventListener('resize', function() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    setWindowsize(windowWidth)
    console.log(`Window height: ${windowHeight}px, Window width: ${windowWidth}px`);
  });
  

 console.log("windowsize",windowsize);

  return (
    <div class={`min-h-screen min-w-full ${ windowsize < 769 ? "":"pt-20 pr-20 pl-20"}`}>
      <div class={`bg-[url('../public/sampleimg.jpg')] bg-cover bg-center  ${windowsize < 769 ? "":"rounded-10"}`}>
        <div class={`flex flex-row justify-center lg:justify-between items-center px-5 flex-wrap pt-10  pb-10 ${windowsize < 769 ? "":"rounded-10"}  backdrop-blur bg-white/40`}>
          <div class="flex flex-col md:w-1/2 lg:w-1/2 gap-10">
            <h1 class="text-3xl">
              Message Us, we will be in <br /> touch shortly
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries
            </p>
            <div class="flex flex-row gap-1">
              <Image src={Img} alt="hiii" width={24} height={24} />
              <Image src={Img} alt="hiii" width={24} height={24} />
              <Image src={Img} alt="hiii" width={24} height={24} />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="space-y-1">
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    placeholder="Name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>

                <div class="sm:col-span-3">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autocomplete="phone"
                    placeholder="Phone"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>

                <div class="sm:col-span-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="Email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="sm:col-span-3">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autocomplete="company"
                    placeholder="company"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>

                <div class="col-span-full">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autocomplete="subject"
                    placeholder="Subject"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>

                <div class="col-span-full">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Message"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>

                <div class="mt-5 col-span-full">
                  <button
                    type="submit"
                    class="rounded-md bg-custom-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-skyblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class={`flex flex-row justify-center items-center ${windowsize < 769 ? "flex-wrap" :""}  gap-2.5 pb-10 pt-10  mt-10`}>
        <div class={`bg-[url('../public/sampleimg.jpg')] bg-cover bg-center  ${windowsize < 769 ? "":"rounded-10"}`}>
          <div class={`backdrop-blur bg-white/40 p-10 ${windowsize < 769 ? "":"rounded-10"}`}>
            <div class="flex flex-col gap-10 ">
              <h1 class="text-3xl">Get in touch with us</h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-x-4 gap-y-4 justify-content-center align-items-center">
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl  overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl  overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl  overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
                <div class="max-w-sm  bg-blue-300 hover:bg-blue-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl">
                  <div class="px-3 py-3">
                    <h4 class="text-1xl font-bold">Custom Card</h4>
                    <p class="text-sm text-gray-600">ji cempaka wangi no 22</p>
                    <p class="text-sm text-gray-600">jakarta - indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9913671437953!2d78.13261867493121!3d8.786880091265118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sin!4v1722678364191!5m2!1sen!2sin"
            frameborder="0"
            border="0"
            width={windowsize < 426 ? "100%" : "510"}
            height={windowsize < 426 ? "100%" : "540"}
            aria-hidden="false"
            tabindex="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
