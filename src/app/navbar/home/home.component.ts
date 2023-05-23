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

  constructor(private hs: HeroService) { }

  ngOnInit(): void {
    debugger;
    const that = this

    $.cordys.authentication.sso
      .authenticate('Arun', 'Arun')
      .done((resp: any) => {
        this.hs
        .ajax(
          'GetTbm_master1Objects',
          'http://schemas.cordys.com/TBMMetadata',
          { fromId: 1, toId: 100 }
        )
        .then((resp) => {
          console.log(resp);
          console.log($.cordys.json.findObjects(resp, 'tbm_master1'));
          that.allCity = $.cordys.json.findObjects(resp, 'tbm_master1');
        });
        // this.heroService.stop();
        // $('#exampleModal2').modal('hide');
        // $('#exampleModal3').modal('show');
        //  window.location.hash = '/dash';
      })
      .fail(function () {
        that.hs.stop();
        console.log('fail');
      })
      .always(function () {

        console.log('always');
      });




  }

}
