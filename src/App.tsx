import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Header from "./components/base/header/header.component";
import NotificationProvider from './components/base/notification/notification-container/notification-container.component';
import UserProvider from './contexts/user.context';
import LoginPage from './pages/login/login.component';
import MachinesPage from "./pages/machines/machines.component";
import ManageFoodPage from "./pages/manage-food/manage-food.component";
import ModalProvider from "./contexts/modal.context";
import HomePage from "./pages/home/home.component";
import ManagementPage from "./pages/management/management.component";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <NotificationProvider>
            <ModalProvider>
              <Header></Header>
              <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/machines" element={<MachinesPage />} />
                <Route path="/manage-food" element={<ManageFoodPage />} />
                <Route path="/management" element={<ManagementPage />} />
              </Routes>
            </ModalProvider>
          </NotificationProvider>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;