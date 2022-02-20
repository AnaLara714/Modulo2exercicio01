import React, { useState } from 'react';
import './Input.css';

const Input = () =>{

    const [ num1, setNum1 ] = useState('');
    const [ num2, setNum2 ] = useState('');
    const [ resul, setResul ] = useState('');

    const handleChangeNum1 = (num1) => {
        setNum1(num1.target.value)
    }
    const handleChangeNum2 = (num2) => {
        setNum2(num2.target.value)
    }
    
    const Somar = (event) => {
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);
        const soma = numero1 + numero2;
        setResul('Resultado da soma de ' + num1 + ' e '+ num2 + ' é ' + soma)
        setNum1('');
        setNum2('');
        event.preventDefault();
    }

    return(
        <div className='calculadora'>
            <fieldset className='boxFieldset'>
                <legend className='title'>CALCULAR SOMA</legend>
                <form>
                    <input 
                        type='number' 
                        id='num1' 
                        value={num1}
                        onChange={(num1) => handleChangeNum1(num1)}
                    /> 
                    +
                    <input 
                        type='number' 
                        id='num2'
                        value={num2}
                        onChange={(num2) => handleChangeNum2(num2)}
                    />
                    <br/>
                    <input type='submit' id='button' value='=' onClick={Somar}/>
                    <p id='resul'>{resul}</p>
                </form>
            </fieldset>
        </div>
    );
}

export default Input;