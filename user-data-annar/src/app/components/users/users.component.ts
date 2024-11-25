import { Component } from '@angular/core';
import { UsersAPIService } from '../../services/users-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  user: any[] = [];
  searchTerm: string = '';

  constructor(private users: UsersAPIService) { }

  ngOnInit() {
    this.users.getUsers().subscribe((data) => {
      this.user = data
      console.log(data)
    })
  }

  getFilteredUsers(): any[] {
    return this.user.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  showUserDetails(user: any) {
    console.log(user);
  }
}
