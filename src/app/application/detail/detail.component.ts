import { Component, Input, OnInit } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces';
import { ExtensionsService } from 'src/app/shared/service/extensions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  //Variables
  selectedId: number;
  selectedExtension: rankExtension;
  @Input() Idnumber: number;

  //Initiate service on constructor
  //Will be passing id at route
  constructor(
    private extensionsService: ExtensionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showExtensionDetails();
  }

  showExtensionDetails() {
    //Get the extension information by its ID (on the route)
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    //console.log('I am in the details page, this is the ID  ' + this.selectedId);
    this.selectedExtension = this.extensionsService.getExtensionsById(
      this.selectedId
    );
  }
}
