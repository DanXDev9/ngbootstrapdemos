import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbNavContent,
  NgbNav,
  NgbNavItem,
	NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap/nav';

@Component({
  selector: 'ngbd-nav-vertical',
  imports: [
    NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet
  ],
  templateUrl: './nav-vertical.html',
})
export class NgbdNavVertical {
  private router = inject(Router);

  // Receives the initialized or updated path from the parent
  activeTab = input.required<string>();

  // Triggered when the user clicks a tab inside this child component
  onTabChange(targetTab: string): void {
    // Navigate to update the URL parameter, which cycles back down into activeTab
    this.router.navigate(['/nav-home', targetTab]);
  }
