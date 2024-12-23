import React from 'react';
import { Target, Book, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { 
      name: 'Abdul Sami Saab', 
      role: 'Founder and Chairman',
      // You can replace this URL with your hosted image URL or keep /images/sami.jpg if using local files
      image: 'https://i.ibb.co/bbrR4Wy/Sami-jpg.png'
    },
    { 
      name: 'Mazhar Saab', 
      role: 'Founder and Chairman',
      image: 'https://i.ibb.co/DYd9pK5/Screenshot-2024-12-22-143751.png'
    },
    { 
      name: 'Rauf Saab', 
      role: 'Founder and Chairman',
      image: 'https://i.ibb.co/YTbQL5Q/rauf-jpg.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Iqra Schools</h1>
          <p className="text-xl">Building a brighter future through education since 1990</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide quality education that empowers students to become lifelong learners and responsible global citizens.</p>
            </div>
            <div className="text-center p-6">
              <Book className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be a leading educational institution that nurtures excellence, creativity, and innovation.</p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Excellence, integrity, respect, and commitment to continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;