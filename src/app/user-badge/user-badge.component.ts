import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

import {UserService} from '../services/user.service';
import {LocalStateService} from '../services/local-state.service';
import {User} from '../models/User';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

	user$: BehaviorSubject<User>;

  constructor(private userService: UserService,
  						private localStateService: LocalStateService,
  						private router: Router) { }

  ngOnInit() {
  	this.loadUser();
  }

  loadUser() {
  	this.user$ = this.localStateService.user$;
  	if(!this.user$.value) {
  		this.userService.logIn();
  	}
  }

  goToUser(id: string) {
  	this.router.navigate(['/user', id]);
  }

}
