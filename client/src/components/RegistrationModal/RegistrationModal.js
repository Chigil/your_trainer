import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../pages/start-page/section-landing/landing-section.css'
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '350px',
        height: '550px',
        background: 'linear-gradient(180deg,rgba(255, 255, 255, 0.9) 0%,rgba(255, 255, 255, 0.45) 100%)',
    }
};

function RegistrationModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const afterOpenModal = () =>{subtitle.style.color = '#f00';}
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
                <button onClick={closeModal}>X</button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Create You Account</h2>
                <p>Enter You Email</p>
                <input/>
                <p>Enter You Password</p>
                <input/>
                <form>
                    <button>Register</button>
                </form>
            </Modal>
        </div>
    );
}
export default RegistrationModal