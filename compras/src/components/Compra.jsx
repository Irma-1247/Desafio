import React,{useState} from 'react';
import Suma from './Suma';
import imagen from '../img/delete-bin-2-line.svg';

const Compra = () => {
    const [lista, setLista] = useState({})
    const [listas, setListas] = useState([])
    const [productos, setProductos] = useState([
        {nombre: 'Manzana', precio: 0.25},
        {nombre: 'Aceite', precio: 1.25},
        {nombre: 'Aguacate', precio: 0.50},
        {nombre: 'Shampoo', precio: 2.45},
        {nombre: 'Galletas', precio: 2.99},
        {nombre: 'Cereal', precio: 4},
        {nombre: 'Arroz', precio: 2.31},
        {nombre: 'Pasta', precio: 3.54},
        {nombre: 'Pega', precio: 1.25},
        {nombre: 'Chocolate', precio: 0.75}
    ])
    
    const handleChange = e => {
        let valor = 0;
        productos.filter(producto => producto.nombre === e.target.value).map(producto=>(valor=producto.precio))
        setLista({
            nombre: e.target.value,
            precio: valor,
            cant: 1
        })
    };

    var pagar = 0;

    const handleChange2 = e => {
        if(e.target.value == 0 || e.target.value === '')
        {
            e.target.value = 1
        }
        listas.filter(producto => producto.nombre === e.target.name).map(producto=>(producto.cant = e.target.value))
        setLista([])
    };

    function calculo(){
        pagar = 0
        listas.map((value)=>(
            pagar = pagar + (value.cant * value.precio)
        ))
        return(pagar)
    }

    const handleClick = e => {
        let sel = document.getElementById('se')
        if(sel.value == 1)
        {
            alert('Seleccione un producto')
        }
        else{
            setListas([...listas, lista])
            sel.value=1
            setProductos(productos.filter(producto => producto.nombre !== lista.nombre))
        }
    }

    const quitar = indice => {
        //Agregando a los productos
        setProductos([...productos, listas[indice]])
        //Quitando de la lista
        const newListas = [...listas]
        newListas.splice(indice,1)
        setListas(newListas)
    }

    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
        <div className="container">
        <form onSubmit={e=>{e.preventDefault()}}>
        <label id='tit'>Lista de Compras</label><br /><br/>
        <div className='row'>
        <div className='col-6'>
        <select id='se' onChange={handleChange} className="form-select" aria-label="Default select example" name="todo">
        <option value='1'>Seleccione un producto</option>
        {productos.map((value,index)=>(
            <option key={index} value={value.nombre}>{value.nombre}</option>
        ))}
        </select>
        </div>
        <div className='col-6'>
        <button className="btn btn-success" onClick={handleClick}>Agregar</button>
        </div>
        </div>
        </form><br/>
        <table className="table table-striped table-hover">
        <thead>
            <tr>
            <td>Producto</td>
            <td>Cantidad</td>
            <td>Descartar</td>
            </tr>
        </thead>
        <tbody>
        {
            listas.map((value,index)=>(
                <React.Fragment key={index}>
                <tr>
                <td>
                {value.nombre}<br/>
                ${value.precio.toFixed(2)}
                </td>
                <td><input name={value.nombre} type='number' value={value.cant} onChange={handleChange2}/></td>
                <td><button className="btn btn-outline-success" onClick={() => quitar(index)}><img src={imagen} alt=''/></button></td>
                </tr>
                </React.Fragment>
            ))
        }
        <Suma calculo={calculo} listas={listas}/>
        </tbody>
        </table>
        </div>
        </>
    )
}

export default Compra