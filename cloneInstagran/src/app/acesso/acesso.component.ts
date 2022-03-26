import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
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
    style({opacity:0,transform:'translate(50px,10px)'
    }),
    animate('1.5s 1s ease-in-out',keyframes([
      style({offset:0.68,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.70,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.72,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.74,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.76,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.78,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.80,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.84,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.86,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.88,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.90,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.92,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.94,opacity:1 ,transform:'translateY(-20px)'}),
      style({offset:0.96,opacity:1 ,transform:'translateY(20px)'}),
      style({offset:0.98,opacity:1 ,transform:'translateY(-20px)'}),

    ]))
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

    this.cadastroOuLoguin=event ==='telaLoguin' ?this.cadastroOuLoguin=true:this.cadastroOuLoguin=false
console.log(this.cadastroOuLoguin)


  }
}
