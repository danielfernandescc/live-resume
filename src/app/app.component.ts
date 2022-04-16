import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Daniel Fernandes Pinho";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Python Developer, Back-end Developer, Tech Teacher, Data Scientist, Computer Scientist, Daniel Fernandes Live Resume, Daniel Fernandes CV, Curriculum Daniel Fernandes, Daniel Fernandes Resumo"},
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Guilherme Borges Bastos" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a back-end developer, with experience in Data Analysis. I'm passionete about Data, Science and I'd love to teach with you all my knowledge. Welcome to my World! Find out more in my live-resume!" }
    );
  }
}
