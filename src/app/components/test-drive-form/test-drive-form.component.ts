import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-drive-form',
  imports: [ CommonModule , ReactiveFormsModule , NgxMaskDirective ],
  templateUrl: './test-drive-form.component.html',
  styleUrls: ['./test-drive-form.component.css']
})
export class TestDriveFormComponent implements OnInit {
  testDriveForm: FormGroup;
  showSuccess = false;
  
  selectedBrand: 'bmw' | 'mercedes' | 'ford' | '' = '';
  
  bmwModels = [
    { value: 'x6 m competition', name: 'X6 M Competition' },
    { value: 'm4 cs', name: 'M4 CS' }
  ];
  
  mercedesModels = [
    { value: 'eqa suv', name: 'EQA SUV' },
    { value: 'amg cla coupe', name: 'AMG CLA Coupé' }
  ];
  
  fordModels = [
    { value: 'mustang gt', name: 'Mustang GT' },
    { value: 'ranger xls v6', name: 'Ranger XLS V6' }
  ];
  
  constructor(private fb: FormBuilder , private router: Router) {
    
    this.testDriveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      CPF: ['', Validators.required],
      brand: ['', Validators.required],
      bmwModel: [''],
      mercedesModel: [''],
      fordModel: [''],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      hasCNH: ['', Validators.required],
      comments: [''],
      terms: [false, Validators.requiredTrue]
    });
  }
  
  ngOnInit(): void {
    this.testDriveForm.get('brand')?.valueChanges.subscribe(brand => {
      this.selectedBrand = brand;
      
      this.testDriveForm.get('bmwModel')?.clearValidators();
      this.testDriveForm.get('mercedesModel')?.clearValidators();
      this.testDriveForm.get('fordModel')?.clearValidators();
      
      if (brand === 'bmw') {
        this.testDriveForm.get('bmwModel')?.setValidators(Validators.required);
      } else if (brand === 'mercedes') {
        this.testDriveForm.get('mercedesModel')?.setValidators(Validators.required);
      } else if (brand === 'ford') {
        this.testDriveForm.get('fordModel')?.setValidators(Validators.required);
      }
      
      this.testDriveForm.get('bmwModel')?.updateValueAndValidity();
      this.testDriveForm.get('mercedesModel')?.updateValueAndValidity();
      this.testDriveForm.get('fordModel')?.updateValueAndValidity();
    });
  }
  codigo: number = 0;
  dataForm!: any
  
  onSubmit(): void {
    if (this.testDriveForm.valid) {
      console.log('Formulário enviado:', this.testDriveForm.value);

      sessionStorage.setItem('dadosUsuario' ,JSON.stringify(this.testDriveForm.value));
      
      this.showSuccess = true;
      
      window.scrollTo(0, 0);

      this.dataForm = this.testDriveForm.value;

      console.log('Nome:', this.dataForm.name);
      
      this.testDriveForm.reset();
      this.selectedBrand = '';

      this.codigo = this.gerarNumeroAleatorio(1,1000);
    } else {
      Object.keys(this.testDriveForm.controls).forEach(key => {
        const control = this.testDriveForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  numeroAleatorio = Math.random();

  gerarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  getSelectedModelValue(): string {
    if (this.selectedBrand === 'bmw') {
      return this.testDriveForm.get('bmwModel')?.value;
    } else if (this.selectedBrand === 'mercedes') {
      return this.testDriveForm.get('mercedesModel')?.value;
    } else if (this.selectedBrand === 'ford') {
      return this.testDriveForm.get('fordModel')?.value;
    }
    return '';
  }

  navigationTerms() {
    this.router.navigate(['/termos-e-condicoes']);
    window.scrollTo(0, 0);
  }

  HomeRouter() {
    this.router.navigate(['/home']);
  }

  backtestDrive() {
    this.showSuccess = false;
  }
}