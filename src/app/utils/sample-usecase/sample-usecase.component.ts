import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sample-usecase",
  templateUrl: "./sample-usecase.component.html",
  styleUrls: ["./sample-usecase.component.scss"]
})
export class SampleUsecaseComponent implements OnInit {
  ObjectKeys = Object.keys;
  sampleUseCases: string[] = [];
  selectedUseCaseKey: string = "";
  selectedUseCaseText: string = "";

  constructor() {
    this.sampleUseCases["Tweets"] = "Tweets text here";
    this.sampleUseCases["Online Review"] = "Online Review text here";
    this.sampleUseCases["Email message"] = "Email message text here";
    this.sampleUseCases["Product Review in French"] =
      "Product Review in French text here";
    this.sampleUseCases["Your own text"] = "Your own text text here";

    this.selectUseCase("Tweets");
  }

  ngOnInit() {}

  selectUseCase(useCasekey: string) {
    this.selectedUseCaseKey = useCasekey;
    this.selectedUseCaseText = this.sampleUseCases[useCasekey];
  }
}
