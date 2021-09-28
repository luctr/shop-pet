import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogRef} from "@angular/material/dialog";
import {PetService} from "../../service/pet.service";
import {SperciesService} from "../../service/spercies.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Species} from "../../model/species";
import {Pet} from "../../model/pet";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  species: Species[] = [];

  imgSrc: any = null;

  selectedImage: any = null;

  url: any;

  pet: Pet = {};

  speci: Species = {};

  petsForm: FormGroup = new FormGroup({})

  constructor(public dialogRef: MatDialogRef<DialogExampleComponent>,
              private petService: PetService,
              private speciesService: SperciesService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.getAllSpecies();
    this.petsForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      speci: new FormControl(1),
      description: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create() {
    if (this.petsForm != null) {
      this.pet = {
        name: this.petsForm.value.name,
        price: this.petsForm.value.price,
        avatar: this.url,
        species: this.speci = {
          id: this.petsForm.value.speci
        },
        description: this.petsForm.value.description
      }
      this.petService.createPet(this.pet).subscribe(data=>{
       window.location.reload(),
        this.onNoClick();
      })
    }
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

  getAllSpecies() {
    this.speciesService.findAll().subscribe((data) => {
      this.species = data,
        console.log(data)
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




