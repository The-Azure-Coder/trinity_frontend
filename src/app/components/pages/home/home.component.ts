import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/models/api-response';
import { Contact } from 'src/app/models/contact-us';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', []),
    email: new FormControl('', [
      Validators.email,
      Validators.minLength(8),
      Validators.required,
    ]),
    phoneNumber: new FormControl(1876_000_0000, [Validators.minLength(7)]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  /**
   * Handles the submission of the contact us form
   * @param formData The information captured in the form.
   */
  onContactFormSubmit<T extends Contact>(formData: T): void {
    let _formData = formData;
    _formData.phoneNumber = parseInt(
      _formData.phoneNumber.toString().replace(/[^0-9_?]+/g, '')
    );

    this.contactService.createMessage(_formData).subscribe({
      next: (resp: ApiResponse<Contact>) => {
        if (resp.success == false) {
          // do message not sent error display here
          alert('Error Sending Your Message\n' + JSON.stringify(resp.data));
          return;
        }

        // do message sent successfull stuff here
        alert('Message Sent Successful');
      },
      error: (error: HttpErrorResponse) => {
        // do message not sent error display here
        alert('Error Sending Your Message\n' + JSON.stringify(error.error));
        console.error(error);
      },
    });
  }
}
