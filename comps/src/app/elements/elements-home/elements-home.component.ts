import { Component } from '@angular/core';
import { PlaceholderComponent } from "../placeholder/placeholder.component";

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceholderComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {

}
