import { Component } from '@angular/core';
import { UserInfo } from './user-info-form/user-info-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Info';
  selectedUserInfo: UserInfo | undefined;



  displayUserInfo(userInfo: UserInfo) {
    this.selectedUserInfo = userInfo;
  }
}
