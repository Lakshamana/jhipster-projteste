import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IEntry } from 'app/shared/model/entry.model';
import { EntryService } from './entry.service';
import { IBlog } from 'app/shared/model/blog.model';
import { BlogService } from 'app/entities/blog';
import { ITag } from 'app/shared/model/tag.model';
import { TagService } from 'app/entities/tag';

@Component({
    selector: 'jhi-entry-update',
    templateUrl: './entry-update.component.html'
})
export class EntryUpdateComponent implements OnInit {
    entry: IEntry;
    isSaving: boolean;

    blogs: IBlog[];

    tags: ITag[];
    dateDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected entryService: EntryService,
        protected blogService: BlogService,
        protected tagService: TagService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entry }) => {
            this.entry = entry;
        });
        this.blogService.query().subscribe(
            (res: HttpResponse<IBlog[]>) => {
                this.blogs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.tagService.query().subscribe(
            (res: HttpResponse<ITag[]>) => {
                this.tags = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entry.id !== undefined) {
            this.subscribeToSaveResponse(this.entryService.update(this.entry));
        } else {
            this.subscribeToSaveResponse(this.entryService.create(this.entry));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntry>>) {
        result.subscribe((res: HttpResponse<IEntry>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackBlogById(index: number, item: IBlog) {
        return item.id;
    }

    trackTagById(index: number, item: ITag) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
