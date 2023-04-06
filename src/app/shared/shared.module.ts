import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [NavBarComponent, SearchBarComponent],
  exports: [NavBarComponent, SearchBarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
