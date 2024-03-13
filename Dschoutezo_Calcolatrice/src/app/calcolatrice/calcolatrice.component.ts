import { Component } from '@angular/core';
import { FlexLayoutModule, GridModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-calcolatrice',
  standalone: true,
  imports: [FlexLayoutModule , GridModule,  MatGridListModule],
  templateUrl: './calcolatrice.component.html',
  styleUrl: './calcolatrice.component.css'
})
export class CalcolatriceComponent {

  output = "0";
 

  click = (num : number) => {
    if(this.output === "0"){
       this.output = num.toString();
    }
     else{
      this.output += "" + num.toString();
     }
  }

  clickAC = () =>{
    this.output = "0";
  }

  clickAdd = () => {
    this.output += "+";
  }

  clickSubstract = () => {
    this.output += "-";
  }

  clickMultiply = () => {
    this.output += "*";
  }
  

  clickDivision = () => {
    this.output += "/";
  }

  clickResult = () =>{
   this.output = eval(this.output);
    /*
    
    if(this.operazione == "add"){
      this.boh += parseInt(this.output);
      this.output = this.boh.toString();
    }

    if(this.operazione == "substract"){
      this.boh -= parseInt(this.output);
      this.output = this.boh.toString();
    }

    if(this.operazione == "multiply"){
      this.boh *= parseInt(this.output);
      this.output = this.boh.toString();
    }

    if(this.operazione == "division"){
      this.boh /= parseFloat(this.output);
      this.output = this.boh.toString();
    }*/
  }


}
