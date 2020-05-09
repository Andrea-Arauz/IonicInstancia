import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}
  async onPagina2(){
    const user = await this.authSvc.onPagina2(this.user);
    if (user) {
    console.log('Successfully created user!');
    this.router.navigateByUrl('/');
    }
    }
