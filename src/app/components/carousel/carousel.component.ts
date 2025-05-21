import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;

  slides: HTMLElement[] = [];
  prevBtn!: HTMLElement;
  nextBtn!: HTMLElement;
  progressBar!: HTMLElement;
  currentSlideEl!: HTMLElement;
  totalSlidesEl!: HTMLElement;

  currentSlide: number = 0;
  slideInterval: any;
  intervalTime: number = 15000;
  animationId: number = 0;

  touchStartX = 0;
  touchEndX = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.slides = Array.from(this.el.nativeElement.querySelectorAll('.carousel-slide'));
    this.prevBtn = this.el.nativeElement.querySelector('.prev-btn');
    this.nextBtn = this.el.nativeElement.querySelector('.next-btn');
    this.progressBar = this.el.nativeElement.querySelector('.progress-bar');
    this.currentSlideEl = this.el.nativeElement.querySelector('.current-slide');
    this.totalSlidesEl = this.el.nativeElement.querySelector('.total-slides');

    this.totalSlidesEl.textContent = this.slides.length.toString().padStart(2, '0');
    this.currentSlideEl.textContent = '01';

    this.prevBtn.addEventListener('click', () => {
      this.goToSlide(this.currentSlide - 1);
      this.resetInterval();
    });

    this.nextBtn.addEventListener('click', () => {
      this.goToSlide(this.currentSlide + 1);
      this.resetInterval();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.goToSlide(this.currentSlide - 1);
        this.resetInterval();
      } else if (e.key === 'ArrowRight') {
        this.goToSlide(this.currentSlide + 1);
        this.resetInterval();
      }
    });

    const carouselEl = this.el.nativeElement.querySelector('.carousel');
    carouselEl.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.changedTouches[0].screenX;
    });

    carouselEl.addEventListener('touchend', (e: TouchEvent) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    this.startInterval();
  }

  updateProgressBar(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    let animationProgress = 0;
    this.progressBar.style.width = '0%';
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / this.intervalTime, 1);
      this.progressBar.style.width = `${progress * 100}%`;

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  goToSlide(slideIndex: number): void {
    this.slides.forEach((slide) => slide.classList.remove('active'));

    this.currentSlide = (slideIndex + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].classList.add('active');
    this.currentSlideEl.textContent = (this.currentSlide + 1).toString().padStart(2, '0');

    this.updateProgressBar();
  }

  startInterval(): void {
    this.updateProgressBar();
    this.slideInterval = setInterval(() => {
      this.goToSlide(this.currentSlide + 1);
    }, this.intervalTime);
  }

  resetInterval(): void {
    clearInterval(this.slideInterval);
    this.startInterval();
  }

  handleSwipe(): void {
    const threshold = 50;
    if (this.touchStartX - this.touchEndX > threshold) {
      this.goToSlide(this.currentSlide + 1);
      this.resetInterval();
    } else if (this.touchEndX - this.touchStartX > threshold) {
      this.goToSlide(this.currentSlide - 1);
      this.resetInterval();
    }
  }

  scrollParaBaixo(): void {
    window.scrollBy({
      top: 700,
      behavior: 'smooth'
    });
  }
}
