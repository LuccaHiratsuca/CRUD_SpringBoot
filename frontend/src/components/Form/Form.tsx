import styles from "./Form.module.css"
interface IForm{
    register: boolean;
}

const Form = ({register}: IForm) => {
    return(
        <form className={styles.form}>
            <input type="text" placeholder="Name" className="form-control"/>
            <input type="text" placeholder="Brand" className="form-control"/>
            {
                register 
                ?
                    <input type="button" value="Register" className="btn btn-primary" />
                :
                <div className={styles.btns}>
                    <input type="button" value="Update" className="btn btn-warning" />
                    <input type="button" value="Remove" className="btn btn-danger"/>
                    <input type="button" value="Cancel" className="btn btn-secondary"/>
                </div>
            }
        </form> 
        );
}

export default Form;