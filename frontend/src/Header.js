import React from 'react'

/**
 * Metodo de criacao do componente do cabecalho.
 * @param {Object} param - Os parametros de criacao do componente.
 * @param {Object} param.children - Os componentes filhos do header.
 * @returns (
 *  <Header> ... </Header>
 * )
 */
export default function Header({ children }) {
  return (
    <header>
      <h1>{ children }</h1>
    </header>
  )
}
