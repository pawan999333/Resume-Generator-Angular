import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';

import html2canvas from 'html2canvas';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  url: any;
  upload: boolean=false;
  username:any="Pawan Kumar Sharma";
  address:any='plot no. 17, Alwar,Rajasthan 301001';
  gmail:any='pawan@email.com';
  mobile:any='1111111111';
  summary:any='Results-oriented Engineering Executive with a proven track record of optimizing project outcomes. Skilled in strategic project management and team leadership. Seeking a challenging executive role to leverage technical expertise and drive engineering excellence.';
  experience:any='Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.Streamlined project workflows, enhancing overall efficiency by 25%.Led a team in successfully delivering a complex engineering project on time and within allocated budget.'
  company:any='google';
  skills:any=['Java, Angular, HTML, Css, Bootstrap, Nodejs'];
  certifications:any=[
   '1. Certified Project Management (PMP)',
   '2. Udemy Angular Certification'
  ];
  certificationsString: string = this.certifications.join('\n');

  fields: Array<{ company: any, experience: any }> = [
    { company: 'google', experience: 'Implemented cost-effective solutions, resulting in a 20% reduction in project expenses. Streamlined project workflows, enhancing overall efficiency by 25%. Led a team in successfully delivering a complex engineering project on time and within allocated budget.' },

  ];
  educations: Array<{ school: any, des: any }> = [
    { school: 'Master of Science in Mechanical Engineering', des: 'University of Engineering and Technology' },

  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.fields);
  }
  addField() {
    this.fields.push({ company: 'Microsoft', experience: 'Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.Streamlined project workflows, enhancing overall efficiency by 25%.Led a team in successfully delivering a complex engineering project on time and within allocated budget.' });
  }

  updateCertifications(value: string) {
    this.certifications = value.split('\n');
  }
  addEducation(){
    this.educations.push(    { school: 'Master of Science in Mechanical Engineering', des: 'University of Engineering and Technology' },
    )
  }
  onFileChanged(e: Event) {
    this.upload=true;
    let reader = new FileReader();
    const input = e.target as HTMLInputElement;
    if(input?.files && input.files.length > 0) {
      let file = input.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result;
      };
    }
  }

  downloadPDF() {
    const element = document.getElementById('pdf-content');
    if(element){
    const buttons = element.querySelectorAll('button');
    buttons.forEach(button => button.classList.add('hidden'));
    const topMargin = window.innerWidth <= 768 ? 5 : 3;

    const options = {
      margin: [topMargin, 2, 0, 2],
      filename: 'template.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save().finally(() => {
      buttons.forEach(button => button.classList.remove('hidden'));
    });
  }
  }
}
