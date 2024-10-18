import React from 'react';
import myPhoto from "../../images/myPhoto.jpg";

const MyPhoto = () => {
  return (
      <div className="my-photo">
          <img src={myPhoto} alt={"Selfie"}/>
      </div>
  );
};

export default MyPhoto;
