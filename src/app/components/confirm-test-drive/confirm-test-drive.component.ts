import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TestDriveFormComponent } from '../test-drive-form/test-drive-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-test-drive',
  imports: [ FooterComponent , HeaderComponent ],
  templateUrl: './confirm-test-drive.component.html',
  styleUrl: './confirm-test-drive.component.css'
})
export class ConfirmTestDriveComponent {

  data: any = localStorage.getItem('dadosUsuario');
  dataForm = JSON.parse(this.data);

  constructor(private router: Router) { }

  HomeRouter() {
    this.router.navigate(['/home']);
  }

  testDriveRouter() {
    this.router.navigate(['/test-drive']);
  }
}
