import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCity: any;
  hell: any = ''

  file: File | null = null;
  constructor(private hs: HeroService) {
    this.hell = ''
    this.hs.nextCount1(this.hell);
    debugger;
  }

  ngOnInit(): void {
    const that = this


    // $.cordys.authentication.sso
    //   .authenticate('Arun', 'Arun')
    //   .done((resp: any) => {
    //     this.hs
    //       .ajax(
    //         'GetTbm_master1Objects',
    //         'http://schemas.cordys.com/TBMMetadata',
    //         { fromId: 1, toId: 100 }
    //       )
    //       .then((resp) => {
    //         console.log(resp);
    //         console.log($.cordys.json.findObjects(resp, 'tbm_master1'));
    //         that.allCity = $.cordys.json.findObjects(resp, 'tbm_master1');
    //       });
    //     // this.heroService.stop();
    //     // $('#exampleModal2').modal('hide');
    //     // $('#exampleModal3').modal('show');
    //     //  window.location.hash = '/dash';
    //   })
    //   .fail(function () {
    //     that.hs.stop();
    //     console.log('fail');
    //   })
    //   .always(function () {

    //     console.log('always');
    //   });




  }



  // <!-----------------------------------Upload File Functionality----------------------------------->

  // onFilechange(event: any) {
  //   console.log(event.target.files[0])
  //   this.file = event.target.files[0]
  // }

  // upload() {
  //   if (this.file) {
  //     this.uploadService.uploadfile(this.file).subscribe(resp => {
  //       alert("Uploaded")
  //     })
  //   } else {
  //     alert("Please select a file first")
  //   }
  // }
}


