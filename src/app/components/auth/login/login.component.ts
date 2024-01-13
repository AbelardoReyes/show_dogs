import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.createForm();
  }
  createForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  saveData(): void {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contrasela incorrecta',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Bienvenido',
      timer: 2000,
    });
    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.router.navigate(['dogs']);
  }
}
