import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EditorModule } from '@tinymce/tinymce-angular';

import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
  {
    path: 'create/:id',
    component: CreatePostComponent,
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostsTableComponent,
    CreatePostComponent,
    CreatePostFormComponent,
  ],
  exports: [
    RouterModule,
    PostsComponent,
    PostsTableComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PostsModule { }
