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
import { UsuarioService } from './services/usuario-service';
import { CategoriaService } from './services/categoria-service';
import { PostService } from './services/post-service';
import { LocalService } from './services/local-service';
import { HttpModule } from '@angular/http';
import { LocalListarComponent } from './local-listar/local-listar.component';
import { LocalInfoComponent } from './local-info/local-info.component';
import { HomeComponent } from './home/home.component';

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
    LoginComponent,
    LocalListarComponent,
    LocalInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StatusService,
    CategoriaService,
    PostService,
    LocalService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
