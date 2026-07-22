import { Component,Input, signal,output } from '@angular/core';
import { Ticket } from '../ticket.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket!: Ticket;
  isVisible = signal(false);
  close= output();

  toggleVisibility(){
    this.isVisible.update((visible)=>!visible)
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}
