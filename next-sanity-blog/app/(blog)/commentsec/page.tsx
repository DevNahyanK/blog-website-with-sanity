"use client"
import React, { useState, useEffect } from 'react';

const CommentSec = () => {
  const [comments, setComments] = useState<{ username: string, comment: string }[]>([]);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (username && comment) {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setUsername('');
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 py-12">
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Comment Section</h2>
        
        <div className="mb-5">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 bg-gray-100 text-gray-700 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 outline-none transition duration-200"
          />
        </div>
        
        <div className="mb-5">
          <textarea
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-4 bg-gray-100 text-gray-700 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 outline-none transition duration-200"
          />
        </div>
        
        <button
          onClick={handleAddComment}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition duration-300"
        >
          Post Comment
        </button>
      </div>

      <div className="w-full max-w-xl mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Recent Comments</h3>
        <div className="space-y-6">
          {comments.map((commentData, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all"
              style={{ animation: 'fadeIn 1s ease-in-out' }}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-purple-700">{commentData.username}:</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
              <p className="mt-3 text-gray-600">{commentData.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSec;
