// src/CreditCardForm.js


import React, { useState } from 'react';

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'cardName':
        setCardName(value);
        break;
      case 'cardExpiry':
        setCardExpiry(value);
        break;
      case 'cardCVC':
        setCardCVC(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Tarjera de credito</h2>
      <form>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label>Nombre en la tarjeta:</label>
          <input
            type="text"
            name="cardName"
            value={cardName}
            onChange={handleInputChange}
            placeholder="INGRESAR NOMBRE"
          />
        </div>
        <div> 

          <label>Fecha de vencimiento:</label>
          <input
            type="text"
            name="cardExpiry"
            value={cardExpiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVC:</label>
          <input
            type="text"
            name="cardCVC"
            value={cardCVC}
            onChange={handleInputChange}
            placeholder="123"
          />
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
