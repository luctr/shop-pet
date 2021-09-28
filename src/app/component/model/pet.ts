import {Species} from "./species";

export interface Pet {
  id?: number,
  name?: string,
  avatar?: string,
  price?: number,
  species?:Species,
  description?:string
  // userId:any
}
