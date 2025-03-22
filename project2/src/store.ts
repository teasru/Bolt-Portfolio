import { create } from 'zustand';
import { Room, RoomTemplate, House, Floor } from './types';

interface LayoutState {
  rooms: Room[];
  house: House;
  currentFloor: number;
  addRoom: (template: RoomTemplate) => void;
  updateRoom: (room: Room) => void;
  removeRoom: (id: string) => void;
  setHouseDimensions: (dimensions: House) => void;
  setCurrentFloor: (floor: number) => void;
  updateRoomDimensions: (id: string, dimensions: string) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  rooms: [],
  house: {
    width: 800,
    height: 600,
    floors: 1,
  },
  currentFloor: 1,
  addRoom: (template) => set((state) => ({
    rooms: [...state.rooms, {
      ...template,
      id: crypto.randomUUID(),
      x: 0,
      y: 0,
      floor: state.currentFloor,
    }],
  })),
  updateRoom: (updatedRoom) => set((state) => ({
    rooms: state.rooms.map((room) => 
      room.id === updatedRoom.id ? updatedRoom : room
    ),
  })),
  removeRoom: (id) => set((state) => ({
    rooms: state.rooms.filter((room) => room.id !== id),
  })),
  setHouseDimensions: (dimensions) => set(() => ({
    house: dimensions,
  })),
  setCurrentFloor: (floor) => set(() => ({
    currentFloor: floor,
  })),
  updateRoomDimensions: (id, dimensions) => set((state) => ({
    rooms: state.rooms.map((room) => 
      room.id === id ? { ...room, dimensions } : room
    ),
  })),
}));