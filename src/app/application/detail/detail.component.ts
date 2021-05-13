import { Component, OnInit } from '@angular/core';
import { rankExtension } from 'src/app/shared/interfaces';
import { ExtensionsService } from 'src/app/shared/service/extensions.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Get the extension information by its ID (saved as localStorage value)
    const service = new ExtensionsService();
    var selectedId = Number(localStorage.getItem('selectedId'));
    const extension: rankExtension = service.getExtensionsById(selectedId);

    //Show the extension name
    document.getElementById('extensionName')!.innerHTML = extension.extName;

    //Show the author's name
    var author = document.getElementById('extAuthor');
    author!.innerHTML = extension.extAuthor;
    author!.style.textAlign = 'center';

    //Show the extension's image
    var image: HTMLImageElement;
    image = document.getElementById('image') as HTMLImageElement;
    image.src = '/assets/images/' + extension.extImg;
    image.style.alignContent = 'center';

    //Show the extension's description
    var description: HTMLTextAreaElement;
    description = document.getElementById('description') as HTMLTextAreaElement;
    description.innerHTML = extension.extDescription;

    //Show the rating & downloads info
    var rating: HTMLDivElement;
    rating = document.getElementById('rating') as HTMLDivElement;
    rating.innerHTML = 'Rating: ' + extension.extRating;

    var downloads: HTMLDivElement;
    downloads = document.getElementById('downloads') as HTMLDivElement;
    downloads.innerHTML = 'Downloads: ' + extension.extDownloads;
  }
}
