
import React, { useState } from 'react';
import { X, Maximize2, RotateCcw, Box, Map as MapIcon, Sofa, Bed, Ruler } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  dims: string;
  furniture: string[];
  path2D: string;
  path3D: string;
  center: [number, number];
}

const ROOMS: Room[] = [
  {
    id: 'living',
    name: 'Living Area',
    dims: '24\' x 18\'',
    furniture: ['L-Shape Sofa', 'Coffee Table', 'TV Unit'],
    path2D: "M 50 50 L 300 50 L 300 200 L 50 200 Z",
    path3D: "M 80 80 L 330 30 L 330 130 L 80 180 Z",
    center: [175, 125]
  },
  {
    id: 'bedroom',
    name: 'Master Suite',
    dims: '16\' x 14\'',
    furniture: ['King Bed', 'Side Tables', 'Wardrobe'],
    path2D: "M 310 50 L 450 50 L 450 150 L 310 150 Z",
    path3D: "M 340 30 L 480 0 L 480 100 L 340 130 Z",
    center: [380, 100]
  },
  {
    id: 'kitchen',
    name: 'Chef\'s Kitchen',
    dims: '12\' x 15\'',
    furniture: ['Island', 'Pantry', 'Oven'],
    path2D: "M 310 160 L 450 160 L 450 300 L 310 300 Z",
    path3D: "M 340 140 L 480 110 L 480 210 L 340 240 Z",
    center: [380, 230]
  }
];

const FloorPlanViewer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('2D');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <div className="fixed inset-0 z-[60] bg-stone-900/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Interactive Map */}
        <div className="flex-1 bg-stone-50 relative p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Interactive Floor Plan</h2>
              <p className="text-stone-500">Explore the layout of Project "Emerald Horizon"</p>
            </div>
            
            <div className="bg-white p-1 rounded-2xl shadow-sm border border-stone-200 flex">
              <button 
                onClick={() => setViewMode('2D')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${viewMode === '2D' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-50'}`}
              >
                <MapIcon size={16} /> 2D View
              </button>
              <button 
                onClick={() => setViewMode('3D')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${viewMode === '3D' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-50'}`}
              >
                <Box size={16} /> 3D Preview
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center bg-white rounded-[2rem] border border-stone-100 shadow-inner relative overflow-hidden">
            <svg 
              viewBox="0 0 500 350" 
              className="w-full h-full max-w-[800px] p-10 select-none"
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f1f1" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {ROOMS.map(room => (
                <g key={room.id} className="cursor-pointer group" onClick={() => setSelectedRoom(room)}>
                  <path 
                    d={viewMode === '2D' ? room.path2D : room.path3D}
                    className={`transition-all duration-700 ease-in-out ${selectedRoom?.id === room.id ? 'fill-amber-50 stroke-amber-500' : 'fill-stone-100 stroke-stone-300 group-hover:fill-stone-200 group-hover:stroke-stone-400'}`}
                    strokeWidth="2"
                    strokeDasharray={viewMode === '3D' ? "4 2" : "0"}
                  />
                  <text 
                    x={room.center[0]} 
                    y={room.center[1]} 
                    textAnchor="middle" 
                    className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 ${selectedRoom?.id === room.id ? 'fill-amber-600' : 'fill-stone-400 opacity-0 group-hover:opacity-100'}`}
                  >
                    {room.name}
                  </text>
                </g>
              ))}
            </svg>

            <div className="absolute bottom-6 left-6 flex gap-4">
              <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-stone-200 shadow-sm text-stone-600 hover:bg-white transition-all">
                <RotateCcw size={18} />
              </button>
              <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-stone-200 shadow-sm text-stone-600 hover:bg-white transition-all">
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Room Info */}
        <div className="w-full md:w-80 bg-white p-8 border-l border-stone-100 flex flex-col">
          {selectedRoom ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                {selectedRoom.id === 'bedroom' ? <Bed size={32} /> : selectedRoom.id === 'living' ? <Sofa size={32} /> : <Ruler size={32} />}
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{selectedRoom.name}</h3>
              <p className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-8">{selectedRoom.dims}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Proposed Layout</h4>
                  <ul className="space-y-3">
                    {selectedRoom.furniture.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-100">
                        <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                   <p className="text-xs text-stone-400 italic mb-6">Note: Dimensions are approximate and based on standard architectural scaling.</p>
                   <button className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all">
                     Download High-Res PDF
                   </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-4 text-stone-300">
                <MapIcon size={24} />
              </div>
              <p className="text-stone-400 text-sm">Select a room on the floor plan to view dimensions and layout details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloorPlanViewer;
