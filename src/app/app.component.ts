import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  NgZone,
} from '@angular/core';

import {
  SohoModuleNavComponent,
  SohoModuleNavSwitcherComponent,
} from 'ids-enterprise-ng';
import { Observable, of } from 'rxjs';

const defaultRolesOutsideComponent: Array<SohoModuleNavSwitcherRoleRecord> = [
  { text: 'Admin', value: 'admin', icon: 'app-ac' },
  { text: 'Job Console', value: 'job-console', icon: 'app-jo' },
  {
    text: 'Landing Page Designer',
    value: 'landing-page-designer',
    icon: 'app-ssm',
  },
  {
    text: 'Process Server Admin',
    value: 'process-server-admin',
    icon: 'app-um',
  },
  { text: 'Proxy Management', value: 'proxy-management', icon: 'app-pm' },
  {
    text: 'Security System Management',
    value: 'security-system-management',
    icon: 'app-psa',
  },
  { text: 'User Management', value: 'user-management', icon: 'app-lmd' },
];

@Component({
  selector: 'body', // tslint:disable-line
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SohoModuleNavSwitcherComponent)
  moduleNavSwitcher?: SohoModuleNavSwitcherComponent;
  @ViewChild(SohoModuleNavComponent)
  moduleNavComponent?: SohoModuleNavComponent;
  public Roles$: Observable<Array<SohoModuleNavSwitcherRoleRecord>>;
  public ButtonText$: Observable<string>;

  public defaultRolesInsideComponent: Array<SohoModuleNavSwitcherRoleRecord> = [
    { text: 'Admin', value: 'admin', icon: 'app-ac' },
    { text: 'Job Console', value: 'job-console', icon: 'app-jo' },
    {
      text: 'Landing Page Designer',
      value: 'landing-page-designer',
      icon: 'app-ssm',
    },
    {
      text: 'Process Server Admin',
      value: 'process-server-admin',
      icon: 'app-um',
    },
    { text: 'Proxy Management', value: 'proxy-management', icon: 'app-pm' },
    {
      text: 'Security System Management',
      value: 'security-system-management',
      icon: 'app-psa',
    },
    { text: 'User Management', value: 'user-management', icon: 'app-lmd' },
  ];

  constructor(private ngZone: NgZone) {
    this.Roles$ = this.getRoles();
    this.ButtonText$ = of('TEST');
  }

  ngAfterViewInit(): void {
    //this.ngZone.runOutsideAngular(() => {
    //  this.moduleNavSwitcher?.setRoles(this.model.//roles);
    //});
  }

  public searchfieldOptions: SohoSearchFieldOptions = {};

  public model = {
    selectedRole: 'admin',
    roles: this.defaultRolesInsideComponent,
  };

  onRoleChange(e: any) {
    console.info('Module Nav Role change: ', e.target.value);
  }

  onModuleNavAccordionClick(e: any) {}

  onSearchChange(e: any) {
    console.dir('Module Nav Searchfield content change', e);
  }

  public getRoles(): Observable<Array<SohoModuleNavSwitcherRoleRecord>> {
    const sspTitle = 'PORTAL_SELF_SERVICE_PORTAL_TITLE';
    const coreApplicationTitle = 'PORTAL_CORE_APPLICATION';

    const defaultRoles = of([
      { text: sspTitle, value: 'ssp', changeIconOnSelect: false },
      {
        text: coreApplicationTitle,
        value: 'admin-portal',
        changeIconOnSelect: false,
      },
    ]);
    return defaultRoles;
  }

  public onSwitcherClick() {
    if (this.moduleNavComponent) {
      switch (this.moduleNavComponent.displayMode) {
        case 'expanded': {
          this.moduleNavComponent.displayMode = 'collapsed';
          //alert(this.moduleNavComponent.displayMode);
          break;
        }
        case 'collapsed': {
          this.moduleNavComponent.displayMode = 'expanded';
          // alert(this.moduleNavComponent.displayMode);
          break;
        }
        default:
          break;
      }
    }
  }
}
