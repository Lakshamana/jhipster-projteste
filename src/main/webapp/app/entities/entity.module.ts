import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProjtesteBlogModule } from './blog/blog.module';
import { ProjtesteTagModule } from './tag/tag.module';
import { ProjtesteEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ProjtesteBlogModule,
        ProjtesteTagModule,
        ProjtesteEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjtesteEntityModule {}
