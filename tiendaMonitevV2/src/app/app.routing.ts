import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { PlanesComponent } from './components/planes/planes.component';
import { BotonPagoEpaycoComponent } from './components/boton-pago-epayco/boton-pago-epayco.component';
import { ResponsePagoPasarelaComponent } from './components/response-pago-pasarela/response-pago-pasarela.component';
import { OrdenPagoPlanComponent } from './components/orden-pago-plan/orden-pago-plan.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                    component: ComponentsComponent , canActivate: [AuthGuard]},
    { path: 'nucleoicons',              component: NucleoiconsComponent },
    { path: 'examples/landing',         component: LandingComponent },
    { path: 'login',                    component: LoginComponent },
    { path: 'examples/profile',         component: ProfileComponent },
    { path: 'planes/:true',             component: PlanesComponent },
    { path: 'pagos',                    component: BotonPagoEpaycoComponent},
    { path: 'pagos/orden-pago/:true',   component: OrdenPagoPlanComponent},
    { path: 'response/pasarela',        component: ResponsePagoPasarelaComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
