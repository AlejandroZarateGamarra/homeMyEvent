import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NavbarComponent} from "./components/navbar/navbar.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatFormField, MatToolbar, MatIcon, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
