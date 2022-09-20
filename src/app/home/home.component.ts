import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Đạt Ngô';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt'];
  public traiCay2 = [{ ten: 'Táo', gia: 12, FlashSale: 20 }, { ten: 'Cam', gia: 14, FlashSale: 40 }, { ten: 'Quýt', gia: 12 }];
public districts: string[] = [];
  public cities = [
    { city: 'An Giang', district: ['Thành phố Long Xuyên', 'Thành phố Châu Đốc', 'Thị xã Tân Châu', 'Huyện An Phú', 'Huyện Châu Phú', 'Huyện Châu Thành', 'Huyện Chợ Mới', 'Huyện Phú Tân', 'Huyện Thoại Sơn', 'Huyện Tịnh Biên', 'Huyện Tri Tôn'] }
  ]
  constructor() { }

  public ngOnInit(): void {
    console.log('cities = ', this.cities);
  }
  public changeCity(event: any): void{
    const city = event.target.value;
    console.log('event', city);
    if(!city){
      return;
    }
    // //cách 1
    // const search = this.cities.filter(data => data.city);
    // console.log('search', search);

    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }
    //cách 2
    this.districts = this.cities.find(data => data.city === city)?.district||[];
  }

}
