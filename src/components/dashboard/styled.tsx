import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/evil/ChevronRight';

export const Wrapper = styled.div`
  background-color: white;
  margin: 20px 0 10px;
  padding: 40px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Tasks = styled.div`
  border-radius: 20px;
`;

export const ChevronIcon = styled(ChevronRight)`
  color: #646cff;
  transition: color 0.6s;
`;

export const NextStep = styled.div`
  margin-top: 30px;
  margin-left: auto;
  color: black;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    svg,
    a {
      color: #5ada65;
      transition: color 0.6s;
    }
  }
`;
