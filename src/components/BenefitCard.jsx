import React from 'react';
import { 
  Brain, Users, BookOpen, Book, Heart, 
  FileText, Mail, Gift, User
} from 'lucide-react';

const BenefitCard = ({ iconName, title, description }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'brain':
        return <Brain size={24} />;
      case 'users':
        return <Users size={24} />;
      case 'book-open':
        return <BookOpen size={24} />;
      case 'book':
        return <Book size={24} />;
      case 'heart':
        return <Heart size={24} />;
      case 'file-text':
        return <FileText size={24} />;
      case 'mail':
        return <Mail size={24} />;
      case 'gift':
        return <Gift size={24} />;
      default:
        return <User size={24} />;
    }
  };

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
          <div className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
            {getIcon(iconName)}
          </div>
        </div>
      </div>
      <h4 className="text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-900">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;