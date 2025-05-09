import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-menu',
    imports: [MatListModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './menu.component.html',
    standalone: true,
    styleUrl: './menu.component.css'
})
export class MenuComponent {

}
