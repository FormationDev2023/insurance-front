import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SinistreListComponent } from '../sinistre-list-component/sinistre-list-component';

export interface Sinistre {
  clientId: string;
  contratId: string;
  type: string;
  montantEstime: number | null;
  dateSurvenance: string;
  dateDeclaration: string;
  description: string;
}

@Component({
  selector: 'app-sinistre-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sinistre-form-component.html',
  styleUrls: ['./sinistre-form-component.css']
})
export class SinistreFormComponent {

  @Output() sinistreCree = new EventEmitter<Sinistre>();
  @Output() fermer = new EventEmitter<void>();

  sinistreForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  // Données fictives — à remplacer par appel HTTP quand le backend sera prêt
  contratsParClient: Record<string, { id: string; numero: string; type: string }[]> = {
    '1': [{ id: 'c1', numero: 'CTR-001', type: 'Auto' }, { id: 'c2', numero: 'CTR-002', type: 'Habitation' }],
    '2': [{ id: 'c3', numero: 'CTR-004', type: 'RC Pro' }, { id: 'c4', numero: 'CTR-005', type: 'Habitation' }],
    '3': [{ id: 'c5', numero: 'CTR-003', type: 'Auto' }],
    '4': [{ id: 'c6', numero: 'CTR-007', type: 'Habitation' }],
  };

  contratsClient: { id: string; numero: string; type: string }[] = [];

  constructor(private fb: FormBuilder) {
    const today = new Date().toISOString().split('T')[0];
    this.sinistreForm = this.fb.group({
      clientId:       ['', Validators.required],
      contratId:      [''],
      type:           ['Bris de glace', Validators.required],
      montantEstime:  [null],
      dateSurvenance: ['', Validators.required],
      dateDeclaration:[today],
      description:    [''],
    });
  }

  get f() { return this.sinistreForm.controls; }

  onClientChange(): void {
    const clientId = this.f['clientId'].value;
    this.contratsClient = this.contratsParClient[clientId] || [];
    this.sinistreForm.patchValue({ contratId: '' });
  }

  onSubmit(): void {
    if (this.sinistreForm.invalid) {
      this.sinistreForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    // TODO: appel HTTP POST /api/sinistres
    setTimeout(() => {
      this.isLoading = false;
      this.sinistreCree.emit(this.sinistreForm.value);
      this.onFermer();
    }, 500);
  }

  onFermer(): void {
    const today = new Date().toISOString().split('T')[0];
    this.sinistreForm.reset({ type: 'Bris de glace', dateDeclaration: today });
    this.contratsClient = [];
    this.errorMessage = '';
    this.fermer.emit();
  }
}
