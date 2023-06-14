import { Component } from '@angular/core';
import { DateConverterService } from './Services/DateConverter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intergration_Date';
  ConvertedDate:any;
  
  constructor(private dateConverter:DateConverterService){}

  Convert(date:any){
    this.dateConverter.ConvertDate(date).subscribe((data)=>{
      console.log(data)
      this.ConvertedDate = data
    })
    console.log(date)
  }

}

