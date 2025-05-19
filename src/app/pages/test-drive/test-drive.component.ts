import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TestDriveFormComponent } from '../../components/test-drive-form/test-drive-form.component';

@Component({
  selector: 'app-test-drive',
  imports: [ HeaderComponent , TestDriveFormComponent],
  templateUrl: './test-drive.component.html',
  styleUrl: './test-drive.component.css'
})
export class TestDriveComponent {
  
}
