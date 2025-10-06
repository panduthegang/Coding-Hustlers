import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, ChevronRight, TrendingUp, Search, Filter, X } from 'lucide-react';
import Sidebar, { MobileSidebarToggle } from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../lib/courseData';
import { getCourseProgress, getLatestCourseProgress } from '../lib/courseStorage';
import type { CourseProgress } from '../types/course';

const Courses = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, CourseProgress>>({});
  const [latestCourse, setLatestCourse] = useState<CourseProgress | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const allProgress = courses.reduce((acc, course) => {
        const progress = getCourseProgress(currentUser.uid, course.id);
        if (progress.length > 0) {
          acc[course.id] = progress[0];
        }
        return acc;
      }, {} as Record<string, CourseProgress>);
      setProgressMap(allProgress);

      const latest = getLatestCourseProgress(currentUser.uid);
      setLatestCourse(latest);
    }
  }, [currentUser]);

  const getProgressPercentage = (courseId: string, totalChapters: number): number => {
    const progress = progressMap[courseId];
    if (!progress) return 0;
    return Math.round((progress.completedChapters.length / totalChapters) * 100);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

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
          <header className="mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold font-['Syne'] text-black mb-2">
              Learning Courses
            </h2>
            <p className="text-gray-600 font-['Syne'] text-base lg:text-lg mb-6">
              Master programming skills with structured learning paths
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-white/40 rounded-xl focus:border-purple-400 focus:outline-none transition-colors font-['Syne'] text-gray-700"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="w-full sm:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-white/40 rounded-xl hover:border-purple-400 transition-colors font-['Syne'] font-medium text-gray-700 flex items-center gap-2 justify-center"
                >
                  <Filter className="w-5 h-5" />
                  {selectedDifficulty === 'all' ? 'All Levels' : selectedDifficulty}
                  <ChevronRight className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-90' : ''}`} />
                </button>

                {showFilterDropdown && (
                  <div className="absolute z-20 top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <button
                        key={level}
                        onClick={() => {
                          setSelectedDifficulty(level);
                          setShowFilterDropdown(false);
                        }}
                        className={`w-full px-4 py-3 text-left font-['Syne'] font-medium transition-colors ${
                          selectedDifficulty === level
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {level === 'all' ? 'All Levels' : level}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>

          {latestCourse && (
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg">
                    {courses.find(c => c.id === latestCourse.courseId)?.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-['Syne'] mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Continue Learning
                    </p>
                    <h3 className="text-xl font-bold font-['Syne'] text-gray-800">
                      {courses.find(c => c.id === latestCourse.courseId)?.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-['Syne'] mt-1">
                      Chapter {latestCourse.currentChapter} • {latestCourse.completedChapters.length} completed
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/course/${latestCourse.courseId}`)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-['Syne'] font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Resume
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4">
                <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                    style={{
                      width: `${getProgressPercentage(
                        latestCourse.courseId,
                        courses.find(c => c.id === latestCourse.courseId)?.totalChapters || 1
                      )}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold font-['Syne'] text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600 font-['Syne'] mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDifficulty('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-['Syne'] font-semibold hover:shadow-xl transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => {
              const progress = progressMap[course.id];
              const progressPercentage = getProgressPercentage(course.id, course.totalChapters);
              const isStarted = progress && progress.completedChapters.length > 0;

              return (
                <div
                  key={course.id}
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/40 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-blue-400 to-purple-400"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-4xl shadow-lg`}>
                        {course.icon}
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-xs font-bold font-['Poppins'] text-white bg-gradient-to-r ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </div>
                    </div>

                    <h3 className="font-['Syne'] font-bold text-gray-800 text-xl mb-2">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-['Syne'] mb-4 line-clamp-2 min-h-[2.5rem]">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-['Syne']">{course.totalChapters} chapters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-['Syne']">{course.estimatedHours}h</span>
                      </div>
                    </div>

                    {isStarted ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-['Syne'] font-medium">Progress</span>
                          <span className="text-gray-800 font-['Poppins'] font-bold">{progressPercentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600 font-['Syne']">
                          <Award className="w-3 h-3" />
                          {progress.completedChapters.length} / {course.totalChapters} completed
                        </div>
                      </div>
                    ) : (
                      <button className="w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl font-['Syne'] font-semibold transition-all flex items-center justify-center gap-2">
                        Start Learning
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Courses;
