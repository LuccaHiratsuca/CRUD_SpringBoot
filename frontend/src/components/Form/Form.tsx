const Form = () => {
    return(
        <form>
            <input type="text" placeholder="Name" className="form-control"/>
            <input type="text" placeholder="Brand" className="form-control"/>
            <input type="button" placeholder="Register" className="btn btn-primary" />
            <input type="button" placeholder="Update" className="btn btn-warning"/>
            <input type="button" placeholder="Remove" className="btn btn-danger"/>
            <input type="button" placeholder="Cancel" className="btn btn-secondary"/>
        </form> 
        );
}

export default Form;