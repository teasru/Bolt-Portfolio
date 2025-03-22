import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { RoomTemplate } from '../types';
import { Bed, Bath, Twitch as Kitchen, Sofa, DoorOpen } from 'lucide-react';

const templates: RoomTemplate[] = [
  { type: 'bedroom', label: 'Bedroom', width: 150, height: 120, color: 'bg-blue-200' },
  { type: 'bathroom', label: 'Bathroom', width: 100, height: 80, color: 'bg-green-200' },
  { type: 'kitchen', label: 'Kitchen', width: 140, height: 140, color: 'bg-yellow-200' },
  { type: 'living', label: 'Living Room', width: 180, height: 160, color: 'bg-purple-200' },
  { type: 'entrance', label: 'Entrance', width: 100, height: 100, color: 'bg-gray-200' },
];

const iconMap = {
  bedroom: Bed,
  bathroom: Bath,
  kitchen: Kitchen,
  living: Sofa,
  entrance: DoorOpen,
};

const DraggableTemplate: React.FC<{ template: RoomTemplate }> = ({ template }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `template-${template.type}`,
    data: template,
  });

  const Icon = iconMap[template.type as keyof typeof iconMap];

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`${template.color} p-4 rounded-lg cursor-move flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm font-medium">{template.label}</span>
    </div>
  );
};

export const RoomTemplates: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Room Templates</h2>
      <div className="grid grid-cols-1 gap-4">
        {templates.map((template) => (
          <DraggableTemplate key={template.type} template={template} />
        ))}
      </div>
    </div>
  );
};