import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import { DashboardLayout } from './components/layout/DashboardLayout';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

// Dashboard Pages
import { EntrepreneurDashboard } from './pages/dashboard/EntrepreneurDashboard';
import { InvestorDashboard } from './pages/dashboard/InvestorDashboard';

// Profile Pages
import { EntrepreneurProfile } from './pages/profile/EntrepreneurProfile';
import { InvestorProfile } from './pages/profile/InvestorProfile';

// Feature Pages
import { InvestorsPage } from './pages/investors/InvestorsPage';
import { EntrepreneursPage } from './pages/entrepreneurs/EntrepreneursPage';
import { MessagesPage } from './pages/messages/MessagesPage';
import { NotificationsPage } from './pages/notifications/NotificationsPage';
import { DocumentsPage } from './pages/documents/DocumentsPage';
import { DocumentChamberPage } from './pages/documentchamber/DocumentChamberPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { HelpPage } from './pages/help/HelpPage';
import { DealsPage } from './pages/deals/DealsPage';

// Calendar Pages
import { CalendarPage } from './pages/calendar/calendar';

// Video Call Pages
import { VideoCallPage } from './pages/video/VideoCallPage';

// Chat Pages
import { ChatPage } from './pages/chat/ChatPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="entrepreneur" element={<EntrepreneurDashboard />} />
            <Route path="investor" element={<InvestorDashboard />} />
          </Route>
          
          {/* Profile Routes */}
          <Route path="/profile" element={<DashboardLayout />}>
            <Route path="entrepreneur/:id" element={<EntrepreneurProfile />} />
            <Route path="investor/:id" element={<InvestorProfile />} />
          </Route>
          
          {/* Calendar Routes */}
          <Route path="/calendar" element={<DashboardLayout />}>
            <Route index element={<CalendarPage />} />
          </Route>
          
          {/* Video Call Routes */}
          <Route path="/video-call" element={<DashboardLayout />}>
            <Route index element={<VideoCallPage />} />
            <Route path=":callId" element={<VideoCallPage />} />
          </Route>
          
          {/* Document Chamber Routes */}
          <Route path="/document-chamber" element={<DashboardLayout />}>
            <Route index element={<DocumentChamberPage />} />
          </Route>
          
          {/* Feature Routes */}
          <Route path="/investors" element={<DashboardLayout />}>
            <Route index element={<InvestorsPage />} />
          </Route>
          
          <Route path="/entrepreneurs" element={<DashboardLayout />}>
            <Route index element={<EntrepreneursPage />} />
          </Route>
          
          <Route path="/messages" element={<DashboardLayout />}>
            <Route index element={<MessagesPage />} />
          </Route>
          
          <Route path="/notifications" element={<DashboardLayout />}>
            <Route index element={<NotificationsPage />} />
          </Route>
          
          <Route path="/documents" element={<DashboardLayout />}>
            <Route index element={<DocumentsPage />} />
          </Route>
          
          <Route path="/settings" element={<DashboardLayout />}>
            <Route index element={<SettingsPage />} />
          </Route>
          
          <Route path="/help" element={<DashboardLayout />}>
            <Route index element={<HelpPage />} />
          </Route>
          
          <Route path="/deals" element={<DashboardLayout />}>
            <Route index element={<DealsPage />} />
          </Route>
          
          {/* Chat Routes */}
          <Route path="/chat" element={<DashboardLayout />}>
            <Route index element={<ChatPage />} />
            <Route path=":userId" element={<ChatPage />} />
          </Route>
          
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Catch all other routes and redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;