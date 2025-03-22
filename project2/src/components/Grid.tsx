import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useLayoutStore } from '../store';

export const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { house, currentFloor } = useLayoutStore();
  const { setNodeRef } = useDroppable({
    id: 'grid',
  });

  return (
    <div
      ref={setNodeRef}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm font-medium text-gray-600">
        Floor {currentFloor} • {house.width}' × {house.height}'
      </div>
      {children}
    </div>
  );
};