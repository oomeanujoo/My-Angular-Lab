import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  constructor(private http: HttpClient, private loader: NgxUiLoaderService) { }
  ngOnInit(): void {
    this.GetImages()
  }

  // ----------------Getting Data from Back----------------
  imageResponse: any;
  getImageData: any;
  GetImages() {
    // this.http.get('http://localhost:3000/images')
    this.loader.start();
    this.http.get('https://json-server-czn1.onrender.com/images')
      .subscribe(res => {
        this.imageResponse = res
        this.getImageData = this.imageResponse
        this.loader.stop();


      })
  }

  // ----------------Getting Data from Back----------------



  // ----------------Upload Functionality----------------

  selectedFile: any;
  imagePreview: any;
  imageUrl: any;

  onFilechange(event: any) {  // Starts Converting and handling of file!!!
    this.selectedFile = event.target.files[0]
    const reader = new FileReader(); // Method Starts From Here
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      // const img = new Image();
      // img.src = `data:image/jpeg;base64,${this.imagePreview}`;
      this.imageUrl = reader.result;
    };





  }

  onUpload() {
    let UploadData =
    {
      'imageName': this.selectedFile.name,
      'image': this.imagePreview

    }


    this.loader.start();

    // this.http.post('http://localhost:3000/images', UploadData)
    this.http.post('https://json-server-czn1.onrender.com/images', UploadData)
      .subscribe(res => {
        this.ReRender()
        this.Reset()

      })
  }

  // ----------------Upload Functionality----------------

  // ----------------Remove Functionality----------------
  DeletePhoto(CaptureID: any) {
    // let url = 'http://localhost:3000/images/'
    let url = 'https://json-server-czn1.onrender.com/images/'
    let DeleteData = url + CaptureID
    this.loader.start();
    this.http.delete(DeleteData)
      .subscribe(res => {
        this.ReRender();

      })
  }
  // ----------------Remove Functionality----------------


  ReRender() {
    this.GetImages()
    this.loader.stop();

  }

  Reset() {
    this.imageUrl = null
    this.loader.stop();

  }

}





