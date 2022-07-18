import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
  query GetWorkouts {
    workout_catalog {
      id
      name
      description
      category
      muscle_target
      thumbnail
      video
      equipment
      skill_level
    }
  }
`;
