import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-comm-admin';
  data='shailesh gabu'
  inputVal = ''
  disable = false;
  color = 'red'
  myFun(){
    console.log(this.data)
  }
  myFun2(){
    return ' gabu'
  }
  getValue(val:string){
    this.inputVal = val
    console.warn(val)
  }
  count = 0;
  counter(val:string){
    val === 'add' ? this.count++ : this.count--
  }
  showComponent = true;

  // loops

  user= ['gabu','shailesh','ajay','mithapara','kartavya','solanki','jay','patel'];
  userDetails=[
    {name:'gabu',mail:'gabu@gmail.com',mobile:'9898989891'},
    {name:'shailesh',mail:'shailesh@gmail.com',mobile:'9898989892'},
    {name:'ajay',mail:'ajay@gmail.com',mobile:'9898989893'},
    {name:'mithapara',mail:'mithapara@gmail.com',mobile:'9898989894'},
    {name:'kartavya',mail:'kartavya@gmail.com',mobile:'9898989895'},
    {name:'solanki',mail:'solanki@gmail.com',mobile:'9898989896'}
  ]
  // nested loops

  userData=[
    {name:'gabu',mail:'gabu@gmail.com',mobile:'9898989891' ,socialAccount:['facebook','instagram','mail']},
    {name:'shailesh',mail:'shailesh@gmail.com',mobile:'9898989892',socialAccount: ['linkedIn','mail','facebook']},
    {name:'ajay',mail:'ajay@gmail.com',mobile:'9898989893',socialAccount: ['mail','facebook','linkedIn']},
    {name:'mithapara',mail:'mithapara@gmail.com',mobile:'9898989894',socialAccount: ['youtube','instagram','facebook']},
    {name:'kartavya',mail:'kartavya@gmail.com',mobile:'9898989895',socialAccount: ['linkedIn','mail','facebook']},
     {name:'solanki',mail:'solanki@gmail.com',mobile:'9898989896',socialAccount: ['instagram','linkedIn','youtube']},
  ]

  // style binding // dynamic style

  titleBgColor = 'red';
  boxBgColor= 'yellow';

  changeColor(){
    this.titleBgColor = 'green';
    this.boxBgColor= 'blue'
  }
  dblChangeColor(){
    this.titleBgColor = 'orange';
    this.boxBgColor= 'green'
    return 20
  }

  // forms module
  getData(data:NgForm){
    console.log(data)
  }

}
