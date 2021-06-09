import {makeAutoObservable} from "mobx";

export default class ModalStore {
    constructor() {
        this._modalName = "";
        this._modalState = false;
        this._modalValues = {};
        makeAutoObservable(this)
    }

    setModalValues(data) {
        this._modalValues = data;
    };

    openModal(name) {
        this._modalState = true;
        this._modalName = name;
    };

    closeModal() {
        this._modalState = false;
        this._modalValues = '';
    };

    get modal() {
        return this._modalState;
    }
}
