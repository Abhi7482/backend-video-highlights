"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
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
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    // Optionally, you can handle query parameters or other logic here
    // For example, filtering by matchId if needed
    return {
        statusCode: 200,
        body: JSON.stringify(mockData),
    };
});
exports.handler = handler;
