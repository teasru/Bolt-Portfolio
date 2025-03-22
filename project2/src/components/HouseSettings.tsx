import React, { useState } from 'react';
import { useLayoutStore } from '../store';
import { Home } from 'lucide-react';

export const HouseSettings: React.FC = () => {
  const { house, setHouseDimensions, currentFloor, setCurrentFloor } = useLayoutStore();
  const [isEditing, setIsEditing] = useState(false);
  const [dimensions, setDimensions] = useState(house);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHouseDimensions(dimensions);
    setIsEditing(false);
  };

  const floorOptions = Array.from({ length: house.floors }, (_, i) => i + 1);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center gap-2 mb-4">
        <Home className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">House Settings</h2>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Width (ft)</label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (ft)</label>
            <input
              type="number"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Floors</label>
            <input
              type="number"
              min="1"
              value={dimensions.floors}
              onChange={(e) => setDimensions({ ...dimensions, floors: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Dimensions</p>
              <p className="font-medium">{house.width}' × {house.height}'</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Floors</p>
              <p className="font-medium">{house.floors}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-200 text-sm"
            >
              Edit
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Floor</label>
            <select
              value={currentFloor}
              onChange={(e) => setCurrentFloor(Number(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              {floorOptions.map((floor) => (
                <option key={floor} value={floor}>
                  Floor {floor}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};