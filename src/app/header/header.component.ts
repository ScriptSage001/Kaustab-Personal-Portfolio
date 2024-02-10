import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  public isDarkMode = false;

  ngOnInit(): void {
    // this.isDarkMode = true;
    // document.documentElement.classList.add('dark-mode');
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
    document.documentElement.classList.toggle('dark-mode');
  }
}
