import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import apiBackend from "../../services/api-backend/api-backend";
import { selectedProduct } from "../../store/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state: any) => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, isLoading, error } = useQuery( `/product/${id}`, () => apiBackend.getProductbyId(Number(id)), {
        onSuccess: (data) => {
            dispatch(selectedProduct(data));
        }
    })

    if ((isLoading) || (data === undefined)) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>

    )
}


export default ProductDetails;
