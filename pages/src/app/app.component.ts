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
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1575372587186-5012f8886b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VudHJhbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the mountain',
      url: 'https://plus.unsplash.com/premium_photo-1670260849802-8c228aaf7d24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Snowboarding',
      url: 'https://images.unsplash.com/photo-1584890131712-18ee8e3ed49c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd2JvYXJkfGVufDB8fDB8fHww',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1575372587186-5012f8886b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VudHJhbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the mountain',
      url: 'https://plus.unsplash.com/premium_photo-1670260849802-8c228aaf7d24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'At the city',
      url: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Snowboarding',
      url: 'https://images.unsplash.com/photo-1584890131712-18ee8e3ed49c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd2JvYXJkfGVufDB8fDB8fHww',
    },
  ];

  prevPage(event: Event) {
    event.preventDefault();
    this.currentPage =
      this.currentPage === 0 ? this.images.length - 1 : this.currentPage - 1;
  }

  nextPage(event: Event) {
    event.preventDefault();
    this.currentPage =
      this.currentPage === this.images.length - 1 ? 0 : this.currentPage + 1;
  }
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
