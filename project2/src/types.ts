export interface Room {
  id: string;
  type: string;
  label: string;
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  dimensions?: string;
  floor: number;
}

export interface RoomTemplate {
  type: string;
  label: string;
  width: number;
  height: number;
  color: string;
}

export interface House {
  width: number;
  height: number;
  floors: number;
}

export interface Floor {
  level: number;
  width: number;
  height: number;
}