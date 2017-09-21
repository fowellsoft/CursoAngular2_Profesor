import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CADENAS_PIPES } from './pipes/cadenas.pipe';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { VALIDACIONES_PERSONALIZADA } from './directives/validaciones.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CADENAS_PIPES, PIPES_NUMERICOS, VALIDACIONES_PERSONALIZADA],
  exports: [CADENAS_PIPES, PIPES_NUMERICOS, VALIDACIONES_PERSONALIZADA]
})
export class MyCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: MyCoreModule) {
    if (parentModule) {
      const msg = `ModuleName has already been loaded. 
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
