import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var jQuery: any;
declare var material: any;

@Component({})
export class NgMDBComponent implements OnInit {
    ngOnInit()  {
        jQuery.material.init();
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [NgMDBComponent],
    exports: [NgMDBComponent]
})
export class NgMDBModule { }