type CourseCardProps = {
    title: string;
    description?: string;
    progress: number; // 0-100
};

export default function CourseCard({
    title,
    description,
    progress
}: CourseCardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between min-h-[160px]">
            <div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                    {description || "No description provided."}
                </p>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="bg-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{progress}% completed</p>
            </div>

            <div className="flex justify-end mt-4 gap-2">
                <button className="px-4 py-1 text-sm rounded-full border text-gray-600 hover:bg-gray-100">
                    Skip
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700">
                    Continue
                </button>
            </div>
        </div>
    );
}
