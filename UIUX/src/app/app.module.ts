import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DomainTagComponent } from './domain-tag/domain-tag.component';
import { ConceptTagComponent } from './concept-tag/concept-tag.component';
import { RoverButtonComponent } from './rover-button/rover-button.component';
import { RoverStepperComponent } from './rover-stepper/rover-stepper.component';
import { RoverStepComponent } from './rover-step/rover-step.component';
import { MiniSearchBoxComponent } from './mini-search-box/mini-search-box.component';
import { DocBoxComponent } from './doc-box/doc-box.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayChipsComponent } from './display-chips/display-chips.component';
import { DomainPageComponent } from './upload/domain-page/domain-page.component';
import { TagPageComponent } from './upload/tag-page/tag-page.component';
import { LocationPageComponent } from './upload/location-page/location-page.component';
import { UploadPageComponent } from './upload/upload-page/upload-page.component';
import { CustomTagComponent } from './custom-tag/custom-tag.component';
import { RoverProgressBarComponent } from './rover-progress-bar/rover-progress-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    DomainTagComponent,
    ConceptTagComponent,
    RoverButtonComponent,
    RoverStepperComponent,
    RoverStepComponent,
    MiniSearchBoxComponent,
    DocBoxComponent,
    SearchBarComponent,
    DisplayChipsComponent,
    DomainPageComponent,
    TagPageComponent,
    LocationPageComponent,
    UploadPageComponent,
    CustomTagComponent,
    RoverProgressBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
