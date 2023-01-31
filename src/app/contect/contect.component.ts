import { Component } from '@angular/core';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent {
canDeactivate() {
  return new Promise( (resolve,reject)=>
    {
   resolve (confirm('do you to navigation'));
  })
}

}
