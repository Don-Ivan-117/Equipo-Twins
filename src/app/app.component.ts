import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';

  constructor(private apiService: ApiService) {

    this.apiService.getDitto().subscribe((ditto: any)=>{
      console.log(ditto);
    })

    this.apiService.getRayquaza().subscribe((ditto: any)=>{
      console.log(ditto);
    })

  }
}


