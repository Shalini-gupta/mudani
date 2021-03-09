import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { RetairmentComponent } from './retairment/retairment.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog1/blog1.component';
import { UMudaniComponent } from './u-mudani/u-mudani.component';
import { ThemanticComponent } from './themantic/themantic.component';
import { StockBackComponent } from './stock-back/stock-back.component';
import { SelfDirectedComponent } from './self-directed/self-directed.component';
import { PricingComponent } from './pricing/pricing.component';
import { MaangedSubtabComponent } from './maanged-subtab/maanged-subtab.component';
import { InvestmentComponent } from './investment/investment.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { MudaniB2bComponent } from './mudani-b2b/mudani-b2b.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { FantasyGamesComponent } from './fantasy-games/fantasy-games.component';
import { ReferEmailPhoneComponent } from './refer-email-phone/refer-email-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    RetairmentComponent,
    HomeComponent,
    BlogComponent,
    Blog1Component,
    UMudaniComponent,
    ThemanticComponent,
    StockBackComponent,
    SelfDirectedComponent,
    PricingComponent,
    PricingComponent,
    MaangedSubtabComponent,
    MaangedSubtabComponent,
    InvestmentComponent,
    HowItWorkComponent,
    MudaniB2bComponent,
    BlogPageComponent,
    ReferFriendComponent,
    FaqComponent,
    SignupComponent,
    FantasyGamesComponent,
    ReferEmailPhoneComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot({
      progressBar: true,
      autoDismiss: false
    }) // ToastrModule added

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
