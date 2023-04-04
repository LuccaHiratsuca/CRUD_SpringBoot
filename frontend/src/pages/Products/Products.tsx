import Table from "../../components/Table";
import Form from "../../components/Form";
import { useState } from "react";
import { useQuery } from "react-query";
import apiBackend from "../../services/api-backend";

const Products = () => {
    const[btnRegister, setBtnRegister] = useState(false);

    const {data, isLoading, error} = useQuery("/products", apiBackend.getProducts);
    if ((isLoading) || (data === undefined)) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Form register={btnRegister}/>
            <Table dataProducts={data}/>
        </div>

    )
}

export default Products