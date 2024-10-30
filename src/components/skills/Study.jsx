import React from 'react';

const Study = (props) => {
    const { education } = props;

  return (
      <div className={`education ${education.extra} smooth-appear sm-medium`}>
          <a href={education.link} className={"edu"}>
              <div>
                  <h3 className="mclaren-regular">{education.name}</h3>
                  <p>{education.duration}</p>
              </div>

              <div>
                  <p>{education.field}</p>
                  <p>{education.result}</p>
              </div>


          </a>
      </div>
  );
};

export default Study;
