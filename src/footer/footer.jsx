import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
            {/* Hello world */}
            <footer className="footer">
                <p className="p-footer">
                    © Todos los derechos reservados 2024 <br /> Desarrollado por{" "}
                    <a
                        href="https://www.linkedin.com/in/robertfacundofrontend/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Robert
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Footer;