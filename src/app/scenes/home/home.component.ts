import { Component, OnInit } from "@angular/core";

declare const $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngAfterViewInit() {
    // configure footer position due to home header component
    const upHeight = $("#home-header-container").outerHeight(true);
    const footerEl = document.getElementById("sticky-footer");

    console.log(upHeight);

    footerEl.style.position = "relative";
    footerEl.style.top = `${upHeight +
      $("#sticky-footer").outerHeight(true)}px`;
  }

  ngOnInit() {}
}
