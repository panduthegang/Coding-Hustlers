import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart3, CreditCard as Edit, User, Trophy, Settings, LogOut, Code, List } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Tests = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<'mcq' | 'coding' | null>(null);
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleStartTest = () => {
    if (!topic || !selectedType) {
      alert('Please select a test type and enter a topic');
      return;
    }

    const testUrl = selectedType === 'mcq' ? `/test/mcq` : `/test/coding`;
    navigate(testUrl, { state: { topic, difficulty } });
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: `
        radial-gradient(27.33% 40.65% at 78.12% 29.89%, #F5FF7F 0%, rgba(48, 83, 118, 0) 100%),
        radial-gradient(33.55% 50.83% at 55.38% 89.56%, #8CBCFE 0%, rgba(221, 130, 255, 0) 100%),
        radial-gradient(58.68% 99.14% at 0% 0%, #C2F9F9 0%, rgba(83, 214, 255, 0) 100%),
        radial-gradient(30.1% 50.86% at 100% 100%, #9949FF 0%, rgba(255, 81, 217, 0) 100%),
        #F5F5F5
      `
    }}>
      <div className="absolute inset-0 bg-[rgba(245,245,245,0.65)] backdrop-blur-[25px]"></div>

      <div className="relative z-10">
        <div className="flex">
          <aside className="w-64 min-h-screen p-8 flex flex-col justify-between border-r border-gray-300">
            <div>
              <div className="mb-16">
                <h1 className="text-4xl font-bold font-['Syne']">
                  <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">
                    Coding Hustlers
                  </span>
                </h1>
              </div>

              <nav className="space-y-7">
                <Link to="/dashboard" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                  <BarChart3 className="w-6 h-6" />
                  <span>Dashboard</span>
                </Link>

                <Link to="/tests" className="flex items-center gap-5 text-lg font-['Syne'] font-medium">
                  <Edit className="w-6 h-6" style={{ stroke: 'url(#gradient)' }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="13.4%" stopColor="#B33DEB" />
                        <stop offset="86.6%" stopColor="#DE8FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">
                    Tests
                  </span>
                </Link>

                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                  <User className="w-6 h-6" />
                  <span>Profile</span>
                </a>

                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                  <Trophy className="w-6 h-6" />
                  <span>Leaderboard</span>
                </a>
              </nav>
            </div>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                <Settings className="w-6 h-6" />
                <span>Settings</span>
              </a>

              <button onClick={handleLogout} className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                <LogOut className="w-6 h-6" />
                <span>Log Out</span>
              </button>
            </div>
          </aside>

          <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold font-['Syne'] text-black mb-8">
                Start a New Test
              </h2>

              <div className="bg-[rgba(250,250,250,0.75)] rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold font-['Syne'] text-black mb-6">Select Test Type</h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <button
                    onClick={() => setSelectedType('mcq')}
                    className={`p-8 rounded-xl border-2 transition-all ${
                      selectedType === 'mcq'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 bg-white hover:border-purple-300'
                    }`}
                  >
                    <List className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h4 className="text-xl font-bold font-['Syne'] text-black mb-2">Multiple Choice</h4>
                    <p className="text-sm text-gray-600 font-['Syne']">
                      Test your knowledge with AI-generated MCQ questions
                    </p>
                  </button>

                  <button
                    onClick={() => setSelectedType('coding')}
                    className={`p-8 rounded-xl border-2 transition-all ${
                      selectedType === 'coding'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 bg-white hover:border-purple-300'
                    }`}
                  >
                    <Code className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h4 className="text-xl font-bold font-['Syne'] text-black mb-2">Coding Challenge</h4>
                    <p className="text-sm text-gray-600 font-['Syne']">
                      Solve coding problems and test your programming skills
                    </p>
                  </button>
                </div>

                {selectedType && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-['Syne'] mb-2">
                        Topic
                      </label>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., JavaScript, Python, Data Structures"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors font-['Syne'] text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-['Syne'] mb-2">
                        Difficulty Level
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {(['easy', 'medium', 'hard'] as const).map((level) => (
                          <button
                            key={level}
                            onClick={() => setDifficulty(level)}
                            className={`px-6 py-3 rounded-xl border-2 transition-all font-['Syne'] font-medium capitalize ${
                              difficulty === level
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-purple-300'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleStartTest}
                      className="w-full py-4 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] text-white rounded-xl font-['Syne'] text-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Start Test
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tests;
