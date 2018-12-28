import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjtesteSharedModule } from 'app/shared';
import {
    EntryComponent,
    EntryDetailComponent,
    EntryUpdateComponent,
    EntryDeletePopupComponent,
    EntryDeleteDialogComponent,
    entryRoute,
    entryPopupRoute
} from './';

const ENTITY_STATES = [...entryRoute, ...entryPopupRoute];

@NgModule({
    imports: [ProjtesteSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [EntryComponent, EntryDetailComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    entryComponents: [EntryComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjtesteEntryModule {}
