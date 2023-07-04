import { PlayerInterface } from 'interfaces/player';
import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  created_at?: any;
  updated_at?: any;
  player?: PlayerInterface[];
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player?: number;
    training_plan?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
}
