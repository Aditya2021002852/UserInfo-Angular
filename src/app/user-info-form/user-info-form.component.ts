import { Component, EventEmitter, Output } from '@angular/core';

export interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent {
  model: UserInfo = { firstname: '', lastname: '', email: '', phone: '' };
  @Output() userInfoSubmitted = new EventEmitter<UserInfo>();

  onSubmit() {
    this.userInfoSubmitted.emit(this.model);
    this.model = { firstname: '', lastname: '', email: '', phone: '' };
  }
}
