import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';

interface Booking {
  date: string;
  time: string;
}

interface SuccessData {
  date: string;
  time: string;
}

@Component({
  selector: 'app-test-drive-form',
  imports: [ CommonModule , ReactiveFormsModule , NgxMaskDirective ],
  templateUrl: './test-drive-form.component.html',
  styleUrls: ['./test-drive-form.component.css']
})
export class TestDriveFormComponent implements OnInit {
  testDriveForm: FormGroup;
  showSuccess = false;
  showSuccessDisable = true
  
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
      date: ['', Validators.required],
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

    this.testDriveForm.get('date')?.valueChanges.subscribe(() => {
      this.updateAvailableTimes();
    });
  }
  
  successData: SuccessData | null = null;
  codigo: number = 0;
  dataForm!: any
  
  onSubmit(): void {
    if (this.testDriveForm.valid && this.selectedTime) {

      const formValues = this.testDriveForm.value;
      const selectedDate = formValues.date;
      
      this.successData = {
        date: selectedDate,
        time: this.selectedTime,
      };

      this.dataForm = {...formValues};

      sessionStorage.setItem('dadosUsuario' ,JSON.stringify(this.testDriveForm.value));

      this.testDriveForm.reset();
      this.selectedBrand = '';
      this.selectedTime = null;
      this.showSuccess = true;
      this.showSuccessDisable = false;
      this.codigo = this.gerarNumeroAleatorio(1, 10000);
      
      window.scrollTo(0, 0);
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

  existingBookings: Booking[] = [
    { date: this.getFormattedDate(1), time: '09:00'},
    { date: this.getFormattedDate(1), time: '10:30'},
    { date: this.getFormattedDate(2), time: '14:00'},
    { date: this.getFormattedDate(2), time: '15:30'},
    { date: this.getFormattedDate(3), time: '11:00'},
  ];

  availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30'
  ];

  selectedTime: string | null = null;
  bookedTimes: string[] = [];

  private getFormattedDate(daysToAdd: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  }

  get minDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  updateAvailableTimes(): void {
    const selectedDate = this.testDriveForm.get('date')?.value;

    if (!selectedDate) {
      this.bookedTimes = [];
      return;
    }

    this.bookedTimes = this.existingBookings
      .filter(booking => 
        booking.date === selectedDate)
      .map(booking => booking.time);

    this.selectedTime = null;
  }

  selectTime(time: string): void {
    if (this.isTimeBooked(time)) return;
    this.selectedTime = time;
  }

  isTimeBooked(time: string): boolean {
    return this.bookedTimes.includes(time);
  }

  isTimeSelected(time: string): boolean {
    return this.selectedTime === time;
  }

  navigationTerms() {
    this.router.navigate(['/termos-e-condicoes']);
    window.scrollTo(0, 0);
  }

  HomeRouter() {
    this.router.navigate(['/home']);
    this.showSuccessDisable = true
  }

  backtestDrive() {
    this.showSuccess = false;
    this.showSuccessDisable = true
  }
}