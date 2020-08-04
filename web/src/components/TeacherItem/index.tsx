import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/66179207?s=460&u=083d917cf5d531dde32a545e099772c82f16f847&v=4" alt="Izabella Ribeiro"/>
                    <div>
                        <strong>Izabella Ribeiro</strong>
                        <span>Química</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br/><br/>
                    Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                </p>

                <footer>
                    <p>
                        Preço/hora 
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsAppIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>
                </footer>
    </article>
    );
}

export default TeacherItem;