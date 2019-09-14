import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
  })

export class LoadingComponent implements OnInit{
    
    loading: boolean = true;

    ngOnInit(): void {
        this.loading = true;
        throw new Error("Method not implemented.");
    }

}