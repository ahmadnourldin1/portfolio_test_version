import { AboutMeContainer } from "./common";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { NavHashLink } from "react-router-hash-link";

function Aboutme() {
  const { isMobile } = useBreakpoint();
  const timelineObject = [
    {
      time: 2018,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: 2019,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: 2020,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: 2021,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  let timeLineCounter = 0;
  return (
    <AboutMeContainer id="about">
      <h1>About me</h1>
      <div className="timeline">
        <div className="main">
          {timelineObject.map((item, index) => {
            timeLineCounter++;
            return (
              <div className="part" key={index}>
                {timeLineCounter === 1 && !isMobile ? (
                  <div style={{ right: 0 }} className="line"></div>
                ) : (
                  timeLineCounter === 1 &&
                  isMobile && (
                    <div
                      style={{ left: "0.6rem", top: "50%" }}
                      className="line"
                    ></div>
                  )
                )}
                {timeLineCounter > 1 && timeLineCounter < 4 && !isMobile ? (
                  <div
                    style={{ left: 0, width: "100%" }}
                    className="line"
                  ></div>
                ) : (
                  timeLineCounter > 1 &&
                  timeLineCounter < 4 &&
                  isMobile && (
                    <div
                      style={{ left: "0.6rem", width: "100%" }}
                      className="line"
                    ></div>
                  )
                )}
                {timeLineCounter === 4 && !isMobile ? (
                  <div style={{ left: 0 }} className="line"></div>
                ) : (
                  timeLineCounter === 4 &&
                  isMobile && (
                    <div
                      style={{
                        height: "10rem",
                        left: "0.6rem",
                        top: "-1rem",
                      }}
                      className="line"
                    ></div>
                  )
                )}
                <span>{item.time}</span>
                <div className="ball"></div>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AboutMeContainer>
  );
}

export default Aboutme;
