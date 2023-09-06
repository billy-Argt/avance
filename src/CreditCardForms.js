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
            [name]: value 
        });
    }

    const submitPayment = () => {
        console.log("name => " , state.name)
        console.log("number => " , state.number)
        console.log("expiry => " , state.expiry)
        console.log("cvc => " , state.cvc)
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
                            maxLength="16"
                            placeholder="Número de tarjeta"
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
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
                        />
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="expiry">Vencimiento</label>
                            <input
                                type="text"
                                className="input"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expiración"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="cvc">CVC</label>
                            <input className="input"
                                type="text"
                               
                                name="cvc"
                                maxLength="4"
                                placeholder="CVC"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-xl border border-black py-2 font-bold"
                        onClick={submitPayment}
                    >Pagar</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm