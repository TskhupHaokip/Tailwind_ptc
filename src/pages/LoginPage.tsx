import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type LoginPageProps = {
  setPage: (page: string) => void;
};

const LoginPage = ({setPage}:LoginPageProps) => {
  const context = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password,setUserPass] = useState("")
  
  const handleLogin = () => {
    const success = context?.login(username, password);
    if (!username && !password) return
    if (!success) return
    setPage("home")
    
  };

  return (
    <div className="flex flex-1 min-h-0 items-center justify-center p-5">
      <fieldset className="fieldset bg-base-200 border-base-300 text-2xl rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Username</label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setUserPass(e.target.value)  }
        />

        <button onClick={handleLogin} className="btn btn-neutral hover:bg-base-300 mt-4">
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default LoginPage;
