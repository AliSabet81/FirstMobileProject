import { ROUTES } from "."
import Product1 from "../../public/product1.png"
import Product2 from "../../public/product2.png"
import Product3 from "../../public/product3.png"
import Product4 from "../../public/product4.png"
import Product5 from "../../public/product5.png"
import Product6 from "../../public/product6.png"
import Product7 from "../../public/product7.png"
import Product8 from "../../public/product8.png"


export interface IProductCard {
    img: string ,
    category: string ,
    name: string ,
    price: number,
    index : number,
    path:string,
    brand?:string
}



export const Products : IProductCard[] = [
    {
        index:1,
        img: Product1 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:2,
        img: Product2 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:3,
        img: Product3 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:4,
        img: Product4 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:5,
        img: Product5 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:6,
        img: Product6 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:7,
        img: Product7 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
    {
        index:8,
        img: Product8 ,
        category: "TOP women" ,
        name: "Angels malu zip jeans slim black used" ,
        price: 139.11,
        path:ROUTES.Product,
    },
]
