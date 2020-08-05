import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import './styles.css'


export interface ITeacher {  
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
}

interface ITeacherItemProps {
    teacher: ITeacher
}

const TeacherItem: React.FC<ITeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    >
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </a>
            </footer>
        </article> 
    )
}

export default TeacherItem;