import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  coach_id: yup.string().nullable(),
  academy_id: yup.string().nullable(),
});
