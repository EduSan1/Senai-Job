import React from "react"
import "../../../../style/VacancyPage/VacancyInformation/informations/informations.css"

interface Iinformation {
    title: string
    description: string
}

const Information = (props: Iinformation) => {
    return (
        <div className="information-container">
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Information