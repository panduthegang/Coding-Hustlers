import { useState, useEffect } from 'react';
import { FileText, Bell, ChevronDown, ChevronLeft, ChevronRight, Search, CreditCard as Edit, Calendar, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { getTests, type Test } from '../lib/localStorage';
import Sidebar, { MobileSidebarToggle } from '../components/Sidebar';

const Dashboard = () => {
  const { currentUser } = useAuth();
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

    // Remove duplicates - keep the most recent version of each test based on title
    const uniqueTests = userTests.reduce((acc: Test[], current) => {
      const existing = acc.find(t => t.title === current.title);
      if (!existing) {
        acc.push(current);
      } else {
        // Keep the one with the latest created_at
        const existingIndex = acc.indexOf(existing);
        if (new Date(current.created_at).getTime() > new Date(existing.created_at).getTime()) {
          acc[existingIndex] = current;
        }
      }
      return acc;
    }, []);

    const sortedTests = uniqueTests.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setTests(sortedTests);
  };

  const fetchStats = () => {
    const userTests = getTests(currentUser?.uid);

    // Remove duplicates - keep the most recent version of each test based on title
    const uniqueTests = userTests.reduce((acc: Test[], current) => {
      const existing = acc.find(t => t.title === current.title);
      if (!existing) {
        acc.push(current);
      } else {
        // Keep the one with the latest created_at
        const existingIndex = acc.indexOf(existing);
        if (new Date(current.created_at).getTime() > new Date(existing.created_at).getTime()) {
          acc[existingIndex] = current;
        }
      }
      return acc;
    }, []);

    const completed = uniqueTests.filter((t: Test) => t.status === 'completed');
    const passed = completed.filter((t: Test) => t.score >= t.max_score * 0.6);
    const failed = completed.filter((t: Test) => t.score < t.max_score * 0.6);
    const pending = uniqueTests.filter((t: Test) => t.status === 'pending_result');

    const avgScore = completed.length > 0
      ? Math.round(completed.reduce((sum: number, t: Test) => sum + (t.score / t.max_score) * 100, 0) / completed.length)
      : 0;

    setStats({
      totalTests: uniqueTests.length,
      passed: passed.length,
      failed: failed.length,
      pending: pending.length,
      avgScore
    });
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
        <MobileSidebarToggle onClick={() => setSidebarOpen(true)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8">
            <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-12 gap-4">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold font-['Syne'] text-black mb-1">
                  Welcome {userName}!
                </h2>
              </div>

              <div className="flex items-center gap-3 lg:gap-6 w-full lg:w-auto">
                <div className="hidden sm:flex items-center gap-4 px-4 lg:px-6 py-3 lg:py-4 bg-[rgba(250,250,250,0.75)] rounded-2xl flex-1 lg:flex-none">
                  <Search className="w-4 h-4 lg:w-5 lg:h-5" style={{ stroke: 'url(#gradient2)' }} />
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
                    className="bg-transparent border-none outline-none font-['Syne'] text-black/50 w-20 lg:w-32"
                  />
                </div>

                <div className="relative">
                  <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-black cursor-pointer hover:text-purple-600 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center gap-2 lg:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {userName[0]?.toUpperCase()}
                  </div>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6 hover:bg-white/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-['Poppins'] font-bold text-black/80 mb-1">{stats.totalTests}</p>
                <p className="text-sm font-['Syne'] text-black/50">Total Tests Given</p>
              </div>

              <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6 hover:bg-white/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <p className="text-3xl font-['Poppins'] font-bold text-black/80 mb-1">{stats.passed}</p>
                <p className="text-sm font-['Syne'] text-black/50">Passed Tests</p>
              </div>

              <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6 hover:bg-white/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <span className="text-2xl">✗</span>
                  </div>
                </div>
                <p className="text-3xl font-['Poppins'] font-bold text-black/80 mb-1">{stats.failed}</p>
                <p className="text-sm font-['Syne'] text-black/50">Failed Tests</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {paginatedTests.length > 0 ? (
                    paginatedTests.map((test) => {
                      const isPassed = test.status === 'completed' && test.score >= test.max_score * 0.6;
                      const isFailed = test.status === 'completed' && test.score < test.max_score * 0.6;
                      const scorePercentage = test.status === 'completed' ? Math.round((test.score / test.max_score) * 100) : 0;

                      return (
                        <div
                          key={test.id}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-100"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="px-4 py-1.5 rounded-lg bg-[#B33DEB]">
                              <span className="text-white text-sm font-semibold font-['Poppins']">
                                {test.type === 'mcq' ? 'MCQ TEST' : 'CODING'}
                              </span>
                            </div>

                            {test.status === 'completed' && (
                              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                                isPassed ? 'bg-[#22C55E]' : 'bg-[#EF4444]'
                              }`}>
                                <span className="text-white text-sm font-bold font-['Poppins']">
                                  {scorePercentage}%
                                </span>
                              </div>
                            )}
                          </div>

                          <h4 className="font-['Syne'] font-semibold text-black text-base mb-4 leading-snug min-h-[2.5rem] line-clamp-2">
                            {test.title}
                          </h4>

                          <div className="mb-4">
                            {test.status === 'in_progress' && (
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F59E0B] text-white text-sm font-['Poppins'] rounded-full">
                                <Clock className="w-3.5 h-3.5" />
                                In Progress
                              </span>
                            )}
                            {test.status === 'completed' && (
                              <span className={`inline-flex items-center gap-2 px-3 py-1.5 ${
                                isPassed ? 'bg-[#22C55E]' : 'bg-[#EF4444]'
                              } text-white text-sm font-['Poppins'] rounded-full`}>
                                {isPassed ? (
                                  <>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Passed
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="w-3.5 h-3.5" />
                                    Failed
                                  </>
                                )}
                              </span>
                            )}
                            {test.status === 'pending_result' && (
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3B82F6] text-white text-sm font-['Poppins'] rounded-full">
                                <Clock className="w-3.5 h-3.5" />
                                Pending Result
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-['Syne']">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(test.created_at).toLocaleDateString()}</span>
                            </div>
                            {test.status === 'completed' && (
                              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 font-['Poppins']">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>{test.score}/{test.max_score}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-2 text-center py-16">
                      <div className="mb-4">
                        <div className="w-20 h-20 mx-auto bg-[#F3E8FF] rounded-full flex items-center justify-center mb-4">
                          <FileText className="w-10 h-10 text-[#B33DEB]" />
                        </div>
                        <p className="text-gray-600 font-['Syne'] text-lg mb-2">No tests yet</p>
                        <p className="text-gray-400 font-['Syne'] text-sm mb-6">Start your learning journey today!</p>
                      </div>
                      <Link
                        to="/tests"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] text-white rounded-xl font-['Syne'] font-semibold hover:opacity-90 transition-opacity"
                      >
                        Take Your First Test
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6">
                  <h3 className="text-lg font-bold font-['Syne'] text-black mb-6">Statistics Overview</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 hover:bg-white/30 p-3 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-bold">%</span>
                      </div>
                      <div>
                        <p className="text-2xl font-['Poppins'] font-bold text-black/80">{stats.avgScore}%</p>
                        <p className="text-xs font-['Syne'] text-black/50">Average Score</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-white/30 p-3 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⏳</span>
                      </div>
                      <div>
                        <p className="text-2xl font-['Poppins'] font-bold text-black/80">{stats.pending}</p>
                        <p className="text-xs font-['Syne'] text-black/50">Pending Results</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-['Syne'] text-black/60">Pass Rate</span>
                        <span className="text-sm font-['Syne'] font-bold text-black/80">
                          {stats.totalTests > 0 ? Math.round((stats.passed / stats.totalTests) * 100) : 0}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                          style={{ width: `${stats.totalTests > 0 ? (stats.passed / stats.totalTests) * 100 : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </div>
    </div>
  );
};

export default Dashboard;
