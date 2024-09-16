import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.scss'
})
export class HomeNewComponent {
  animationTexts = [
    "Welcome to Kaustab's Portfolio", 
    "Experienced Software Developer", 
    "Passionate About Technology", 
    "Building Efficient Solutions",
    "Showcasing My Skills"];
  index = 0;
  textElement!: HTMLElement;
  animationDuration = 10000;

  ngAfterViewInit() {
    this.textElement = document.getElementById("animated-text") as HTMLElement;
    this.changeText();
  }

  changeText() {
    this.textElement.classList.remove('fade-in');
    this.textElement.classList.add('fade-out');
    
    // Change text after fade-out animation completes
    setTimeout(() => {
      this.textElement.innerHTML = this.animationTexts[this.index];
      this.textElement.classList.remove('fade-out');
      this.textElement.classList.add('fade-in');
      
      this.index = (this.index + 1) % this.animationTexts.length;
    }, 1000); // Matches the duration of fade-out animation

    // Reset fade-in after some time to avoid overlap
    setTimeout(() => {
      this.textElement.classList.remove('fade-in');
    }, 2000); // Matches the duration of fade-in animation

    // Change text every 5 seconds to sync with the animation duration
    setInterval(() => this.changeText(), this.animationDuration);
  }
}
