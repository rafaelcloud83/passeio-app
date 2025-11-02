import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TemplateRoutingModule } from './template-routing.module';
import { CategoriasModule } from '../categorias/categorias.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule
  ]
})
export class TemplateModule { }
