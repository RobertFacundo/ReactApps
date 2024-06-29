import React, { useState } from "react";
import './form.scss';

const ContactForm = React.memo(({ onInteract }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log('success:', result);
                alert('Mensaje enviado con exito');
                setFormData({ name: '', email: '', message: '' })
            }).catch(error => {
                console.error('error:', error);
                alert('!');
            });

    };

    const handleClick = () => {
        onInteract('Contactform');
    }

    const handleMouseEnter = () => {
        setShowToolTip(true)
    }

    const handleMouseLeave = () => {
        setShowToolTip(false)
    }


    return (
        <form onSubmit={handleSubmit} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showToolTip && <div className="tooltip">ContactForm</div>}
            <div className="div">
                <label htmlFor="name"></label>
                <input placeholder="Nombre" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="email"></label>
                <input placeholder="E-mail" type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <button type="submit"><span>Submit</span></button>
            </div>
            <div className="div2">
                <label htmlFor="message"></label>
                <input placeholder="Escribe un mensaje" id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
        </form>
    );
});

export default ContactForm;