import { LocalStorageService } from './local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app-chart';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const newTodo = 'new todo'; 
    this.localStorageService.storeOnLocalStorage(newTodo);

}


}
