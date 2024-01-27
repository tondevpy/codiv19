import './App.css'
import FotoGit from '../public/git.png'
import FotoLink from '../public/linkedin.png'
import { useEffect, useState } from 'react'

function App() {

  const [casos, setCasos] = useState([])

  useEffect(()=>{

    function loadApi() {
      const url = 'https://covid19-brazil-api.now.sh/api/report/v1'
      fetch(url)
      .then((r)=> r.json())
      .then((retorno)=> {
        setCasos(retorno.data)
      })
    }
    loadApi()
  }, [])
  
  
  return (
    <div className="container">
    <div className="content">
      <header>
        <h1>Covid-19 Brasil</h1>
        <small>Registro atualizado de casos de covid-19 no Brasil</small>
      </header>

      <div className="tabela">
        <div className="tabelas">
          <table>
            <thead>
              <tr>
                <th>Estado 📍</th>
                <th>Confirmados 🟢</th>
                <th>Mortes ☠️</th>
                <th>Suspeitos 🟡</th>
                <th>Descartados 🚫</th>
                
              </tr>
              
            </thead>
            
            <tbody>
            {casos.map((element, index) => (
                  <tr key={index}>
                    <td>{element.state}</td>
                    <td>{element.cases}</td>
                    <td>{element.deaths}</td>
                    <td>{element.suspects}</td>
                    <td>{element.refuses}</td>
                  </tr>
                ))}
              
            </tbody>
            
          </table>
        </div>
      </div>
      <footer>
        <a href="https://github.com/tondevpy" target="_blank" rel="noopener noreferrer">
          <img src={FotoGit} alt="github"/>
        </a>
        Feito por TonDevPy
        <a href="https://www.linkedin.com/in/everton-macieira-6083222b1/" target="_blank" rel="noopener noreferrer">
          <img src={FotoLink} alt="linkedin"/>
        </a>
      </footer>
    </div>
  </div>
  )
}

export default App
