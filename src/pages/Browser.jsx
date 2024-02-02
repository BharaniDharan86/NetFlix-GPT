import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function Browser() {
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      BROWSER
    </div>
  );
}

export default Browser;
