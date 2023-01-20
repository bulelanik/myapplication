import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorRegisterPageRoutingModule } from './contractor-register-routing.module';

import { ContractorRegisterPage } from './contractor-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorRegisterPageRoutingModule
  ],
  declarations: [ContractorRegisterPage]
})
export class ContractorRegisterPageModule {}
