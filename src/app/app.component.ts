import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'airbnb';

  search$: BehaviorSubject<string> = new BehaviorSubject("")

  ngOnInit(): void {

  }


}
