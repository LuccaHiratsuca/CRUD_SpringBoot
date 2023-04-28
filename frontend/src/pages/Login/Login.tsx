import styles from "./Login.module.css"
import FormUserRegister from "../../components/FormUserRegister/FormUserRegister";

interface ILogin{
    email: string;
    password: string;
}

const Login = () => {
    return (
        <div className="ola">
            <h1>Login</h1>
            <FormUserRegister />
        </div>
    );
};

export default Login;
