import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
  name = '';
  date = '';

  onNameChange(event: Event) {
    const inputName = (event.target as HTMLInputElement).value;
    this.name = inputName;
  }

  onDateChange(event: Event) {
    const inputDate = (event.target as HTMLInputElement).value;
    this.date = inputDate;
  }

}
