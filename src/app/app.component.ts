import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'social-app';

  constructor() {
    afterNextRender(() => {
      initFlowbite();
    });
  }

  /***
   *
   * 1- Create Your Project
   * 2- Folder Structure
   * 3- Create Main Components
   * 4- Install Main Packages
   * 5- Run Our Application
   */
}
