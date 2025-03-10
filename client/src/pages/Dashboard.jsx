import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Check, Plus } from 'lucide-react';

function Dashboard() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [recentProjects, setRecentProjects] = useState([
    { id: 1, name: 'Website Redesign', color: '#4f46e5' },
    { id: 2, name: 'Client Meeting', color: '#06b6d4' },
    { id: 3, name: 'Bug Fixes', color: '#ef4444' },
    { id: 4, name: 'Documentation', color: '#f59e0b' }
  ]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600000);
    const mins = Math.floor((time % 3600000) / 60000);
    const secs = Math.floor((time % 60000) / 1000);

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="w-[100%] max-w-[50%] m-auto flex justify-center items-center">
      <div className="p-6 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Stopwatch</h1>

        {/* Main stopwatch card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="text-6xl font-mono font-bold text-slate-800 mb-4">
              {formatTime()}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex items-center justify-center p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                disabled={time === 0}
              >
                <RotateCcw size={24} />
              </button>

              <button
                onClick={handleStartStop}
                className={`flex items-center justify-center p-4 rounded-full ${isRunning
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-green-100 text-green-600 hover:bg-green-200"
                  }`}
              >
                {isRunning ? <Pause size={24} /> : <Play size={24} />}
              </button>

            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
              Project
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="project"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="What are you working on?"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <button
                className={`px-4 py-2 rounded-md text-white ${isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                  }`}
              >
                {isRunning ? "Stop" : "Start"} Timer
              </button>
            </div>
          </div>
        </div>

        {/* Recent projects section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800">Recent Projects</h2>
            <button className="flex items-center text-sm text-slate-600 hover:text-slate-800">
              <Plus size={16} className="mr-1" />
              New Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProjects.map(project => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-md p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <span className="font-medium">{project.name}</span>
                </div>
                <button className="text-slate-500 hover:text-green-600">
                  <Play size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
