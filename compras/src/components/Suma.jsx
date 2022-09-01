import React from 'react'

const Suma = ({calculo, listas}) => {
    let pagar = calculo(listas)
    return (
    <>
    <tr>
        <td colSpan='3' id='tot'>Total: ${pagar.toFixed(2)}</td>
    </tr>
    </>
    )
}
export default Suma