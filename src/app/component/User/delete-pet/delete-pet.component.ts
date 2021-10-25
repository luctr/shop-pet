import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.scss']
})
export class DeletePetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  species: Category[] = [];

  selectedImage: any = null;

  url: any;

  product: Product = {}

  // @ts-ignore
  productForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<DeletePetComponent>,
              private petService: ProductService,
              private activeRouter: ActivatedRoute,
              private speciesService: CategoryService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.getAllCtegories();
    this.id = Number(localStorage.getItem('id'));
    this.productForm = new FormGroup({
      name: new FormControl(''),
      avatar: new FormControl(''),
      price: new FormControl(0),
      spices: new FormControl(),
      description: new FormControl(''),
    })
    this.getByIdProduct(this.id)
  }

  getByIdProduct(id: number) {
    this.petService.getByIdPet(id).subscribe(data => {
      this.productForm = new FormGroup({
        name: new FormControl(data.name),
        avatar: new FormControl(data.avatar),
        price: new FormControl(data.price),
        spices: new FormControl(data.category?.id),
        description: new FormControl(data.description),
      })
    })
  }

  getAllCtegories() {
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
