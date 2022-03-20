import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations:[
 trigger('animarBanner',[
   state('criado',style({
     opacity: 1
   })),
   state('criadoLoguin',style({
    opacity: 1
  })),
   transition('void => criado',[
style({opacity:0,transform:'translate(-80px,-10px)'
}),
animate('500ms 1s ease-in-out')
   ]),
   transition('void => criadoLoguin',[
    style({opacity:0,transform:'translate(50px,30px)'
    }),
    animate('500ms 1s ease-in-out')
       ])
 ])


  ]
})
export class AcessoComponent implements OnInit {


  public estadoBanner:string='criado'

  public estadoLoguin:string='criadoLoguin'
public cadastroOuLoguin: boolean=true



  constructor() { }

  ngOnInit(): void {


  }


  public exibieTela (event:string){

    this.cadastroOuLoguin=event ==='telaLoguin' ?this.cadastroOuLoguin=false:this.cadastroOuLoguin=true
console.log(this.cadastroOuLoguin)


  }
}
