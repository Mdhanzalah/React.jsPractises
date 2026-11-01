import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate=useNavigate();
  useEffect(()=>{
     document.title="This is SignUp Page";
  },[]);
  return(
<>
<h3>This is login page</h3>
<button onClick={()=>navigate("/")}>Home</button>
</>
  )
}
export default Login;