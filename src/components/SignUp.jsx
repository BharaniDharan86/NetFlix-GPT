import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */

function SignUp() {
  const { register, handleSubmit, formState, reset } = useForm();
  const [isSignUp, setSighUp] = useState(true);
  const navigate = useNavigate();

  const { errors } = formState;

  function signUp(data) {
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          navigate("/browser");
          reset();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }

  return (
    <div className="text-whit h-[90vh] flex justify-center items-start text-white ">
      <form
        onSubmit={handleSubmit(signUp)}
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        className="w-[40%] p-16 rounded-sm"
      >
        <h1 className="text-white text-3xl font-bold tracking-wide mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <div className="flex flex-col gap-10">
          <div>
            {!isSignUp && (
              <input
                type="text"
                placeholder="Email Your Name"
                className="input input-bordered border border-stone-400 input-lg w-full mb-3 "
                style={{ backgroundColor: "rgba(22,22,22,0.7)" }}
                {...register("username", {
                  required: "This Field is Required",
                })}
              />
            )}
            <input
              type="text"
              placeholder="Email or Phone number"
              className="input input-bordered border border-stone-400 input-lg w-full mb-3 "
              style={{ backgroundColor: "rgba(22,22,22,0.7)" }}
              {...register("email", {
                required: "This Field is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide Valid Email",
                },
              })}
            />
            {errors.email && (
              <p className=" text-red-700 text-lg">{errors.email.message}</p>
            )}
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered border-stone-400  input-lg w-full mb-3"
              style={{ backgroundColor: "rgba(22,22,22,0.7)" }}
              {...register("password", {
                required: "This Value is Required",
                minLength: {
                  value: 10,
                  message: "Password should contains atleast 10 characters",
                },
              })}
            />
            {errors.password && (
              <p className=" text-red-700 text-lg">
                {errors.password.message || "Error"}
              </p>
            )}
            <button className="bg-red-600 text-white w-full px-3 py-3 text-xl mb-4">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <a href="#" className="text-white">
              Forgot Password ?
            </a>
          </div>
          <div className="text-md font-medium">
            <input type="checkbox" /> <label htmlFor="">Remember Me ?</label>
            <br />
            <p className="mb-3 mt-3">
              {" "}
              {isSignUp
                ? "Already have an account ?"
                : "New To Netflix Create Account ?"}{" "}
              <button onClick={() => setSighUp((curr) => !curr)} type="button">
                {isSignUp ? " Sign In Now" : "Sign Up Now"}{" "}
              </button>
            </p>
            <p className="mb-3">
              <span>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>
              &nbsp;
              <button className="text-blue-600">Learn more.</button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
