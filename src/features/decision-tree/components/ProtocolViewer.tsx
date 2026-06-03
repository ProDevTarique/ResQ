import React, { useState } from 'react';
import { heartAttackProtocol } from '../data/heartAttack';

const ProtocolViewer: React.FC = () => {
  const [currentStepId, setCurrentStepId] = useState<string>('start');
  const protocol = heartAttackProtocol;
  const currentStep = protocol.steps[currentStepId];

  if (!currentStep) {
    return <div className="p-4 text-center">Protocol Completed. Stay with the patient.</div>;
  }

  return (
    <div className={`p-6 m-4 rounded-lg shadow-xl ${currentStep.isCritical ? 'bg-red-50 border-2 border-red-500' : 'bg-white'}`}>
      <h2 className="text-xl font-bold mb-4 text-gray-800">{protocol.title}</h2>
      
      <div className="mb-8">
        <p className={`text-2xl font-semibold ${currentStep.isCritical ? 'text-red-600' : 'text-gray-700'}`}>
          {currentStep.instruction}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {currentStep.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setCurrentStepId(option.nextStepId)}
            className="w-full py-4 px-6 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors uppercase tracking-wide"
          >
            {option.label}
          </button>
        ))}
        
        {currentStepId !== 'start' && (
          <button 
            onClick={() => setCurrentStepId('start')}
            className="mt-4 text-sm text-gray-500 underline"
          >
            Restart Protocol
          </button>
        )}
      </div>
    </div>
  );
};

export default ProtocolViewer;