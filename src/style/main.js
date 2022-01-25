import styled from 'styled-components';

const Wrapper = styled.div`
*{
    font-family: Sans-serif;
    background: #16161a;
}
.container {
    height: 100vh;

    .info {        
        img{
            margin: 150px auto;
            width: 400px;
            height: 200px;
        }
    }

    .table {
        color: #FFF;
        overflow: auto;
        display: flex;
        justify-content: center;
    }
    table {
        width: 38vw;
        overflow:scroll;
        padding: 20px;
        margin: 0 auto; 

        th {
            padding: 10px;
            text-align: center;
            background: rgb(130,87,229);
        }
        td{
            padding: 10px;
            text-align:center;
            padding:  auto 0;
        }
        tr{
            margin: 10px auto;
        }
        a{
            color: #CCC;
            transition: .3s;
        }
        a:hover{
            color: rgb(130,87,229);
            transition: .3s;
        }
    }
    .src{
            display: flex;
            justify-content: center;
            padding: 20px;
            input {
                color: #FFF;
                height: 40px;
                border: none;
                border-bottom: 1px solid rgb(130,87,229);
                padding: 10px;
            }
            input:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
            }
            button{
                color: #FFF;
                margin-left: 10px;
                background: rgb(130,87,229);
                border: 1px solid #CCC;
                padding: 0 13px;
                border-radius: 5px;
                transition: 0.3s;
                height: 40px;
                cursor: pointer;

                svg {
                    transition: 0.3s;
                    background: rgb(130,87,229);
                }
            }
            button:hover {
                transition: 0.3s;
                background: #FFF;
                color: rgb(130,87,229);
                box-shadow: 2px 2px 4px rgb(130,87,229);
                svg {
                    color: rgb(130,87,229);
                    background: #FFF;
                }
            }
            .srcIcon{
                margin: 0 10px;
            }
            .repos {
                background: rgb(130,87,229);
            }
        }
        .acoes {
            display: flex;
            .favorite {
                background: red;
            }
        }
}
`;

export default Wrapper;