import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { AlunoCreate } from './alunos/create/create';
import { AlunosList } from './alunos/list/list';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'alunos', component: AlunosList},
    { path: 'alunos/cadastro', component: AlunoCreate }, 
    { path: '**', redirectTo: '/notfound' }
] as Routes;
