import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeCommand} from '@angular/cli/commands/easter-egg-impl';
import {AwesomeComponent} from './awesome/awesome.component';
import {AwesomeEditComponent} from './awesome-edit/awesome-edit.component';

const routes: Routes = [
  {
    path: 'awesome',
    component: AwesomeComponent
  }, {
    path: 'awesome/:id/edit',
    component: AwesomeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
