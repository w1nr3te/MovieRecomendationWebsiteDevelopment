/**
 * movie-details.js
 * -----------------------------------------------------------------------
 * Extra info for the full movie page (director, cast, videos), keyed by
 * the movie's id from movies-data.js. Kept in its own file so
 * movies-data.js stays untouched.
 *
 * Every field is optional. To add a trailer or clips, paste the YouTube
 * video ID (the part after "v=" in the URL) into `videos`:
 *
 *   videos: [
 *     { title: "Official Trailer", id: "YOUTUBE_ID_HERE" },
 *     { title: "Clip: Some Scene", id: "ANOTHER_ID" },
 *   ]
 *
 * Movies with no `videos` get a "Search trailer on YouTube" button.
 * -----------------------------------------------------------------------
 */
const MOVIE_EXTRAS = {
  1:  { director: "Anthony & Joe Russo", cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"] },
  2:  { director: "Jon Watts", cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"] },
  3:  { director: "Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"] },
  4:  { director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"] },
  5:  { director: "Matt Reeves", cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Colin Farrell"] },
  6:  { director: "Jon Favreau", cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges", "Terrence Howard"] },
  7:  { director: "Ryan Coogler", cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"] },
  8:  { director: "James Gunn", cast: ["Chris Pratt", "Zoe Saldaña", "Dave Bautista", "Vin Diesel", "Bradley Cooper"] },
  9:  { director: "Scott Derrickson", cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Tilda Swinton"] },
  10: { director: "Joe Johnston", cast: ["Chris Evans", "Hayley Atwell", "Hugo Weaving", "Sebastian Stan"] },
  11: { director: "Chris Columbus", cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Richard Harris"] },
  12: { director: "Chris Columbus", cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Kenneth Branagh"] },
  13: { director: "Peter Jackson", cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"] },
  14: { director: "Peter Jackson", cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Andy Serkis"] },
  15: { director: "Peter Jackson", cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Sean Astin"] },
  16: { director: "Gary Ross", cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson"] },
  17: { director: "Chris Buck & Jennifer Lee", cast: ["Kristen Bell", "Idina Menzel", "Jonathan Groff", "Josh Gad"] },
  18: { director: "Roger Allers & Rob Minkoff", cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Jonathan Taylor Thomas"] },
  19: { director: "John Lasseter", cast: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"] },
  20: { director: "Andrew Stanton", cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould", "Willem Dafoe"] },
  21: { director: "Mark Osborne & John Stevenson", cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie", "Ian McShane"] },
  22: { director: "Steven Spielberg", cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough"] },
  23: { director: "Colin Trevorrow", cast: ["Chris Pratt", "Bryce Dallas Howard", "Vincent D'Onofrio", "Ty Simpkins"] },
  24: { director: "James Cameron", cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"] },
  25: { director: "Nick Cassavetes", cast: ["Ryan Gosling", "Rachel McAdams", "James Garner", "Gena Rowlands"] },
  26: { director: "Damien Chazelle", cast: ["Ryan Gosling", "Emma Stone", "John Legend", "J.K. Simmons"] },
  27: { director: "Todd Phillips", cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"] },
  28: { director: "Christopher Nolan", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"] },
  29: { director: "James Cameron", cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"] },
  30: { director: "Joseph Kosinski", cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"] },
  31: { director: "Christopher McQuarrie", cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames", "Simon Pegg"] },
  32: { director: "Gore Verbinski", cast: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush"] },
  33: { director: "Michael Bay", cast: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Tyrese Gibson"] },
  34: { director: "Wes Ball", cast: ["Dylan O'Brien", "Kaya Scodelario", "Will Poulter", "Thomas Brodie-Sangster"] },
  35: { director: "Marc Forster", cast: ["Brad Pitt", "Mireille Enos", "Daniella Kertesz", "James Badge Dale"] },
  36: { director: "John Krasinski", cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds", "Noah Jupe"] },
  37: { director: "James Wan", cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor", "Ron Livingston"] },
  38: { director: "Andrew Adamson & Vicky Jenson", cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"] },
  39: { director: "Pete Docter", cast: ["Amy Poehler", "Phyllis Smith", "Bill Hader", "Lewis Black"] },
  40: { director: "Lee Unkrich", cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach"] },
  41: { director: "Ron Clements & John Musker", cast: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House", "Temuera Morrison"] },
  42: { director: "Aaron Horvath & Michael Jelenic", cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"] },
  43: { director: "Michael Gracey", cast: ["Hugh Jackman", "Zac Efron", "Michelle Williams", "Zendaya"] },
  44: { director: "Paul King", cast: ["Timothée Chalamet", "Calah Lane", "Keegan-Michael Key", "Hugh Grant"] },
};