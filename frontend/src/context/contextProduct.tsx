import IApiBack from '../types/interfaceApiBack';
import { createContext} from 'react';

const contextProduct = createContext<IApiBack>({id: 0, name: "", description: ""});
// const contextProduct = createContext<IApiBack>({id: 1, name: "Product 1", description: "Description 1"});



export default contextProduct;