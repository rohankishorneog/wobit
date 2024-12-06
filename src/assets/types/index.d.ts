export interface CameraHealth {
  cloud: string;
  device: string;
  _id: string;
  id: string;
}

export interface Camera {
  name: string;
  location: string;
  recorder: string;
  tasks: string;
  status: string;
  _id: string;
  id: string;
  current_status: string;
  health: CameraHealth;
  hasWarning: boolean;
}
