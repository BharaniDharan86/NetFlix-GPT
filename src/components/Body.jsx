import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Body() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("changed");
      if (user) {
        const { uid, email } = user;
        console.log("in");

        console.log(uid, email);
      } else {
        console.log("out");
      }
    });
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Body;

// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/auth.user
