import { BarChart3, CreditCard as Edit, FileText, User, Trophy, Settings, LogOut, Bell, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const userName = currentUser?.displayName || 'User';

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
                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium">
                  <BarChart3 className="w-6 h-6 text-transparent" style={{
                    background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }} />
                  <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </a>

                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600">
                  <Edit className="w-6 h-6" />
                  <span>Tests</span>
                </a>

                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600">
                  <User className="w-6 h-6" />
                  <span>Profile</span>
                </a>

                <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600">
                  <Trophy className="w-6 h-6" />
                  <span>Leaderboard</span>
                </a>
              </nav>
            </div>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600">
                <Settings className="w-6 h-6" />
                <span>Settings</span>
              </a>

              <button onClick={handleLogout} className="flex items-center gap-5 text-lg font-['Syne'] font-medium text-black hover:text-purple-600">
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
                  <Search className="w-5 h-5 text-transparent" style={{
                    background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none font-['Syne'] text-black/50"
                  />
                </div>

                <div className="relative">
                  <Bell className="w-6 h-6 text-black cursor-pointer" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
              </div>
            </header>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold font-['Syne'] text-black flex items-center gap-3">
                    <FileText className="w-6 h-6 text-transparent" style={{
                      background: 'linear-gradient(180deg, #F187FB 0%, #439CFB 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }} />
                    Recent Tests
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-gray-300 hover:bg-white/50">
                      <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-300 hover:bg-white/50">
                      <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="relative w-52 h-72 rounded-xl overflow-hidden group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="C Programming"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-['Poppins'] font-medium mb-2">C Programming</h4>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-black text-white text-xs font-['Poppins'] rounded">Resume</span>
                        <div className="relative w-10 h-10">
                          <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-['Poppins']">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-52 h-72 rounded-xl overflow-hidden group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Python Programming"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-['Poppins'] font-medium mb-2">Python Programming</h4>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-black text-white text-xs font-['Poppins'] rounded">Resume</span>
                        <div className="relative w-10 h-10">
                          <div className="absolute inset-0 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-['Poppins']">28%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <h3 className="text-xl font-bold font-['Syne'] text-black mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-transparent" style={{
                    background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }} />
                  Leader Board
                </h3>

                <div className="bg-[rgba(250,250,250,0.75)] rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        <div>
                          <p className="font-['Syne'] font-semibold text-black">Harsh Rathod</p>
                          <p className="text-xs text-black/50 font-['Syne']">Coding Hustlers League_CHL</p>
                        </div>
                      </div>
                      <div className="text-4xl">🥇</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                        <div>
                          <p className="font-['Syne'] font-semibold text-black">Durvesh Shelar</p>
                          <p className="text-xs text-black/50 font-['Syne']">Coding Hustlers League_CHL</p>
                        </div>
                      </div>
                      <div className="text-4xl">🥈</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                        <div>
                          <p className="font-['Syne'] font-semibold text-black">Rudrapratap Singh</p>
                          <p className="text-xs text-black/50 font-['Syne']">Coding Hustlers League_CHL</p>
                        </div>
                      </div>
                      <div className="text-4xl">🥉</div>
                    </div>
                  </div>
                </div>
              </div>

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
                  <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <Edit className="w-7 h-7 text-transparent" style={{
                          background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text'
                        }} />
                      </div>
                    </div>
                    <p className="text-3xl font-['Poppins'] font-semibold text-black/80">32</p>
                    <p className="text-sm font-['Syne'] text-black/50">Tests Written</p>
                  </div>

                  <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-3xl">%</span>
                      </div>
                    </div>
                    <p className="text-3xl font-['Poppins'] font-semibold text-black/80">80%</p>
                    <p className="text-sm font-['Syne'] text-black/50">Overall Average</p>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <div className="bg-[rgba(250,250,250,0.75)] rounded-xl p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#66ADFF]" />
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">32</p>
                        <p className="text-xs font-['Syne'] text-black/50">No of Tests</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">👍</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">12</p>
                        <p className="text-xs font-['Syne'] text-black/50">Passed</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">👎</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">19</p>
                        <p className="text-xs font-['Syne'] text-black/50">Failed</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#F8F6FF] flex items-center justify-center">
                        <span className="text-xl">⭐</span>
                      </div>
                      <div>
                        <p className="text-xl font-['Poppins'] font-semibold text-black/80">1</p>
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
