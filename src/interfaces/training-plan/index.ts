import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface TrainingPlanInterface {
  id?: string;
  coach_id?: string;
  player_id?: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  coach?: CoachInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface TrainingPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  coach_id?: string;
  player_id?: string;
  description?: string;
}
