import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
person:User ={
  name:'',
  contact: null
}
  

  user:User[];
  enableAdd:boolean = true;
  isButtonSuccess:boolean = true;
  isActive:boolean= true;
  buttonSymbol:string = "+";
  formOpen:boolean=false;
  
  currentStyle={};

  constructor() { }

  ngOnInit() {
    this.user=[{
      name:"Ratna",
      contact:9808898989,
      adress:"Andaman",
      image:"http://lorempixel.com/200/200/people/1",
      hide: true
    },{
      name:"Priya",
      contact:9878787879,
      adress:"Nicobar",
      image:"http://lorempixel.com/200/200/people/2",
      hide:true
    }]
    this.updateCurrentStyle();
  }
  updateCurrentStyle(){
    this.currentStyle={
      'font-size': '40px'
    }

  
    

  }
  buttonClicked(e){
    this.user.push(e);
    this.person.name="";
    this.person.contact=null;
  }
  kick(data){
    data.hide = !data.hide;
    this.buttonSymbol = data.hide ? "+" : "-"
        }

}
