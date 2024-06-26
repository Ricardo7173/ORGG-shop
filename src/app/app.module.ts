import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/producto-lista/producto-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }