import { Component,HostBinding,HostListener,inject,input, ViewEncapsulation, ElementRef, ContentChild, OnInit, AfterContentInit } from '@angular/core';

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
export class ControlComponent implements AfterContentInit,OnInit  {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClickEvent() {
  //   console.log('Control clicked');
  // }
  label = input<string>();
  private eleRef = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
 
  ngOnInit() {
    console.log('In Init');
    // console.log('ControlComponent initialized',this.control?.nativeElement);
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
    console.log('Control element:', this.control?.nativeElement);
  }
  onClick() {
    console.log('Control clicked', this.eleRef.nativeElement);
    console.log(this.control);
  }
}
