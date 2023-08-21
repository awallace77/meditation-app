import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeditationsComponent } from './meditations/meditations.component';
import { MeditationListComponent } from './meditations/meditation-list/meditation-list.component';
import { MeditationItemComponent } from './meditations/meditation-list/meditation-item/meditation-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeditationsComponent,
    MeditationListComponent,
    MeditationItemComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
