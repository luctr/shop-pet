import {Component, OnInit} from '@angular/core';
import {Species} from "../../model/species";
import {Pet} from "../../model/pet";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {PetService} from "../../service/pet.service";
import {ActivatedRoute} from "@angular/router";
import {SperciesService} from "../../service/spercies.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.scss']
})
export class DetailsPetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  species: Species[] = [];

  selectedImage: any = null;

  url: any;

  pets: Pet = {}

  // @ts-ignore
  petsForm: FormGroup = new FormGroup({});

  constructor(private petService: PetService,
              private activeRouter: ActivatedRoute,
              private speciesService: SperciesService) {
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
      console.log(data)
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
      this.species = data,
        console.log(data)
    })
  }


}
