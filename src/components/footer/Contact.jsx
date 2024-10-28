import React from 'react';

const Contact = (props) => {
    const { text, icon, link } = props;

    return (
        <div className="footer-contact">
            <img src={icon} className="" alt="contact"/>
            {link ? (
                <a href={link}>
                    {text}
                </a>
            ) : (
                <div>{text}</div>
            )}
        </div>
    );
};

export default Contact;
