import './index.scss';
import { Link } from 'react-router-dom';

export default function Eventos() {

    function clicou() {
        alert( 'Oie, usuário acabou de clicar!' );
    }

    function movimentouMouse() {
        alert( 'Oie, usuário acabou de passar o mouse!' );
    }

    function alterouValor(e) {
        let novoValor = e.target.value; //string
        alert( 'Oie, usuário acabou de alterar o valor do input/select para: ' + novoValor );
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; //boolean
        alert( 'Oie, usuário acabou de alterar o valor do input[checkbox/radio] para: ' + novoValor );
    }

    return (
        <div className="pagina-eventos pagina">

            <header className="cabecalho">
                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1>ReactJS | Eventos</h1>
            </header>
            
            <section className="secao">
                <h1>Entendendo eventos</h1>

                <p onMouseMove={ movimentouMouse } >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi expedita doloribus minus dicta porro nihil cum voluptates veniam in. Esse dolorum ipsum delectus distinctio, saepe id voluptate assumenda vel sunt.
                </p>

                <input onChange={alterouValor} type="text" placeholder='Digite aqui alguma coisa' />

                <textarea onChange={alterouValor} placeholder='Digite aqui'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa facere quaerat nostrum, aliquid pariatur hic soluta, quibusdam in dignissimos debitis quos, placeat ex iure vero architecto dolor nulla sequi. Consequatur?
                </textarea>

                <select onChange={alterouValor}>
                    <option> Selecione </option>
                    <option> Item A </option>
                    <option> Item B </option>
                </select>

                <div className='grupo'>
                    <input type="checkbox" onChange={alterouCheck} /> Opção 1
                    <input type="checkbox" /> Opção 2
                </div>

                <div className='grupo'>    
                    <div>
                        <input type="radio" className='gpo' onChange={alterouCheck} /> Opção 1
                    </div>
                        
                    <div>
                        <input type="radio" className='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={ clicou }>Clique aqui</button>
            </section>

        </div>
    );
}