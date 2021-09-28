import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Species} from "../../model/species";
import {MatDialogRef} from "@angular/material/dialog";
import {PetService} from "../../service/pet.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Pet} from "../../model/pet";
import {SperciesService} from "../../service/spercies.service";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  species: Species[] = [];

  selectedImage: any = null;

  speci: Species = {};

  url: any;

  pets: Pet = {}

  petsForm: FormGroup = new FormGroup({})

  constructor(public dialogRef: MatDialogRef<UpdatePetComponent>,
              private petService: PetService,
              private activeRouter: ActivatedRoute,
              private speciesService: SperciesService,
              private storage: AngularFireStorage) {

  }

  ngOnInit(): void {
    this.getAllSpecies();
    this.id = Number(localStorage.getItem('id'));
    this.getByIdPet(this.id)
    this.petsForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      species: new FormControl(1),
      description: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update() {
    this.pets = {
      id: this.id,
      name: this.petsForm.value.name,
      price: this.petsForm.value.price,
      avatar: this.url,
      species: this.petsForm.value.species = {
        id: this.petsForm.value.species
      },
      description: this.petsForm.value.description
    }
    console.log(this.petsForm.value.species)
    this.petService.updatePet(this.pets).subscribe(data => {
      window.location.reload()
    })
    this.onNoClick()
  }

  sub() {
    if (this.selectedImage != null) {
      const filePath = `avatar/${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe(url => {
            this.url = url
          })))
      )
        .subscribe();
    }
  }

  getByIdPet(id: number) {
    this.petService.getByIdPet(id).subscribe(data => {
      this.petsForm = new FormGroup({
        name: new FormControl(data.name),
        avatar: new FormControl(data.avatar),
        price: new FormControl(data.price),
        species: new FormControl(data.species?.id),
        description: new FormControl(data.description),
      })
    })
  }

  getAllSpecies() {
    this.speciesService.findAll().subscribe((data) => {
      this.species = data
    })
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.sub()
    } else {
      this.selectedImage = null;
    }
  }
}
