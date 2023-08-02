import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.GetImages()
  }

  // ----------------Getting Data from Back----------------
  imageResponse: any;
  getImageData: any;
  GetImages() {
    this.http.get('http://localhost:3000/images')
      .subscribe(res => {
        this.imageResponse = res
        this.getImageData = this.imageResponse
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



    this.http.post('http://localhost:3000/images', UploadData)
      .subscribe(res => {
        this.ReRender()
        this.Reset()
      })
  }

  // ----------------Upload Functionality----------------

  // ----------------Remove Functionality----------------
  DeletePhoto(CaptureID: any) {
    debugger;
    let url = 'http://localhost:3000/images/'
    let DeleteData = url + CaptureID
    debugger;
    this.http.delete(DeleteData)
      .subscribe(res => {
        this.ReRender();
      })
  }
  // ----------------Remove Functionality----------------


  ReRender() {
    this.GetImages()
  }

  Reset() {
    this.imageUrl = null

  }

}





