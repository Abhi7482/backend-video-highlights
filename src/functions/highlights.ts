import { Handler } from '@netlify/functions';

const mockData = [
  {
    sessionId: 1,
    matchId: 1,
    sport: 'badminton',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    teams: {
      Sudeep: { score: 21, statistics: { caloriesBurned: 100, shotAccuracy: 90 } },
      Saket: { score: 19, statistics: { caloriesBurned: 80, shotAccuracy: 85 } },
    },
    keyMoments: [
      { time: 30, description: 'Sudeep scores a great point' },
      { time: 60, description: 'Saket makes an amazing comeback' },
    ],
    thumbnailUrl: 'https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg',
  },
];

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(mockData),
  };
};

export { handler };
