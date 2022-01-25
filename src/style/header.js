import styled from "styled-components";

const Wrapper = styled.div`
.header {
    width: 100%;
    height: 12vh;
    background: #000;
    display: flex;
    align-items: center;
}
.user{ 
            display: flex;
            height: 60px;
            color: #FFF;
            background: #000;

            img{
                margin-left: 10px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #000;
            }

            small {
                margin: 0 10px 0 10px;
                font-weight: bold;
                font-size: 14px;
                background: #000;
                display: flex;
                align-items: center;
                color: #FFF;
            }

`
export default Wrapper