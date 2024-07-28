import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  buttonTitle: string = 'Add Server';
  buttonStatus: boolean = false;
  usernameInput: string = '';

  enableButton() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000);
  }
}
