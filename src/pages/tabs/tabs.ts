import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AttractionsPage } from '../attractions/attractions';
import { PlanPage } from '../plan/plan';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AttractionsPage;
  tab3Root = ContactPage;
  tab4Root = PlanPage;

  constructor() {

  }
}
