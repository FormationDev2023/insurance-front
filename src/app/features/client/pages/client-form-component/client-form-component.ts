import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form-component.html',
  styleUrls: ['./client-form-component.css']
})
export class ClientFormComponent {

  @Output() clientCree = new EventEmitter<any>();
  @Output() fermer = new EventEmitter<void>();

  clientForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  segmentOptions = ['Standard', 'Premium', 'VIP'];
  statutOptions = ['Actif', 'Inactif', 'Suspendu'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.clientForm = this.fb.group({
      prenom:          ['', [Validators.required, Validators.minLength(2)]],
      nom:             ['', [Validators.required, Validators.minLength(2)]],
      email:           ['', [Validators.required, Validators.email]],
      telephone:       [''],
      dateNaissance:   [''],
      adresse:         [''],
      segment:         ['Standard'],
      statut:          ['Actif']
    });
  }

  get f() {
    return this.clientForm.controls;
  }

  onSubmit(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload = this.clientForm.value;

    this.http.post('http://localhost:8080/api/clients', payload).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.clientCree.emit(response);
        this.onFermer();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Une erreur est survenue lors de la création du client.';
      }
    });
  }

  onFermer(): void {
    this.clientForm.reset({
      segment: 'Standard',
      statut: 'Actif'
    });
    this.errorMessage = '';
    this.fermer.emit();
  }
}
