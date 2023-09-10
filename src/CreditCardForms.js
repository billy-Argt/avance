import { useState, useEffect } from 'react'//Funciona para leer y modificat el estado de un componente. Asi como la orientaciòn a objetos del getters y setters.
import Cards from 'react-credit-cards-2';//Es el componente esportado desde la libreria de componentes de react-credit-cards-2 
import 'react-credit-cards-2/dist/es/styles-compiled.css';//Son los estilos predeterminados de la libreria de react-credit-cards-2 para el estilo de su tarjeta.

const PaymentForm = () => {


    const [state, setState] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        focus: ''
    })

    const [errors, setErrors] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
      });
    

      const [cardNumber, setCardNumber] = useState('');
      const handleCardNumberChange = (e) => {
        const { value } = e.target;
      
        // Eliminar todos los caracteres no numéricos del valor ingresado
        const formattedValue = value.replace(/\D/g, '');
      
        // Validar que el valor tenga al menos 16 dígitos
        if (formattedValue.length < 16) {
          setErrors({
            ...errors,
            number: 'El número debe tener al menos 16 dígitos',
          });
        } else {
          setErrors({
            ...errors,
            number: '',
          });
        }
      
        // Formatear el valor agregando espacios cada cuatro dígitos
        const formattedNumber = formattedValue//Es la funcion que se encarga de darle formato al numero de la tarjeta de credito. 
          .replace(/(\d{4})/g, '$1 ')
          .trim();
      
        setCardNumber(formattedNumber);
      
        // Actualizar el estado de la tarjeta con el número formateado
        setState({
          ...state,
          number: formattedValue, // Actualizar el estado de la tarjeta con el número sin espacios
        });
      };

      const handleBlur = (e) => {
        const { name, value } = e.target;
    
        // Verificar si el campo está vacío
        if (value.trim() === '') {
          setErrors({
            ...errors,
            [name]: 'Campo Requerido',
          });
        }
      }
    
    const camposLlenos = Object.values(state).every(value => value !== ''); 

    const handleFocus = (e) => {
        setState({ 
            ...state,
            focus: e.target.name 
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setState({
          ...state,
          [name]: value,
        });
    
        // Validar campos y establecer mensajes de error
        if (name === 'number') {
          if (value.length !== 16) {
            setErrors({
              ...errors,
              [name]: 'El número debe tener 16 dígitos',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'name') {
          if (value.trim() === '') {
            setErrors({
              ...errors,
              [name]: 'Campo obligatorio',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'expiry') {
          if (value.length !== 4) {
            setErrors({
              ...errors,
              [name]: 'Formato válido: MM/YY',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        } else if (name === 'cvc') {
          if (value.length !== 3) {
            setErrors({
              ...errors,
              [name]: 'El CVC debe tener 3 dígitos',
            });
          } else {
            setErrors({
              ...errors,
              [name]: '',
            });
          }
        }
      }
    const submitPayment = () => {
       
        alert(JSON.stringify(state))
    }

    return (
        <div className="card" >
            <div className="card-body">
                <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            className="input"
                            name="number"
                            maxLength="19"
                            placeholder="Número de tarjeta"
                           // onChange={handleChange}
                           onChange={handleCardNumberChange}
                           value={cardNumber}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <p className='text-red-500 text-sm'>{errors.number}</p>
                    </div>
                    <div className="">
                        <label htmlFor="Nombre">Nombre</label>
                        <input
                            type="text"
                            className="input"
                            name="name"
                            maxLength="30"
                            placeholder="Nombre"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <p className='text-red-500 text-sm'>{errors.name}</p>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="expiry">Vencimiento</label>
                            <input
                                type="date"
                                className="input"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expiración"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <p className='text-red-500 text-sm'>{errors.expiry}</p>
                        </div>
                        <div className="">
                            <label htmlFor="cvc">CVC</label>
                            <input className="input"
                            
                                type="number"
                               
                                name="cvc"
                                maxLength="4"
                                placeholder="CVC"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <p className='text-red-500 text-sm'>{errors.cvc}</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-xl border border-black py-2 font-bold"
                        onClick={submitPayment}
                        disabled={!camposLlenos}
                    >Pagar</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm