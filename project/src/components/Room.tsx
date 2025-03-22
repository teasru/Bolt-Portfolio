import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Room as RoomType } from '../types';
import { X, Edit2 } from 'lucide-react';
import { useLayoutStore } from '../store';

interface RoomProps {
  room: RoomType;
}

export const Room: React.FC<RoomProps> = ({ room }) => {
  const { removeRoom, updateRoomDimensions } = useLayoutStore();
  const [isEditing, setIsEditing] = useState(false);
  const [dimensions, setDimensions] = useState(room.dimensions || '');

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: room.id,
    data: room,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const handleDimensionsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRoomDimensions(room.id, dimensions);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        width: room.width,
        height: room.height,
        position: 'absolute',
        left: room.x,
        top: room.y,
        touchAction: 'none',
      }}
      className={`${room.color} rounded-lg shadow-md cursor-move relative group`}
      {...listeners}
      {...attributes}
    >
      <div className="p-2">
        <span className="text-sm font-medium">{room.label}</span>
        {room.dimensions && (
          <div className="text-xs text-gray-600 mt-1">{room.dimensions}</div>
        )}
      </div>

      <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-white rounded-full p-1 hover:bg-blue-100"
        >
          <Edit2 className="w-4 h-4 text-blue-600" />
        </button>
        <button
          onClick={() => removeRoom(room.id)}
          className="bg-white rounded-full p-1 hover:bg-red-100"
        >
          <X className="w-4 h-4 text-red-600" />
        </button>
      </div>

      {isEditing && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-2 rounded-lg">
          <form onSubmit={handleDimensionsSubmit} className="space-y-2">
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              placeholder="e.g., 12' × 15'"
              className="w-full text-sm p-1 border rounded"
            />
            <div className="flex gap-1">
              <button
                type="submit"
                className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};