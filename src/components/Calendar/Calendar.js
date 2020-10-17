import React from "react";
import { NavLink } from "react-router-dom";
import Main from "../Main/Main";
import "./Calendar.css";
import useLaunches from "../useLaunches/useLaunches";

const Calendar = () => {
  const { data } = useLaunches();
  return (
    <>
      <Main name="SpaceX Calendar" />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data.map(({ id, name, links }) => {
              return (
                <li key={id} className="calendar-item">
                  <article className="launches">
                    <div className="launches-image">
                      <img src={links.patch.small} alt={name} />
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{name}</h2>
                      <NavLink to={`/details/${id}`} className="button launches-details">
                        Подробнее
                      </NavLink>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Calendar;
