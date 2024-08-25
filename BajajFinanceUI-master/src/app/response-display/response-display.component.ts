import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.css']
})
export class ResponseDisplayComponent {
  @Input() response: any;
  options: string[] = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];
  selectedOption: string = '';
  filteredResponse: any;

  filterResponse() {
    if (this.response) {
      switch (this.selectedOption) {
        case 'Alphabets':
          this.filteredResponse = { alphabets: this.response.alphabets };
          break;
        case 'Numbers':
          this.filteredResponse = { numbers: this.response.numbers };
          break;
        case 'Highest lowercase alphabet':
          this.filteredResponse = { highest_lowercase_alphabet: this.response.highest_lowercase_alphabet };
          break;
        default:
          this.filteredResponse = this.response;
          break;
      }
    }
  }
}
