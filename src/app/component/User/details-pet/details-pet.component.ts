import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.scss']
})
export class DetailsPetComponent implements OnInit {

  id: any;

  imgSrc: any = null;

  species: Category[] = [];

  selectedImage: any = null;

  url: any;

  product: Product = {}

  // @ts-ignore
  productsForm: FormGroup = new FormGroup({});

  constructor(private petService: ProductService,
              private activeRouter: ActivatedRoute,
              private speciesService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.id = Number(localStorage.getItem('id'));
    this.productsForm = new FormGroup({
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
      console.log(data)
      this.productsForm = new FormGroup({
        name: new FormControl(data.name),
        avatar: new FormControl(data.avatar),
        price: new FormControl(data.price),
        spices: new FormControl(data.category?.id),
        description: new FormControl(data.description),
      })
    })
  }
  getAllCategories() {
    this.speciesService.findAll().subscribe((data) => {
      this.species = data,
        console.log(data)
    })
  }


}
