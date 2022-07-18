import React, { useState } from 'react';
import SiteLayout from 'layout/SiteLayout';
import { useQuery } from '@apollo/client'
import { GET_WORKOUTS } from 'apollo/queries/workouts';
import { WorkoutsModel } from './model';
import { Card, Row, Col } from 'antd'
import { FiInfo, FiPlayCircle } from 'react-icons/fi'
import CustomModal from 'components/CustomModal';
import styled from 'styled-components'
import { CgGym } from 'react-icons/cg'
import { MdOutlineSportsHandball } from 'react-icons/md'

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const { Meta } = Card

const Workouts:React.FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutsModel[]>([])
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutsModel>()
  const [modal, setModal] = useState<boolean>(false)

   const showModal = (workout:WorkoutsModel) => {
    setSelectedWorkout(workout)
    setModal(true)
  }

  const handleCancel = () => {
    setModal(false)
  }

  const equipmentIcon = (eq:boolean) => {
    if (eq) {
      return <CgGym/>
    } else {
      return <MdOutlineSportsHandball/>
    }
  }

  const {loading, error } = useQuery(GET_WORKOUTS, {
    onCompleted: data => {
      setWorkouts(data.workout_catalog)
    }
  })

  if (error) {
    console.log(error);
  }

  return (
    <SiteLayout
      title="RockStar Workouts"
    >
      <Row justify='center'>
        {!loading ? workouts.map(workout => (
          <Col xxl={6} xl={6} lg={8} md={8} sm={12} xs={24} style={{display: 'flex', justifyContent: 'center', padding: '40px 0'}}>
            <Card
              key={workout.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" height="240px" width="240px" src={workout.thumbnail} />}
              extra={
                <StatsRow>
                  <span>{workout.muscle_target}</span>
                  <span>{workout.skill_level}</span>
                  <span>{equipmentIcon(workout.equipment)}</span>
                </StatsRow>

              }
              actions={[
                <FiInfo key="details" onClick={() => showModal(workout)}/>,
                <FiPlayCircle key="video" onClick={() => window.open(workout.video, '_blank')}/>,
              ]}
            >
              <Meta title={workout.name} />
            </Card>
          </Col>
        )) : <p>Loading Workouts...</p>}
        <CustomModal
          equipmentIcon={equipmentIcon}
          workout={selectedWorkout}
          visible={modal}
          handleCancel={handleCancel}
        />
      </Row>
    </SiteLayout>
  );
};

export default Workouts;