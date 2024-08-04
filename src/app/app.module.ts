import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  SohoButtonModule,
  SohoComponentsModule,
  SohoLocaleModule,
  SohoModuleNavModule,
  SohoModuleNavSwitcherModule,
  SohoAccordionModule,
} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PersonalizeMenuComponent],
  imports: [
    BrowserModule,
    SohoModuleNavModule,
    SohoModuleNavSwitcherModule,
    SohoAccordionModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
