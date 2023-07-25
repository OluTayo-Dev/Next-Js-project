"use client";
import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { RiPinterestFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";



export default function Page() {
const [posts, setPosts] = useState([]);
//const [result, setResult] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?page=5&results=5");
      console.log(response.data.results);
      setPosts([...posts, ...response.data.results]);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData()
},[]);


// const submitHandler = (e) => {
//   e.preventDefault();
  

// };
// const handleChange = (value) => {
//   setInput(value);
//   fetchData(value);
// };
  return (
    <div className="bg-[#FFF1DC]"> 
     <div className="flex md:flex">
        <section className="bg-[#FFF1DC] w-[70%] h-screen p-4">
          <div className="flex  mt-6 md:flex">
          <div>
             <Image
              src="/logo.png"
              alt="logo image"
              width={200}
              height={150}
              />
           </div>

           <div className="space-x-12 pt-8">
              <a href="#" className="text-black text-lg font-medium">Solutions</a>
              <a href="#"className="text-black text-lg font-medium">Solutions</a>
              <a href="#"className="text-black text-lg font-medium">Contact us</a>
           </div>
           
          </div>

          <div className=" flex-col text-center mt-[5rem] ml-[5rem] space-y-12 md:space-y-0 ">
              <h1 className="max-w-2xl items-center md:items-center text-5xl text-black font-medium  md:text-center text-center">
                Food intelligent for all, 
                market data at 
               your fingertips.
              </h1>
              <p className="text-black font-light text-lg  max-w-xl md:text-center">
                Make smart decisions with our food data. Tap into our
                real-time, daily, and historical food market data pipeline.
              </p>
          </div>
        
          <div className="flex flex-col md:text-center md:ml-[10rem]">
              <button className="w-[18rem] h-[4rem] mt-20 ml-6 bg-black text-white rounded-lg">Get Started</button>
          </div>
        </section>


        <section className="bg-[#4AC16C] rounded-tl-[4rem] w-[30%] h-screen">
          <div className="flex md:mt-[5rem] ml-10 gap-5">
            <div>
               <button className="w-[7rem] h-[2.5rem] bg-black text-white rounded-lg">Sign in</button>
             </div>
             <div>
               <a href="#" className="text-black text-2xl">Login</a>
              </div>
          </div>

          <div className=" flex flex-col mt-[8rem]">
            <Image
            src="/fruits.png"
            alt="fruit image"
            width={450}
            height={400}
            className="-m-14"
            />
          </div>

          
          
        </section>

        
     </div>

     <section className="w-full bg-white">
          <div className="flex flex-col md:flex-row space-y-3">
            <div className="flex flex-col space-y-2 md:md:w-1/2 mt-4 ml-4">
              <h2 className="max-w-md text-5xl text-black font-medium text-center md:text-left">
                Explore the latest live 
                trends on food data
              </h2>
              <p className="max-w-md text-lg text-black font-light text-center md:text-left">We constantly tract and update in real-time 
                food market data, enabling informed decisions.
              </p>
           
            </div>

            <div className="w-1/2">
             <form>
               <input
               type="text"
                placeholder="Try 'Yam' or 'Lagos' or 'North-east'"
                className="w-[100%] border-b-2 rounded-none text-center focus:outline-0 text-black mt-[10rem] flex" 
               />
               <CiSearch className="text-gray-500 w-[5vw] -mt-6 md:ml-[30rem] cursor-pointer font-bold"/>
              </form>
            </div>
            
          </div>
          <div>
            <table className="bg-orange-500 w-[70vw] h-[8vh] ml-[6rem] rounded-t-[6rem]">
              <tr className="flex space-x-12 md:space-x-36 ml-12 pt-10 text-black">
                <th>Name</th>
                <th>State</th>
                <th>email</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Age</th>
              </tr>

            </table>

            {posts.map((post) => (
              <tbody className=" text-center justify-between">
                <tr className="gap-10">
                  {post.email.results}
                  <td className="ml-[5rem] gap-8"><img className="rounded-full md:ml-[7rem] gap-8" src={post.picture.medium} /></td>
                    <td className="text-sm text-black font-semibold  space-y-12 gap-10">{post.name.first} {post.name.last}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.location.country}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.email}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.gender}</td>
                  <td className="text-sm pr-8 text-black font-semibold space-y-12 gap-10">{post.phone}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.location.city.street}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.registered.date}</td>
                  <td className="text-sm text-black font-semibold space-y-12 gap-10">{post.registered.age}</td>
                </tr>
              </tbody>
            ))}


            <a href="#" className="flex justify-center pt-[13rem] text-green-500 cursor-pointer">Load more markets...</a>
             {/* <th>
              <td><Image
                  src="/NextImage.png"
                  alt="NextImage"
                  width={300}
                  height={300}
                  />
              </td>
              <td>Indianapolis</td>
              <td>Indianapolis</td>
              <td>Indianapolis</td>
             </th> */}
             <div>
              <div className="bg-black w-[70vw] h-[10vh] ml-[8rem] rounded-tl-[6rem] rounded-br-[6rem] text-center pt-5">
                   <p className="text-white text-lg font-medium">Advertise your product with us<a href="#" className="text-yellow-400 font-medium">.Click here</a></p>
              </div>
             </div>
          </div>
        </section>

        <section className="flex w-full bg-[#FFF1DB] h-screen">
          <div className="bg-[#FF5446] w-[30%] rounded-tl-[5rem]">
            <div>
              <Image
              src="/fruits2.png"
              alt="fruitsImage"
              width={500}
              height={100}
              className="ml-36 mr-[-6rem] sticky pt-72"
              priority
              />

            </div>

          </div>
          <div className="bg-[#fff1db] w-[70%]">
            <div className="flex flex-col space-y-6 md:ml-[30rem]">
                 <h1 className="max-w-md text-4xl font-semibold md:text-left text-black">Ready to build a smart portfolio for
                 food market data
                 </h1>
                 <p className="max-w-sm text-center md:text-left text-black">Create your account, subscribe and see how market data
                helps your business performance with informed ddecison making
                </p>
                
            </div>
            <button className="w-[18rem] h-[4rem] mt-20 md:ml-[30rem] bg-black text-white rounded-lg">Get Started</button>
          
          </div>
        </section>
       
        <section className="bg-white">
           <div className="text-center space-y-12">
             <p className="text-black justify-center md:text-center">Subscribe to our monthly newsletter to stay connected to our activities,
             get insights and updates on what's happening with everyday data
             </p>
           <div>
             <input
               type="text" 
               placeholder="Email address" 
               className="w-[30rem] h-[4rem] border-2 border-yellow-300 focus:outline-0 text-slate-500 pl-2"
              />
               <button className="w-[9rem] h-[3rem] -ml-[10rem] mt-20  bg-black text-white rounded-none">Subscribe</button>
          
          </div>
         </div>

          <div className="flex space-x-40 mt-10 ml-8">
            <div>
               <Image
                 src="/logo.png"
                 alt="logo image"
                 width={200}
                 height={150}
                />
            </div>

            <div className="text-black">
              <p className="font-bold">Contact</p>
              <p className="text-green-400">info@marketdata.com</p>
              <p className="text-green-400">operations@marketdata.ng</p>
              <div className="flex">  
                <a href="#">
                 <AiOutlineTwitter
                 className="text-black w-[3vw] h-[3vh]"
                  />
                </a>

                <a href="#">
                  <BiLogoInstagram
                  className="text-black w-[3vw] h-[3vh]"
                   />
                </a>

                <a href="#">
                  <RiPinterestFill
                  className="text-black w-[3vw] h-[3vh]"
                   />
                </a>


                <a href="#">
                  <BiLogoFacebook className="text-black w-[3vw] h-[3vh]"

                  />
                </a>
              </div>
            </div>

            <div className="text-black">
              <p className="font-bold">Lagos</p>
              <p>21, Oremeji Street,</p>
              <p>behind toll gate, Victoria</p>
              <p>Island, Lagos</p>
            </div>

            <div className="text-black">
              <p className="font-bold">Company</p>
              <p>Solutions</p>
              <p>About</p>
              <p>Terms of use</p>
              <p>Privacy Policy</p>
              <p>Dispute resolution</p>
            </div>
           </div>
           <div className="text-center mt-5">
            <hr className="border-2 border-pink-600 w-[50rem] text-center ml-[22rem]"/>
            <p className="text-black text-lg">&copy; 2021 Market Data Limited- RC234523. Built with in Lagos</p>
           </div>
        </section>
    </div>
  )
}
