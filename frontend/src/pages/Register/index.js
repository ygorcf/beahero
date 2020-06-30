import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

/**
 * Metodo de criacao do componente de registrar uma ong.
 * @returns (
 *  <Register />
 * )
 */
export default function Register () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsApp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  /**
   * Metodo de callback de quando foi submetido o formulario de cadastro de ong.
   * Com o objetivo de enviar a requisicao de criar uma ong.
   * @param {Event} e - Os dados do evento que ocorreu.
   */
  async function handleRegister (e) {
    e.preventDefault()
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const result = await api.post('ongs', data)

      alert(`Seu ID de acesso: ${result.data.id}`)
      history.push('/')
    } catch (e) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>


          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}/>
          <input
            type="email"
            placeholder="E-mail"
            value={email} onChange={e => setEmail(e.target.value)}/>
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}/>

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}/>
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf} onChange={e => setUf(e.target.value)}/>
          </div>
          <input className="button" type="submit"/>
        </form>
      </div>
    </div>
  )
}
