import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { DeletedProductsComponent } from './deleted-products/deleted-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturedCardsComponent } from './home-page/featured-cards/featured-cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMemberDetailsComponent } from './teams/team-member-details/team-member-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    DeletedProductsComponent,
    ProductDetailsComponent,
    HomePageComponent,
    PageNotFoundComponent,
    FeaturedCardsComponent,
    TeamsComponent,
    TeamMemberDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'teams/:teamMemberName', component: TeamMemberDetailsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      //Wild Card Route for 404 request
      {
        path: '**', pathMatch: 'full',
        component: PageNotFoundComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
