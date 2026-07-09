import { Component,HostBinding,HostListener,inject,input, ViewEncapsulation, ElementRef } from '@angular/core';

//prefered to bind host in component decorator instead of using HostBinding and HostListener
//prefered to bind host listener in component decorator instead of using HostListener
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClickEvent() {
  //   console.log('Control clicked');
  // }
  label = input<string>();
  private eleRef = inject(ElementRef);
  onClick() {
    console.log('Control clicked', this.eleRef.nativeElement);
    console.log('Control clicked');
  }
}
