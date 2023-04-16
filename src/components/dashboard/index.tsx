import { useEffect, useState } from 'react';
import * as S from './styled';
import Accordion from '../accordion';
import ProgressBar from '../progress-bar';
import { Group } from '../types';

export const Dashboard = () => {
  const [data, setData] = useState<Group[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress',
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const updateProgress = () => {
    const tasks = data.flatMap((group) => group.tasks);
    const checkedValue = tasks
      .filter((task) => task.checked)
      .reduce((total, task) => total + task.value, 0);
    const totalValue = tasks.reduce((total, task) => total + task.value, 0);
    const percentage = Math.round((checkedValue / totalValue) * 100);
    setProgress(percentage);
  };

  useEffect(() => {
    updateProgress();
  }, [data]);

  const tasks = data.flatMap((group) => group.tasks);
  const allChecked = tasks.every((task) => task.checked);
  console.log(allChecked);
  return (
    <S.Wrapper>
      <ProgressBar progress={progress} />
      <S.Tasks>
        {data.map((group, i) => (
          <Accordion
            key={i}
            data={group}
            first={i === 0}
            last={i === data.length - 1}
            updateProgress={updateProgress}
          />
        ))}
      </S.Tasks>
      {allChecked && (
        <S.NextStep>
          <a>Proceed</a>
          <S.ChevronIcon size={30} />
        </S.NextStep>
      )}
    </S.Wrapper>
  );
};

export default Dashboard;
