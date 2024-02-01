/* eslint-disable react/no-unescaped-entities */
function SignUp() {
  return (
    <div className="text-whit h-[90vh] flex justify-center items-start text-white ">
      <form
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
        className="w-[40%] p-16 rounded-sm"
      >
        <h1 className="text-white text-3xl font-bold tracking-wide mb-6">
          Sign In
        </h1>
        <div className="flex flex-col gap-10">
          <div>
            <input
              type="text"
              placeholder="Email or Phone number"
              className="input input-bordered border border-stone-400 input-lg w-full mb-6"
              style={{ backgroundColor: "rgba(22,22,22,0.7)" }}
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered border-stone-400  input-lg w-full mb-6"
              style={{ backgroundColor: "rgba(22,22,22,0.7)" }}
            />

            <button className="bg-red-600 text-white w-full px-3 py-3 text-xl mb-4">
              Sign In
            </button>
            <a href="#" className="text-white">
              Forgot Password ?
            </a>
          </div>
          <div className="text-md font-medium">
            <input type="checkbox" /> <label htmlFor="">Remember Me ?</label>
            <br />
            <p className="mb-3 mt-3">
              New to Netflix ? <a href="#">Sign Up Now </a>
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
