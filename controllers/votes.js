const Votes = require('../model/votes.js');
const Rooms = require('../model/rooms.js');

const list = async (req, res) => {
  try {
    const { roomId } = req.body;
    const userId = req.user.id;

    const room = await Rooms.findById(roomId);
    const roomMovies = room.movies;
    const userVotes = (await Votes.find(roomId, userId)) || [];
    console.log(userVotes);
    console.log(roomMovies);
    const findMoviesWithoutVote = (accumulator, movie) => {
      !userVotes.filter(vote => vote.movieId === movie.id)[0]
        ? accumulator.push(movie)
        : null;
      return accumulator;
    };
    const movies = roomMovies.reduce(findMoviesWithoutVote, []);

    res.status(200).json(movies);
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
    const { roomId, movieId, like } = req.body;

    // create vote or skip if vote already exists
    const currentVote =
      (await Votes.findOne(roomId, userId)) ||
      (await Votes.create(roomId, movieId, userId, like));
    res.status(200).json(currentVote);
  } catch (error) {
    console.log(error);
  }

  //   if (!nextMovieId) {
  //     res.status(200).json({ message: [] });
  //   }

  //   let nextVote = await Votes.find(roomId, nextMovieId, userId);

  //   if (!nextVote) {
  //     nextVote = await Votes.create(roomId, nextMovieId, userId);
  //   }
  //   res.status(200).json({ current: currentVote, next: nextVote });
  //   // return next vote
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

module.exports = {
  list,
  create,
  mockup,
};
