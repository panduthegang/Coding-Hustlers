import { useState, useEffect } from 'react';
import { BarChart3, CreditCard as Edit, FileText, User, Trophy, Settings, LogOut, Bell, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { getTests, type Test } from '../lib/localStorage';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [tests, setTests] = useState<Test[]>([]);
  const [stats, setStats] = useState({
    totalTests: 0,
    passed: 0,
    failed: 0,
    pending: 0,
    avgScore: 0
  });
  const [currentPage, setCurrentPage] = useState(0);
  const testsPerPage = 2;

  const userName = currentUser?.displayName || 'User';

  useEffect(() => {
    if (currentUser) {
      fetchUserTests();
      fetchStats();
    }
  }, [currentUser]);

  const fetchUserTests = () => {
    const userTests = getTests(currentUser?.uid);
    const sortedTests = userTests.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setTests(sortedTests);
  };

  const fetchStats = () => {
    const userTests = getTests(currentUser?.uid);

    const completed = userTests.filter((t: Test) => t.status === 'completed');
    const passed = completed.filter((t: Test) => t.score >= t.max_score * 0.6);
    const failed = completed.filter((t: Test) => t.score < t.max_score * 0.6);
    const pending = userTests.filter((t: Test) => t.status === 'pending_result');

    const avgScore = completed.length > 0
      ? Math.round(completed.reduce((sum: number, t: Test) => sum + (t.score / t.max_score) * 100, 0) / completed.length)
      : 0;

    setStats({
      totalTests: userTests.length,
      passed: passed.length,
      failed: failed.length,
      pending: pending.length,
      avgScore
    });
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const paginatedTests = tests.slice(currentPage * testsPerPage, (currentPage + 1) * testsPerPage);
  const maxPages = Math.ceil(tests.length / testsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPages - 1) {
      setCurrentPage(currentPage + 1);
    }
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
                <Link to="/dashboard" className="flex items-center gap-5 text-lg font-['Syne'] font-medium">
                  <BarChart3 className="w-6 h-6" style={{ stroke: 'url(#gradient)' }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="13.4%" stopColor="#B33DEB" />
                        <stop offset="86.6%" stopColor="#DE8FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </Link>

                <Link to="/tests" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600 transition-colors">
                  <Edit className="w-6 h-6" />
                  <span>Tests</span>
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
            <header className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-5xl font-bold font-['Syne'] text-black mb-1">
                  Welcome {userName}!
                </h2>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 px-6 py-4 bg-[rgba(250,250,250,0.75)] rounded-2xl">
                  <Search className="w-5 h-5" style={{ stroke: 'url(#gradient2)' }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="13.4%" stopColor="#B33DEB" />
                        <stop offset="86.6%" stopColor="#DE8FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none font-['Syne'] text-black/50 w-32"
                  />
                </div>

                <div className="relative">
                  <Bell className="w-6 h-6 text-black cursor-pointer hover:text-purple-600 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {userName[0]?.toUpperCase()}
                  </div>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold font-['Syne'] text-black flex items-center gap-3">
                    <FileText className="w-6 h-6" style={{ stroke: 'url(#gradient3)' }} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F187FB" />
                          <stop offset="100%" stopColor="#439CFB" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Recent Tests
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-white/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage >= maxPages - 1 || tests.length === 0}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-white/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-6">
                  {paginatedTests.length > 0 ? (
                    paginatedTests.map((test) => (
                      <div key={test.id} className="relative w-52 h-72 rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
                        <img
                          src={test.type === 'mcq'
                            ? "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
                            : "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
                          }
                          alt={test.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-['Poppins'] font-medium mb-2 truncate">{test.title}</h4>
                          <div className="flex items-center gap-3">
                            {test.status === 'in_progress' && (
                              <span className="px-3 py-1 bg-black text-white text-xs font-['Poppins'] rounded">Resume</span>
                            )}
                            {test.status === 'completed' && (
                              <div className="relative w-10 h-10">
                                <div className={`absolute inset-0 ${test.score >= test.max_score * 0.6 ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center`}>
                                  <span className="text-white text-xs font-['Poppins']">
                                    {Math.round((test.score / test.max_score) * 100)}%
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full text-center py-16">
                      <p className="text-gray-500 font-['Syne']">No tests yet. Start your first test!</p>
                      <Link
                        to="/tests"
                        className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] text-white rounded-lg font-['Syne'] hover:opacity-90 transition-opacity"
                      >
                        Take a Test
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {showLeaderboard ? null : (
                <div className="col-span-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold font-['Syne'] text-black">More Tests</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {tests.slice(2, 6).map((test) => (
                      <div key={test.id} className="bg-[rgba(250,250,250,0.75)] rounded-xl p-4 hover:bg-white/50 transition-colors cursor-pointer">
                        <h4 className="font-['Syne'] font-semibold text-black mb-2 truncate">{test.title}</h4>
                        <p className="text-xs text-black/50 font-['Syne']">
                          {test.type === 'mcq' ? 'Multiple Choice' : 'Coding Challenge'}
                        </p>
                        <p className="text-xs text-black/50 font-['Syne'] mt-1">
                          Status: {test.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="col-span-5">
                <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-8 text-center">
                  <h3 className="text-lg font-['Syne'] font-medium text-black/80 mb-6">
                    Upcoming Quiz Competition
                  </h3>
                  <div className="mb-6">
                    <div className="text-6xl mb-4">📅</div>
                    <p className="text-xl font-['Syne'] font-semibold text-black/50">12th Apr, 2024</p>
                  </div>
                  <button className="w-full max-w-xs px-20 py-4 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] text-white rounded-full font-['Syne'] font-medium hover:opacity-90 transition-opacity">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="col-span-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6 hover:bg-white/50 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <Edit className="w-7 h-7" style={{ stroke: 'url(#gradient5)' }} />
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="13.4%" stopColor="#B33DEB" />
                              <stop offset="86.6%" stopColor="#DE8FFF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-['Poppins'] font-semibold text-black/80">{stats.totalTests}</p>
                    <p className="text-sm font-['Syne'] text-black/50">Tests Written</p>
                  </div>

                  <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6 hover:bg-white/50 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-3xl bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent font-bold">%</span>
                      </div>
                    </div>
                    <p className="text-3xl font-['Poppins'] font-semibold text-black/80">{stats.avgScore}%</p>
                    <p className="text-sm font-['Syne'] text-black/50">Overall Average</p>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#66ADFF]" />
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">{stats.totalTests}</p>
                        <p className="text-xs font-['Syne'] text-black/50">No of Tests</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">👍</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">{stats.passed}</p>
                        <p className="text-xs font-['Syne'] text-black/50">Passed</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">👎</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">{stats.failed}</p>
                        <p className="text-xs font-['Syne'] text-black/50">Failed</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">⭐</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">{stats.pending}</p>
                        <p className="text-xs font-['Syne'] text-black/50">Waiting for result</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
