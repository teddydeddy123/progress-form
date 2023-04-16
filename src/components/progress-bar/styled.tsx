import styled from 'styled-components';

type Progress = {
  width: number;
};

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
  background-color: rgba(255, 59, 89, 0.5);
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
`;

export const ProgressBarInternal = styled.div<Progress>`
  width: ${(props) => props.width}%;
  background-color: ${(props) =>
    props.width === 100 ? '#5ada65' : '  #ff3b59'};
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 20px;
  box-sizing: border-box;
  transition-property: width color;
  transition-duration: 0.9s;
`;
