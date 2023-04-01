import Table from "../../components/Table";
import Form from "../../components/Form";
import { useState } from "react";

const Products = () => {
    const[btnRegister, setBtnRegister] = useState(false);

    return (
        <div>
            <Form register={btnRegister}/>
            <Table />
        </div>

    )
}

export default Products