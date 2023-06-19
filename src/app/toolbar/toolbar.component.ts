import { Component } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  shareApplication() {
    if (navigator.share) {
      navigator.share({
        title: AppConstants.title,
        text: 'Check out this amazing website!',
        url: AppConstants.applicationURL
      })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
      navigator.clipboard.writeText("This is the text to be copied").then(() => {
        alert('Application link is copied to clipboard.');
      })
    }
  }
  
}
