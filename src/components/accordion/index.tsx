import { useState } from 'react';
import * as S from './styled';
import { Group } from '../types';

type Props = {
  data: Group;
  first: boolean;
  last: boolean;
  updateProgress: () => void;
};

export const Accordion = ({ data, first, last, updateProgress }: Props) => {
  const [shown, setShown] = useState(false);
  const handleToggle = () => setShown((prevState) => !prevState);

  const allChecked = data.tasks.every((task) => task.checked);

  return (
    <S.Wrapper>
      <S.ParentDiv
        first={first}
        last={last}
        open={shown}
        onClick={handleToggle}
      >
        <S.Icon size={20} complete={allChecked} />
        <S.CategoryName complete={allChecked}>{data.name}</S.CategoryName>
        <S.DropdownDiv>
          <S.TextDropdown>{!shown ? 'Show' : 'Hide'}</S.TextDropdown>
          <S.Chevron size={30} open={shown} />
        </S.DropdownDiv>
      </S.ParentDiv>
      {shown && (
        <>
          {data.tasks.map((task, i) => (
            <S.TaskDiv
              key={i}
              last={last}
              open={shown}
              lastCheck={data.tasks.length - 1 == i}
            >
              <S.Input
                id={task.description}
                type="checkbox"
                checked={task.checked ? true : false}
                onChange={() => {
                  task.checked = !task.checked;
                  updateProgress();
                }}
              />
              <S.Label htmlFor={task.description}>{task.description}</S.Label>
            </S.TaskDiv>
          ))}
        </>
      )}
    </S.Wrapper>
  );
};

export default Accordion;
