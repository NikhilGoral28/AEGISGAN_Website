import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Runtime Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Terminal Execution Halted</h1>
          <p className="text-slate-400 max-w-md mb-8 font-mono text-sm">
            A critical runtime exception occurred in the dashboard module. The AegisGAN safety protocols have isolated this error.
          </p>
          <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl mb-8 text-left w-full max-w-xl">
            <p className="text-[10px] text-red-400 font-bold uppercase mb-2">Error Log</p>
            <p className="text-xs text-slate-300 font-mono break-all">{this.state.error?.toString()}</p>
          </div>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-400 transition-all shadow-[0_10px_30px_rgba(239,68,68,0.2)]"
          >
            <RotateCcw className="w-5 h-5" /> Re-initialize Terminal
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
