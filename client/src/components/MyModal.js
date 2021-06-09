import { observer } from "mobx-react-lite";
import Modal from "react-modal";
import {Fragment, useContext} from "react";
import {Context} from "../index";
import LoginModal from "./LoginModal/LoginModal";
import ExercisesModal from "./ExersicesModal/ExecisesModal";
import * as ModalTypes from "./ModalTypes";


const mapTypeToModal = {
    [ModalTypes.ADD_LOGIN_MODAL]: LoginModal,
    [ModalTypes.ADD_EXERCISES_MODAL]: ExercisesModal,
};

const MyModal = observer(() => {
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.25)'
        },
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            fontSize              : '22px',
            width: '350px',
            height: '520px',
            borderRadius: '15px'
        }};
    const {modal} = useContext(Context)
    console.log(modal._modalState)
    if(modal._modalState === false) return null
    const name = modal._modalName
    const data = modal._modalValues
    const CurrentModal = mapTypeToModal[name]
    const handleCloseModal = () => {
        modal.closeModal()
    }
    return (
        <>
            {CurrentModal&&(
                <Modal
                    isOpen
                    onRequestClose={()=>modal.closeModal()}
                    style={customStyles}
                    ariaHideApp={false}
                >

                    <div className="modal-content">
                        <div className="modal-header">
                            Никита
                        </div>
                        <div className="modal-body">
                            <CurrentModal onCloseModal={handleCloseModal}/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={()=>modal.closeModal()}>
                                Лошара
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>

    );
});


export default MyModal