import styled from "styled-components";

const Wrapper = styled.div`
.header {
    width: 100%;
    height: 10vh;
    background: rgb(22, 27, 34);
    display: flex;
    align-items: center;
}
.user{ 
    display: flex;
    height: 60px;
    color: #FFF;
    background: rgb(22, 27, 34);

    img{
        margin-left: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgb(22, 27, 34);
    }

    small {
        margin: 0 10px 0 10px;
        font-weight: bold;
        font-size: 14px;
        background: rgb(22, 27, 34);
        display: flex;
        align-items: center;
        color: #CCC;
    }
}

`
export default Wrapper