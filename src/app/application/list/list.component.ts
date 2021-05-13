import { Component, OnInit } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces';
import { ExtensionsService } from 'src/app/shared/service/extensions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Get the list of ranked extensions to show
    const service = new ExtensionsService();
    const extensiones: rankExtension[] = service.getrankedExtensions();

    const getExtensionsInfo = function (extension: number) {
      console.log(extension);
    };
    console.log('extensiones', extensiones);

    //Create html code for each extension
    let htmlInjected = '';
    extensiones.forEach((extension: rankExtension) => {
      htmlInjected += `<div class="container-fluid">
  <div class="card mt-5 ml-3 mr-3 mb-3">
      <div class="row ml-0 mr-0">
          <div class="col-sm-2 my-auto p-3 w-25"><img class="img-fluid" style="border-radius: 50%;max-width: 50%; max-height: 50%"
          src="/assets/images/${extension.extImg}" alt="live_sass_compiler">
          </div>
          <div class="col-sm-8">
          <p class="h3 mt-3">${extension.extName}</p>
          <p class="h4-responsive" style="color:slategray">${extension.extAuthor}</p>
          </div>
          <div class="col-sm-2 my-auto ">
             <a href="detail"><i id="${extension.id}" class="fas fa-chevron-right fa-2x" style="color:slategray"></i></a>
           </div>
      </div>
  </div>
</div>`;
    });

    //Inject html to list.component.html
    document.getElementById('extension_list')!.innerHTML = htmlInjected;

    //Add event listener when chevron right icon clicked
    document
      .getElementById('extension_list')!
      .addEventListener('click', (e: Event) => {
        const t = e.target as any;
        if (t.id != '') {
          //Save the selected id
          const extension: rankExtension = service.getExtensionsById(t.id);
          var selectedId: string = String(extension.id);
          localStorage.setItem('selectedId', selectedId);
          //console.log("Id:" + selectedId);
          //console.log("Title:" + extension.extAuthor);
          document.getElementById('result')!.innerHTML = `<div>Clicked</div>`;
        }
      });
  }
}
