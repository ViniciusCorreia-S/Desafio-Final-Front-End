import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TestDriveFormComponent } from '../../components/test-drive-form/test-drive-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConfirmTestDriveComponent } from '../../components/confirm-test-drive/confirm-test-drive.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-drive',
  imports: [ HeaderComponent , TestDriveFormComponent , FooterComponent , CommonModule],
  templateUrl: './test-drive.component.html',
  styleUrl: './test-drive.component.css'
})
export class TestDriveComponent {
 
}
