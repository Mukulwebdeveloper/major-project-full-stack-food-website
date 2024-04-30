import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { useNavigate } from "react-router-dom";
import { alertInfo, alertWarning } from "../context/actions/alertActions";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTToken } from "../api";
import { setUserDetails } from "../context/actions/userActions";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  // Authentication
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  // GoogleLogin
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        // console.log(cred);
        if (cred) {
          cred.getIdToken().then((token) => {
            console.log(token);
            validateUserJWTToken(token).then((data) => {
              dispatch(setUserDetails(data));
              // console.log(data);
            });
            navigate("/", { replace: true });
          });
        }
      });
    });
  };

  // Sign Up
  const signUpWithEmailPass = async () => {
    if (userEmail === "" || password === "" || confirm_password === "") {
      //  alert message
      dispatch(alertInfo("Required fields should not be empty"));
    } else {
      if (password === confirm_password) {
        setUserEmail("");
        setConfirm_password("");
        setPassword("");
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                  // console.log(data);
                });
                navigate("/", { replace: true });
              });
            }
          });
        });
      } else {
        // alert message
        dispatch(alertWarning("Password doesn't match"));
      }
    }
  };

  // Sign in
  const signInWithEmailPass = async () => {
    if (userEmail !== "" && password !== "") {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  // console.log(data);
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        }
      );
    } else {
      // alert message
      dispatch(alertWarning("Password doesn't match"));
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* Background Image */}
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/* content Box Start */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-300 h-full z-10 backdrop-blur-sm p-2 py-10 gap-6">
        {/* Top Logo section */}
        <div className="flex items-center justify-start gap-2 w-full">
          <img src={Logo} className="w-7" alt="Logo" />
          <p className="text-xl font-semibold text-headingColor">FANTASY</p>
        </div>

        {/* Welcome Text */}
        <p className="text-2xl font-semibold text-headingColor ">
          Welcome Back
        </p>
        <p className="text-md text-textColor -mt-6">
          {isSignUp ? "Sing Up" : "Sign In"} with following
        </p>

        {/* Input Section Start*/}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-2 py-2">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p className="text-sm font-bold">
              Doesn't have an account:{" "}
              <motion.button
                className="text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
                {...buttonClick}
              >
                Create One
              </motion.button>
            </p>
          ) : (
            <p className="text-sm font-bold">
              Already have an account:{" "}
              <motion.button
                className="text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
                {...buttonClick}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* Button Section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-md capitalize hover:bg-red-400 transition-all duration-150"
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              onClick={signInWithEmailPass}
              className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-md capitalize hover:bg-red-400 transition-all duration-150"
            >
              Sign In
            </motion.button>
          )}
        </div>
        {/* Input Section End*/}

        {/* line */}
        <div className="flex items-center justify-between gap-8">
          <div className="w-24 h-[2px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[2px] rounded-md bg-white"></div>
        </div>

        {/* buttonGoogle */}
        <motion.div
          {...buttonClick}
          className="flex items-center justify-center px-10 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          onClick={loginWithGoogle}
        >
          <FcGoogle className="text-2xl" />
          <p className="text-base capitalize text-headingColor">
            Signin with Google
          </p>
        </motion.div>
      </div>
      {/* content Box End */}
    </div>
  );
};

export default Login;
