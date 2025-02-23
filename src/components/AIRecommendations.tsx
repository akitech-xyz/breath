import React from "react";
const AIRecommendations = () => {
  return <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
      <h2 className="text-xl mb-4">AI Recommendations</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white/10 rounded-xl">
          <p>
            You last chose Rain Sounds + 10 Minutes. Would you like to continue?
          </p>
        </div>
        <div className="p-4 bg-white/10 rounded-xl">
          <p>
            AI Suggestion: Deep Space Meditation - 20 Minutes, ideal for deep
            relaxation.
          </p>
        </div>
      </div>
    </div>;
};
export default AIRecommendations;