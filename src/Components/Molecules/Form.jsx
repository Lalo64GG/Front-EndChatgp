import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { Button } from "../Atoms/Button";
import { ContainHeader } from "./ContainHeader";
import { faEnvelope, faL, faLock } from "@fortawesome/free-solid-svg-icons";
import { usePost } from "../../../public/hooks/usePost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../ui/Alert";

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const userObject = {
    email,
    password
  };

  const { handlePress, success, error, mssge } = usePost(
    "http://localhost:3000/auth",
    userObject
  );

  setTimeout(() => {
    if (success) {
      navigate("/home");
    }
  }, 1500);

  return (
    <div className=" px-10 py-20 rounded-3xl">
       {error ? (
        <Alert color={'bg-red-500'} children={mssge} />
      ) : (
        success && <Alert color={'bg-green-500'} children={mssge} />
      )} 

      <ContainHeader />
      <form className="mt-8">
        <div className="mb-5">
          <Label children={"Email"} customStyle={"text-gray-600 font-bold"} />
          <Input
            customStyle={
              "outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            }
            type={"email"}
            placeholder={"Enter your email"}
            icon={faEnvelope}
            setState={setEmail}
          />
        </div>
        <div className="mb-5">
          <Label children={"Password"} />
          <Input
            customStyle={
              "outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            }
            type={"password"}
            placeholder={"Enter your password"}
            icon={faLock}
            setState={setPassword}
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <Button
            children={"Sig in"}
            customStyle={
              "py-3 rounded-xl bg-sky-400 text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out hover:bg-sky-600 text-black"
            }
            handlePress={handlePress}
          />
        </div>
      </form>
    </div>
  );
};
