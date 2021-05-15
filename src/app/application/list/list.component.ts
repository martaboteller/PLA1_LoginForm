import { Component, OnInit } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces';
import { ExtensionsService } from 'src/app/shared/service/extensions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //Preparing an array of extensions and a variable to store selected extension
  extensions: rankExtension[];
  public selectedExtension: rankExtension;
  selectedID: number;

  //Call service when initialized
  constructor(private extensionsService: ExtensionsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  //Get the complete list of extensions
  loadData() {
    this.extensions = this.extensionsService.getrankedExtensions();
  }

  //No need to get the id using router link
  /*  getID(id: number) {
    this.selectedID = id;
  }*/
}
