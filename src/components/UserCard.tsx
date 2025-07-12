type UserCardProps = {
    name: string;
    role: string;
    email?: string;
    xp: number;
};

export default function UserCard({
    name,
    role,
    email,
    xp
}: UserCardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                <div className="w-20 h-20 bg-purple-300 rounded-full"></div>
            </div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>

            {email && <p className="text-xs text-gray-400 mt-1">{email}</p>}

            <div className="mt-4 w-full text-sm bg-purple-100 text-purple-800 py-2 px-3 rounded-full font-semibold">
                ⭐ {xp} XP
            </div>
        </div>
    );
}
