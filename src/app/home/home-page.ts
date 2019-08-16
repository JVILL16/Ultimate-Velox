import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss']
  })
export class HomeComponent implements OnInit{


    
    ngOnInit(): void {
        console.log("clicked");

        throw new Error("Method not implemented.");
    }

}