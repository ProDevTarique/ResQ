import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { incidentData } from './incidentData';

// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = import.meta.env.BASE_URL + 'sw.js';
    navigator.serviceWorker.register(swPath)
      .then(reg => console.log('ResQ Service Worker registered!', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

const App = () => {
  const [selected, setSelected] = useState<any>(incidentData[0]);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', textAlign: 'center' }}>🚑 ResQ: Emergency Protocols</h1>
      
      {/* Centered Grid/Flex Layout */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '30px' 
      }}>
        {incidentData.map((inc) => (
          <button 
            key={inc.id} 
            onClick={() => setSelected(inc)} 
            style={{
              padding: '12px 24px', 
              borderRadius: '50px', 
              border: '2px solid #334155',
              backgroundColor: selected?.id === inc.id ? '#334155' : 'white',
              color: selected?.id === inc.id ? 'white' : '#334155', 
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {inc.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{ padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '15px', borderLeft: '8px solid #334155' }}>
        <h2>{selected.label}</h2>
        {selected.groups ? selected.groups.map((g: any, i: number) => (
          <div key={i} style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{g.title}</h4>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {g.instructions.map((step: string, j: number) => <li key={j}>{step}</li>)}
            </ul>
          </div>
        )) : <p style={{ fontSize: '18px' }}>{selected.simpleInstruction}</p>}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);