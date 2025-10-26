import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GeneralSettings } from '../../models/agent.model';

@Component({
  selector: 'app-general-settings',
  imports: [CommonModule],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss',
})
export class GeneralSettingsComponent {
  settings = input.required<GeneralSettings>();
}
