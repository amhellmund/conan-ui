import { Component, OnInit } from '@angular/core';

import { ConanService} from '../../services/conan.service';

@Component({
  selector: 'app-conan-url',
  templateUrl: './conan-url.component.html',
  styleUrls: ['./conan-url.component.css']
})
export class ConanUrlComponent implements OnInit {

  conanUrl : string;
  valid = true;

  constructor(private conanService : ConanService) {}

  ngOnInit() {
  }

  startConanUI() : void {
    this.conanService.isValidUrl(this.conanUrl).subscribe(valid => this.valid = valid);
  }

}
