import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  visitCount:number =0;
  constructor( private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.logVisit();
    this.titleService.setTitle('Resume Generator - Create Your Professional Resume');
    this.metaService.addTags([
      { name: 'description', content: 'Create your professional resume with our easy-to-use resume generator.' },
      { name: 'keywords', content: 'resume generator, create resume, professional resume' }
    ]);
  }

  onImageButtonClick1() {
    console.log('Image button clicked!');
    // Add your logic here
    this.router.navigate(['/template1'])
  }
  onImageButtonClick2(){
    this.router.navigate(['/template2'])
  }
  onImageButtonClick3(){
    this.router.navigate(['/template3'])
  }
  onImageButtonClick4(){
    this.router.navigate(['/template4'])
  }
  logVisit(): void {
    const visitData = {
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      // Add any other data you want to log
    };

  }
}
