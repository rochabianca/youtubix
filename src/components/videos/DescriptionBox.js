import React from "react";
import propTypes from "prop-types";
import moment from "moment";

import views from "../../images/views.png";
import date from "../../images/data.png";

const DescriptionBox = ({ featured }) => {
  return (
    <div className="youtube__resume youtube__box youtube__box--blur">
      <div className="youtube__box__header">
        <h3>{featured.title}</h3>
        <div className="youtube__box__options">
          <div className="box__views">
            <img src={views} alt="views" />

            <div className="box__info box__views--info">110.090 views</div>
          </div>

          <div className="box__date">
            <img src={date} alt="date" />

            <div className="box__info box__date--info">
              {moment(featured.date)
                .locale("pt-br")
                .format("LL")}
            </div>
          </div>
        </div>
      </div>

      <p>{featured.description}</p>
      <div className="youtube__box--blur" />
    </div>
  );
};

DescriptionBox.propTypes = {
  featured: propTypes.object.isRequired
};

export default DescriptionBox;
