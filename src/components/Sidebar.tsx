import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, CreditCard as Edit, User, Trophy, Settings, LogOut, X, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white/80 backdrop-blur-md p-6 lg:p-8 flex flex-col justify-between border-r border-gray-300 z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold font-['Syne']">
              <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">
                Coding Hustlers
              </span>
            </h1>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="space-y-5 lg:space-y-7">
            <Link
              to="/dashboard"
              onClick={onClose}
              className={`flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium transition-colors ${
                isActive('/dashboard')
                  ? 'text-transparent bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text'
                  : 'text-black hover:text-purple-600'
              }`}
            >
              <BarChart3
                className="w-5 h-5 lg:w-6 lg:h-6"
                style={isActive('/dashboard') ? { stroke: 'url(#gradient)' } : {}}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="13.4%" stopColor="#B33DEB" />
                    <stop offset="86.6%" stopColor="#DE8FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/tests"
              onClick={onClose}
              className={`flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium transition-colors ${
                isActive('/tests')
                  ? 'text-transparent bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text'
                  : 'text-black hover:text-purple-600'
              }`}
            >
              <Edit
                className="w-5 h-5 lg:w-6 lg:h-6"
                style={isActive('/tests') ? { stroke: 'url(#gradient2)' } : {}}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="13.4%" stopColor="#B33DEB" />
                    <stop offset="86.6%" stopColor="#DE8FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Tests</span>
            </Link>

            <a
              href="#"
              className="flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors"
            >
              <User className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Profile</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors"
            >
              <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Leaderboard</span>
            </a>
          </nav>
        </div>

        <div className="space-y-4 lg:space-y-6">
          <a
            href="#"
            className="flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors"
          >
            <Settings className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>Settings</span>
          </a>

          <button
            onClick={handleLogout}
            className="flex items-center gap-4 lg:gap-5 text-base lg:text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors"
          >
            <LogOut className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export const MobileSidebarToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed top-4 left-4 z-30 p-3 bg-white/80 backdrop-blur-md rounded-lg shadow-lg hover:bg-white transition-colors"
    >
      <Menu className="w-6 h-6 text-gray-700" />
    </button>
  );
};

export default Sidebar;
