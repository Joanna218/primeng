import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入 uc component
import { UcDropDownComponent } from "./uc-drop-down/uc-drop-down.component";
// 引入 primeng module

@NgModule({
  declarations: [
    UcDropDownComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    UcDropDownComponent
  ]
})
export class FunctionModule { }
