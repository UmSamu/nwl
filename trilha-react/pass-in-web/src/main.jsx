import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

// Componentes e propriedades
// Componente: algo que ser repete na tela várias vezes II desconectar uma parte da tela de outra
// Propriedade: atributo para um componente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 