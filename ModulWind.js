import './ModulWind.css';
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

function ModulWind() {

  const [state, setState] = useState(false)

  return (
    <div className="ModulWind">
      {!state  && (<button className='open-modal-btn' onClick={() => setState(true)}> Open Wind </button>)}
      {state && (
        <div className='overlay'>
        <div className='modal'>
          <svg onClick={() => setState(false)}>
            <AiOutlineClose />
          </svg>
          <img src="https://www.icegif.com/wp-content/uploads/2021/10/icegif-1645.gif" alt="#" />
        </div>
      </div>
      )}

    </div>
  );
}

export default ModulWind;