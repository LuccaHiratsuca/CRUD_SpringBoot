import Table from "../../components/Table";
import Form from "../../components/FormProduct";
import ProductList from "../../components/ProductsList/ProductsList";
import { useState } from "react";
import { useQuery } from "react-query";
import apiBackend from "../../services/api-backend";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/actions/productActions";

const Products = () => {
    const[btnRegister, setBtnRegister] = useState(true);
    const dispatch = useDispatch();
 
    const {data, isLoading, error} = useQuery("/products", apiBackend.getProducts, {
        onSuccess: (data) => {
            dispatch(setProducts(data))
        }
    })

    if ((isLoading) || (data === undefined)) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <Form register={btnRegister}/>
            {/* <Table /> */}
            <ProductList />
        </div>
    )
}

export default Products