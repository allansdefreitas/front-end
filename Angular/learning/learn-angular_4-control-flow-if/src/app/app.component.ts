import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @if(isRunning){  
  <span>Yes, the server is running</span>
  }
  @else{
  <span>No, the server is not running</span>
  }`,
  standalone: true,
})
export class AppComponent {
  // add the boolean property here
  isRunning : boolean = true;
}
