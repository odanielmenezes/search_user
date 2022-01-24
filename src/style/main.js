import styled from 'styled-components';

const Wrapper = styled.div`
*{
    font-family: Sans-serif;
    background: #16161a;
}
body {
}
.container {
    height: 100vh;
    h2{
        color: #FFF;
        margin-top: 10vh;
        text-align:center;
        position: relative;
        animation: opacidade 1s infinite;
        animation-direction: alternate;

        @keyframes opacidade {
            0%  {opacity:0;}
            20% {opacity:0.2;}
            40% {opacity:0.4;}
            60% {opacity:0.6;}
            80% {opacity: 0.8;}
            100% {opacity:1;}
        }
    }
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
        margin: 30px auto; 

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
                    background: rgb(130,87,229);
                    transition: 0.3s;
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
        .user{
            color: #FFF;
            position: absolute;
            left: 20px;
            text-align: center;

            img{
                width: 150px;
                height: 150px;
                border-radius: 50%;
                border: 5px solid rgb(130,87,229);
            }

            small {
                margin: 0 10px 0 10px;
                font-weight: bold;
                font-size: 14px;
            }
            h1 {
                color: #CCC;
                margin: 0;
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