import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.css']
})
export class JsonInputComponent {
  jsonData: string = '';
  jsonError: string = '';
  options: string[] = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];
  selectedOption: string = '';

  constructor(private http: HttpClient) {}

  submitData() {
    this.jsonError = '';
    try {
      const data = JSON.parse(this.jsonData);
      if (!Array.isArray(data.data)) {
        this.jsonError = 'Invalid JSON format';
        return;
      }

      this.http.post('https://testbfhl.herokuapp.com/bfhl', { data })
        .subscribe(
          (response: any) => {
            // Send response to response-display component or service
            console.log(response);
          },
          error => {
            this.jsonError = 'Error submitting data';
          }
        );
    } catch (e) {
      this.jsonError = 'Invalid JSON format';
    }
  }
}
