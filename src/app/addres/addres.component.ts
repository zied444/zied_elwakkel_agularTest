import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrl: './addres.component.css'
})
export class AddresComponent implements OnInit {
  resForm!: FormGroup;

  constructor(private resservice: ResidenceService, private router: Router) {}

  ngOnInit(): void {
    this.resForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ])
    });
  }

  submitForm() {
    if (this.resForm.invalid) {
      this.resForm.markAllAsTouched();
      return;
    }

    this.resservice.Createres(this.resForm.value).subscribe(() => {
      this.router.navigate(['/listres']);
    });
  }
}