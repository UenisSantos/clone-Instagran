import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { Images } from './imagens.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
trigger('banner',[

state('visivel',style({
  opacity: 1
})),



state('escondido',style({
  opacity: 0

})),transition('escondido <=> visivel',animate('2s ease-in' )),


]),


  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

setTimeout(()=>this.girarBanner(),3000)

  }

public image:Images[]=[
  {estado:'visivel',url:'/assets/banner-acesso/img_1.png'},
  {estado:'escondido',url:'/assets/banner-acesso/img_2.png'},
  {estado:'escondido',url:'/assets/banner-acesso/img_3.png'},
  {estado:'escondido',url:'/assets/banner-acesso/img_4.png'},
  {estado:'escondido',url:'/assets/banner-acesso/img_5.png'}
]





public girarBanner():void{

  let proximaImagen!:number

for (let index = 0; index <= this.image.length-1; index++) {

  if (this.image[index].estado==='visivel'){
this.image[index].estado= 'escondido'

proximaImagen=index ==4  ? 0 : index +1



break
  }

}

this.image[proximaImagen].estado='visivel'


console.log(proximaImagen)
setTimeout(()=>this.girarBanner(), 3000)
}

}
