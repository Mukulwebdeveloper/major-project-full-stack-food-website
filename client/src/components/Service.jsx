import React from "react";
import { Header } from "../components";
import { motion } from "framer-motion";
import {
  BannerService,
  Service1,
  Service10,
  Service11,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
  Service9,
} from "../assets";

const Service = () => {
  return (
    <>
      <Header />
      <motion.div className="mt-[100px] md:mt-40 flex flex-col items-start justify-start gap-4 px-12 md:px-20">
        {/* <div
          className=" mt-[100px] md:mt-40 bg-no-repeat   bg-contain cursor-pointer"
          style={{
            backgroundImage: `url(${BannerService})`,
            height: "350px",
            width: "100%",
          }}
        >
          <div className="md:relative top-20 right-10 cursor-pointer">
            <h1 className="mt-10 text-white justify-center align-middle  text-center text-6xl  font-bold ">
              Popular Menu
            </h1>
            <h1 className="flex text-white justify-center align-middle mt-5 text-center text-3xl ">
              Home{" "}
              <span className="text-orange-400 font-semibold text-xl mt-1.5 ">
                {" "}
                &nbsp;&nbsp;Menu
              </span>
            </h1>
          </div>
        </div> */}
        <img src={BannerService} className="w-full md:h-[400px]" />
        <div className="relative md:-top-[300px] md:left-[500px] right-10 cursor-pointer">
          <h1 className="md:mt-10 text-white justify-center align-middle  text-center text-2xl md:text-6xl font-semibold ">
            Services
          </h1>
          <h1 className="flex text-white justify-center align-middle md:mt-5 text-center text-sm md:text-3xl ">
            Home
            <span className="text-orange-400 font-semibold text-sm md:text-xl md:mt-1.5 ml-1 md:ml-4 ">
              Services
            </span>
          </h1>
        </div>

        {/* card */}
        <div className="  flex flex-col text-center w-full -mt-32 mb-5">
          <p className="text-cartNumBg font-semibold text-2xl">Our Service</p>
          <p className="text-base font-semibold">
            What Restaurant <span className="text-cartNumBg">Services</span>
          </p>
        </div>
        <div className="flex w-full  ">
          {/* 1 */}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service1}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Fresh Healthy Food</h3>
                <p>
                  Lorem ipsum dolor sit amet, consect adisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card">
            <div className="imgbx">
              <img
                src={Service2}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Delicious Homemade Dishes</h3>
                <p>
                  Savor the taste of our delicious homemade dishes made with
                  love and care for your culinary delight.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="card">
            <div className="imgbx">
              <img
                src={Service3}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Gourmet Dining Experience</h3>
                <p>
                  Experience a gourmet dining journey like no other, with
                  crafted dishes that tantalize your taste buds.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          {/* 1 */}
          {/* <div classNameName="border w-[412px] mr-10 flex justify-center align-center p-5">
            <img src={Service1} alt="" classNameName="" />
            <h6 classNameName="text-center float-right">
              Fresh Healthy Food
              <p>
                Lorem ipsum dolor sit amet, consect adisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </h6>
          </div> */}
        </div>

        <div className="flex w-full">
          {/* 4 */}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service4}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Farm-to-Table Freshness</h3>
                <p>
                  Discover the goodness of farm-to-table freshness in every
                  bite, ensuring a healthy and sustainable dining choice.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service5}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Mouthwatering Culinary</h3>
                <p>
                  Indulge in mouthwatering culinary creations that combine
                  tradition with innovation, promising a memorable dining
                  experience.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 6*/}
          <div className="card">
            <div className="imgbx">
              <img
                src={Service6}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Exquisite Dessert Delights</h3>
                <p>
                  Satisfy your sweet cravings with our exquisite dessert
                  delights, each bite a heavenly experience for your taste buds.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          {/* 7*/}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service7}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>100% Swiss Quality</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 8 */}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service8}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Organic Production</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 9*/}
          <div className="card">
            <div className="imgbx">
              <img
                src={Service9}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Food Law Certified</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          {/* 10*/}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service10}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Food Production</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 11 */}
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service2}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Grilled Beef Steak</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          {/* 12*/}
          <div className="card">
            <div className="imgbx">
              <img
                src={Service11}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Chicken Drumsticks</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex w-full">
         
          <div className="card ">
            <div className="imgbx">
              <img
                src={Service2}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>
            <div className="content">
              <div className="">
                <h3>Healthy Fresh Fish</h3>
                <p>
                  Lorem ipsum dol consectetur adipiscing elit, sed eiusmod
                  tempor incididunt ut labore dolore magna aliqua
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
  );
};

export default Service;
