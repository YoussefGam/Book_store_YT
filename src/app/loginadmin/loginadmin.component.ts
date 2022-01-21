import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  name!:string;
  password!:string;
  message:any;

  constructor(private service:HttpClientService, private router:Router) { }

  ngOnInit(): void {
  }

  doLoginAdmin(){
    let resp= this.service.admin(this.name,this.password);
    resp.subscribe(data=>{
      this.message = data;
      this.router.navigate(["shopadmin"])
    });
  }

}
