import React from 'react'

import PageHeader from '../../components/PageHeader'
import TextArea from '../../components/TextArea'
import Input from '../../components/Input'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'



const TeacherForm: React.FC = () => {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <TextArea name="bio" label="Biografia"/>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'História', label: 'História'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Literatura', label: 'Literatura'},
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>

                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm