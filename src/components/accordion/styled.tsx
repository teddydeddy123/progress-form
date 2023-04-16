import styled from 'styled-components'
import {ChevronDown } from '@styled-icons/evil/ChevronDown'
import {ClipboardTaskListLtr} from '@styled-icons/fluentui-system-regular/ClipboardTaskListLtr'

type Position = {
    open?: boolean,
    last?: boolean,
    first?: boolean,
    lastCheck?: boolean
}

type Complete = {
    complete: boolean
}

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const ParentDiv = styled.div<Position>`
border: 1px solid gray;
background-color:white;
border-radius: ${props => props.first ? '20px 20px 0 0' : (props.last && props.open) ? '0' : (props.last && !props.open) ? '0 0 20px 20px' : '0'};
height: 70px;
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
padding: 10px 20px;
cursor: pointer;
    border-top: ${props => !props.first ? '0' : ''};
`;

export const Icon = styled(ClipboardTaskListLtr)<Complete>`
color: ${props => props.complete ? '#5ada65' : 'black'};
`;

export const CategoryName = styled.p<Complete>`
color: ${props => props.complete ? '#5ada65' : 'black'};
`;

export const DropdownDiv = styled.div`
display: flex;
gap: 10px;
margin-left: auto;
align-items: center;
`;

export const TextDropdown = styled.p`
color: gray;
`;


export const Chevron = styled(ChevronDown)<Complete>`
color: gray;
transform: ${props => props.open ? 'rotate(180deg)' : ''};
transition-property: transform;
transition-duration: .6s;
`;




export const TaskDiv = styled.div<Position>`
background-color: white;
border-radius: ${props => props.last && props.open && props.lastCheck ? '0 0 20px 20px' : ''};
border: 1px solid gray;
border-top: 0;
display: flex;
gap: 15px;
align-items: center;
padding: 10px 20px;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
cursor: pointer;
-webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid black;
  border-radius: 20%;
  outline: none;
  transition: 0.2s;
  &:checked {
    background-color: #5ada65;
    border-color:  #5ada65;
  }
`;

export const Label = styled.label`
color: black;
cursor: pointer;
`;