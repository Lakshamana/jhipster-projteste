import { NgModule } from '@angular/core';

import { ProjtesteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProjtesteSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProjtesteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjtesteSharedCommonModule {}
