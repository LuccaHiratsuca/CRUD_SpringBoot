import styles from "./FormProduct.module.css"
import { useContext,useState } from "react";
import contextProduct from "../../context/contextProduct";
import apiBackend from "../../services/api-backend/api-backend";
import { Button } from "@mui/material";

interface IForm{
    register: boolean;
}

const FormProduct = ({register}: IForm) => {
    const defaultProduct = useContext(contextProduct);
    const [objProduct, setObjProduct] = useState(useContext(contextProduct));

    const typing = (e: any) => {
        setObjProduct({...objProduct, [e.target.name]: e.target.value});
    }

    const clearFields = () => {
        setObjProduct(defaultProduct);
    }


    const registerProduct = () => {
        apiBackend.postProduct(objProduct.name, objProduct.description);
        alert("Product registered");
        clearFields();
    }

    return(
        <>
            <p>{JSON.stringify(objProduct)}</p>
            <form className={styles.form}>
                <input type="text" onChange={typing} name="name" placeholder="Name" className="form-control" value={objProduct.name}/>
                <input type="text" onChange={typing} name="description" placeholder="Description" className="form-control" value={objProduct.description}/>
                {
                    register 
                    ?
                    <Button className={`${styles.button} ${styles['button-container']}`} variant="contained" color="primary" onClick={registerProduct}>Register</Button>


                    :
                    <div className={styles.btns}>
                        <input type="button" value="Update" className="btn btn-warning" />
                        <input type="button" value="Remove" className="btn btn-danger"/>
                        <input type="button" value="Cancel" className="btn btn-secondary"/>
                    </div>
                }
            </form> 
            </>
        );
}

export default FormProduct;