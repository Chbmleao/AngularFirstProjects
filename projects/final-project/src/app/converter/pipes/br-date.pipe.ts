import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brDate',
})
export class BrDatePipe implements PipeTransform {
  transform(usDate: string): string {
    if (!usDate) {
      return '';
    }

    const dateArr = usDate.split('-');

    if (dateArr.length !== 3) {
      return usDate;
    }

    return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
  }
}
