import React from "react";
import Styled from '../style/header'
import UserImg from '../assets/compass.png'

export function Header(props) {
    return (
        <Styled>
            <div className="header">
                    <div className="user">
                        <img src={!props.data.avatar_url ? UserImg : props.data.avatar_url} alt={props.data.avatar_url} />
                        <small>{props.data.name}</small>
                    </div>
            </div>
        </Styled>
    )
}