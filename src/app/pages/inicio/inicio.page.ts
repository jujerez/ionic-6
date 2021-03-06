import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button',
    },

    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card',
    },

    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirectTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    },

    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input',
    }
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
