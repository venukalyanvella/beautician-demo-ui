import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  @Input() beautician:string;
  // userVisible:boolean= false;

  currentUser;
  constructor() {
    // this.onselected = new ElementRef;
    $('.userVisible').hide()

   }

  ngOnInit() {
    this.currentUser = this.beautician
  //  $(document).ready(function(){
  //    $('#btn').click(function(){
  //      console.log('change');
       
      // this.userVisible=true;
      // $(this).parents('.row').find('.first-block').toggleClass('col-md-2 col-md-8');
  //   })
  //  })
  $('.test').hide();
  }

  ChangeData(){
    // $('.userVisible').show()
    console.log('clicked');
    
    $('.test').toggle()
    // $(document).ready(function(){
        
    //       $(this).parents('.row').find('.first-block').toggleClass('col-md-2 col-md-8')
       
    //    })
  }

  ngOnChanges(changes:SimpleChanges){
    // console.log("change detected");
   
    for(let data in changes){
      // console.log(changes[data].currentValue);
      this.currentUser = changes[data].currentValue
      
    }
}

}
