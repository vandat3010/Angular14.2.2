import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name ='Đạt Ngô';
  public age = 25;
  public traiCay = ['Táo','Nho', 'Cam', 'Quýt'];
  public traiCay2= [{ ten: 'Táo', gia: 12}, {ten: 'Cam', gia: -14}, {ten: 'Quýt', gia: 12}];
  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây =', this.traiCay)
  }
  public resetName(): void{
    console.log("resetName");
    this.name = '';
  }

}
