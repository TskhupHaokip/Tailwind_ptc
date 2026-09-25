import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

type RedirecrProps = {
  setPage: (page: string) => void;
};

const RegisterForm = ({ setPage }: RedirecrProps) => {
  const context = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setUserPass] = useState("");

  const handleRegister = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = context?.register(username, password);

    if (success) {
      setPage("home");
      return;
    }

    alert("something wrong");
  };

  return (
    <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form action="" onSubmit={handleRegister} className="form-box text-2xl">
        <legend className="fieldset-legend">Register Form</legend>

        <label className="label">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input"
          placeholder="Username"
        />

        <label className="label">Password</label>
        <input
          type="password"
          onChange={(e) => setUserPass(e.target.value)}
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
