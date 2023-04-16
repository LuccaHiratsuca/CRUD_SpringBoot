import styles from "./Form.module.css"
import { useContext,useState } from "react";
import contextProduct from "../../context/contextProduct";
import apiBackend from "../../services/api-backend/api-backend";
interface IForm{
    register: boolean;
}

const Form = ({register}: IForm) => {
    const [objProduct, setObjProduct] = useState(useContext(contextProduct));

    const typing = (e: any) => {
        setObjProduct({...objProduct, [e.target.name]: e.target.value});
    }

    const registerProduct = () => {
        apiBackend.postProduct(objProduct.name, objProduct.description);
    }

    return(
        <>
            <p>{JSON.stringify(objProduct)}</p>
            <form className={styles.form}>
                <input type="text" onChange={typing} name="name" placeholder="Name" className="form-control"/>
                <input type="text" onChange={typing} name="description" placeholder="Description" className="form-control"/>
                {
                    register 
                    ?
                        <input type="button" value="Register" className="btn btn-primary" onClick={registerProduct}/>
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

export default Form;