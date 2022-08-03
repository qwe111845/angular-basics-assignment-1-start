import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel1',
  templateUrl: './channel1.component.html',
  styleUrls: ['./channel1.component.css']
})
export class Channel1Component {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;

  constructor() {
    setInterval(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  getServerStatus() {
    return this.serverId;
  }
}
