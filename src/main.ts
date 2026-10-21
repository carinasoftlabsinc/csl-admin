import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line no-console -- the only place to see why the app failed to start
  .catch(err => console.error(err));
