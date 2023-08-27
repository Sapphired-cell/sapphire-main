import React from 'react';

const Contact = () => {
  const email = 'helakjack@gmail.com'; // Replace with your desired email address

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = email;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('Email copied to clipboard: ' + email);
  };

  return (
    <div id='contact-container'>
        Contact me @:
        <h1 id='contact'>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={copyToClipboard}>
            {email}
            </span>
        </h1>
    </div>
  );
};

export default Contact;
