import { Component } from '@angular/core';
import { NgbdNavVertical } from './nav-vertical'
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
    selector: 'nav-home',
    templateUrl: './nav-home.html',
    imports: [
        NgbdNavVertical                  
    ]
})
export class NavHome {
    section = input.required<string>();
    constructor() { }
}
