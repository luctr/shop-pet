import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../service/product.service";
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {CategoryService} from "../../../service/category.service";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-dialog-example',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  categories: Category[] = [];

  imgSrc: any = null;

  selectedImage: any = null;

  url: any;

  product: Product = {};

  category: Category = {};

  productsForm: FormGroup = new FormGroup({})

  constructor(public dialogRef: MatDialogRef<CreatePetComponent>,
              private petService: ProductService,
              private speciesService: CategoryService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.productsForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      category: new FormControl(1),
      description: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create() {
    if (this.productsForm != null) {
      this.product = {
        name: this.productsForm.value.name,
        price: this.productsForm.value.price,
        avatar: this.url,
        category: this.category = {
          id: this.productsForm.value.speci
        },
        description: this.productsForm.value.description
      }
      this.petService.createPet(this.product).subscribe(data=>{
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

  getAllCategories() {
    this.speciesService.findAll().subscribe((data) => {
      this.categories = data,
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




