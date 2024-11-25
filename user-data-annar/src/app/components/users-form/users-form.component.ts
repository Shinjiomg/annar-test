import { Component } from '@angular/core';
import { UsersAPIService } from '../../services/users-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {
  newUser = {
    id: 0,
    name: '',
    email: '',
    phone: null,
    username: '',
    address: {
      city: '',
      street: '',
      suite: '',
      zipcode: null,
      geo: {
        lat: null,
        lng: null
      }
    },
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }
  isEditing = false;

  constructor(private users: UsersAPIService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.users.getUser(+id).subscribe((data) => {
        this.newUser = data;
      })
    }
  }

  saveUser() {
    if (this.isEditing) {
      this.users.updateUser(this.newUser).subscribe(() => {
        alert('Usuario actualizado exitosamente');
        console.log(this.newUser);
        this.router.navigate(['/users']);
      })
    } else {
      this.users.createUser(this.newUser).subscribe(() => {
        alert('El usuario ha sido creado exitosamente');
        console.log(this.newUser);
        this.router.navigate(['/users']);
      })
    }
  }
}