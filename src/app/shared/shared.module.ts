import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, SearchBarComponent, Error404PageComponent],
  exports: [NavBarComponent, SearchBarComponent, RouterModule],
  imports: [CommonModule],
})
export class SharedModule {}
