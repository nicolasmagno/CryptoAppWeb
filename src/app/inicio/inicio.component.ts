import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  coinList:any = []
  
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
  busqueda = ''

  constructor(private service: ListServiceService) { 

    this.service.coinList('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').subscribe(res => {
      this.coinList = res
    })

  }

  ngOnInit(): void {
  }

}
