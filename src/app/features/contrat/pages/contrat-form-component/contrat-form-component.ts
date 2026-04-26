import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrat } from '../../services/contratService';

@Component({
  selector: 'app-contrat-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contrat-form-component.html',
  styleUrls: ['./contrat-form-component.css']
})
export class ContratFormComponent {

  @Output() contratCree = new EventEmitter<Contrat>();
  @Output() fermer = new EventEmitter<void>();

  contratForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contratForm = this.fb.group({
      clientId:      ['', Validators.required],
      type:          ['Auto', Validators.required],
      niveauGarantie:['Basic'],
      dateEffet:     ['', Validators.required],
      dateEcheance:  ['', Validators.required],
      primeAnnuelle: [null],
      franchise:     [null],
    });
  }

  get f() { return this.contratForm.controls; }

  onSubmit(): void {
    if (this.contratForm.invalid) {
      this.contratForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    // TODO: appel HTTP POST /api/contrats
    setTimeout(() => {
      this.isLoading = false;
      this.contratCree.emit(this.contratForm.value);
      this.onFermer();
    }, 500);
  }

  onFermer(): void {
    this.contratForm.reset({ type: 'Auto', niveauGarantie: 'Basic' });
    this.errorMessage = '';
    this.fermer.emit();
  }
}
