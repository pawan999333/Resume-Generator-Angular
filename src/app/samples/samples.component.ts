import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

declare var gtag: Function;

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  visitCount: number = 0;
  structuredData: SafeHtml | undefined;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check environment
  ) { }

  ngOnInit(): void {
    this.logVisit(); // Log visit info only if in browser
    this.setMetaTags(); // Set SEO-friendly meta tags

    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData(); // ✅ Only run in browser, prevents SSR error
    }
  }

  // ✅ Set Meta Tags for SEO
  private setMetaTags(): void {
    this.titleService.setTitle('Resume Generator - Create Your Professional Resume');
    this.metaService.addTags([
      { name: 'description', content: 'Create your professional resume with our easy-to-use resume generator. Choose from multiple templates, customize your resume, and download it in PDF format. Perfect for job seekers looking to create a standout resume quickly and efficiently.' },
      { name: 'keywords', content: 'resume generator, create resume, professional resume, resume templates, resume builder, job seekers, PDF resume' },
      { name: 'author', content: 'Pawan Kumar Sharma' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  private logVisit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Executing logVisit in browser');

      // ✅ Only call gtag if it is defined
      if (typeof gtag === 'function') {
        gtag('event', 'page_view', { page_path: window.location.pathname });
      } else {
        console.warn('Google Analytics (gtag) is not available.');
      }
    } else {
      console.log('logVisit() skipped on the server');
    }
  }

  // ✅ Add Structured Data for SEO (Only in Browser)
  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) { // ✅ Prevents SSR error
      const jsonLd = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Resume Generator - Create Your Professional Resume",
        "description": "Create your professional resume with our easy-to-use resume generator. Choose from multiple templates, customize your resume, and download it in PDF format. Perfect for job seekers looking to create a standout resume quickly and efficiently.",
        "url": window.location.href, // ✅ Safe inside isPlatformBrowser
        "image": "assets/resume.png" // Replace with the actual image path
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }

  // ✅ Button Click Navigation Methods
  onImageButtonClick1() { this.router.navigate(['/template1']); }
  onImageButtonClick2() { this.router.navigate(['/template2']); }
  onImageButtonClick3() { this.router.navigate(['/template3']); }
  onImageButtonClick4() { this.router.navigate(['/template4']); }
}
