import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';

import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  user: User = {
    email_user: '',
    password_user: ''
  };

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  getInfoUser() {
    const params = this.activatedRoute.snapshot.params;
    if (params.password_user) {
      this.userService.getUser(params.password_user)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
          },
          err => console.log(err)
        )
    }
  }
}
