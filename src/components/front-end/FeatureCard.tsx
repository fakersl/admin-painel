import React from 'react';

interface PropsType {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const FeatureCard: React.FC<PropsType> = ({ icon, title, desc }) => {
    return (
        <div className="flex flex-col gap-2 bg-gray-100 px-4 py-6">
            <div className="flex items-center justify-center h-12 w-12 bg-gray-300 rounded-full">
                {icon}
            </div>
            <h2 className="font-medium text-xl">{title}</h2>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
};

export default FeatureCard;
