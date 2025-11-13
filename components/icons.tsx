import React from 'react';

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0v.001M13.5 6v4.5h4.5" />
  </svg>
);

export const PosterMenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col items-center space-y-1 ${className}`}>
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
    <div className="w-5 h-0.5 bg-gray-300" />
  </div>
);