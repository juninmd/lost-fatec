import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListarComponent } from './post-listar/post-listar.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { StatusListarComponent } from './status-listar/status-listar.component';
import { StatusInfoComponent } from './status-info/status-info.component';
import { CategoriaInfoComponent } from './categoria-info/categoria-info.component';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { LoginComponent } from './login/login.component';
import { StatusService } from './services/status-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PostListarComponent,
    PostInfoComponent,
    StatusListarComponent,
    StatusInfoComponent,
    CategoriaInfoComponent,
    CategoriaListarComponent,
    UsuarioCadastrarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
