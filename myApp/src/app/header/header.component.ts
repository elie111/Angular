import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected=new EventEmitter<string>(); //output decorator to make it listenable from outside of teh component/parent component
  //eventemitter is a subclass of subject which is an observable

  onSelect(feature:string){
this.featureSelected.emit(feature);
  }

}
