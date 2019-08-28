import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'utsa-velox';
  
  constructor(private router:Router){}

  onClickProfile() {
    this.router.navigate(['login-page']);
  }

  ngOnInit(): void {
    
    throw new Error("Method not implemented.");
  }
 
}
