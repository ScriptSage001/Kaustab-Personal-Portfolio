import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  public isDarkMode = false;

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
    const navbar = document.getElementsByClassName('desktop-nav')[0];
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
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
}
