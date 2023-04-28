
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./FormUserRegister.module.css";
import { useForm } from "react-hook-form";

const FormUserRegister = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("FormUserRegister handleSubmit");
    }

    return (
        <div className={styles.form}>
            <h1>FormUserRegister</h1>
                <form onClick={handleSubmit}>
                    <Input className={styles.input} type="text" name="name" placeholder="Name" />
                    <Input className={styles.input} type="text" name="email" placeholder="Email" />
                    <Input className={styles.input} type="text" name="password" placeholder="Password" />
                    <Input className={styles.input} type="text" name="passwordConfirmation" placeholder="Password Confirmation" />
                    <Button className={styles.button} variant="contained" color="primary">Register</Button>
                </form>
        </div>
    )
}

export default FormUserRegister