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
      img: "easydiagnoser-framed.jpg",
      heading: "Easy Diagnoser Web Application",
      description: "The app uses a Node and Express environment, MySql for a database and HTML, CSS and Javascript on the front-end. Google Language API is used for transcription and Intermediate API is used to get a diagnosis.",
      tools: ["NodeJS", "Express", "Firebase", "OAuth", "REST APIs", "HTML", "CSS", "JavaScript"],
      link: "https://easy-diagnoser.herokuapp.com/",
      git: "https://easy-diagnoser.herokuapp.com/"
    },
    {
      img: "uth-careers-framed.jpg",
      heading: "UTHealth Careers Page Redesign",
      description: "Designed and implemented these pages in dotCMS platform using HTML, CSS and Vector (dotCMS logic language). Designed in Adobe Illustrator. The All Jobs page was implemented by parsing an XML job sheet and presenting it in a Google Jobs-approved format.",
      tools: ["dotCMS", "XML", "HTML", "CSS", "JavaScript"],
      link: "https://www.uth.edu/careers/"
    },
    {
      img: "asr-framed.jpg",
      heading: "Associated Spring Raymond Token & API Integration",
      description: "Gated content on site (via MODX). Implemented JWT token system to authenticate user and use Skymaker API to display a configuration tool for user. Also implemented Pardot integration with JS and custom PHP to add form submissions to client’s Pardot account",
      tools: ["JWT", "MODX", "PHP", "REST API", "HTML", "CSS", "JavaScript"],
      link: "https://www.asraymond.com/new-configurator.html"
    },
    {
      img: "uteap-framed.jpg",
      heading: "UTEAP Site Redesign & Custom API",
      description: "The app uses a custom API hosted in a Node and Express environment to authorize certain users. Designed the website in Adobe Illustrator and implemented in dotCMS using HTML, CSS, jQuery and the Foundation framework.",
      tools: ["NodeJS", "Express", "Foundation", "jQuery", "HTML", "CSS", "JavaScript"],
      link: "https://www.uth.edu/uteap/"
    },
    {
      img: "twm-framed.jpg",
      heading: "TW Metals Custom Template",
      description: "Created Affiliates category and subcategory PHTML templates using Bootstrap in Magento 2. Wrote custom SCSS rules for the templates, compiled and deployed SSH.",
      tools: ["Magento", "PHP", "Bootstrap", "SCSS", "HTML", "CSS", "JavaScript"],
      link: "https://www.twmetals.com/company/affiliates.html"
    },
    {
      img: "meyer-framed.jpg",
      heading: "Meyer Now Learning System",
      description: "Created a micro-Learning Management System within MODX that used Paypal API for payment, and custom PHP script that allowed client to create new quizzes while auto-encrypting answers. Recorded and retrieved results via a MySQL database.",
      tools: ["MODX", "PHP", "SQL", "HTML", "CSS", "JavaScript"],
      link: "https://training.meyernow.com/"
    },
    {
      img: "leeco-framed.jpg",
      heading: "Leeco Steel Template & Module Creation",
      description: "Created special Spanish product pages via new Magento Templates and used jQuery to auto-translate the page contents to Spanish. Custom styling rules in SCSS - compiled and deployed via SSH. Back-end feature: Created a custom Magento module for the site to to transfer form submissions to the client's Hubspot CRM by tying the module to the PHP form submission event and transferring the data to Hubspot via their API.",
      tools: ["Magento", "PHP", "Bootstrap", "SCSS", "jQuery"],
      link: "https://www.leecosteel.com/es/a572-steel-plate/"
    },
    {
      img: "keeling-framed.jpg",
      heading: "Keeling Law Firm Redesign Implementation",
      description: "Implemented a redesign from Figma to MODX. This involved writing extensive CSS rules, building custom containiners in MODX and write scripts in JS for dynamic actions.",
      tools: ["MODX", "PHP", "HTML", "CSS", "JavaScript"],
      link: "https://www.keelinglaw.com/"
    },
    {
      img: "bpl-framed.jpg",
      heading: "B&P Littleford Redesign Implementation",
      description: "Implemented a redesign from Figma to MODX. This involved writing extensive CSS rules, building custom containiners in MODX and write scripts in JS for dynamic actions.",
      tools: ["MODX", "PHP", "HTML", "CSS", "JavaScript"],
      link: "https://www.bplittleford.com/"
    },
    {
      img: "gifs-queen-framed.jpg",
      heading: "GifTastic Web Application",
      description: "App that displays gifs using GIPHY API, based on user input. Search terms are appended to input to keep theme. Made with HTML, CSS, Bootstrap and jQuery.",
      tools: ["Giphy API", "Bootstrap", "jQuery", "HTML", "CSS"],
      link: "https://jcthomas00.github.io/GifTastic/",
      git: "https://github.com/jcthomas00/Gif-s-for-a-Queen"
    },
    {
      img: "anime-trivia-framed.jpg",
      heading: "Anime Trivia",
      description: "This is a timed, web-based, anime-themed trivia. Questions are retrieved in the relevant category from triviaDB API. JQuery's getJSON method is used to get the trivia data. The app uses Javascript's setInterval method to countdown the number of seconds remaining. The countdown is displayed as a dissappearing circle, which was made using Canvas and SVG.",
      tools: ["Bootstrap", "JSON", "HTML", "CSS", "jQuery"],
      link: "https://jcthomas00.github.io/TriviaGame/"
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
