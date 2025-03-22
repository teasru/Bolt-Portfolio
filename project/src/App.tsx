import React from 'react';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Grid } from './components/Grid';
import { Room } from './components/Room';
import { RoomTemplates } from './components/RoomTemplates';
import { HouseSettings } from './components/HouseSettings';
import { useLayoutStore } from './store';
import { Layout } from 'lucide-react';

function App() {
  const { rooms, addRoom, updateRoom, currentFloor } = useLayoutStore();
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, delta } = event;
    
    if (over?.id === 'grid') {
      if (active.data.current?.type) {
        // Adding new room from template
        addRoom(active.data.current);
      } else {
        // Updating existing room position
        const room = rooms.find((r) => r.id === active.id);
        if (room) {
          updateRoom({
            ...room,
            x: room.x + delta.x,
            y: room.y + delta.y,
          });
        }
      }
    }
  };

  const currentFloorRooms = rooms.filter(room => room.floor === currentFloor);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <Layout className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">House Layout Planner</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 space-y-4">
            <HouseSettings />
            <RoomTemplates />
          </aside>

          <div className="flex-1">
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
              <div className="aspect-video">
                <Grid>
                  {currentFloorRooms.map((room) => (
                    <Room key={room.id} room={room} />
                  ))}
                </Grid>
              </div>
            </DndContext>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;