import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './Pages/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  //{ path: 'drag-and-drop', component: DragAndDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
