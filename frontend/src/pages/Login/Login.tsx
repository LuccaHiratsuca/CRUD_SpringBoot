import styles from "./Login.module.css"

interface ILogin{
    email: string;
    password: string;
}

const Login = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </div>
    );
};

export default Login;
