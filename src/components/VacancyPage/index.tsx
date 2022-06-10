import React from "react"
import "../../style/VacancyPage/vacancyPage.css"

import returnIcon from "../../assets/image/return.png"
import VacancyInformation from "./VacancyInformation/index"
import VacancyCandidaties from "./VacancyCandidates/index"

const VacancyPage = () => {
    return (
        <>
            <div className="vacancy-page-container">
                <div className="vacancy">
                    <div className="vacancy-header">
                        <div className="return-container">
                            <img src={returnIcon} alt="" />
                        </div>
                        <div className="vacancy-header-title">
                            <p>Emprego / AUXILIAR DE MANUTENÇÃO manutenção predial / induastrial</p>
                        </div>
                        <div className="vacancy-header-number">
                            <p>1 vaga</p>
                        </div>
                    </div>
                    <VacancyInformation/>
                    <VacancyCandidaties/>
                </div>
            </div>
        </>
    )
}

export default VacancyPage;