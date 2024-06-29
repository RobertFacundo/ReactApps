import React, { useState } from "react";
import axios from "axios";
import './imageGenerator.scss';

const ImageFetcher = React.memo(({ onInteract }) => {

    const [showToolTip, setShowToolTip] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const categories = [
        'Naturaleza',
        'Monumentos',
        'Tecnología',
        'Comida',
        'Aérea',
        'Arquitectura',
        'Arrecifes',
        'Arte Callejero',
        'Música',
        'Arte',
        'Neón',
        'Abstracto',
        'Viajes',
        'Animales',
        'Paisajes'
    ];

    const fetchImage = async (category) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.unsplash.com/photos/random`, {
                params: {
                    query: category,
                    client_id: 'TlBNLeaFLrERe5Hw6iOb5bI7FnlZ61lWxKSzCvIupbI'
                }
            });
            const imageUrl = response.data.urls.regular;
            setImageUrl(imageUrl);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                alert('Has excedido el límite de solicitudes. Por favor, intenta más tarde.');
            } else {
                setError('Error al obtener la imagen. Por favor, intenta de nuevo.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setImageUrl('');
        fetchImage(category);
    };

    const handleClick = () => {
        onInteract('ImageFetcher');
    }

    const handleMouseEnter = () => {
        setShowToolTip(true)
    }
    const handleMouseLeave = () => {
        setShowToolTip(false)
    }

    return (
        <div className="image-fetcher" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showToolTip && <div className="tooltip">Image Generator</div>}
            <div className="options">
                {categories.map((category, index) => (
                    <button key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={category === selectedCategory ? 'active' : ''}>
                        {category}
                    </button>
                ))}
            </div>
            <div className={`image-display ${imageUrl ? 'visible' : ''}`}>
                <div className="loader"></div>
                {imageUrl && (

                    <img src={imageUrl} alt={selectedCategory} style={{ display: "block" }} />

                )}
            </div>
        </div>
    );
});

export default ImageFetcher;