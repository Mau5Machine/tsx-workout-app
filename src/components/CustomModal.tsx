import React from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
import { WorkoutsModel } from '../views/model';

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

interface Props {
  workout?: WorkoutsModel;
  visible: boolean;
  handleCancel: () => void;
  equipmentIcon: (eq:boolean) => React.ReactNode;
}

const CustomModal:React.FC<Props> = ({workout, visible, handleCancel, equipmentIcon}) => {
  return (
    <Modal title={workout ? workout.name : undefined}
        visible={visible}
        onOk={() => {
          if (workout) {
            window.open(workout.video, '_blank')
          }
        }}
        onCancel={handleCancel}
        okText="Video"
        cancelText="Close"
      >
        <p>{workout ? workout.description : undefined}</p>
        <div style={{border: '1px solid grey', marginBottom: 15}}/>
        <StatsRow>
          <span>{workout ? workout.category : undefined}</span>
          <span>{workout ? workout.muscle_target : undefined}</span>
          <span>{workout ? workout.skill_level : undefined}</span>
          <span>{workout ? equipmentIcon(workout.equipment) : undefined}</span>
        </StatsRow>
      </Modal>
  )
}

export default CustomModal