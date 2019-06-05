import { Component, OnInit } from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.scss']
})
export class AwesomeComponent implements OnInit {
  awesomeList: Awesome[];
  constructor(
    private awesomeService: AwesomeService,
  ) { }

  ngOnInit() {
    this.awesomeService.getAwesomes().subscribe(next => (this.awesomeList = next), error => (this.awesomeList = []) );
  }
}
