import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationSection } from '../../models/agent.model';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [CommonModule],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {
  sections = input.required<NavigationSection[]>();
  activeSection = input<string>('general');
  sectionClick = output<string>();

  onSectionClick(sectionId: string) {
    this.sectionClick.emit(sectionId);
  }
}
