import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(index: number) {
    this.dialog.open(PortfolioDialog, {
      data: {
        img: this.portfolio[index].img,
        heading: this.portfolio[index].heading,
        description: this.portfolio[index].description,
        tools: this.portfolio[index].tools,
        link: this.portfolio[index].link,
        git: this.portfolio[index].git
      },
    });
  }

  ngOnInit(): void {
  }

  portfolio = [
    {
      img: "twm-framed.jpg",
      heading: "Easy Diagnoser Web Application",
      description: "The app uses a Node and Express environment, MySql for a database and HTML, CSS and Javascript on the front-end. Google Language API is used for transcription and Intermediate API is used to get a diagnosis.",
      tools: ["NodeJS", "Express", "Firebase", "OAuth", "REST APIs", "HTML", "CSS", "JavaScript"],
      link: "https://easy-diagnoser.herokuapp.com/",
      git: "https://easy-diagnoser.herokuapp.com/"
    }
  ]

}

@Component({
  selector: 'portfolio-dialog',
  templateUrl: 'portfolio-dialog.html',
})
export class PortfolioDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
