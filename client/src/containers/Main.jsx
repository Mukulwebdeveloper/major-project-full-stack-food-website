import React, { useEffect } from "react";
import {
  Cart,
  FilterSection,
  Header,
  Home,
  HomeSlider,
  MenuContainer,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productAction";
import {
  AboutImg1,
  AboutImg2,
  Blog3,
  Blog4,
  BlogDetail,
  Mainbg,
  SpicesLeft,
  SpicesRight,
  Team1,
  Team2,
  Team3,
  Team4,
} from "../assets";
import { buttonClick } from "../animations";
import { motion } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Main = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-primary">
      <Header />
      <div className="w-full flex flex-col justify-center items-start mt-[125px] px-6 md:px-16 2xl:px-96 gap-12 pb-24">
        <Home />

        {/* Welcome Section Start */}
        <section className="flex justify-between align-center w-full h-auto py-10 welcomeBg">
          <div className="  relative max-w-xs overflow-hidden rounded-2xl  group ml-20 ">
            <img
              src={SpicesLeft}
              alt=""
              className="transition-transform group-hover:scale-110 w-full h-100"
            />
          </div>
          <div className="Mainbg  relative max-w-xl w-full overflow-hidden  shadow-lg group">
            <img src={Mainbg} alt="" className="w-full h-100" />
            <div className="mainContent absolute top-0 left-0 text-center">
              <div className="custom-heading style-1">
                <h3>
                  <span className="text-3xl text-cartNumBg">Our story</span>
                </h3>
                <h3 className="text-5xl mt-2">Love for food</h3>

                <div className="mt-2">
                  <span className="hr-simple left"></span>
                  {/* <i class="fa fa-circle hr-icon"></i> */}
                  <span className="absolute circle w-1 h-1 bg-cartNumBg rounded-full"></span>
                  <span className="hr-simple right"></span>
                </div>
              </div>
              <p className="mt-5 text-cartTotal">
                Welcome. This is Royal plate. Elegant & sophisticated restaurant
                template. Royal plate offers different home page layouts with
                smart and unique design, showcasing beautifully designed
                elements every restaurant website should have. Smooth
                animations, fast loading and engaging user experience are just
                some of the features this template offers. <br />
                So, give it a try and dive into a world of royal restaurant
                websites.
              </p>
            </div>
          </div>
          <div className=" relative max-w-xs overflow-hidden rounded-2xl  group mr-20">
            <img
              src={SpicesRight}
              alt=""
              className="transition-transform group-hover:scale-110"
            />
          </div>
        </section>
        {/* Welcome Section End */}

        {/* <HomeSlider /> */}
        {/* <MenuContainer /> */}
        <FilterSection />

        {/* About Section Start */}
        <section
          className="flex justify-between align-center w-full h-auto py-10 
        "
        >
          {/* About us */}

          <motion.div className="w-full flex items-start justify-start flex-col">
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-2xl text-headingColor font-bold">About Us</p>
                <div className="w-[110px] h-1 rounded-md bg-orange-500"></div>
              </div>
            </div>

            {/* About us */}
            <div className="flex  mt-[50px]">
              <div className="flex">
                <img src={AboutImg1} alt="foodimg" />
                <img
                  src={AboutImg2}
                  alt="foodimg"
                  className="relative right-60"
                />
              </div>
              <div className="ml-20 ">
                <h1 className="text-orange-400 ml-9 font-semibold text-xl">
                  About Company
                </h1>
                <h1 className="text-4xl font-bold mt-4 ml-9">
                  We Make Sure Quality & Healthy Foods
                </h1>
                <h1 className=" text-gray-400 mt-6 ml-9">
                  Conveys the commitment of the restaurant to prioritize both
                  quality And health in their food offerings. It implies that
                  the recipe.
                </h1>

                <div className="flex font-semibold mt-5 ml-7">
                  <p className="m-3">Food Items management</p>
                  <p className="m-3">Table reservation</p>
                </div>
                <div className="flex font-semibold ml-7">
                  <p className="m-3">Customer feedback portal</p>
                  <p className="m-3">Location-based services</p>
                </div>

                <button className="bg-orange-400 hover:bg-red-500 m-20  w-150 text-white p-5 mt-5 flex justify-center ml-10">
                  See Details
                </button>
              </div>
            </div>

            {/* <div className="flex mt-[70px]">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={AboutImg1} alt="foodimg" className="w-full h-370" />
                <img
                  src={AboutImg2}
                  alt="foodimg"
                  className="relative right-60 w-full"
                />
              </div>
              <div className="ml-20 ">
                <h1 className="text-orange-500 ml-9 font-semibold text-2xl">
                  About Food
                </h1>
                <h1 className="text-4xl font-bold mt-4 ml-9">
                  We Make Sure Quality & Healthy Foods
                </h1>
                <h1 className=" text-gray-400 mt-6 ml-9">
                  Conveys the commitment of the restaurant to prioritize both
                  quality And health in their food offerings. It implies that
                  the recipe.
                </h1>

                <div className="flex font-semibold mt-5 ml-7">
                  <p className="m-3">Food Items management</p>
                  <p className="m-3">Table reservation</p>
                </div>
                <div className="flex font-semibold ml-7">
                  <p className="m-3">Customer feedback portal</p>
                  <p className="m-3">Location-based services</p>
                </div>
                <motion.button
                  {...buttonClick}
                  className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-primary text-base font-semibold ml-10"
                >
                  See Details
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </section>
        {/* About Section End */}

        {/* Blog Section Start */}
        <motion.div className="w-full flex items-start justify-start flex-col">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-2xl text-headingColor font-bold">
                Blog Details
              </p>
              <div className="w-40 h-1 rounded-md bg-orange-500"></div>
            </div>
          </div>

          <div className="flex  -mt-50">
            <div className="mt-10 ">
              <h1 className="text-4xl font-bold mt-4 ml-9">
                Different Spice For A Different Cheese Bruschetta
              </h1>
              <h1 className=" text-gray-400 mt-6 ml-9">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have ered alteration in some form, by injected
                humour, or randomised word which don't look even slightly
                believable.
              </h1>

              <div className="flex font-semibold mt-5 ml-7">
                <p className="m-3">Food Items management</p>
                <p className="m-3">Table reservation</p>
              </div>
              <div className="flex font-semibold ml-7">
                <p className="m-3">Customer feedback portal</p>
                <p className="m-3">Location-based services</p>
              </div>
              <motion.button
                {...buttonClick}
                className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-primary text-base font-semibold ml-10"
              >
                See Details
              </motion.button>
            </div>

            <div className="flex mt-10">
              <img src={BlogDetail} alt="img" className="rounded-lg" />
            </div>
          </div>

          {/* Blogs Calender*/}
          <div className="w-full flex items-center justify-between mt-20">
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-2xl text-headingColor font-bold">
                Latest Blog
              </p>
              <div className="w-40 h-1 rounded-md bg-orange-500"></div>
            </div>
          </div>
          <div className="bg-blue-100 p-5 m-5 rounded-lg cursor-pointer flex mt-10">
            <div className="flex m-2 mt-5">
              <div>
                <img src={Blog4} alt="" className="w-30 h-20 rounded-lg" />
              </div>
              <div>
                <p className="font-semibold ml-5">
                  Mechanic at car service tire change the car.
                </p>
                <p className="mt-3  ml-5  text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-black" />
                  29 Oct 2023
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div>
                <img src={Blog3} alt="" className="w-29 h-20 ml-2 rounded-lg" />
              </div>
              <div>
                <p className="font-semibold ml-5">
                  Commercial cleaning crew ladies working.
                </p>
                <p className="mt-3  ml-5  text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-black" />
                  12 Oct 2022
                </p>
              </div>
            </div>
            <div className="flex m-2 mt-5">
              <div>
                <img src={Blog4} alt="" className="w-30 h-20 rounded-lg" />
              </div>
              <div>
                <p className="font-semibold ml-5">
                  Mechanic at car service tire change the car.
                </p>
                <p className="mt-3  ml-5  text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-black" />
                  29 Oct 2023
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div>
                <img src={Blog3} alt="" className="w-29 h-20 ml-2 rounded-lg" />
              </div>
              <div>
                <p className="font-semibold ml-5">
                  Commercial cleaning crew ladies working.
                </p>
                <p className="mt-3  ml-5  text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-black" />
                  12 Oct 2022
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Blog Section End */}

        {/* Chief section start */}
        <section className=" w-full h-auto py-5">
          <p className="text-orange-400  relative top-5 font-semibold text-xl flex justify-center">
            Expert Chiefs
          </p>
          <p className="text-4xl font-bold mt-10 w-100 flex justify-center">
            Meet Our Expert Chiefs
          </p>
          <div className="flex justify-between align-center mt-10">
            <div className=" border border-orange-400 relative max-w-xs overflow-hidden rounded-2xl  group  ">
              <img
                src={Team1}
                alt=""
                className="transition-transform group-hover:scale-110 w-full h-100"
              />
              <p className="text-center my-3 text-black font-semibold text-2xl">
                Mike Dooley
              </p>
              <p className="text-center text-cartTotal text-base mb-2 ">
                Execitive
              </p>
            </div>
            <div className=" border border-orange-400 relative max-w-xs overflow-hidden rounded-2xl  group ml-20 ">
              <img
                src={Team2}
                alt=""
                className="transition-transform group-hover:scale-110 w-full h-100"
              />
              <p className="text-center my-3 text-black font-semibold text-2xl">
                Cathy Aenderson
              </p>
              <p className="text-center text-cartTotal text-base mb-2 ">
                Chief Execitive
              </p>
            </div>
            <div className="border border-orange-400  relative max-w-xs overflow-hidden rounded-2xl  group ml-20 ">
              <img
                src={Team3}
                alt=""
                className="transition-transform group-hover:scale-110 w-full h-100"
              />
              <p className="text-center my-3 text-black font-semibold text-2xl mb-2">
                Alextina Jimiey
              </p>
              <p className="text-center text-cartTotal text-base ">
                Food Inspector
              </p>
            </div>
            <div className=" border border-orange-400 relative max-w-xs overflow-hidden rounded-2xl  group ml-20 ">
              <img
                src={Team4}
                alt=""
                className="transition-transform group-hover:scale-110 w-full h-100"
              />
              <p className="text-center my-3 text-black font-semibold text-2xl">
                Dooly Sen
              </p>
              <p className="text-center text-cartTotal text-base mb-2">Chief</p>
            </div>
          </div>
        </section>
        {/* Chief section end */}

        {/* Contact Section Start */}
        <section className="w-full h-auto py-10 ">
          <div id="contact" className="rounded-xl shadow-lg">
            <div id="container">
              <div class="form">
                <div class="heading-6">
                  Contact <span>Us</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, molestias
                  <br />
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="default input example"
                />
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="default input example"
                />
                <input
                  type="number"
                  placeholder="Number"
                  aria-label="default input example"
                />
                <button id="contact-btn">Send Message</button>
              </div>
              <div className="info " id="info">
                <h1>Info</h1>
                <p>
                  <i class="fa-regular fa-envelope"></i>youremail@gmail.com
                </p>
                <p>
                  <i class="fa-solid fa-phone"></i>+91-9876543210
                </p>
                <p>
                  <i class="fa-solid fa-building-columns"></i>Jenny sen
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  tempora atque nihil eveniet corporis! Cupiditate.
                </p>
              </div>
            </div>
            <p class="p1"></p>
          </div>
        </section>
        {/* Contact Section End  */}
      </div>

      {isCart && <Cart />}
    </main>
  );
};

export default Main;
