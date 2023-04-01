import apiBackend from "../../services/api-backend";
import {useQuery} from "react-query";

const Table = () => {
    const {data, isLoading, error} = useQuery('products', async () => {
        const {data} = await apiBackend.getProducts();
        return data;
    });

    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(data);

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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table;