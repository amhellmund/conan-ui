import { Component, OnInit } from '@angular/core';

import { ConanService} from '../../services/conan.service';

@Component({
  selector: 'app-conan-url',
  templateUrl: './conan-url.component.html',
  styleUrls: ['./conan-url.component.css']
})
export class ConanUrlComponent implements OnInit {

  conan_url : string;
  valid = true;

  constructor(private conanService : ConanService) {}

  ngOnInit() {
  }

  startConanUI() : void {
    this.valid = this.conanService.is_valid_url(this.conan_url);
  }

}
