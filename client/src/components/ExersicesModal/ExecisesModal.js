import React, {useCallback, useState} from 'react';
import './ExercisesModal.css'
import { observer } from "mobx-react-lite"
import Modal from "react-modal";
import plus from "../../svg/plus-circle-solid.svg";
import ExerciseData from "../ExerciseData";


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

const ExercisesModal = observer(() => {
    let subtitle;
    const [num,setNum] = useState(0)
    const [name,setName] = useState('')
    const [data,setData] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const afterOpenModal = () =>{subtitle.style.color = '#740005';}
    const children = [];

    for (let i = 0; i < num; i += 1) {
        children.push(<ExerciseData data={data} setData={setData} key={i} number={i}/>);
    }
    return (
        <React.Fragment>
            <img src={plus} alt="image" className="header_link" onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="close" onClick={closeModal}>X</button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Create you Exercise</h2>
                <div className="wrapper-exercise">
                    <div className="wrapper-exercise_name">
                        <div>
                            <p>Exercise name</p>
                            <input className="exercise-name_input"
                                   value = {name}
                                   onChange={e=>setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>num</p>
                            <input className="exercise-num_input"
                                   onChange={e=>setNum(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="exercise-data">
                    {children}
                    </div>
                </div>
                <button className="exercise__button_add">Add</button>
            </Modal>
        </React.Fragment>
    )
})
export default ExercisesModal;



