import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

/**
 * Metodo de criacao do componente de cadastrar um novo incidente.
 * @returns (
 *  <NewIncidents />
 * )
 */
export default function NewIncidents () {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  /**
   * Metodo de callback de quando for submetido o formulario de adicionar
   * incidente, com o objetivo de enviar a requisicao de adicionar incidente.
   * @param {Event} e - Os dados do evento que ocorreu.
   */
  async function handleNewIncident (e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile')
    } catch (e) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>


          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}/>
          <textarea
            placeholder="Descricao"
            value={description}
            onChange={e => setDescription(e.target.value)}/>
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}/>

          <input className="button" type="submit"/>
        </form>
      </div>
    </div>
  )
}
