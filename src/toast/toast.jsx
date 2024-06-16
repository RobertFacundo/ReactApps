import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const ToastButton = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleButtonClick = async () => {
        setButtonDisabled(true); // Deshabilitar el botón al hacer clic
    
        
        toast("¡HEY!", {
          autoClose: false, 
          className: 'custom-toast',
          closeButton: false, 
        });
    
        
        await new Promise((resolve) => setTimeout(resolve, 500)); 
    
        
        toast("¡HO!", {
          autoClose: false,
          className: 'custom-toast',
          closeButton: false, 
        });
    
        
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
    
        
        toast("¡LET'S GO!", {
          autoClose: false,
          className: 'custom-toast',
          closeButton: false, 
        });
    
        
        await new Promise((resolve) => setTimeout(resolve, 1300));
    
       
        setTimeout(() => {
          toast.dismiss(); 
          setButtonDisabled(false); 
        }, 300); 
      };

    return (
        <div className="toast-container">
            <img src={buttonDisabled ? "/top-hat.png" : "/magic-hat.png"} 
                onClick={!buttonDisabled ? handleButtonClick : null} 
                className={buttonDisabled ? "disabled" : ""}
                alt="Magic Hat"/>
            <ToastContainer />
        </div>
    );
};

export default ToastButton;


