import './index.scss';
import { useState } from 'react';

export default function VarEstado() {
    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Oie');
    const [tituloS3, setTituloS3] = useState('Escolha um');
    const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oie');


    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        if (contador > 0) {            
            setContador(contador - 1);
        }
    }
    


    return(
        <div className="pagina-varestado pagina">
            
            <header className="cabecalho">
                <h1>ReactJS | Variedade de Estado</h1>
            </header>
            
            <div className="secao">
                <h1>Contador</h1>

                <div className="cont">
                    <button onClick={ aumentar }>+</button>
                        { contador }
                    <button onClick={ diminuir }>-</button>
                </div>

            </div>

            <div className="secao">
                <h1>{ tituloS2 }</h1>
                <input type="text" value={ tituloS2 } onChange={ e => setTituloS2(e.target.value) } />
            </div>

            <div className="secao">
                <h1>{ tituloS3 }</h1>
                <select onChange={ e => setTituloS3(e.target.value) }>
                    <option >Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML/CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className="secao">
                <h1>Programar é Lindezinha? { marcouOpcaoS4 ? 'Sim' : 'Não' }</h1>
                <input type="checkbox" checked={ marcouOpcaoS4 } onChange={     e => setMarcouOpcaoS4( e.target.checked ) } /> Programar é lindezinha?
            </div>

            <div className="secao">
                <h1> { tituloS5 } </h1>
                <input type="text" value={ descricaoS5 } onChange={ e => setDescricaoS5(e.target.value) } />
                <button onClick={ () => setTituloS5(descricaoS5) }>Alterar</button>
            </div>

        </div> 
    )

}