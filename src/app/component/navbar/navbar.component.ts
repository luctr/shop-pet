import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "../User/dialog-example/dialog-example.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  open(){
    this.dialog.open(DialogExampleComponent)
  }

}
