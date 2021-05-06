const Votes = require('../model/votes.js');

const list = async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    //TODO создать макссив votes после присоединения в команту если его нет
    const votes = await Votes.find({ roomId, owner: userId });
    res.status(200).json(votes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const mockup = async (req, res) => {
  const data = [
    {
      id: '123',
      movieData: {
        overview:
          'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        release_date: '1977-05-25',
        title: 'Star Wars',
        adult: false,
        backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
        genre_ids: [12, 28, 878],
        vote_count: 15321,
        id: 11,
        original_title: 'Star Wars',
        poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        original_language: 'en',
        video: false,
        vote_average: 8.2,
        popularity: 65.326,
      },
      like: undefined,
      userId: '6060a8922ae0247a1b175948',
      movieId: '6060a892',
    },
    {
      id: '123',
      movieData: {
        overview:
          'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        release_date: '1977-05-25',
        title: 'Star Wars',
        adult: false,
        backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
        genre_ids: [12, 28, 878],
        vote_count: 15321,
        id: 11,
        original_title: 'Star Wars',
        poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        original_language: 'en',
        video: false,
        vote_average: 8.2,
        popularity: 65.326,
      },
      like: undefined,
      userId: '6060a8922ae0247a1b175948',
      movieId: '6060a892',
    },
    {
      id: '123',
      movieData: {
        overview:
          'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        release_date: '1977-05-25',
        title: 'Star Wars',
        adult: false,
        backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
        genre_ids: [12, 28, 878],
        vote_count: 15321,
        id: 11,
        original_title: 'Star Wars',
        poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        original_language: 'en',
        video: false,
        vote_average: 8.2,
        popularity: 65.326,
      },
      like: undefined,
      userId: '6060a8922ae0247a1b175948',
      movieId: '6060a892',
    },
  ];
  res.status(200).json(data);
};

const create = async (req, res) => {
  try {
    const userId = req.user.id;
    const { roomId, movieId, nextMovie, like } = req.body;
    let result = {};
    // send current vote
    await Votes.findOrCreate(roomId, movieId, userId, like, result);
    // get next
    await Votes.nextVote(roomId, nextMovie, userId, result);
    // return next vote
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  list,
  create,
  mockup,
};
