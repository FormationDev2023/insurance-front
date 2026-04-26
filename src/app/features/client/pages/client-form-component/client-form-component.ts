import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/ClientService';

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
  statutOptions  = ['Actif', 'Inactif', 'Suspendu'];

  constructor(private fb: FormBuilder, private clientService: ClientService) { // ← injecter le service
    this.clientForm = this.fb.group({
      prenom:        ['', [Validators.required, Validators.minLength(2)]],
      nom:           ['', [Validators.required, Validators.minLength(2)]],
      email:         ['', [Validators.required, Validators.email]],
      telephone:     [''],
      dateNaissance: [''],
      adresse:       [''],
      segment:       ['Standard'],
      statut:        ['Actif']
    });
  }

  get f() { return this.clientForm.controls; }

  onSubmit(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';

    this.clientService.creerClient(this.clientForm.value).subscribe({ 
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
    this.clientForm.reset({ segment: 'Standard', statut: 'Actif' });
    this.errorMessage = '';
    this.fermer.emit();
  }
}