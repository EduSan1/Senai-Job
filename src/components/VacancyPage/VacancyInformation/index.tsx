import React from "react"
import "../../../style/VacancyPage/VacancyInformation/vacancyInformation.css"
import information from "./informations/index"
import Information from "./informations/index"

const VacancyInformation = () => {
    return (
        <div className="vacancy-information">
            <div className="vacancy-information-left">
                <Information title={"Responsabilidades e atribuições"} description={"sesisenaisp.jobs.recrut.ai"} />
                <Information title={"Local do trabalho"} description={"Rua Elton Silva, 905 - Centro, Jandira - SP, 06600-025"} />
                <Information title={"Horario"} description={"Segunda a Sexta, 8h diárias, com 1h de intervalo"} />
                <Information title={"Benefícios"} description={"Não Informado"} />
            </div>
            <div className="vacancy-information-right">
                <Information title={"Pré Requisitos"} description={"Conhecimento basico na area de manutenção predial, podendo compreender áreas de: Alvenaria, Pintura, Instalações Eletricas"} />
                <Information title={"Salário"} description={"R$ 1945"} />
                <Information title={"Observações"} description={"inscrevasse no link: sesisenaisp.jobs.recrut.ai"} />
            </div>
        </div>
    )
}

export default VacancyInformation