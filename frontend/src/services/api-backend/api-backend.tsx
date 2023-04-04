import IApiBack from "../../types/interfaceApiBack";
import http from "../../utils/http-common";

const getProducts = async (): Promise<IApiBack[]> => {
    const { data } = await http.get("/products");
    return data;
}

const updateProduct = async (id: number, name: string, description: string): Promise<IApiBack> => {
    const { data } = await http.put(`/updateProduct`, { name, description });
    return data;
}

const deleteProduct = async (id: number): Promise<IApiBack> => {
    const { data } = await http.delete(`/removeProduct/{id}`);
    return data;
}

const postProduct = async (name: string, description: string): Promise<IApiBack> => {
    const { data } = await http.post("/newProduct", { name, description });
    return data;
}

export default {getProducts, updateProduct, deleteProduct, postProduct}








