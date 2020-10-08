import React, { useEffect } from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Landing() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (

    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover " 
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Taste <span className="text-red-500">Chinese</span> Tradition
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Welcome to Beijing Eats. The best Chinese food in Knoxville. <br />From the Great Wall to the Great Smoky Mountains. 
                    </p>
                  <a href="https://msmacaulay.com/MichaelMacaulay.pdf">
                    <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white p-5 border border-red-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer">
                    Full Menu
                  </button></a>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        

        <section className="relative py-20 bg-black text-white">
          <br/>
        

          <div className="container mx-auto p-5 py-5">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 py-5">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg" data-aos="fade-right"
                  src="https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
                <div className="md:pr-12">
                  <div className="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
                    <i className="fas fa-clock text-xl "></i>
                  </div>
                  <h3 className="text-4xl font-semibold">
                    Hours
                  </h3>
                  <p className="mt-5 text-2xl leading-relaxed text-white">
                  Mon. 2:30pm - 8:30PM
                  <br/>
                  Tue. 2:30pm - 8:30PM
                  <br/>
                  Wed. 4:30pm - 8:30PM
                  <br/>
                  Thu.  4:30pm - 8:30PM 
                  <br/>
                  Fri.    11:30am - 9:00PM
                  <br/>
                  Sat.    11:30am - 9:00PM
                  <br/>
                  Sun.   11:30am - 8:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br/>
          
        </section>

      {/* Trainers Section */}
      <section className="pt-20 pb-48 bg-gray-900 relative py-20">
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase text-white">
                Current Specials
              </h2>
            </div>
          </div>
          {/* Trainer Card Wrapper */}
          <div className="flex flex-wrap">
            {/* Card 1 */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
              <div className="px-6">
                <img alt="..." src="https://images.pexels.com/photos/4985527/pexels-photo-4985527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="shadow-lg rounded max-w-full mx-auto" style={{maxWidth: '250px'}} />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold text-red-600">White noodle soup </h5>
                  <p className="mt-1 text-sm text-white font-semibold">
                    Enjoy this delicious soup that is popular for treating the flu.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
              <div className="px-6">
                <img alt="..." src="https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="shadow-lg rounded max-w-full mx-auto" style={{maxWidth: '250px'}} />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold text-red-600">Ancient soup </h5>
                  <p className="mt-1 text-sm text-white font-semibold">
                    One of the tastiest soups with a variety of ingredients.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
              <div className="px-6">
                <img alt="..." src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="shadow-lg rounded max-w-full mx-auto" style={{maxWidth: '250px'}} />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold text-red-600">Beef & rice surprise</h5>
                  <p className="mt-1 text-sm text-white  font-semibold">
                    Chow down on some scrumptious beef & rice that melts in your mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
