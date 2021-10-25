import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePetComponent} from "../../User/create-pet/create-pet.component";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {UserService} from "../../../service/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName : string = '';

  id : any;

  categories: Category[] = [];

  constructor(private dialog:MatDialog,
              private speciesService: CategoryService,
              private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllSpecies()
    if (localStorage.getItem('user') != null){
      let obj = JSON.parse(<string>localStorage.getItem('user'));
      this.userName = obj.name;
    }
  }
  open(){
    if (localStorage.getItem('user') != null){
      this.dialog.open(CreatePetComponent)
    }
    else {
      // this.router.navigateByUrl("/login")
    }

  }
  getAllSpecies() {
    this.speciesService.findAll().subscribe((data) => {
      console.log(data)
      this.categories = data
    })
  }
  getId(name:string){
    this.userService.findByName(name).subscribe(data=>{
      this.id = data.id
      localStorage.setItem('idUser',this.id)
    })
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    alert('Logout Successfully!');

    window.location.reload()
  }

}
