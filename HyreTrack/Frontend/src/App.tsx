import React from 'react';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Hyre Track</h1>
                <p className="text-gray-700">This is a React application using Vite, FastAPI, and Tailwind CSS.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default App;