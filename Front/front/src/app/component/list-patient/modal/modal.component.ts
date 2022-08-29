import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
declare var $: any;  


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private appComp:AppComponent,private router: Router){}
  ngOnInit()  
  {   $(document).ready(function() {
     $("#exampleModal").modal('show')
   }); 


  }  
  toggleleModal(){
    this.appComp.changemodal(true)
    console.log("entro")
  }

  
}
