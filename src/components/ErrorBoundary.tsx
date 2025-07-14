"use client";
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 Error Boundary capturou erro:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#f3edea' }}>
          <div className="max-w-md w-full text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border" style={{ borderColor: 'rgba(217, 164, 65, 0.3)' }}>
              <div className="text-6xl mb-4">🍷</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#7a2e1e' }}>
                Ops! Algo deu errado
              </h2>
              <p className="text-gray-600 mb-6">
                Encontramos um problema técnico. Que tal tentar novamente?
              </p>
              <div className="space-y-3">
                <button 
                  onClick={this.resetError}
                  className="w-full px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #d9a441 0%, #c9932a 100%)', 
                    color: 'white'
                  }}
                >
                  Tentar novamente
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="w-full px-6 py-3 rounded-full font-medium transition-all"
                  style={{ 
                    background: 'transparent',
                    color: '#7a2e1e',
                    border: '2px solid rgba(122, 46, 30, 0.3)'
                  }}
                >
                  Recarregar página
                </button>
              </div>
              {this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="text-sm text-gray-500 cursor-pointer">
                    Detalhes técnicos
                  </summary>
                  <pre className="text-xs text-gray-400 mt-2 p-2 bg-gray-50 rounded overflow-auto">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
