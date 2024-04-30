import React, { useState } from "react";
import { Avatar, Logo } from "../assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { buttonClick, slideTop } from "../animations";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";
import { setCartOn } from "../context/actions/displayCartAction";

const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-8 md:px-10 py-6">
      {/* Desktop & Tablet */}
      {/* Logo Start */}
      <NavLink to={"/"} className="flex items-center justify-center gap-2">
        <img src={Logo} className="w-20" alt="Logo" />
        <p className="font-semibold text-xl ">FANTASY</p>
      </NavLink>
      {/* Logo End */}

      {/* Nav Start */}
      <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-12">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/blog"}
          >
            Blog
          </NavLink>
        </ul>

        {/* ShoppingCart Start */}
        <motion.div
          {...buttonClick}
          onClick={() => dispatch(setCartOn())}
          className="relative cursor-pointer"
        >
          <MdShoppingCart className="text-2xl text-textColor" />
          {cart?.length > 0 && (
            <div className=" absolute -top-4 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
              <p className="text-primary text-base font-semibold">
                {cart?.length}
              </p>
            </div>
          )}
        </motion.div>
        {/* ShoppingCart End */}

        {user ? (
          <>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              {/* GoogleLogin Start */}
              <div className="w-10 h-10 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : Avatar}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* GoogleLogin End */}

              {/* Drop Down Menu Start */}
              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className="px-5 py-2 w-150  bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                >
                  {/* mobile */}
                  <ul className="flex flex-col md:hidden gap-4">
                    <NavLink
                      className="hover:text-red-500 text-md text-textColor"
                      to={"/"}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="hover:text-red-500 text-md text-textColor"
                      to={"/menu"}
                    >
                      Menu
                    </NavLink>
                    <NavLink
                      className="hover:text-red-500 text-md text-textColor"
                      to={"/services"}
                    >
                      Services
                    </NavLink>
                    <NavLink
                      className="hover:text-red-500 text-md text-textColor"
                      to={"/aboutus"}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      className="hover:text-red-500 text-md text-textColor"
                      to={"/blog"}
                    >
                      Blog
                    </NavLink>
                  </ul>

                  {user?.user_id === process.env.REACT_APP_ADMIN_ID && (
                    <Link
                      to={"/dashboard/home"}
                      className="hover:text-red-500 text-md text-textColor"
                    >
                      Dashboard
                    </Link>
                  )}
                  {/* <Link
                    to={"/profile"}
                    className="hover:text-red-500 text-md text-textColor"
                  >
                    My Profile
                  </Link> */}
                  <Link
                    to={"/user-orders"}
                    className="hover:text-red-500 text-md text-textColor"
                  >
                    Orders
                  </Link>
                  <hr />
                  {/* Logout Start */}
                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
                  >
                    <MdLogout className="text-xl text-textColor group-hover::text-headingColor" />
                    <p className="text-sm text-textColor group-hover:text-headingColor">
                      Sign Out
                    </p>
                  </motion.div>
                  {/* Logout End  */}
                </motion.div>
              )}
              {/*  Drop Down Menu End  */}
            </div>
          </>
        ) : (
          <>
            {/* Login Button Show Without User Login */}
            <NavLink to={"/login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-1 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
