import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}
  async onPagina1(){
    const user = await this.authSvc.onPagina1(this.user);
    if (user) {
    console.log('Successfully created user!');
    this.router.navigateByUrl('/');
    }
    }

}
