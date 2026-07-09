import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; // Possible values: 'online', 'offline', 'unknown'
  constructor() {
     
  }
  ngOnInit() {
    setInterval(() => {
      // Simulate server status changes for demonstration purposes
      const randomStatus = Math.random();
      if (randomStatus < 0.33) {
        this.currentStatus = 'online';
      } else if (randomStatus < 0.66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); // Change status every 5 seconds
  }
}
