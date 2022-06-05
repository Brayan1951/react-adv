import { Props as ProductsButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProdcutImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductButtonsProps {
    counter: number;
    increaseBy: (value: number) => void;
}
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProdcutImageProps) => JSX.Element;
    Buttons: (Props: ProductsButtonsProps) => JSX.Element;
}