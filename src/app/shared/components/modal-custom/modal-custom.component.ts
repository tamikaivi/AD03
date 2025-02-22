import {
    AfterViewInit,
    Component,
    EventEmitter,
    ElementRef,
    Input,
    OnInit,
    Output,
    Renderer2,
    TemplateRef,
    ViewContainerRef,
    HostListener
} from '@angular/core';
export enum ActionModal {
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_MODAL_CONFIRMATION,
    CLOSE_ALL,
    RETURN_MODAL,
    OPEN_MODAL_INFO,
    CLOSE_MODAL_INFO
}
type sizeModal = 'small' | 'medium' | 'large';

@Component({
    selector: 'amira-modal-custom',
    templateUrl: './modal-custom.component.html'
})
export class ModalCustomComponent implements OnInit, AfterViewInit {
    @Input() title: string;
    @Input() showCloseModalButton: boolean;
    @Input() modalSize: sizeModal;
    @Input() arrayTemplates: TemplateRef<any>[];
    // @ts-ignore
    @Input() template: TemplateRef<any>;
    // @ts-ignore
    @Input() templateFooter: TemplateRef<any>;
    // @ts-ignore
    @Input() templateConfirm: TemplateRef<any>;
    @Input() viewContainerRef: ViewContainerRef | undefined;
    @Input() manualClose: boolean = false;
    @Input() hideTitle: boolean = false;

    @Input() useConfirmExit: boolean = false;
    @Output() closeAction = new EventEmitter<void>();
    private ELM: HTMLElement;
    private MODAL: Element | null | undefined;
    private MODAL_BODY: Element | null | undefined;
    private MODAL_CONFIRM: Element | null | undefined;
    private MODAL_CONFIRM_EXIT: Element | null | undefined;
    private MODAL_ARRAY_TEMPLATE: Element | null | undefined;
    bodyAddSpaces: number;
    heightModal: number;
    heightScreen: number;

    indexArrayTemplate: number;
    constructor(private _elm: ElementRef, private _renderer: Renderer2) {
        this.ELM = this._elm.nativeElement;
        this.title = 'Default title modal';
        this.showCloseModalButton = true;
        this.modalSize = 'small';
        this.bodyAddSpaces = 0;
        this.heightModal = 0;
        this.heightScreen = 0;
        this.arrayTemplates = [];
        this.indexArrayTemplate = 0;
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.MODAL = this.ELM.querySelector('.container-modal');
        this.MODAL_CONFIRM = this.ELM.querySelector('.container-modal-confirm');
        this.MODAL_CONFIRM_EXIT = this.ELM.querySelector('.container-modal-confirm-exit');
        this.MODAL_ARRAY_TEMPLATE = this.ELM.querySelector('.container-modal-array');
        this.MODAL_BODY = this.ELM.querySelector('.modal-body__content');
        const allSpaces = 150;
        // @ts-ignore
        this.bodyAddSpaces = allSpaces + this.MODAL_BODY.scrollHeight;
        // @ts-ignore
        this.heightModal = this.MODAL.scrollHeight;

        this.heightScreen = window.innerHeight;
        this.calculateSizeModal().then();
    }

    async openModal(): Promise<void> {
        this._renderer.addClass(this.MODAL, 'container-modal--show');
    }

    async closeModal(): Promise<void> {
        this._renderer.removeClass(this.MODAL, 'container-modal--show');
    }

    async openModalConfirm(): Promise<void> {
        this._renderer.addClass(this.MODAL_CONFIRM, 'container-modal-confirm--show');
    }
    async openModalConfirmExit(): Promise<void> {
        this._renderer.addClass(this.MODAL_CONFIRM_EXIT, 'container-modal-confirm-exit--show');
    }

    async closeModalConfirm(): Promise<void> {
        this._renderer.removeClass(this.MODAL_CONFIRM, 'container-modal-confirm--show');
    }
    async closeModalConfirmExit(): Promise<void> {
        this._renderer.removeClass(this.MODAL_CONFIRM_EXIT, 'container-modal-confirm-exit--show');
    }

    hideArrayTemplate() {
        this._renderer.removeClass(this.MODAL_ARRAY_TEMPLATE, 'container-modal-array--show');
    }

    showArrayTemplate() {
        this._renderer.addClass(this.MODAL_ARRAY_TEMPLATE, 'container-modal-array--show');
    }

    async cleanComponent(): Promise<void> {
        this.viewContainerRef?.clear();
        this.closeAction.emit();
    }

    async handleClose(): Promise<void> {
        if (this.manualClose) this.closeAction.emit();
        else if (this.useConfirmExit) this.closeAndOpenConfirmExit();
        else await this.cleanComponent();
    }

    /**
     * CLose modal and show modal o confirm
     */
    async closeAndOpenConfirm(): Promise<void> {
        await this.closeModal();
        await this.openModalConfirm();
    }

    async closeAndOpenConfirmExit(): Promise<void> {
        await this.closeModal();
        await this.openModalConfirmExit();
    }

    /**
     * CLose modal confirm and show modal
     */
    async closeAndOpenModal(): Promise<void> {
        await this.closeModalConfirm();
        await this.openModal();
    }
    async closeExitAndOpenModal(): Promise<void> {
        await this.closeModalConfirmExit();
        await this.openModal();
    }
    /**
     * Close and open template array
     */
    closeAndOpenTemplateArray(indexTemplate: number) {
        this.indexArrayTemplate = indexTemplate;
        this.closeModal();
        this.showArrayTemplate();
    }
    openModalAndCloseTemplateArray() {
        this.hideArrayTemplate();
        this.openModal();
    }
    /**
     * update arraytemplates
     */
    updateModalArrayTemplates(newTemplates: TemplateRef<any>[], index: number) {
        this.arrayTemplates = newTemplates;
        this.closeAndOpenTemplateArray(index);
    }

    private async calculateSizeModal(): Promise<void> {
        if (this.MODAL_BODY && this.MODAL) {
            // --> If height modal is more than heightScreen
            if (this.bodyAddSpaces > this.heightScreen) {
                this._renderer.removeStyle(this.MODAL, 'height');
                return;
            }
            this.heightModal = this.MODAL.scrollHeight;
            // --> this.heightScreen - this.heightModal space on screen
            if (this.heightScreen - this.heightModal <= 35) {
                this._renderer.removeStyle(this.MODAL, 'height');
            } else {
                this._renderer.setStyle(this.MODAL, 'height', 'auto');
            }
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.heightScreen = event.target.innerHeight;
        this.calculateSizeModal().then();
    }
}
