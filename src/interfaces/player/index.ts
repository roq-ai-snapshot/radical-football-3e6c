import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { CoachInterface } from 'interfaces/coach';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  academy_id?: string;
  created_at?: any;
  updated_at?: any;
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  coach?: CoachInterface;
  academy?: AcademyInterface;
  _count?: {
    training_plan?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  academy_id?: string;
}
