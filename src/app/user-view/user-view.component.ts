import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

	user$: Observable<any>;
  constructor(private route: ActivatedRoute,
  						private userService: UserService) { }

  ngOnInit() {
  	this.route.paramMap.pipe(
  		switchMap((params: ParamMap) =>
  			this.user$ = this.userService.getUser(params.get('id')))
  		);
  }

}
