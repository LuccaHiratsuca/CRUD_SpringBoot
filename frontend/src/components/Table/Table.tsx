import apiBackend from "../../services/api-backend";
import IApiBack from "../../types/interfaceApiBack";
import { useSelector } from "react-redux";

const Table = () => {

    const dataProducts = useSelector((state: any ) => state.allProducts.products);
    console.log(dataProducts);

   
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                    {
                        dataProducts.map((product: IApiBack, index: number) => {
                            return(
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    )
}

export default Table
