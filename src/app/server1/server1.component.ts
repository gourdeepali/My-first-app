import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
  allowNewServer=false;
  newServerStatus="no new server was created ";
  serverName='testServer';
  serverStatus=false;
  servers=['deepali','mitali'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }
  
  ngOnInit() {
  }

 onCreateServer(){
   this.serverStatus=true;
   this.servers.push(this.serverName);
   this.newServerStatus="New server is created, name is "+this.serverName;
 }

 onUpdateServerName(event){
   this.serverName=event.target.value;

 }

}
