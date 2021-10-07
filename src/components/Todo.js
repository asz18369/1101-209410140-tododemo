import { useState }from 'react';
import Modal_40 from '../components/Modal_40';
import Backdrop_40 from './Backdrop_40';

function Todo_40(props) {
    const [showModal,setShowModal] = useState();

    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    return(
        <div>
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn" onClick={showModalHandler} >Delete</button>
        </div>
        </div>
        {showModal && < Backdrop_40 />}
        {showModal && < Modal_40 text = 'Are you sure?' onClose={closeModalHandler}/>}
        </div>
        
    );
}

export default Todo_40;