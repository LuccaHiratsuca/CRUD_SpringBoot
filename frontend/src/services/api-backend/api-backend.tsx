import IApiBack from "../../types/interfaceApiBack";
import http from "../../utils/http-common";

const getProducts = async (): Promise<IApiBack[]> => {
    const { data } = await http.get("/products");
    return data;
}

const getProductbyId = async (id: number): Promise<IApiBack> => {
    try{
        const response = await http.get(`/product/${id}`);
        // console.log(response);
        return response.data;
    } catch (error: any) {
        // console.log(error) 
        // console.log(error.response.data.message);
    }
    throw new Error("Error in getting a specific product");
}

const updateProduct = async (id: number, name: string, description: string): Promise<IApiBack> => {
    try{
        const response = await http.put(`/updateProduct/${id}`, { name, description });
        console.log(response.data[1].message);
        return response.data;
    } catch (error: any) {
        console.log(error.response.status)
        console.log(error.response.data.message);
    }
    throw new Error("Error in updating product");
}

const deleteProduct = async (id: number): Promise<IApiBack> => {
    try{
        const response = await http.delete(`/removeProduct/${id}`);
        console.log(response.data[1].message);
        return response.data;
    } catch (error: any) {

        console.log(error.response.status)
        console.log(error.response.data.message);
    }
    throw new Error("Error in deleting product");
}

const postProduct = async (name: string, description: string): Promise<IApiBack> => {
    try {
        const response = await http.post(`/newProduct`, { name, description });
        console.log(response.data[1].message); 
        
        return response.data;
    }
    catch (error: any) {
        alert(error.response.status + " - " + error.response.data.message);
        console.log(error.response.status)
        console.log(error.response.data.message);
    }
    throw new Error("Error in creating product");
}


export default {getProducts, getProductbyId, updateProduct, deleteProduct, postProduct};









