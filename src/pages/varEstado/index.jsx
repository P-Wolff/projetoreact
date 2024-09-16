import './index.scss';

import { tratarNumber } from '../../utils/conversao';
import { useState } from 'react';
import { calcularTotalIngresso } from '../../services/ingresso';

export default function VarEstado() {
    const [ contador, setContador ] = useState(0);
    const [ tituloS2, setTituloS2 ] = useState('Oie');
    const [ tituloS3, setTituloS3 ] = useState('Escolha um');
    const [ marcouOpcaoS4, setMarcouOpcaoS4 ] = useState(false);
    const [ tituloS5, setTituloS5 ] = useState('Oie');
    const [ descricaoS5, setDescricaoS5 ] = useState('Oie');


    {/* Variaveis da Calculadora */} 
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ res, setRes ] = useState(0);


    {/* Variaveis do Ingresso */} 
    const [ qtdIng, setQtdIng ] = useState(0);
    const [ meiaIng, setMeiaIng ] = useState(0);
    const [ cupom, setCupom ] = useState('');
    const [ totalIng, setTotalIng ] = useState(0);

    
    {/* Variaveis da Metas */} 
    const [ novaMeta, setNovaMeta ] = useState('');
    const [ listaMetas, setListaMetas ] = useState([]);


    {/* contador */} 
    function aumentar() {
        setContador( contador + 1 );
    }
    function diminuir() {
        if ( contador > 0 ) {            
            setContador( contador - 1 );
        }
    }
    

    {/* Função da Calculadora */} 
    function somar() {
        let soma = tratarNumber( num1 ) + tratarNumber( num2 );
        setRes( soma );
    }

    {/* Função do Ingresso */} 
    function calcularIngresso() {
        let tot = calcularTotalIngresso( qtdIng, meiaIng, cupom );

        setTotalIng( tot );
    } 

    {/* Função da Metas */} 
    function adicionarMeta() {
        {/* listaMetas.push(novaMeta) === ... => .push | os itens do vetor atual vai para dentro de um novo vetor
        
        Criará um novo vetor pelos colchetes = []; colocará todos os itens do vetor atual para o novo que foi criado, em seguida, será jogado para o set */}

        if ( novaMeta != '' ) {
            setListaMetas([ ...listaMetas, novaMeta ])
            setNovaMeta('')
        }
    }

    function teclaApertada( e ) {
        if( e.key == 'Enter' ) {
            adicionarMeta();
        }
    }

    return(
        <div className="pagina-varestado pagina">
            
            <header className="cabecalho">
                <h1>ReactJS | Variedade de Estado</h1>
            </header>

            {/* Metas */} 
            <div className="secao metas">
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={ teclaApertada } value={ novaMeta } onChange={ e => setNovaMeta( e.target.value )} />
                    <button onClick={ adicionarMeta }>Adicionar</button>
                </div>

                <ul>
                    {listaMetas.map( item =>
                        <li> { item } </li>
                    )}
                </ul>
                
            </div>


            {/* Ingresso */} 
            <div className="secao ingresso">
                <h1>Venda de Ingressos</h1>

                <div className="entrada">
                    <div>
                        <label>Quantidade: </label>
                        <input type="text" value={ qtdIng } onChange={ e => setQtdIng( e.target.value )} />
                    </div>

                    <div>
                        <label>Meia entrada: </label>
                        <input type="checkbox" value={ meiaIng } onChange={ e => setMeiaIng( e.target.checked )} />
                    </div>

                    <div>
                        <label>Cupom</label>
                        <input type="text" value={ cupom } onChange={ e => setCupom( e.target.value )} />
                    </div>

                    <div>
                        {/* &nbsp; é um espaço */} 
                        <label> &nbsp; </label>
                        <button onClick={ calcularIngresso }> Calcular </button>
                    </div>

                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                </div>
            </div>


            {/* calculadora */} 
            <div className="secao calculadora">
                <h1>Calculadora</h1>

                <div className="entrada">
                    <input type="text" value={ num1 } onChange={ e => setNum1( e.target.value )} />
                    <input type="text" value={ num2 } onChange={ e => setNum2( e.target.value )} />
                    <div>=</div>
                    <div className='res'> { res } </div>
                </div>

                <button onClick={ somar }>Somar</button>
            </div>
            

            {/* contador */} 
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