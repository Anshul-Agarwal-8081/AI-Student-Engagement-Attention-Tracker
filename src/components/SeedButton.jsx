import React, { useState } from 'react';
import { Database, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { seedDatabase } from '../data/firebaseService';
import * as mockData from '../data/mockData';

export default function SeedButton() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSeed = async () => {
    if (!window.confirm("Initialize system with mock data? This will overwrite existing records in Firestore.")) return;
    
    setStatus('loading');
    const success = await seedDatabase(mockData);
    if (success) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleSeed}
        disabled={status === 'loading'}
        className={`flex items-center gap-3 px-8 py-4 rounded-xl font-black font-mono transition-all duration-300 border ${
          status === 'loading' ? 'bg-[#1a1a1a] border-[#333] text-slate-500 cursor-not-allowed' :
          status === 'success' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]' :
          status === 'error' ? 'bg-red-500/10 border-red-500 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]' :
          'bg-indigo-500/10 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
        }`}
      >
        {status === 'loading' ? (
          <Loader2 className="animate-spin" size={20} />
        ) : status === 'success' ? (
          <CheckCircle size={20} />
        ) : status === 'error' ? (
          <AlertCircle size={20} />
        ) : (
          <Database size={20} />
        )}
        
        {status === 'loading' ? 'SEEDING DATABASE...' :
         status === 'success' ? 'SYSTEM INITIALIZED' :
         status === 'error' ? 'INITIALIZATION FAILED' :
         'INITIALIZE FIREBASE DATA'}
      </button>
      
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center max-w-sm">
        {status === 'idle' && "Clicking this will upload the content of mockData.js to your configured Firestore collections."}
        {status === 'error' && "ERR: Check console for Firestore permissions or invalid config."}
      </p>
    </div>
  );
}
