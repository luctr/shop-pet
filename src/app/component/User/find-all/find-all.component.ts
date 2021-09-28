import { Component, OnInit } from '@angular/core';
import {Pet} from "../../model/pet";
import {PetService} from "../../service/pet.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdatePetComponent} from "../update-pet/update-pet.component";
import {DeletePetComponent} from "../delete-pet/delete-pet.component";



@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit {

  pets: Pet[] = []

  constructor(private petService: PetService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.petService.findAll().subscribe((data)=>{
      this.pets = data
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
