import { Component, ElementRef, OnInit, viewChild, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit , AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  ticketTitle = "";
  ticketDescription ="";
  // form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{ title: string, text: string}>()

  ngOnInit() {
    console.log('In Init');
    // console.log('NewTicketComponent initialized',this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('Form element:', this.form?.nativeElement);
  }

  submitTicket() {
    this.add.emit({ title: this.ticketTitle, text: this.ticketDescription});
    this.ticketTitle="";
    this.ticketDescription="";
    // this.form?.nativeElement.reset(); // Reset the form after submission
  }
}
