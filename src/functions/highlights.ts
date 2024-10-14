import { Handler } from '@netlify/functions';

// Mock data for matches
const mockData = [
  {
    sessionId: 1,
    matchId: 1,
    sport: 'badminton',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    teams: {
      Sudeep: {
        score: 21,
        statistics: {
          caloriesBurned: 100,
          shotAccuracy: 90,
        },
      },
      Saket: {
        score: 19,
        statistics: {
          caloriesBurned: 80,
          shotAccuracy: 85,
        },
      },
    },
    keyMoments: [
      { time: 30, description: 'Sudeep scores a great point' },
      { time: 60, description: 'Saket makes an amazing comeback' },
    ],
    thumbnailUrl: 'https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg',
  },
];

// Handler function for the Netlify function
const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://7482-badminton-highlights-ebcg.vercel.app', // Your frontend URL
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  // Return mock data with CORS headers
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(mockData),
  };
};

export { handler };
