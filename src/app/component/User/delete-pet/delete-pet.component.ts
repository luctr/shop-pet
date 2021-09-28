import {Component, OnInit} from '@angular/core';
import {Species} from "../../model/species";
import {Pet} from "../../model/pet";
import {FormControl, FormGroup} from "@angular/forms";
import {PetService} from "../../service/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SperciesService} from "../../service/spercies.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.scss']
})
export class DeletePetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  species: Species[] = [];

  selectedImage: any = null;

  url: any;

  pets: Pet = {}

  // @ts-ignore
  petsForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<DeletePetComponent>,
              private petService: PetService,
              private activeRouter: ActivatedRoute,
              private speciesService: SperciesService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.getAllSpecies();
    this.id = Number(localStorage.getItem('id'));
    this.petsForm = new FormGroup({
      name: new FormControl(''),
      avatar: new FormControl(''),
      price: new FormControl(0),
      spices: new FormControl(),
      description: new FormControl(''),
    })
    this.getByIdPet(this.id)
  }

  getByIdPet(id: number) {
    this.petService.getByIdPet(id).subscribe(data => {
      this.petsForm = new FormGroup({
        name: new FormControl(data.name),
        avatar: new FormControl(data.avatar),
        price: new FormControl(data.price),
        spices: new FormControl(data.species?.id),
        description: new FormControl(data.description),
      })
    })
  }

  getAllSpecies() {
    this.speciesService.findAll().subscribe((data) => {
      this.species = data
    })
  }

  delete() {
    console.log(this.id)
    this.petService.deletePet(this.id).subscribe(data => {
      window.location.reload(),
        this.onNoClick()
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
