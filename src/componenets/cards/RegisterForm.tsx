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
  <fieldset className="fieldset bg-base-200 border-base-300 text-2xl rounded-box w-xs border p-4">
    <legend className="fieldset-legend">Register Form</legend>

    <form onSubmit={handleRegister} className=" flex  flex-1 flex-col gap-2 text-2xl ">
      <label className="label ">Username</label>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="input"
        placeholder="Username"
        required
        minLength={3}
      />

      <label className="label">Password</label>

      <input
        type="password"
        onChange={(e) => setUserPass(e.target.value)}
        className="input"
        placeholder="Password"
        required
        minLength={8}
      />

      <button
        type="submit"
        className="btn btn-neutral hover:bg-base-300 mt-4"
      >
        Register
      </button>
    </form>
  </fieldset>
);

};

export default RegisterForm;
