import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {
  awesomeForm: FormGroup;
  awesome: Awesome;
  constructor(
    private awesomeService: AwesomeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      tag: ['', Validators.required],
      url: ['', Validators.required],
      descriptions: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.awesomeService.getAwesomeById(id).subscribe(next => {
      this.awesome = next;
      this.awesomeForm.patchValue(this.awesome);
    }, error => {
      console.log(error);
      this.awesome = null;
    });
  }
  onSubmit() {
    if (this.awesomeForm.valid) {
      const {value} = this.awesomeForm;
      const data = {
        ...this.awesome,
        ...value
      };
      this.awesomeService.update(data).subscribe(next => {
        this.router.navigate(['/awesome']);
      }, error => console.log(error));
    }
  }
}
