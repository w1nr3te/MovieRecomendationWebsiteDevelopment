/**
 * movies-data.js
 * -----------------------------------------------------------------------
 * Movie catalog using real movie titles.
 * -----------------------------------------------------------------------
 */

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    year: 2019,
    posterSeed: "#3B5BA5",
    poster: "images/avengers-endgame.jpg",
    description: "The Avengers make a final effort to undo the damage caused by Thanos.",
    duration: 181,
    featured: true
  },

  {
    id: 2,
    title: "Spider-Man: No Way Home",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.2,
    year: 2021,
    posterSeed: "#8C3B3B",
    poster: "images/spider-man-no-way-home.jpg",
    description: "Spider-Man asks for help after his identity is revealed, but the spell creates unexpected consequences.",
    duration: 148,
    featured: true
  },

  {
    id: 3,
    title: "Interstellar",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.7,
    year: 2014,
    posterSeed: "#1F3B4A",
    poster: "images/interstellar.jpg",
    description: "A group of astronauts travels through space searching for a new home for humanity.",
    duration: 169,
    featured: true
  },

  {
    id: 4,
    title: "Inception",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    year: 2010,
    posterSeed: "#4A4A6E",
    poster: "images/inception.jpg",
    description: "A skilled thief enters people's dreams to steal or plant information.",
    duration: 148,
    featured: true
  },

  {
    id: 5,
    title: "The Batman",
    genre: ["Action", "Crime", "Drama"],
    rating: 7.8,
    year: 2022,
    posterSeed: "#2A2E3A",
    poster: "images/the-batman.jpg",
    description: "Batman investigates a series of crimes that reveal a hidden connection to Gotham City.",
    duration: 176,
    featured: false
  },

  {
    id: 6,
    title: "Iron Man",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.9,
    year: 2008,
    posterSeed: "#8C4A3B",
    poster: "images/iron-man.jpg",
    description: "A billionaire inventor builds a powerful suit after being captured by criminals.",
    duration: 126,
    featured: false
  },

  {
    id: 7,
    title: "Black Panther",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.3,
    year: 2018,
    posterSeed: "#5A3B6E",
    poster: "images/black-panther.jpg",
    description: "The new king of Wakanda must protect his country from an enemy from his past.",
    duration: 134,
    featured: false
  },

  {
    id: 8,
    title: "Guardians of the Galaxy",
    genre: ["Action", "Adventure", "Comedy"],
    rating: 8.0,
    year: 2014,
    posterSeed: "#3B6E8C",
    poster: "images/guardians-of-the-galaxy.jpg",
    description: "A group of unlikely heroes joins together to protect the galaxy.",
    duration: 121,
    featured: false
  },

  {
    id: 9,
    title: "Doctor Strange",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 7.5,
    year: 2016,
    posterSeed: "#6B3B8C",
    poster: "images/doctor-strange.jpg",
    description: "A talented surgeon discovers the mystical arts after a life-changing accident.",
    duration: 115,
    featured: false
  },

  {
    id: 10,
    title: "Captain America: The First Avenger",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 6.9,
    year: 2011,
    posterSeed: "#3B5A8C",
    poster: "images/captain-america-the-first-avenger.jpg",
    description: "A young soldier becomes a super-soldier and fights during World War II.",
    duration: 124,
    featured: false
  },

  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: ["Fantasy", "Adventure", "Family"],
    rating: 7.6,
    year: 2001,
    posterSeed: "#5A6E5A",
    poster: "images/harry-potter-and-the-sorcerers-stone.jpg",
    description: "A young boy discovers that he is a wizard and begins his magical education.",
    duration: 152,
    featured: true
  },

  {
    id: 12,
    title: "Harry Potter and the Chamber of Secrets",
    genre: ["Fantasy", "Adventure", "Family"],
    rating: 7.4,
    year: 2002,
    posterSeed: "#3B6B4A",
    poster: "images/harry-potter-and-the-chamber-of-secrets.jpg",
    description: "Harry returns to Hogwarts and discovers a mysterious danger hidden inside the school.",
    duration: 161,
    featured: false
  },

  {
    id: 13,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: ["Fantasy", "Adventure", "Drama"],
    rating: 8.8,
    year: 2001,
    posterSeed: "#4A6B4A",
    poster: "images/the-lord-of-the-rings-the-fellowship-of-the-ring.jpg",
    description: "A young hobbit begins a dangerous journey to destroy a powerful ring.",
    duration: 178,
    featured: true
  },

  {
    id: 14,
    title: "The Lord of the Rings: The Two Towers",
    genre: ["Fantasy", "Adventure", "Drama"],
    rating: 8.8,
    year: 2002,
    posterSeed: "#3B5A4A",
    poster: "images/the-lord-of-the-rings-the-two-towers.jpg",
    description: "The fellowship continues its struggle against the forces of darkness.",
    duration: 179,
    featured: false
  },

  {
    id: 15,
    title: "The Lord of the Rings: The Return of the King",
    genre: ["Fantasy", "Adventure", "Drama"],
    rating: 9.0,
    year: 2003,
    posterSeed: "#6E5A3B",
    poster: "images/the-lord-of-the-rings-the-return-of-the-king.jpg",
    description: "The final battle for Middle-earth begins as the heroes face their greatest challenge.",
    duration: 201,
    featured: true
  },

  {
    id: 16,
    title: "The Hunger Games",
    genre: ["Action", "Adventure", "Drama"],
    rating: 7.2,
    year: 2012,
    posterSeed: "#8C6E3B",
    poster: "images/the-hunger-games.jpg",
    description: "A young woman volunteers to compete in a dangerous televised competition.",
    duration: 142,
    featured: false
  },

  {
    id: 17,
    title: "Frozen",
    genre: ["Animation", "Adventure", "Family"],
    rating: 7.4,
    year: 2013,
    posterSeed: "#3B6E8C",
    poster: "images/frozen.jpg",
    description: "A young woman travels through a frozen kingdom to find her sister and save their home.",
    duration: 102,
    featured: false
  },

  {
    id: 18,
    title: "The Lion King",
    genre: ["Animation", "Adventure", "Family"],
    rating: 8.5,
    year: 1994,
    posterSeed: "#B58A3B",
    poster: "images/the-lion-king.jpg",
    description: "A young lion must find the courage to take his place as king.",
    duration: 88,
    featured: true
  },

  {
    id: 19,
    title: "Toy Story",
    genre: ["Animation", "Comedy", "Family"],
    rating: 8.3,
    year: 1995,
    posterSeed: "#3B5A8C",
    poster: "images/toy-story.jpg",
    description: "Toys come to life when humans are not around and begin an unexpected adventure.",
    duration: 81,
    featured: false
  },

  {
    id: 20,
    title: "Finding Nemo",
    genre: ["Animation", "Adventure", "Family"],
    rating: 8.2,
    year: 2003,
    posterSeed: "#3B6E8C",
    poster: "images/finding-nemo.jpg",
    description: "A father searches across the ocean for his missing son.",
    duration: 100,
    featured: false
  },

  {
    id: 21,
    title: "Kung Fu Panda",
    genre: ["Animation", "Action", "Comedy"],
    rating: 7.6,
    year: 2008,
    posterSeed: "#8C4A3B",
    poster: "images/kung-fu-panda.jpg",
    description: "An unlikely panda discovers that he may be destined to become a kung fu hero.",
    duration: 92,
    featured: false
  },

  {
    id: 22,
    title: "Jurassic Park",
    genre: ["Adventure", "Sci-Fi", "Thriller"],
    rating: 8.2,
    year: 1993,
    posterSeed: "#3B6B4A",
    poster: "images/jurassic-park.jpg",
    description: "A dinosaur theme park becomes dangerous when the creatures escape.",
    duration: 127,
    featured: true
  },

  {
    id: 23,
    title: "Jurassic World",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 6.9,
    year: 2015,
    posterSeed: "#4A6B3B",
    poster: "images/jurassic-world.jpg",
    description: "A fully operational dinosaur park faces a terrifying new threat.",
    duration: 124,
    featured: false
  },

  {
    id: 24,
    title: "Titanic",
    genre: ["Drama", "Romance"],
    rating: 7.9,
    year: 1997,
    posterSeed: "#3B5A6E",
    poster: "images/titanic.jpg",
    description: "Two young people from different backgrounds meet aboard the Titanic.",
    duration: 194,
    featured: true
  },

  {
    id: 25,
    title: "The Notebook",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    year: 2004,
    posterSeed: "#8C5A3B",
    poster: "images/the-notebook.jpg",
    description: "A couple's love story is remembered through the years.",
    duration: 123,
    featured: false
  },

  {
    id: 26,
    title: "La La Land",
    genre: ["Drama", "Music", "Romance"],
    rating: 8.0,
    year: 2016,
    posterSeed: "#6E3B5A",
    poster: "images/la-la-land.jpg",
    description: "A musician and an aspiring actress fall in love while chasing their dreams.",
    duration: 128,
    featured: false
  },

  {
    id: 27,
    title: "Joker",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.3,
    year: 2019,
    posterSeed: "#6E5A3B",
    poster: "images/joker.jpg",
    description: "A troubled man struggles with isolation while living in Gotham City.",
    duration: 122,
    featured: false
  },

  {
    id: 28,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    year: 2008,
    posterSeed: "#2A2A2A",
    poster: "images/the-dark-knight.jpg",
    description: "Batman faces a criminal mastermind who pushes Gotham into chaos.",
    duration: 152,
    featured: true
  },

  {
    id: 29,
    title: "Avatar",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.9,
    year: 2009,
    posterSeed: "#3B6E8C",
    poster: "images/avatar.jpg",
    description: "A former soldier becomes involved in the struggle of an alien world.",
    duration: 162,
    featured: false
  },

  {
    id: 30,
    title: "Top Gun: Maverick",
    genre: ["Action", "Drama"],
    rating: 8.2,
    year: 2022,
    posterSeed: "#3B5A6E",
    poster: "images/top-gun-maverick.jpg",
    description: "A legendary pilot returns to train a new generation of elite aviators.",
    duration: 130,
    featured: true
  },

  {
    id: 31,
    title: "Mission: Impossible - Fallout",
    genre: ["Action", "Adventure", "Thriller"],
    rating: 7.7,
    year: 2018,
    posterSeed: "#5A3B3B",
    poster: "images/mission-impossible-fallout.jpg",
    description: "An IMF agent races against time after a mission goes wrong.",
    duration: 147,
    featured: false
  },

  {
    id: 32,
    title: "Pirates of the Caribbean",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 8.0,
    year: 2003,
    posterSeed: "#3B5A4A",
    poster: "images/pirates-of-the-caribbean.jpg",
    description: "A pirate and a young blacksmith join forces to rescue a kidnapped woman.",
    duration: 143,
    featured: false
  },

  {
    id: 33,
    title: "Transformers",
    genre: ["Action", "Sci-Fi"],
    rating: 7.0,
    year: 2007,
    posterSeed: "#4A5A6E",
    poster: "images/transformers.jpg",
    description: "Giant alien robots bring their war to Earth.",
    duration: 144,
    featured: false
  },

  {
    id: 34,
    title: "The Maze Runner",
    genre: ["Action", "Mystery", "Sci-Fi"],
    rating: 7.2,
    year: 2014,
    posterSeed: "#3B5A3B",
    poster: "images/the-maze-runner.jpg",
    description: "A young man wakes up in a mysterious maze with no memory of his past.",
    duration: 113,
    featured: false
  },

  {
    id: 35,
    title: "World War Z",
    genre: ["Action", "Horror", "Thriller"],
    rating: 7.0,
    year: 2013,
    posterSeed: "#5A3B3B",
    poster: "images/world-war-z.jpg",
    description: "A former investigator travels around the world searching for a way to stop a global outbreak.",
    duration: 116,
    featured: false
  },

  {
    id: 36,
    title: "A Quiet Place",
    genre: ["Horror", "Drama", "Sci-Fi"],
    rating: 7.5,
    year: 2018,
    posterSeed: "#3B4A3B",
    poster: "images/a-quiet-place.jpg",
    description: "A family must live in silence to survive mysterious creatures.",
    duration: 90,
    featured: false
  },

  {
    id: 37,
    title: "The Conjuring",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.5,
    year: 2013,
    posterSeed: "#2A2A3A",
    poster: "images/the-conjuring.jpg",
    description: "Paranormal investigators help a family experiencing strange events in their home.",
    duration: 112,
    featured: false
  },

  {
    id: 38,
    title: "Shrek",
    genre: ["Animation", "Comedy", "Fantasy"],
    rating: 7.9,
    year: 2001,
    posterSeed: "#6B8C3B",
    poster: "images/shrek.jpg",
    description: "An ogre's peaceful life changes when fairy-tale characters invade his swamp.",
    duration: 90,
    featured: false
  },

  {
    id: 39,
    title: "Inside Out",
    genre: ["Animation", "Comedy", "Family"],
    rating: 8.1,
    year: 2015,
    posterSeed: "#6E4A8C",
    poster: "images/inside-out.jpg",
    description: "Five emotions inside a young girl's mind try to help her through a major life change.",
    duration: 95,
    featured: false
  },

  {
    id: 40,
    title: "Coco",
    genre: ["Animation", "Adventure", "Family"],
    rating: 8.4,
    year: 2017,
    posterSeed: "#8C4A3B",
    poster: "images/coco.jpg",
    description: "A young boy enters the Land of the Dead and discovers his family's musical history.",
    duration: 105,
    featured: true
  },

  {
    id: 41,
    title: "Moana",
    genre: ["Animation", "Adventure", "Family"],
    rating: 7.6,
    year: 2016,
    posterSeed: "#3B6E8C",
    poster: "images/moana.jpg",
    description: "A young islander sails across the ocean to save her people.",
    duration: 107,
    featured: false
  },

  {
    id: 42,
    title: "The Super Mario Bros. Movie",
    genre: ["Animation", "Adventure", "Comedy"],
    rating: 7.0,
    year: 2023,
    posterSeed: "#8C3B3B",
    poster: "images/the-super-mario-bros-movie.jpg",
    description: "Two brothers are transported to a magical world and must work together to save it.",
    duration: 92,
    featured: false
  },

  {
    id: 43,
    title: "The Greatest Showman",
    genre: ["Drama", "Music"],
    rating: 7.5,
    year: 2017,
    posterSeed: "#6E3B5A",
    poster: "images/the-greatest-showman.jpg",
    description: "A visionary entertainer builds a spectacular show that brings different people together.",
    duration: 105,
    featured: false
  },

  {
    id: 44,
    title: "Wonka",
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.2,
    year: 2023,
    posterSeed: "#8C6E3B",
    poster: "images/wonka.jpg",
    description: "A young chocolatier dreams of opening his own chocolate shop and changing the world.",
    duration: 116,
    featured: false
  }
];

/** All unique genres present in the catalog, alphabetized. */
function getAllGenres() {
  const set = new Set();

  movies.forEach((m) => {
    m.genre.forEach((g) => set.add(g));
  });

  return Array.from(set).sort();
}