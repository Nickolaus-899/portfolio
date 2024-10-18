import React from 'react';

import { LiaGuitarSolid } from "react-icons/lia";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

import { IoIosMusicalNotes } from "react-icons/io";

const Hobby = (props) => {
    const { hobby } = props;
  return (
      <div className="hobby-container">
          <div className="hobby-title">
              {hobby.id === "guitar" ? (
                  <div>
                      <LiaGuitarSolid size={50} fill={'darkred'}/>
                      <div>
                        <IoIosMusicalNotes size={10} fill={'darkred'}/>
                      </div>
                  </div>
              ) : hobby.id === "travel" ? (
                  <div>
                      <FaMapMarkedAlt size={40} fill={'darkgreen'}/>
                  </div>
              ) : hobby.id === "driving" ? (
                  <div>
                      <FaCarSide size={40} fill={'darkblue'}/>
                  </div>
              ) : null}

              <h3 className={"mclaren-regular"}>{hobby.name}</h3>
          </div>

          <div>{hobby.description}</div>
      </div>
  );
};

export default Hobby;
