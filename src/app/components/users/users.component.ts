import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from '../../models/User';
import { Repo } from '../../models/Repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  repos: Repo[] = [];
  searchForm: FormGroup;

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl()
    });
    
  }

  searchUser() {
    this.repos = [];
    console.log(this.searchForm.value);
    this.UsersService.setUser(this.searchForm.value);
    this.UsersService.getUser().subscribe( (user) => {
      this.user = user;
    });
    this.UsersService.getRepos().subscribe( (repos) => {
      Array.prototype.push.apply(this.repos,repos);
    });
    this.searchForm.reset();
  }
  

}
