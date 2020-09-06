import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ServiceService } from './service.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  launchCompleteDetails: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
              private service: ServiceService, private toastrService: ToastrService){
  };

  ngOnInit(){
    this.fetchURL();
    // this.searchLaunches();
  }

  fetchURL() {
     this.service.fetchURL().subscribe((res) => {
      this.launchCompleteDetails= res;
     })

  }
  searchLaunches(value) {
    console.log('value', value)
    let data= {
      launch_year:2006
    }

    let str1 = new String('https://api.spacexdata.com/v3/launches?limit=100'); 
    let str2 = new String('&amp;launch_year='); 
    let str3 = str1.concat(str2.toString()); 
    console.log("str1 + str2 : "+str3) 
    let str4= new String(value);
    let str5 = str3.concat(str4.toString()); 
    console.log("str1 + str2 : "+str5) 
    
      this.http.get<any>(str5).subscribe((res)=> {
        console.log('res', res);
        this.launchCompleteDetails= res;
      })
  }
}
