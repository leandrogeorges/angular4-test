import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServiceService: HomeServiceService) { }

  ngOnInit() {
    this.homeData.title = this.getTitle();
    console.log(this.homeData);
  }

  homeData = {
    title: ''
  }

  getTitle(): string {
    return this.homeServiceService.getMessage();
  }

}
