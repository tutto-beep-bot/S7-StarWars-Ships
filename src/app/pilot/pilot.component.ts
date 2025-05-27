import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pilot } from '../services/starship.service';

@Component({
  selector: 'app-pilot',
  imports: [CommonModule],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.scss'
})
export class PilotComponent {
  @Input() pilot!: Pilot;
}
