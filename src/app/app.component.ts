import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public trafficControl!: FormControl;

  ngOnInit(): void {
    this.trafficControl = new FormControl();
    this.trafficControl.valueChanges.subscribe((value) => console.log(value));
  }

}
