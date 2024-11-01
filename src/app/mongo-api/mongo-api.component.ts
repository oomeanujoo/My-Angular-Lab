// mongo-api.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mongo-api',
  templateUrl: './mongo-api.component.html',
  styleUrls: ['./mongo-api.component.css']
})
export class MongoAPIComponent implements OnInit {
  users: any[] = []; // Array to hold user data
  loading: boolean = true; // Flag to manage loading state
  apiUrl: string = 'http://localhost:5000/api/users'; // API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  ngOnInit(): void {
    this.loadUsers(); // Load users when the component initializes
  }

  loadUsers(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.users = data; // Assign the fetched data to the users array
        this.loading = false; // Set loading to false once data is loaded
      },
      error: (err) => {
        console.error('Error fetching users:', err); // Handle any errors
        this.loading = false; // Set loading to false on error
      }
    });
  }
}
