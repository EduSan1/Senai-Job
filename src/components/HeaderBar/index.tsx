import React from "react"
import "../../style/HeaderBar/headerBar.css"
import exitIcon from "../../assets/image/exit.png"

const HeaderBar = () => {
    return (
        <div className="header-bar">
            <div className="header-bar-menu">
                <div className="menu-bar-one"></div>
                <div className="menu-bar-two"></div>
                <div className="menu-bar-three"></div>
            </div>
            <div className="header-bar-exit">
                <div className="exit-img-container">
                    <img src={exitIcon} alt="" />
                </div>
                <p>Sair</p>
            </div>
        </div>
    )
}

export default HeaderBar