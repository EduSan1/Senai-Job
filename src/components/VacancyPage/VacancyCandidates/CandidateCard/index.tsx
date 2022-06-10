import React from "react"
import "../../../../style/VacancyPage/VacancyCandidaties/CandidatiesCard/candiadatiesCard.css"

interface ICandidatie {
    name: string
    age: string
    birth: string
    lastCourse: string
}

const CandidatieCard = (props: ICandidatie) => {
    return (
        <div className="candidatie-card">
            <p>{props.name}</p>
        </div>
    )

}

export default CandidatieCard