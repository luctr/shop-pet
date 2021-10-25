import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../../../model/product";
import {finalize} from "rxjs/operators";
import {CategoryService} from "../../../service/category.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  categories: Category[] = [];

  selectedImage: any = null;

  category: Category = {};

  url: any;

  product: Product = {}

  petsForm1: FormGroup = new FormGroup({})

  constructor(public dialogRef: MatDialogRef<UpdatePetComponent>,
              private petService: ProductService,
              private activeRouter: ActivatedRoute,
              private speciesService: CategoryService,
              private storage: AngularFireStorage) {

  }

  ngOnInit(): void {
    this.getAllCategories();
    this.id = Number(localStorage.getItem('id'));
    this.getByIdProduct(this.id)
    this.petsForm1 = new FormGroup({
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
    this.product = {
      id: this.id,
      name: this.petsForm1.value.name,
      price: this.petsForm1.value.price,
      avatar: this.url,
      category: this.petsForm1.value.species = {
        id: this.petsForm1.value.species
      },
      description: this.petsForm1.value.description
    }
    console.log(this.petsForm1.value.species)
    this.petService.updatePet(this.product).subscribe(data => {
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

  getByIdProduct(id: number) {
    this.petService.getByIdPet(id).subscribe(data => {
      this.petsForm1 = new FormGroup({
        name: new FormControl(data.name),
        avatar: new FormControl(data.avatar),
        price: new FormControl(data.price),
        species: new FormControl(data.category?.id),
        description: new FormControl(data.description),
      })
    })
  }

  getAllCategories() {
    this.speciesService.findAll().subscribe((data) => {
      this.categories = data
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
