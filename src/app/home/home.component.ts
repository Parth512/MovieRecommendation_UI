import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import Swiper from 'swiper';
import { groupBy, forIn, each, chunk, find, isUndefined } from 'lodash';
import { TokenStorageService } from '../_services/token-storage.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: string;
  mySwiper;
  last10 = [];
  recommendation;
  currentUser: any;
  genreWiseProduct;
  constructor(private userService: UserService, private _http: HttpClient, private token: TokenStorageService) { }

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    if (this.currentUser) {
      const header = {
        "userId": this.currentUser.username
      };
      this._http.get('/api/history/getLast10', { headers: header }).subscribe((data: any[]) => {
        this.last10 = data;
      });
      this._http.get('/api/history/recommendation', { headers: header }).subscribe((recommendation: any[]) => {
        this.recommendation = recommendation;
        this._http.get('/api/auth/movie/list').subscribe((list: any[]) => {
          this.genreWiseProduct = groupBy(list, 'gerne');
        });
      });
    }

  }


}
