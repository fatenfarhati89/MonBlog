import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  Posts = [
    {
      title: 'Mon premier post',
      content: 'Bonjour, gardez espoir. Soyez optimistes',
      loveIts: 1,
      created_at: new Date()
    },

    { 
      title: 'Mon deuxiéme post',
      content: 'Si on veut on peut',
      loveIts: -1,
      created_at: new Date()
    },

    {
      title: 'Mon troisiéme post',
      content: 'c\'est de l\'impossibel, on ne peut pas arriver à réaliser ce nous cherchons ' ,
      loveIts: 0,
      created_at: new Date()
    }
  ];


}
