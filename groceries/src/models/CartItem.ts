import { ProductDTO } from "./ProductDTO";

export interface CartItem {
    product: ProductDTO;
    quantity: number;
}

export default CartItem;