import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';
import{ trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [
  	trigger('myAwesomeAnimation',[
  		state('small', style({
  		transform: 'scale(1)',
  		})),
  		state('large', style({
  		transform: 'scale(1.2)',
  		})),
  	transition('small<=>large', animate('300ms ease-in', keyframes([style({opacity:0, transform: 'translateY(-75%)', offset:0}),
  	style({opacity:1, transform: 'translateY(35%)', offset:.5}),
  	style({opacity:1, transform: 'translateY(0)', offset:1}),]))),
  	]),
  ]
})
export class MyNewComponentComponent implements OnInit {

  /**constructor() { }

  ngOnInit() {
  }**/
  /** property biniding**/
  myarray = ['hers', 'his', 'ours'];
  mybool = true;
  angularLogo = "../favicon.ico" ;

  buttonStatus = 'disabled';

  /** Event binding **/
  myEvent(event){
  	console.log(event);
  }
  /** class binding for css**/
  titleclass = 'redTitle';

  /** choice of color **/
  titleStyle = true;
   /** Multiple style using a single object**/
  titleStyles = {
  	'color': 'red',
  	'font-size': '40px'
  }
  /** Service **/
  constructor(private dataService: DataService) {

  }
  someProperty:string = "";
  ngOnInit(){
  	console.log(this.dataService.cars);
  	this.someProperty = this.dataService.mydata();
 }
 /** Animation **/
 state: string = 'small'
 animateMe(){
 this.state = (this.state ==='small' ? 'large' : 'small')
 }
 
}
