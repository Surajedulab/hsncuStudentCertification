import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHearderComponent } from '../content/default-hearder/default-hearder.component';
import { DefaultFooterComponent } from "../content/default-footer/default-footer.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    imports: [CommonModule, DefaultHearderComponent, DefaultFooterComponent]
})
export class HomepageComponent implements OnInit {



    @ViewChild('container') container!: ElementRef;

    scrollLeft() {
        this.container.nativeElement.scrollLeft -= 100; // Adjust scroll amount as needed
      }
      scrollRight() {
        this.container.nativeElement.scrollLeft += 100; // Adjust scroll amount as needed
      }

      constructor() {
      
      }

      ngOnInit(): void {  }

}

