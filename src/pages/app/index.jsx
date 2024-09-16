import './index.scss';
import { Link } from 'react-router-dom'


export default function App() {


  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1 className='titulo1'>
          Estudos de ReactJS | 
          <i className='fa fa-heart'>
          </i>
        </h1>
        <br />
      </header>

        <section className='secao'>
          <h1> Estudando ReactJS </h1>

          <input type="text" placeholder='Digite aqui'/>
          <br /><br />

          <select >
            <option>Item 1</option>
            <option>Item 2</option>
          </select>

          <br /><br />
          <button>Clique aqui</button>
          
          <ul>
            <il>
              <Link to='/contato'>Ir para contato</Link>
            </il>
            <il>
              <Link to='/eventos'>Ir para eventos</Link>
            </il>
            <il>
              <Link to='/varestado'>Ir para eventos de estado</Link>
            </il>
          </ul>

        </section>

    </div>
  );
}
