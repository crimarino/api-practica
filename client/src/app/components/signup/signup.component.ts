import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User'


import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    id_user: 0,
    nick_user:'',
    name_user:'',
    email_user:'',
    password_user:''
  }

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  saveNewUser(){
    this.userService.saveUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      )  }
}
