import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  imgSrc: any = null;

  selectedImage: any = null;

  url: any;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }


  submit() {
    // if (this.selectedImage !== null) {
    //   const filePart = `avatar/${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
    //   const fileRef = this.storage.ref(filePart);
    //   this.storage.upload(filePart,this.selectedImage).snapshotChanges().pipe(
    //     finalize(() => {
    //     fileRef.getDownloadURL().subscribe(urlA =>{
    //       this.url = urlA;
    //       console.log(urlA);},
    //         error => {
    //         console.log(error)
    //       }
    //       );
    //   }));
    // }
    // else {
    //   console.log("null")
    // }

    if (this.selectedImage != null) {
      const filePath = `avatar/${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      // const filePath=this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe(url => {
          console.log(url)})))
      )
        .subscribe();
    }

  }

  showPreview(event: any) {
    if ( event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL( event.target.files[0]);
      this.selectedImage = event.target.files[0];

    }else {
      this.selectedImage = null;
    }

  }

}
