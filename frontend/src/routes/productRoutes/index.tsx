import { Routes, Route } from 'react-router-dom';
import Products from "../../pages/Products"
import ProductDetails from '../../pages/ProductDetails/ProductDetails';


export const ProductRoutes = () => {
    return (
        <Routes>
            <Route element={<Products />} />
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} /> // TODO: Add a new page for this route
            <Route path="new" element={<Products />} /> // TODO: Add a new page for this route
            <Route path="*" element={<h1>404 - Products - Not Found</h1>} />
        </Routes>
    )
}

