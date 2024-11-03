import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Notification({ type, message, show, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className={`rounded-lg p-4 ${
        type === 'success' ? 'bg-green-50' : 'bg-red-50'
      } flex items-center shadow-lg max-w-md`}>
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-400" />
        ) : (
          <XCircle className="h-5 w-5 text-red-400" />
        )}
        <p className={`ml-3 text-sm font-medium ${
          type === 'success' ? 'text-green-800' : 'text-red-800'
        }`}>
          {message}
        </p>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="ml-auto flex-shrink-0"
        >
          <X className={`h-5 w-5 ${
            type === 'success' ? 'text-green-400' : 'text-red-400'
          } hover:opacity-75`} />
        </button>
      </div>
    </div>
  );
}