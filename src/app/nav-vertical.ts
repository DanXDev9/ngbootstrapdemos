import { Component, signal } from '@angular/core';
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
  readonly active = signal('top');
}
