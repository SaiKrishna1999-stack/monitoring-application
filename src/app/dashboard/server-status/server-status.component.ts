import { Component, OnInit, OnDestroy, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline'); // Possible values: 'online', 'offline', 'unknown'
  constructor() {
    effect(() => {
      console.log("In Constructor", this.currentStatus());
    });
  }
  private statusInterval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.statusInterval = setInterval(() => {
      // Simulate server status changes for demonstration purposes
      const randomStatus = Math.random();
      if (randomStatus < 0.33) {
        this.currentStatus.set('online');
      } else if (randomStatus < 0.66) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000); // Change status every 5 seconds
    console.log("In Init");
  }

  ngOnChanges() {
    console.log("In Changes");
  }

  ngOnDestroy() {
    console.log("In Destroy");
    clearInterval(this.statusInterval);
  }
}
