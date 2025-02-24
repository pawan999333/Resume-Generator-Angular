import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';

import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { UrlComponent } from '../url/url.component';
@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
  url: any;
  upload: boolean=false;
  username:any="Mike Johson";
  address:any='Bengluru,India 121212';
  gmail:any='abc@email.com';
  mobile:any='+911234567899';
  summary:any='Results-oriented Engineering Executive with a proven track record of optimizing project outcomes. Skilled in strategic project management and team leadership. Seeking a challenging executive role to leverage technical expertise and drive engineering excellence.';
  selectedLabel: any='textData';
  experience:any='1.Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.Streamlined project workflows, enhancing overall efficiency by 25%.Led a team in successfully delivering a complex engineering project on time and within allocated budget.'
  company:any='google';
  hyperlink:any='https://www.linkedin.com/in/mike-johnson-123456789/';
  skills:any=['Java, Angular, HTML, Css, Bootstrap, Nodejs'];
  certifications:any=[
   '1. Certified Project Management (PMP)',
   '2. Udemy Angular Certification'
  ];
  certificationsString: string = this.certifications.join('\n');

  fields: Array<{ company: any,position:any, experience: any }> = [
    { company: 'google', position:'SDE (Jan-2024 - Feb-2025)', experience: '1.Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.Streamlined project workflows, enhancing overall efficiency by 25%.Led a team in successfully delivering a complex engineering project on time and within allocated budget.' },

  ];
  educations: Array<{ school: any, des: any }> = [
    { school: 'Bachloer of Tech in Electronics Engineering', des: 'Indian Institute of Technology (2021-2024)' },

  ];
  projects: Array<{ name: any, data: any }> = [
    {name:'Resume Generator',data:'A web application to generate resume with different templates and download it in pdf format.'}
  ]
  fontSizes: number[] = [12, 14, 16, 18];
  selectedFontSizeTextData: number = 12;
  selectedFontSizeColorAdd: number = 14;
  selectedFontColor: string = '#808080';
  private savedRange: Range | null = null;
  selectedClassName: any;
  selectSize: any;
  selectedTextClassName: any;
  selectedSectionClassName: any;
  showPreviewOptions: boolean=false;

  constructor(public dialog: MatDialog,private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.fields);
    // this.adjustSummaryText();
  }
  setSelectedLabel(label: string) {
    this.selectedLabel = label;
    console.log("label",this.selectedLabel,label)
  }
  preview(){
    this.showPreviewOptions=!this.showPreviewOptions;
  }
  applyFontSize(className: string, size: number) {
    console.log("class",className,size)
    if(className=='textData'){
      this.selectedTextClassName=className;
    }
    if(className=='sectionAdd'){
      this.selectedSectionClassName=className;
    }if(className=='positionAdd'){
      this.selectedSectionClassName=className;
    }
    this.selectSize=size;
    // Apply the selected font size to the relevant elements
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
      (element as HTMLElement).style.fontSize = `${size}px`;
    });
  }

  applyFontColor() {
    // Apply the selected font color to the relevant elements
    const elements = document.querySelectorAll('.colorAdd1');
    elements.forEach(element => {
      (element as HTMLElement).style.color = this.selectedFontColor;
    });
  }


  addField() {
    this.fields.push({ company: 'Microsoft',position:'SDE (Jan-2024 - Feb-2025)', experience: 'Implemented cost-effective solutions, resulting in a 20% reduction in project expenses.Streamlined project workflows, enhancing overall efficiency by 25%.Led a team in successfully delivering a complex engineering project on time and within allocated budget.' });
    if (this.selectedTextClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedTextClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    }
    if (this.selectedSectionClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedSectionClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    }
  }

  updateCertifications(value: string) {
    this.certifications = value.split('\n');
  }
  addEducation(){
    this.educations.push(    { school: 'Bachloer of Tech in Electronics Engineering', des: 'University of Engineering and Technology' },
    )
    if (this.selectedTextClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedTextClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    } if (this.selectedSectionClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedSectionClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    }
  }
  addProject(){
    this.projects.push({name:'Resume Generator',data:'A web application to generate resume with different templates and download it in pdf format.'})
    if (this.selectedTextClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedTextClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    } if (this.selectedSectionClassName && this.selectSize) {
      setTimeout(() => {
        const elements = document.querySelectorAll(`.${this.selectedSectionClassName}`);
        elements.forEach(element => {
          (element as HTMLElement).style.fontSize = `${this.selectSize}px`;
        });
      }, 0);
    }
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
  addurl(data:any){
   console.log("hello");
 if(data=='linkedin'){
  const dialogRef = this.dialog.open(UrlComponent, {
    width: '500px',
    data: {
      url: this.hyperlink,
       text:'Linkedin'}
    })
    dialogRef
            .afterClosed()
            .subscribe(({res})=>
                this.hyperlink=res
            )
 }if(data=='gmail'){
  const dialogRef = this.dialog.open(UrlComponent, {
    width: '500px',
    data: {
      url: this.gmail,
     text:'Gmail'}
    })
    dialogRef
            .afterClosed()
            .subscribe(({res})=>
                this.gmail=res
            )
 }if(data=='mobile'){
  const dialogRef = this.dialog.open(UrlComponent, {
    width: '500px',
    data: {
      url: this.mobile,
     text:'Contact'}
    })
    dialogRef
            .afterClosed()
            .subscribe(({res})=>
                this.mobile=res
            )
 }


  }
  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    // textarea.style.height = textarea.scrollHeight + 'px';
    if (window.innerWidth > 768) {
      // this.renderer.setStyle(textarea, 'height', `${textarea.scrollHeight}px`);
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
  downloadPDF() {
    const element = document.getElementById('pdf-content');
    if (element) {
      const buttons = element.querySelectorAll('button');
      const icons = element.querySelectorAll('mat-icon');
      const previewData = element.querySelectorAll('div.previewDataSection');
      previewData.forEach(data => data.classList.add('hidden'));
      buttons.forEach(button => button.classList.add('hidden'));

      icons.forEach(icon => {
        if (icon.textContent?.trim() === 'add') {
          icon.classList.add('hidden');
        }
      });
      const inputs = element.querySelectorAll('input.usernamei');
      const replacements2: { input: HTMLInputElement, p: HTMLParagraphElement }[] = [];
      inputs.forEach(input => {
        const p = document.createElement('p');
        p.className = input.className.replace('usernamei', 'usernamep');
        p.style.cssText = (input as HTMLInputElement).style.cssText;
        p.textContent = (input as HTMLInputElement).value;
        input.parentNode?.replaceChild(p, input);
        replacements2.push({ input: input as HTMLInputElement, p });
      });
      const textareas = element.querySelectorAll('textarea.longtext');
      const replacements: { textarea: HTMLTextAreaElement, p: HTMLParagraphElement }[] = [];
      textareas.forEach(textarea => {
        const textareaElement = textarea as HTMLTextAreaElement;

        const p = document.createElement('p');
        p.className = textarea.className;
        p.style.cssText = textareaElement.style.cssText;
        // p.textContent = textareaElement.value;
        p.innerHTML = textareaElement.value.replace(/\n/g, '<br>'); // Replace newline characters with <br> tags

        textarea.parentNode?.replaceChild(p, textarea);
        replacements.push({textarea: textareaElement, p });
      });
      // Determine the top margin based on screen width
      const topMargin = window.innerWidth <= 768 ? 10 : 10;

      const options = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }

      };

      html2pdf().from(element).set(options).toPdf().get('pdf').then(function (pdf: jsPDF) {
        const totalPages = pdf.internal.pages.length - 1;
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          // pdf.text('Page ' + String(i) + ' of ' + String(totalPages), pdf.internal.pageSize.getWidth() - 20, pdf.internal.pageSize.getHeight() - 10);
        }
      }).save().finally(() => {
        replacements.forEach(replacement => {
          replacement.p.parentNode?.replaceChild(replacement.textarea, replacement.p);
        });
        replacements2.forEach(replacement => {
          replacement.p.parentNode?.replaceChild(replacement.input, replacement.p);
        });
        buttons.forEach(button => button.classList.remove('hidden'));
        icons.forEach(icon => {
          if (icon.textContent?.trim() === 'add') {
            icon.classList.remove('hidden');
          }
        });
      });
    }
  }



}
