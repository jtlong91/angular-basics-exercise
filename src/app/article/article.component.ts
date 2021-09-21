import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})



export class ArticleComponent{

  title = "Articles";
  content = "This is the content of the articles.";
  isTechRelated = true;

  onButtonClick() {
    this.isTechRelated = !this.isTechRelated;
  }

}
