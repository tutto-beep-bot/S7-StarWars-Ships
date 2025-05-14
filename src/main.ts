import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShipListComponent } from './app/ship-list/ship-list.component';

bootstrapApplication(ShipListComponent, appConfig)
  .catch((err) => console.error(err));
