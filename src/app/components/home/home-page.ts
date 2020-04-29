import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../../service/service.component';
import { Captains } from '../captains/captains';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss']
  })

export class HomeComponent {
    title = 'Login page';
    captains: Captains[] = [];
    headers: any;
    
    constructor(private api: ApiService) {}

    getCaptainss() {
        this.api.getCaptains()
        .subscribe(resp => {
          console.log(resp);
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
      
          for (const data of resp.body) {
            this.captains.push(data);
          }
          console.log(this.captains);
        });
      }

}