import React from "react"
import "../../../style/VacancyPage/VacancyCandidaties/vacancyCandidaties.css"
import CandidatieCard from "./CandidateCard/index"

const VacancyCandidaties = () => {

    const candidaties = [{
        name: "Ana",
        age: "28 anos",
        birth: "25/10/2002",
        lastCourse: "Desenvolvimento de Sistemas"
    },
    {
        name: "Ana",
        age: "28 anos",
        birth: "25/10/2002",
        lastCourse: "Desenvolvimento de Sistemas"
    },
    {
        name: "Ana",
        age: "28 anos",
        birth: "25/10/2002",
        lastCourse: "Desenvolvimento de Sistemas"
    }]

    return (
        <>
            <div className="vacancy-candidates">
                <div className="vacancy-candidates-header">
                    <div className="vacancy-candidates-header-title">
                            <p>15 Candidatos de 407 Alunos vinculados</p>
                    </div>
                
                    <div className="vacancy-candidates-header-new">
                          <p>Novos:</p>
                    <p>Ainda não tem nenhum novo candidato</p>
                    </div>
                </div>
                <div className="vacancy-candidates-container">

                    {candidaties.map((candidatie) =><CandidatieCard name={candidatie.name} age={candidatie.age} birth={candidatie.birth} lastCourse={candidatie.lastCourse}/>)}
                    
                </div>
            </div>
        </>
    )
}

export default VacancyCandidaties