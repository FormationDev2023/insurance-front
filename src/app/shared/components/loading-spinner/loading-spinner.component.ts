import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container" [class.overlay]="overlay">
      <div class="spinner" [style.width.px]="size" [style.height.px]="size"></div>
      @if (message) {
        <p class="spinner-message">{{ message }}</p>
      }
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .spinner-container.overlay {
      position: fixed;
      inset: 0;
      background: rgba(255, 255, 255, 0.8);
      z-index: 1000;
    }

    .spinner {
      border: 3px solid #e2e8f0;
      border-top-color: #0284c7;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .spinner-message {
      color: #475569;
      font-size: 0.875rem;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() size = 40;
  @Input() message = '';
  @Input() overlay = false;
}
