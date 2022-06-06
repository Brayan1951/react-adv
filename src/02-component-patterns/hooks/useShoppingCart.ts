import { ProductInCart, Product } from '../interfaces/interfaces';
import { useState } from 'react';
export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {

        setShoppingCart((oldShoppingCart) => {


            const producInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(producInCart.count + count, 0) > 0) {
                producInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id]: producInCart
                }
            }
            // boorar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };


            // if (count === 0) {
            //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //   // return { ...rest };
            //   return rest;
            // }

            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count },
            // };
        });


    };

    return { shoppingCart, onProductCountChange }




}