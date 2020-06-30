import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import api from '../../services/api'

/**
 * Metodo de criacao do componente de login.
 * @returns (
 *  <Logon />
 * )
 */
export default function Logon () {
  const [id, setId] = useState('')

  const history = useHistory()

  /**
   * Metodo de callback de quando e submetido o formulario, com o objetivo de
   * realizar o login no sistema.
   * @param {Event} e - Os dados do evento que ocorreu.
   */
  async function handleLogin (e) {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push('/profile')
    } catch (e) {
      alert('Falha no login tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="heroes"/>
    </div>
  )
}
