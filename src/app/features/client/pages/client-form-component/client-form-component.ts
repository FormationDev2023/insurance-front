import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService, Client } from '../../../../core';

@Component({
  selector: 'app-client-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form-component.html',
  styleUrls: ['./client-form-component.css']
})
export class ClientFormComponent {

  @Output() clientCree = new EventEmitter<Client>();
  @Output() fermer = new EventEmitter<void>();

  clientForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  segmentOptions = ['STANDARD', 'PREMIUM', 'VIP'];
  statutOptions = ['ACTIF', 'INACTIF', 'SUSPENDU'];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService
  ) {
    this.clientForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      dateNaissance: [''],
      adresse: [''],
      segment: ['STANDARD'],
      statut: ['ACTIF']
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

    const payload = this.clientForm.value as Client;

    this.clientService.create(payload).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.clientCree.emit(response);
        this.onFermer();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.message || 'Une erreur est survenue lors de la creation du client.';
      }
    });
  }

  onFermer(): void {
    this.clientForm.reset({
      segment: 'STANDARD',
      statut: 'ACTIF'
    });
    this.errorMessage = '';
    this.fermer.emit();
  }
}
