import { Component } from '@angular/core';

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
  color = ''
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
  showComponent = true
}
