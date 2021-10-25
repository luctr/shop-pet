import {Category} from "./category";

export interface Product {
  id?: number,
  name?: string,
  avatar?: string,
  price?: number,
  category?:Category,
  description?:string
  // userId:any
}
