import * as yup from 'yup';

export const trainingPlanValidationSchema = yup.object().shape({
  description: yup.string(),
  coach_id: yup.string().nullable(),
  player_id: yup.string().nullable(),
});
