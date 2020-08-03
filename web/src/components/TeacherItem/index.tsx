import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61305960?s=460&u=9c089ab3085938f9f7bbc20d3667b78a47d9df2f&v=4" alt="Lucas Paulo"/>
                <div>
                    <strong>Lucas Paulo</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Benditos sejam Newton, Einstein e Plank!!
                <br/><br/>
                Pessoa que gosta de falar sobre assuntos que a maioria das pessoas não gostam de falar.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article> 
    )
}

export default TeacherItem;