import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  items: MenuItem[] | any;

  ngOnIt() {
    this.items =[
      {
        items: [
          {
            label: 'Ingresar',
            icon: 'pi pi-sign-in',
          },
          {
            label: 'Ingresar',
            icon: 'pi pi-user-plus',
          },
        ],
      },
    ];
  }

}
