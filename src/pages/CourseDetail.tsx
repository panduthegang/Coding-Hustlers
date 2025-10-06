import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CheckCircle, PlayCircle, Code, FileText, Trophy, Clock } from 'lucide-react';
import Sidebar, { MobileSidebarToggle } from '../components/Sidebar';
import ChapterOverview from '../components/ChapterOverview';
import { useAuth } from '../contexts/AuthContext';
import { courses, chapters } from '../lib/courseData';
import { getCourseProgress, isChapterUnlocked } from '../lib/courseStorage';
import type { Chapter, CourseProgress } from '../types/course';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [showOverview, setShowOverview] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const course = courses.find(c => c.id === courseId);
  const courseChapters = courseId ? chapters[courseId] || [] : [];

  useEffect(() => {
    if (currentUser && courseId) {
      const progressList = getCourseProgress(currentUser.uid, courseId);
      if (progressList.length > 0) {
        setProgress(progressList[0]);
      }
    }
  }, [currentUser, courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h2>
          <button
            onClick={() => navigate('/courses')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const handleChapterClick = (chapter: Chapter) => {
    if (!currentUser) return;

    const unlocked = isChapterUnlocked(currentUser.uid, course.id, chapter.order);
    if (!unlocked) return;

    setSelectedChapter(chapter);
    setShowOverview(true);
  };

  const handleOverviewContinue = () => {
    setShowOverview(false);
    if (selectedChapter) {
      navigate(`/course/${courseId}/chapter/${selectedChapter.id}`, {
        state: { chapter: selectedChapter, course }
      });
    }
  };

  const isCompleted = (chapterId: string): boolean => {
    return progress?.completedChapters.includes(chapterId) || false;
  };

  const getChapterScore = (chapterId: string) => {
    const score = progress?.testScores.find(s => s.chapterId === chapterId);
    return score;
  };

  const progressPercentage = progress
    ? Math.round((progress.completedChapters.length / courseChapters.length) * 100)
    : 0;

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
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-['Syne'] font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </button>

          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-lg border border-white/40 mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl shadow-xl`}>
                {course.icon}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold font-['Syne'] text-gray-800 mb-2">
                  {course.title}
                </h1>
                <p className="text-gray-600 font-['Syne'] text-base lg:text-lg mb-4">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="font-['Syne']">{course.totalChapters} chapters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-['Syne']">{course.estimatedHours} hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span className="font-['Syne']">{course.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>

            {progress && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-['Syne'] text-gray-600 font-medium">Your Progress</span>
                  <span className="text-sm font-['Poppins'] font-bold text-gray-800">{progressPercentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 font-['Syne'] mt-2">
                  {progress.completedChapters.length} of {courseChapters.length} chapters completed
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {courseChapters.map((chapter) => {
              const unlocked = currentUser ? isChapterUnlocked(currentUser.uid, course.id, chapter.order) : false;
              const completed = isCompleted(chapter.id);
              const score = getChapterScore(chapter.id);

              return (
                <div
                  key={chapter.id}
                  onClick={() => unlocked && handleChapterClick(chapter)}
                  className={`relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/40 transition-all duration-300 ${
                    unlocked
                      ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.01]'
                      : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                      completed
                        ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                        : unlocked
                        ? `bg-gradient-to-br ${course.color}`
                        : 'bg-gray-300'
                    } flex items-center justify-center shadow-md`}>
                      {completed ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : unlocked ? (
                        <PlayCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Lock className="w-6 h-6 text-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-['Poppins'] font-bold text-gray-500">
                              Chapter {chapter.order}
                            </span>
                            <div className={`px-2 py-1 rounded text-xs font-bold font-['Poppins'] text-white ${
                              chapter.testType === 'mcq'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                : 'bg-gradient-to-r from-purple-500 to-pink-500'
                            }`}>
                              {chapter.testType === 'mcq' ? 'MCQ TEST' : 'CODING'}
                            </div>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold font-['Syne'] text-gray-800 mb-1">
                            {chapter.title}
                          </h3>
                          <p className="text-sm text-gray-600 font-['Syne'] mb-2">
                            {chapter.description}
                          </p>
                          {score && (
                            <div className="flex items-center gap-2 text-sm">
                              <Trophy className={`w-4 h-4 ${score.passed ? 'text-green-600' : 'text-orange-600'}`} />
                              <span className="font-['Poppins'] font-bold text-gray-700">
                                Score: {score.score}/{score.maxScore} ({Math.round((score.score / score.maxScore) * 100)}%)
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <div className={`px-3 py-1 rounded-lg text-xs font-bold font-['Poppins'] ${
                            chapter.difficulty === 'Easy'
                              ? 'bg-green-100 text-green-700'
                              : chapter.difficulty === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {chapter.difficulty}
                          </div>
                          {completed && (
                            <div className="flex items-center gap-1 text-xs text-green-600 font-['Syne'] font-medium">
                              <CheckCircle className="w-3 h-3" />
                              Completed
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {!unlocked && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] rounded-2xl flex items-center justify-center">
                      <div className="bg-white/90 rounded-xl px-6 py-3 shadow-lg">
                        <div className="flex items-center gap-2 text-gray-700 font-['Syne'] font-semibold">
                          <Lock className="w-5 h-5" />
                          Complete previous chapter to unlock
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {showOverview && selectedChapter && (
        <ChapterOverview
          chapterTitle={selectedChapter.title}
          chapterDescription={selectedChapter.description}
          difficulty={selectedChapter.difficulty}
          onContinue={handleOverviewContinue}
        />
      )}
    </div>
  );
};

export default CourseDetail;
