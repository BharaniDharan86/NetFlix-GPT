import Header from "../components/Header";
import SignUp from "../components/SignUp";

function Login() {
  return (
    <div
      className="h-svh w-full bg-opacity-50 "
      style={{
        backgroundImage: "url(banner.jpg)",
      }}
    >
      <Header />
      <SignUp />
    </div>
  );
}

export default Login;
