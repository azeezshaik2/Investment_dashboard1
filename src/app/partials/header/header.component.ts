import { Component, OnInit, HostBinding } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  downArrow = faArrowDown;

  constructor(public globals: ThemeOptions) { }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;

  ngOnInit() {
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }


}
