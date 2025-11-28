import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    template: `
      <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
          <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
            <i class="pi pi-bars"></i>
          </button>
          <a class="layout-topbar-logo" routerLink="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="icon icon-tabler icons-tabler-outline icon-tabler-user-cog">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5"/>
              <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
              <path d="M19.001 15.5v1.5"/>
              <path d="M19.001 21v1.5"/>
              <path d="M22.032 17.25l-1.299 .75"/>
              <path d="M17.27 20l-1.3 .75"/>
              <path d="M15.97 17.25l1.3 .75"/>
              <path d="M20.733 20l1.3 .75"/>
            </svg>
            <span>SERVICE OPTIM</span>
          </a>
        </div>

        <div class="layout-topbar-actions">
          <div class="layout-config-menu">
            <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
              <i
                [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
            </button>
            <div class="relative">
              <button
                class="layout-topbar-action layout-topbar-action-highlight"
                pStyleClass="@next"
                enterFromClass="hidden"
                enterActiveClass="animate-scalein"
                leaveToClass="hidden"
                leaveActiveClass="animate-fadeout"
                [hideOnOutsideClick]="true"
              >
                <i class="pi pi-palette"></i>
              </button>
              <app-configurator/>
            </div>
          </div>

          <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden"
                  enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout"
                  [hideOnOutsideClick]="true">
            <i class="pi pi-ellipsis-v"></i>
          </button>

          <div class="layout-topbar-menu hidden lg:block">
            <div class="layout-topbar-menu-content">
              <button type="button" class="layout-topbar-action">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
              </button>
              <button type="button" class="layout-topbar-action">
                <i class="pi pi-inbox"></i>
                <span>Messages</span>
              </button>
              <button type="button" class="layout-topbar-action">
                <i class="pi pi-user"></i>
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>`
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
