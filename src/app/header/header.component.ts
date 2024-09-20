import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menuState',[
      state('hidden', style({
        width: '0px',
        opacity: 0.75,
        overflow: 'hidden' 
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public isDarkMode = false;
  public isMenuOpen: boolean = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark-mode');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark-mode');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(){
    const desktopNavbar = document.getElementsByClassName('desktop-header')[0];
    const mobileNavbar = document.getElementsByClassName('mobile-header')[0];

    if (window.scrollY > 0) {
      desktopNavbar.classList.add('scrolled');
      mobileNavbar.classList.add('scrolled');
    } else {
      desktopNavbar.classList.remove('scrolled');
      mobileNavbar.classList.remove('scrolled');
    }
  }  

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  get menuState() {
    return this.isMenuOpen ? 'visible' : 'hidden';
  }
}
