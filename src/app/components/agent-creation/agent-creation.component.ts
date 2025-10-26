import { Component, computed, signal, ViewChild, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavigationComponent } from '../sidebar-navigation/sidebar-navigation.component';
import { GeneralSettingsComponent } from '../general-settings/general-settings.component';
import { BehaviorSettingsComponent } from '../behavior-settings/behavior-settings.component';
import { ResponseSettingsComponent } from '../response-settings/response-settings.component';
import { IntegrationSettingsComponent } from '../integration-settings/integration-settings.component';
import { TrainingDataComponent } from '../training-data/training-data.component';
import { PreviewPanelComponent } from '../preview-panel/preview-panel.component';
import { AgentMockService } from '../../services/agent-mock.service';

@Component({
  selector: 'app-agent-creation',
  imports: [
    CommonModule,
    SidebarNavigationComponent,
    GeneralSettingsComponent,
    BehaviorSettingsComponent,
    ResponseSettingsComponent,
    IntegrationSettingsComponent,
    TrainingDataComponent,
    PreviewPanelComponent,
  ],
  templateUrl: './agent-creation.component.html',
  styleUrl: './agent-creation.component.scss',
})
export class AgentCreationComponent {
  private agentService = new AgentMockService();

  agentConfig = this.agentService.getAgentConfig();
  navigationSections = this.agentService.navigationSections;
  activeSection = signal<string>('general');

  constructor() {
    afterNextRender(() => {
      this.observeSections();
    });
  }

  onSectionClick(sectionId: string) {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private observeSections() {
    const options = {
      root: document.querySelector('.form-container'),
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    this.navigationSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  }
}
