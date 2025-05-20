import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TamboresComponent } from './tambores/tambores.component';
import { MultipisteComponent } from './multipiste/multipiste.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepertoireComponent } from './repertoire/repertoire.component';



@NgModule({
  declarations: [TamboresComponent, MultipisteComponent, RepertoireComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TamboresComponent
      },
      {
        path: 'tambores',
        component: TamboresComponent
      },
      {
        path: ':group/:id',
        component: TamboresComponent
      },
      {
        path: ':group/:song/multipiste',
        component: MultipisteComponent
      },
      {
        path: ':group/:id/:type',
        component: TamboresComponent
      }
    ]),
    SharedModule
  ]
})
export class PlayModule { }
