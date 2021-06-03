import React, {useCallback, useState} from 'react';
import '../../pages/start-page/section-landing/landing-section.css'
import './RegistrationModal.css'
import Modal from 'react-modal';


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
        height: '450px',
        borderRadius: '15px'
    }};

function RegistrationModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const afterOpenModal = () =>{subtitle.style.color = '#740005';}
    return (
        <div>
            <button className="intro_button" onClick={openModal}>Try Now</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="close" onClick={closeModal}>X</button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Create You Account</h2>
                <p>Enter You Email</p>
                <input/>
                <p>Enter You Password</p>
                <input/>
                <button className="register">Register</button>
            </Modal>
        </div>
    );
}
export default RegistrationModal