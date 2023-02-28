import { Component, OnInit } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model = {
    inputUrl: '',
  };
  isFormSubmitted = false;
  shortUrl = '';
  isTextCopied = false;
  isLoading = false;
  constructor(private tinyUrlService: NgTinyUrlService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmitUrlForm(urlForm: { valid: any; }) {
    if (urlForm.valid) {
      this.isLoading = true;
      this.tinyUrlService.shorten(this.model.inputUrl).subscribe(
        (data) => {
          this.shortUrl = data;
          this.isFormSubmitted = true;
          this.isLoading = false;
        },
        // (error) => {
        //   alert('Something Went Wrong. Please check your url and try again');
        //   this.isLoading = false;
        // }
      );
    }
  }

  copyUrl(shortUrlElementRef: { innerHTML: string; }) {
    let inputElement = document.createElement('input');

    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', shortUrlElementRef.innerHTML);

    inputElement.select();
    inputElement.setSelectionRange(0, 999999); // For Mobile Selection
    try {
      navigator.clipboard.writeText(inputElement.value);

      this.isTextCopied = true;

      setTimeout(() => {
        this.isTextCopied = false;
      }, 2000);
    } catch (e) {
      // console.log('error while copying..', e.toString());
    }
  }

  reset() {
    this.model.inputUrl = '';
    this.isFormSubmitted = false;
    this.isTextCopied = false;
  }
}
