import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

import {UserService} from '../services/user.service';
import {LocalStateService} from '../services/local-state.service';
import {User} from '../models/User';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

	user: User;
  constructor(private route: ActivatedRoute,
  						private localStateService: LocalStateService,
  						private userService: UserService) { }

  ngOnInit() {
  	this.route.paramMap
  		.pipe(
  		switchMap((params: ParamMap) => this.userService.getUser(params.get('id'))))
  		.subscribe(user => this.user = user);
  }

  canEdit(): boolean {
  	let currentUser = this.localStateService.getUser();
  	return currentUser && this.user && currentUser.id === this.user.id;
  }

}
