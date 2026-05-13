import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFr',
  standalone: true
})
export class DateFrPipe implements PipeTransform {
  transform(value: string | Date | null | undefined, format: 'short' | 'long' = 'short'): string {
    if (!value) return '-';

    const date = typeof value === 'string' ? new Date(value) : value;

    if (isNaN(date.getTime())) return '-';

    const options: Intl.DateTimeFormatOptions = format === 'long'
      ? { day: 'numeric', month: 'long', year: 'numeric' }
      : { day: '2-digit', month: '2-digit', year: 'numeric' };

    return date.toLocaleDateString('fr-FR', options);
  }
}
