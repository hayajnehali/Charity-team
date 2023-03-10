import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthloginGuard } from './authlogin.guard';
import { BenefactorModule } from './benefactor/benefactor.module';
import { CausesComponent } from './benefactor/causes/causes.component';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { MangeCharityComponent } from './modertor/mange-charity/mange-charity.component';
import { ModertorModule } from './modertor/modertor.module';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [{
  path:'admin',
  loadChildren:()=>AdminModule,
  canActivate:[AuthloginGuard]
},
{
  path:'',
  loadChildren:()=>HomeModule
},
{
  path:'benefactor',
  loadChildren:()=>BenefactorModule,
  canActivate:[AuthloginGuard]
},
{
  path:'beneficiary',
loadChildren:()=>BeneficiaryModule,
canActivate:[AuthloginGuard]
},{
  path:'about',
  component:AboutComponent
},{
  path:'contact',
  component:ContactComponent
},{
    path:'login',
    component:LoginComponent
},

{
  path:'Register',
  component:RegisterComponent
},
{
  path:'Moderator',
  loadChildren:()=>ModertorModule,
  canActivate:[AuthloginGuard]

},
{
  path:'review',
  component:ReviewsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
