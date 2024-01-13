import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-dogs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './view-dogs.component.html',
  styleUrl: './view-dogs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewDogsComponent implements OnInit {
  username: any;
  dataSource: any[] = [];
  constructor(
    private dogsService: DogsService,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('user') || '{}');
    this.getDogsPictures();
  }
  getDogsPictures(): void {
    this.dogsService.getDogs().subscribe((response) => {
      if(this.dataSource.length > 0) {
        this.dataSource = [];
      }
      for (let i = 0; i < response.message.length; i++) {
        this.dataSource.push({image: response.message[i]});
      }
      console.log(this.dataSource);
    });
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
