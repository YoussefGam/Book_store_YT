import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-loginclient',
  templateUrl: './loginclient.component.html',
  styleUrls: ['./loginclient.component.css']
})
export class LoginclientComponent implements OnInit {

  name!:string;
  password!:string;
  message:any;

  constructor(private service:HttpClientService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    let resp= this.service.client(this.name,this.password);
    resp.subscribe(data=>{
      this.message = data;
      this.router.navigate(["/shop"])
    });
  }
}
