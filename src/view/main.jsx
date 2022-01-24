import React, { useState } from "react";
import Styled from '../style/main'
import { message, Badge } from "antd";
import { SearchOutlined, StarOutlined, DeleteOutlined, CopyOutlined, GithubOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

export function Main() {
    const [repositories, setRepositories] = useState([])
    const [user, setUser] = useState([])
    const [success, setSuccess] = useState(false)
    const jsonInfos = require('../varibles/atributos.json')

    async function searchRepositories() {
        let valor = document.querySelector("#busca")
        if (valor.value === '') {
            message.warning({
                content: 'Informe um usuário',
                style: {
                    marginTop: '20vh',
                },
                duration: 2
            });
        }
        else {
            let responseRepo = await fetch(`https://api.github.com/users/${valor.value}/repos`)
                .then(response => {
                    if (response.ok) {
                        setSuccess(true)
                    }
                    else {
                        setSuccess(false)
                        message.error('Usuário não encontrado')
                    }
                    return response
                })
                .catch(error => {
                    return error
                })
            let responseUser = await fetch(`https://api.github.com/users/${valor.value}`)
                .then(response => {
                    if (response.ok) {
                        setSuccess(true)
                    }
                    else {
                        setSuccess(false)
                    }
                    return response
                })
                .catch(error => {
                    return error
                })
            const dataRepo = await responseRepo.json()
            const dataUser = await responseUser.json()
            setUser(dataUser)
            setRepositories(dataRepo)
        }
    }

    async function searchUser() {
        let valor = document.querySelector("#busca")
        if (valor.value === '') {
            message.warning({
                content: 'Informe um usuário',
                style: {
                    marginTop: '20vh',
                },
                duration: 2
            });
        }
        else {
            let response = await fetch(`https://api.github.com/users/${valor.value}`)
                .then(response => {
                    if (response.ok) {
                        setSuccess(true)
                    }
                    else {
                        setSuccess(false)
                        message.error('Usuário não encontrado')
                    }
                    return response
                })
                .catch(error => {
                    return error
                })
            const data = await response.json()
            setUser(data)
        }
    }

    async function starred() {
        let valor = document.querySelector("#busca")
        if (valor.value === '') {
            message.warning({
                content: 'Informe um usuário',
                style: {
                    marginTop: '20vh',
                },
                duration: 2
            });
        }
        else {
            let response = await fetch(`https://api.github.com/users/${valor.value}/starred`)
                .then(response => {
                    if (response.ok) {
                        setSuccess(true)
                    }
                    else {
                        setSuccess(false)
                        message.error('Usuário não encontrado')
                    }
                    return response
                })
                .catch(error => {
                    return error
                })
            const data = await response.json()
            if (data.length === 0) {
                message.info({
                    content: 'Usuário sem reposórios favoritos',
                    style: {
                        marginTop: '20vh',
                    },
                    duration: 2
                });
            }
            data.length === 0 ? setRepositories(repositories) : setRepositories(data)
        }
    }

    function clear() {
        setRepositories([])
        setUser([])
        document.querySelector("#busca").value = ''
    }
    return (
        <Styled>
            <div className="container">
                <div className="src">
                    {user.length !== 0
                        ? <div className="user">
                            {user.length !== 0 ? <img src={user.avatar_url} alt={user.avatar_url} /> : <></>}<br />
                            <h1>{user.name}</h1><br />
                            <small>{user.location}</small>
                        </div>
                        : <></>
                    }
                    <button type="submit" onClick={searchUser} className="srcIcon"><SearchOutlined /></button>
                    <input type="text" className="input" id="busca" placeholder="Procurar por usuário" required />
                    <Badge count={repositories.length}>
                        <button type="submit" className="repos" onClick={searchRepositories}><CopyOutlined />{jsonInfos.repositorios}</button>
                    </Badge>
                    <button type="submit" onClick={starred}><StarOutlined />{jsonInfos.favoritos}</button>
                    <button type="submit" onClick={clear}><DeleteOutlined />{jsonInfos.limpar}</button>
                </div>
                <div className="table">
                    {repositories.length > 0
                        ? <table>
                            <thead>
                                <tr>
                                    <th>{jsonInfos.tableId}</th>
                                    <th>{jsonInfos.tableName}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                repositories.map(item => (
                                    <tbody>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><a href={item.svn_url} target="_blank">Acessar <GithubOutlined /></a></td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                        : <div className="info"><img src={jsonInfos.logo} alt="Git Hub" className="logoGit"/></div>
                    }
                </div>
            </div>
        </Styled>
    )
}