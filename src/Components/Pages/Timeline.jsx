import React, { useContext, } from 'react';
import { AppContext } from '../Context/ContextProvider';
import ShowTimeLine from './ShowTimeLine';
import { SlOptions } from 'react-icons/sl';
import Videos from './Videos';
import Messages from './Messages';

const Timeline = () => {
  const { clicked ,videos,messages} = useContext(AppContext)


  return (
    <div className="rounded-2xl bg-white  p-4 md:p-6 flex flex-col gap-5 md:gap-5">
      {
        clicked.map((click) => (
          <ShowTimeLine key={click.id} click={click} />
        ))
      }
      {
        videos.map((videoItem) => (
          <Videos key={videoItem.id} videoItem={videoItem} />
        ))
      }
      {
        messages.map((messageItem) => (
          <Messages key={messageItem.id} messageItem={messageItem} />
        ))
      }
      
    </div>
  );
};

export default Timeline;