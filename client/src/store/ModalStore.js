console.clear();
const { action, observable, computed, decorate } = mobx;
const { observer, Observer } = mobxReact;
//import { observer, useLocalStore } from "https://unpkg.com/mobx-react@6.1.4/dist/mobx-react.umd.js";

// ======================================================================================
// Doesn't seem to work anymore with mobx-react v6. Not sure if it's a codepen issue.
// Please see https://codesandbox.io/s/react-mobx-modal-test-jrdsh for working a example
// ======================================================================================

// MobX store
class Store {
    _modal = false; // Not updating for unknown reason

    get modal() {
        return this._modal;
    }

    openModal() {
        console.log('open-before', this._modal);
        this._modal = true;
        console.log('open-after', this._modal);
    };

    closeModal() {
        this.modal = false;
    };
}

decorate(Store, {
    modal: computed,
    openModal: action,
    closeModal: action
});

const storeContext = React.createContext({ store: new Store() });
const useStores = () => React.useContext(storeContext);

// Re-usable Modal Component
const Modal = observer(({ isActive, children }) => {
    let modalStyle = isActive ? "modal is-active" : "modal";

    console.log("Modal", isActive);
    return ReactDOM.createPortal(
        <div className={modalStyle}>{children}</div>,
        document.getElementById("modal")
    );
});

// MyModal Component
const MyModal = observer(({ show, click }) => {
    console.log("MyModal", show);
    return (
        <Modal isActive={show}>
            <div className="modal-content">
                <div className="modal-header">
                    My Modal
                </div>
                <div className="modal-body">
                    <p>This is a modal</p>
                </div>
                <div className="modal-footer">
                    <button onClick={click}>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
});

// Main App Component [observer]
const App = observer(() => {
    const { store } = useStores();

    return (
        <>
            <h1>React MobX Modal</h1>
            <div className="page">
                <div>store.modal = {store.modal+''}</div>
                <button onClick={() => store.openModal()}>Open Modal</button>
            </div>
            <MyModal show={store.modal} click={() => store.closeModal()} />
        </>
    );
});

// Render App
ReactDOM.render(
    <App />,
    document.getElementById('app'));