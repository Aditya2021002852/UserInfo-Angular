import { Component, Input } from '@angular/core';

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-display-user-info',
  templateUrl: './display-user-info.component.html',
  styleUrls: ['./display-user-info.component.css']
})
export class DisplayUserInfoComponent {
  @Input() userInfo: UserInfo | undefined;
}
