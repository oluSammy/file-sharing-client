import { useContext, useState } from "react";
import AuthContainer from "../../containers/AuthContainer";
import { BsShare } from "react-icons/bs";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(AuthContext);

  const { isLoading, signin, error } = userContext;
  const onSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
    <AuthContainer>
      <div>
        <BsShare className="text-[40px] text-[#525252]" />
        <h1 className="text-[36px] text-[#525252] font-bold mb-4">
          Login to your Account
        </h1>
        <form onSubmit={onSubmit}>
          <Input
            label="Email"
            placeholder="Email"
            type="text"
            error=""
            value={email}
            onChange={setEmail}
            showLabel={true}
          />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            error=""
            value={password}
            onChange={setPassword}
            showLabel={true}
          />
          <div className="text-red-400 mb-4 min-h-[25px]">
            {error && <p>{error}</p>}
          </div>
          <Button label="Login" isLoading={isLoading} onClick={onSubmit} />
        </form>
      </div>
    </AuthContainer>
  );
};

export default Login;
