import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNac: Date = new Date();
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => console.log(event)
      }, 
      {
        text: 'Adios',
        handler: () => console.log('Log')
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambiarFecha(event) {
    console.log(event.detail.value);
    this.fechaNac = new Date(event.detail.value);
  }

}
