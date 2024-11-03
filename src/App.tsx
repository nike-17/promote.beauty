import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import GetStarted from './components/GetStarted';
import Notification from './components/Notification';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: location.pathname }
    });
    return null;
  }

  return <>{children}</>;
}

export default function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        setNotificationType('error');
        setNotificationMessage(error.message || 'Authentication failed');
        setShowNotification(true);
      } else if (isAuthenticated) {
        setNotificationType('success');
        setNotificationMessage('Successfully logged in');
        setShowNotification(true);
      }
    }
  }, [isLoading, error, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route 
            path="/campaigns" 
            element={
              <PrivateRoute>
                <Campaigns />
              </PrivateRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Notification
        type={notificationType}
        message={notificationMessage}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}