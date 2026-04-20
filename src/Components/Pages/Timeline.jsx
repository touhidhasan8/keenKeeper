import React, { useContext } from 'react';
import { AppContext } from '../Context/ContextProvider';
import ShowTimeLine from './ShowTimeLine';

const Timeline = () => {
  const { clicked } = useContext(AppContext)
  console.log(clicked);
  return (
    <div className="rounded-2xl bg-white  p-4 md:p-6 flex flex-col gap-5 md:gap-5">
      {
        clicked.map((click) => (
          <ShowTimeLine key={click.id} click={click} />
        ))
      }
    </div>
  );
};

export default Timeline;