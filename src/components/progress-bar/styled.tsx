import styled from 'styled-components'


type Progress = {
    width: number
}

export const Wrapper = styled.div`
margin-bottom: 25px;
`;

export const Title = styled.h1`
color: #ff3b59;
margin-top: 0;
margin-bottom: 65px;
`;

export const ProgressBarExternal = styled.div`
width: 100%;
background-color: rgba(153, 200, 255, 0.6) ;
height: 60px;
border-radius: 30px;
    overflow: hidden;
`;

export const ProgressBarInternal = styled.div<Progress>`
width: ${props => props.width}%;
background-color: ${props => props.width === 100 ? '#5ada65' : ' #3285e4b2'};
height: 60px;
border-radius: 30px;
display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 20px;
    box-sizing: border-box;
    transition-property: width color;
    transition-duration: .9s;
`;