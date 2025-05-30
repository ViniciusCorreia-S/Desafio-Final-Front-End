import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  status: 'agendado' | 'confirmado' | 'concluido' | 'cancelado';
  createdAt: Date;
}

@Component({
  selector: 'app-test-drive-form',
  imports: [ CommonModule , ReactiveFormsModule , FormsModule , NgxMaskDirective ],
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

    this.setDateLimits();
    this.loadAppointments();
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

    this.availableTimeSlots = [...this.defaultTimeSlots];
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

      this.codigo = this.gerarNumeroAleatorio(1,10000);

      const formData = this.testDriveForm.value;
      const newAppointment: Appointment = {
        id: this.generateId(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        status: 'agendado',
        createdAt: new Date()
      };

      this.appointments.push(newAppointment);
      this.saveAppointments();
      this.confirmedAppointment = newAppointment;
      this.currentStep = 'confirmation';
      this.testDriveForm.reset();

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





  currentStep: 'form' | 'confirmation' | 'list' = 'form';
  appointments: Appointment[] = [];
  confirmedAppointment: Appointment | null = null;
  minDate: string = '';
  maxDate: string = '';
  availableTimeSlots: TimeSlot[] = [];

  private defaultTimeSlots: TimeSlot[] = [
    { time: '08:00', available: true },
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: true }
  ];

  private setDateLimits() {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    this.minDate = today.toISOString().split('T')[0];
    this.maxDate = maxDate.toISOString().split('T')[0];
  }

  private loadAppointments() {
    const stored = localStorage.getItem('testdriveAppointments');
    if (stored) {
      this.appointments = JSON.parse(stored);
    }
  }

  private saveAppointments() {
    localStorage.setItem('testdriveAppointments', JSON.stringify(this.appointments));
  }

  onDateChange() {
    const selectedDate = this.testDriveForm.get('date')?.value;
    if (selectedDate) {
      this.updateAvailableTimeSlots(selectedDate);
      this.testDriveForm.patchValue({ time: '' });
    }
  }

  private updateAvailableTimeSlots(date: string) {
    const bookedTimes = this.appointments
      .filter(apt => apt.preferredDate === date && apt.status !== 'cancelado')
      .map(apt => apt.preferredTime);

    this.availableTimeSlots = this.defaultTimeSlots.map(slot => ({
      ...slot,
      available: !bookedTimes.includes(slot.time)
    }));
  }

  selectTime(time: string) {
    this.testDriveForm.patchValue({ time });
  }

  // onSubmit() {
  //   if (this.testDriveForm.valid) {
  //     const formData = this.testDriveForm.value;
      
  //     const newAppointment: Appointment = {
  //       id: this.generateId(),
  //       customerName: formData.customerName,
  //       email: formData.email,
  //       phone: formData.phone,
  //       date: formData.date,
  //       time: formData.time,
  //       vehicle: formData.vehicle,
  //       status: 'agendado',
  //       createdAt: new Date()
  //     };

  //     this.appointments.push(newAppointment);
  //     this.saveAppointments();
  //     this.confirmedAppointment = newAppointment;
  //     this.currentStep = 'confirmation';
  //     this.testDriveForm.reset();
  //   }
  // }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
    
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  newAppointment() {
    this.currentStep = 'form';
    this.confirmedAppointment = null;
    this.testDriveForm.reset();
    this.availableTimeSlots = [...this.defaultTimeSlots];
  }

  viewAppointments() {
    this.currentStep = 'list';
  }

  editAppointment(appointment: Appointment) {
    this.testDriveForm.patchValue({
      name: appointment.name,
      email: appointment.email,
      phone: appointment.phone,
      date: appointment.preferredDate,
      time: appointment.preferredTime
    });
    
    this.updateAvailableTimeSlots(appointment.preferredDate);
    this.currentStep = 'form';
    
    // Remove o agendamento atual para permitir edição
    this.appointments = this.appointments.filter(apt => apt.id !== appointment.id);
    this.saveAppointments();
  }

  cancelAppointment(appointmentId: string) {
    if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
      const appointment = this.appointments.find(apt => apt.id === appointmentId);
      if (appointment) {
        appointment.status = 'cancelado';
        this.saveAppointments();
      }
    }
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