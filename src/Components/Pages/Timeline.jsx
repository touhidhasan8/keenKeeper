import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/ContextProvider';
import ShowTimeLine from './ShowTimeLine';
import Videos from './Videos';
import Messages from './Messages';
import { SlOptions } from "react-icons/sl";

const Timeline = () => {
  const { clicked, videos, messages } = useContext(AppContext);

  const [filter, setFilter] = useState("all");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 w-full">

      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl sm:text-2xl font-bold">
          Timeline
        </h1>

        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <SlOptions size={20} />
          </button>

          {showOptions && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-xl w-36 p-2 z-50 flex flex-col gap-2">

              <button
                onClick={() => {
                  setFilter("all");
                  setShowOptions(false);
                }}
                className="text-left px-3 py-2 rounded hover:bg-gray-100"
              >
                All
              </button>

              <button
                onClick={() => {
                  setFilter("call");
                  setShowOptions(false);
                }}
                className="text-left px-3 py-2 rounded hover:bg-gray-100"
              >
                Call
              </button>

              <button
                onClick={() => {
                  setFilter("video");
                  setShowOptions(false);
                }}
                className="text-left px-3 py-2 rounded hover:bg-gray-100"
              >
                Video
              </button>

              <button
                onClick={() => {
                  setFilter("message");
                  setShowOptions(false);
                }}
                className="text-left px-3 py-2 rounded hover:bg-gray-100"
              >
                Message
              </button>

            </div>
          )}
        </div>
      </div>

    
      <div className="flex flex-col gap-4">

        {(filter === "all" || filter === "call") &&
          clicked.map((click) => (
            <ShowTimeLine key={click.id} click={click} />
          ))}

        {(filter === "all" || filter === "video") &&
          videos.map((videoItem) => (
            <Videos key={videoItem.id} videoItem={videoItem} />
          ))}

        {(filter === "all" || filter === "message") &&
          messages.map((messageItem) => (
            <Messages key={messageItem.id} messageItem={messageItem} />
          ))}

      </div>
    </div>
  );
};

export default Timeline;