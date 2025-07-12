import CourseCard from "../components/CourseCard";
import LearningChart from "../components/LearningChart";
import UserCard from "../components/UserCard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />

            <main className="flex-1 min-h-screen bg-gray-50 p-6">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    {/* Left Section */}
                    <div className="xl:col-span-8 space-y-6">
                        <section>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Hello, Arka <span className="inline-block">👋</span>
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Nice to have you back, what an exciting day!
                                <br />
                                Get ready and continue your lesson today.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">Today's Course</h2>
                            <div className="flex flex-col gap-4">
                                <CourseCard
                                    title="Biology Molecular"
                                    description="21 lesson | 50 min | 5 assignment | 312 students"
                                    progress={79}
                                />
                                <CourseCard
                                    title="Color Theory"
                                    description="10 lesson | 45 min | 2 assignment | 256 students"
                                    progress={64}
                                />
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Class</h2>
                            {/* TODO: Class selector and cards */}
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">Learning Activity</h2>
                            <LearningChart />
                        </section>
                    </div>

                    {/* Right Section */}
                    <div className="xl:col-span-4 space-y-4">
                        <UserCard
                            name="Arka Maulana"
                            role="Computer Science Student"
                            email="arka@academix.com"
                            xp={2400}
                        />

                        {/* XP Card */}
                        <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="text-gray-700 font-semibold text-sm">2400 XP</div>
                            <div className="text-xs text-gray-400">Point</div>
                            <div className="flex gap-2 mt-3">
                                <button className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                                    Redeem
                                </button>
                                <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                    Collect Point
                                </button>
                            </div>
                        </div>

                        {/* Consultation Card */}
                        <div className="bg-orange-400 text-white rounded-xl p-4 shadow-md">
                            <div className="font-semibold text-sm mb-1">Consultation</div>
                            <p className="text-xs">Get a mentor to help your learning process</p>
                        </div>

                        {/* Set Target Card */}
                        <div className="bg-pink-400 text-white rounded-xl p-4 shadow-md">
                            <div className="font-semibold text-sm mb-1">Set Target</div>
                            <p className="text-xs">Set target, reminders and your study timeline</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
