import {
  Component
} from '@angular/core';

import { Beautician  } from "./Beautician";

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beautician System';

  beautician: Beautician[] =  [{
      name: 'sandhya',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'sudha',
      experience: '6-months',
      skills:'spa'
    },
    {
      name: 'vani',
      experience: '5yers',
      skills:'spa'
      
    },
    {
      name: 'ragasudha',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'radha',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'komali',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'raga priya',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'priya',
      experience: '2years',
      skills:'spa'
    },
    {
      name: 'kumari',
      experience: '2years',
      skills:'spa'
    },
  ]
  SidebarLoad: Boolean = false;
  currentName:any;
  user:boolean=false
  constructor() {}
  // myData(word:any){

    
  //     word = word.replace(word.substr(0,word.length-8),word.substr(5,word.length).replace(/./g,"*"))
  //   console.log(word);
    
    
  //   return word
    
  // }







  BookOp(data: any) {
    console.log(data);
    this.SidebarLoad = true;
this.currentName = data
  }
selectedUser(event:any){
  // console.log(event);
  
}
  wasSelected(data:any){
    console.log(data);
    
  }

  userStatus(event:any){
    console.log(event);
    
    // if(event.target.clicked == 'true'){
    //   this.user =true

    // }

    // this.user= false

  }
}
