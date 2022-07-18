import React from 'react';
import SiteLayout from 'layout/SiteLayout';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
  min-height: 400px;
  text-align: center;
  padding: 40px 0;

  .description-title {
    font-size: 25px;
  }

  .description-text {
    font-size: 20px;
  }
`

const FlexFeatures = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px 0;

  .feature-block {
    max-width: 140px;

    h3 {
      padding-top: 10px;
      color: #001529;
    }

    p {
      color: #000;
    }
  }
`

const ImageBackground = styled.div`
  background-image: url("images/fit-five.jpeg");
  background-size: cover;
  height: 100%;
`

const App: React.FC = () => (
  <SiteLayout
    title="RockStar Fitness"
  >
    <Row>
      <Col span={12}>
        <Section>
          <div className="description-title">
            <h2>Fitness Application</h2>
          </div>
          <div className="description-text">
            <p>The only app you'll need to be a fitness rock star</p>
          </div>
          <FlexFeatures>
            <div className="feature-block">
              <Link to="workouts">
                <img src="images/icons/weightlifter.png" alt="" />
                <h3>Workouts</h3>
                <p>Browse our massive workout catalog and build routines around areas you want to grow.</p>
              </Link>
            </div>
            <div className="feature-block">
              <Link to="meals">
                <img src="images/icons/meal.png" alt="" />
                <h3>Meal Plans</h3>
                <p>Search through healthy meal plans and execute with recipes to hit your fitness goals.</p>
              </Link>
            </div>
            <div className="feature-block">
              <Link to="timer">
                <img src="images/icons/time-tracking.png" alt="" />
                <h3>Interval Timer</h3>
                <p>Use our interval timer for your HIIT workouts and push yourself to the limits.</p>
              </Link>
            </div>
          </FlexFeatures>
        </Section>
      </Col>
      <Col span={12}>
        <ImageBackground/>
      </Col>
    </Row>
  </SiteLayout>
);

export default App;
