import React from 'react';

import { LiaGuitarSolid } from "react-icons/lia";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

import { IoIosMusicalNotes } from "react-icons/io";
import { IoFootsteps } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";

import {generateFeatures} from "../../__data__/features";

const Hobby = (props) => {
    const { hobby } = props;

    const fgs = generateFeatures('fg', 4);
    const fts = generateFeatures('ft', 6);
    const fds = generateFeatures('fd', 5);

  return (
      <div className="hobby-container smooth-appear sm-slow">
          <div className="hobby-title">
              {hobby.id === "guitar" ? (
                  <div className="hobby-icons">
                      <LiaGuitarSolid size={50} fill={'darkred'} className={'f-init rotate-motion'}/>

                      {fgs.map((f, index) => (
                          <IoIosMusicalNotes
                              key={index}
                              size={11}
                              fill={'darkred'}
                              className={`guitar-f ${f}`}
                          />
                      ))}
                  </div>
              ) : hobby.id === "travel" ? (
                  <div className="hobby-icons">
                      <FaMapMarkedAlt size={40} fill={'darkgreen'} className={'f-init map-motion'}/>

                      {fts.map((f, index) => (
                          <IoFootsteps
                              key={index}
                              size={11}
                              fill={'darkgreen'}
                              className={`travel-f ${f}`}
                          />
                      ))}
                  </div>
              ) : hobby.id === "driving" ? (
                  <div className="hobby-icons">
                      <FaCarSide size={40} fill={'darkblue'} className={'f-init car-motion'}/>

                      {fds.map((f, index) => (
                          <FaMapPin
                              key={index}
                              size={12}
                              fill={'darkgreen'}
                              className={`driving-f ${f}`}
                          />
                      ))}
                  </div>
              ) : null}

              <h3 className={"mclaren-regular"}>{hobby.name}</h3>
          </div>

          <div>{hobby.description}</div>
      </div>
  );
};

export default Hobby;
