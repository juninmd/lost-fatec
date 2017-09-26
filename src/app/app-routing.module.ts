import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostListarComponent } from './post-listar/post-listar.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { StatusListarComponent } from './status-listar/status-listar.component';
import { StatusInfoComponent } from './status-info/status-info.component';
import { CategoriaInfoComponent } from './categoria-info/categoria-info.component';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'post-listar', component: PostListarComponent },
            { path: 'post-info', component: PostInfoComponent },
            { path: 'status-listar', component: StatusListarComponent },
            { path: 'status-info', component: StatusInfoComponent },
            { path: 'categoria-info', component: CategoriaInfoComponent },
            { path: 'categoria-listar', component: CategoriaListarComponent },
            { path: 'usuario-cadastrar', component: UsuarioCadastrarComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'post-listar' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
