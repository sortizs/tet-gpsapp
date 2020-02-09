import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _r: Router,
    private _us: UserService) {
    this.buildForm();
  }

  ngOnInit() { }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit(): void {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this._us.auth(username, password).subscribe(data => localStorage.setItem('token', data.token));

    if (localStorage.getItem('token') != null) {
      this._r.navigateByUrl('/home');
    }
  }

}
