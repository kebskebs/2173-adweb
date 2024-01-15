import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kquinto';
  x = 0
  names = ['Kevin', 'Ray', 'Quinto'] 
  updateName() { 
    this.x++; 
    if(this.x == 3) { 
      this.x = 0;
    }
  }
}
