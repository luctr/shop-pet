import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdatePetComponent} from "../update-pet/update-pet.component";
import {DeletePetComponent} from "../delete-pet/delete-pet.component";



@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit {

  products: Product[] = []

  constructor(private petService: ProductService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.petService.findAll().subscribe((data)=>{
      console.log(data)
      this.products = data
    })
  }
  openDialogUpdate(id:any){
    this.dialog.open(UpdatePetComponent);
    this.id(String(id))
  }
  openDialogDelete(id:any){
    this.dialog.open(DeletePetComponent);
    this.id(String(id))
    console.log(id)
  }
  id(id:any){
    localStorage.setItem('id',id)
  }
}
