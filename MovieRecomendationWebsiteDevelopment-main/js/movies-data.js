/**
 * movies-data.js
 * -----------------------------------------------------------------------
 * Mock movie catalog. In a future version, `movies` can be replaced by
 * an async fetchMovies() call to a real API (TMDB, OMDb, custom backend)
 * as long as each returned object keeps this same shape.
 *
 * poster: intentionally left as a short color "seed" instead of a real
 * image URL. We don't host or link real movie posters (copyright), so
 * the UI generates a placeholder poster from `posterSeed` + `title`.
 * Swap this field for a real image URL once a poster API is wired up.
 * -----------------------------------------------------------------------
 */

const movies = [
  { id: 1, title: "The Last Horizon", genre: ["Sci-Fi", "Adventure"], rating: 8.4, year: 2024, posterSeed: "#3B5BA5", description: "A stranded crew races to repair their ship before a dying star consumes the system.", duration: 138, featured: true },
  { id: 2, title: "Quiet Streets", genre: ["Drama"], rating: 8.7, year: 2023, posterSeed: "#5A6E5A", description: "A retired detective is pulled back into the case that ended his career.", duration: 112, featured: true },
  { id: 3, title: "Neon Static", genre: ["Sci-Fi", "Thriller"], rating: 7.9, year: 2025, posterSeed: "#8A3B8C", description: "In a city run by algorithms, a technician discovers the system is watching back.", duration: 121, featured: true },
  { id: 4, title: "Paper Lanterns", genre: ["Romance", "Drama"], rating: 8.1, year: 2022, posterSeed: "#B5654A", description: "Two strangers exchange letters for a year before ever learning each other's names.", duration: 104, featured: false },
  { id: 5, title: "Iron Tide", genre: ["Action", "Adventure"], rating: 7.6, year: 2024, posterSeed: "#4A5A6E", description: "A salvage crew uncovers a wreck that everyone thought was a myth.", duration: 128, featured: true },
  { id: 6, title: "The Understudy", genre: ["Drama", "Thriller"], rating: 8.3, year: 2021, posterSeed: "#6E4A5A", description: "An actress steps into a role that begins to blur with her own life.", duration: 109, featured: false },
  { id: 7, title: "Backyard Astronomers", genre: ["Comedy", "Family"], rating: 7.4, year: 2023, posterSeed: "#3B8C7A", description: "Three kids build a telescope to prove their neighborhood has a secret.", duration: 96, featured: false },
  { id: 8, title: "Hollow Pines", genre: ["Horror"], rating: 7.2, year: 2024, posterSeed: "#2A2E3A", description: "A family retreat in the woods reveals the forest keeps its own residents.", duration: 101, featured: false },
  { id: 9, title: "The Cartographer's Wife", genre: ["Drama", "History"], rating: 8.6, year: 2020, posterSeed: "#8C6B3B", description: "A mapmaker's widow finishes his final expedition to clear his name.", duration: 132, featured: false },
  { id: 10, title: "Static Kings", genre: ["Action", "Crime"], rating: 7.5, year: 2022, posterSeed: "#5A3B3B", description: "Rival radio pirates broadcast over a city that's about to go dark.", duration: 118, featured: false },
  { id: 11, title: "Little Fires Everywhere Else", genre: ["Comedy", "Drama"], rating: 7.8, year: 2023, posterSeed: "#B58A3B", description: "A small-town bakery becomes the unlikely center of a family feud.", duration: 99, featured: false },
  { id: 12, title: "Deep Fathom", genre: ["Sci-Fi", "Horror"], rating: 7.3, year: 2025, posterSeed: "#1F3B4A", description: "A research vessel loses contact after finding something on the ocean floor.", duration: 107, featured: false },
  { id: 13, title: "The Wrong Kind of Quiet", genre: ["Thriller", "Mystery"], rating: 8.0, year: 2021, posterSeed: "#4A4A6E", description: "A sound engineer hears something in an old recording that shouldn't be there.", duration: 114, featured: false },
  { id: 14, title: "Marble Season", genre: ["Drama", "Sport"], rating: 8.2, year: 2019, posterSeed: "#3B5A4A", description: "An aging coach takes one last shot with a team nobody believes in.", duration: 123, featured: false },
  { id: 15, title: "Coyote Freeway", genre: ["Action", "Comedy"], rating: 7.1, year: 2024, posterSeed: "#8C4A3B", description: "Two rival tow-truck drivers get caught in a heist gone sideways.", duration: 105, featured: false },
  { id: 16, title: "The Glass Orchard", genre: ["Fantasy", "Drama"], rating: 8.5, year: 2022, posterSeed: "#6B8C3B", description: "A gardener discovers her orchard grows memories instead of fruit.", duration: 116, featured: true },
  { id: 17, title: "Signal Loss", genre: ["Sci-Fi", "Thriller"], rating: 7.7, year: 2023, posterSeed: "#3B4A8C", description: "A satellite operator picks up a transmission sent decades before it launched.", duration: 110, featured: false },
  { id: 18, title: "Honest Weather", genre: ["Drama"], rating: 8.9, year: 2020, posterSeed: "#5A5A5A", description: "A meteorologist forecasts a storm no one in town wants to believe in.", duration: 127, featured: false },
  { id: 19, title: "Pocket Change", genre: ["Comedy"], rating: 7.0, year: 2024, posterSeed: "#B5A53B", description: "A vending machine repairman accidentally becomes a neighborhood celebrity.", duration: 92, featured: false },
  { id: 20, title: "The Ferryman's Route", genre: ["Adventure", "Fantasy"], rating: 8.3, year: 2021, posterSeed: "#3B6E8C", description: "A river guide agrees to one final passenger, who claims to be already dead.", duration: 119, featured: false },
  { id: 21, title: "Blacktop Choir", genre: ["Drama", "Music"], rating: 8.4, year: 2022, posterSeed: "#6E3B5A", description: "A street musician assembles an unlikely choir out of a failing block.", duration: 108, featured: false },
  { id: 22, title: "Wire and Bone", genre: ["Horror", "Thriller"], rating: 7.4, year: 2025, posterSeed: "#2A1F2A", description: "A prosthetics designer's newest creation starts moving on its own.", duration: 103, featured: false },
  { id: 23, title: "The Long Recess", genre: ["Comedy", "Family"], rating: 7.6, year: 2023, posterSeed: "#8C7A3B", description: "A substitute teacher gets stuck supervising summer school forever, or so it seems.", duration: 94, featured: false },
  { id: 24, title: "Aftertaste", genre: ["Drama", "Comedy"], rating: 8.0, year: 2019, posterSeed: "#5A3B6E", description: "A disgraced chef opens a food truck outside the restaurant that fired him.", duration: 101, featured: false },
  { id: 25, title: "Northbound", genre: ["Action", "Drama"], rating: 7.9, year: 2024, posterSeed: "#3B5A5A", description: "A trucker crosses the country to deliver something she won't explain.", duration: 122, featured: false },
  { id: 26, title: "The Understory", genre: ["Documentary"], rating: 8.6, year: 2022, posterSeed: "#3B6B4A", description: "A year in the life of a forest floor, filmed one frame at a time.", duration: 88, featured: false },
  { id: 27, title: "Counterfeit Skies", genre: ["Sci-Fi", "Mystery"], rating: 7.8, year: 2021, posterSeed: "#4A3B8C", description: "A pilot notices the clouds over one city never change shape.", duration: 113, featured: false },
  { id: 28, title: "Last Call at the Aviary", genre: ["Romance", "Comedy"], rating: 7.5, year: 2023, posterSeed: "#8C3B6B", description: "A pet shop owner and a bird-watcher keep almost meeting for a year.", duration: 97, featured: false },
  { id: 29, title: "The Salt Line", genre: ["Thriller", "Drama"], rating: 8.2, year: 2020, posterSeed: "#3B4A4A", description: "A coastal town's fishing rights spark a conflict decades in the making.", duration: 117, featured: false },
  { id: 30, title: "Recess Bell", genre: ["Animation", "Family"], rating: 7.9, year: 2024, posterSeed: "#B54A6E", description: "A shy robot enrolled in elementary school just wants to make one friend.", duration: 90, featured: true },
  { id: 31, title: "Down to the Wire", genre: ["Action", "Thriller"], rating: 7.3, year: 2022, posterSeed: "#5A2A2A", description: "An electrician trapped in a blackout has ninety minutes to stop it spreading.", duration: 106, featured: false },
  { id: 32, title: "The Cellist's Apprentice", genre: ["Drama", "Music"], rating: 8.7, year: 2019, posterSeed: "#3B3B5A", description: "A prodigy's final student inherits more than just his technique.", duration: 124, featured: false },
  { id: 33, title: "Overgrown", genre: ["Horror", "Mystery"], rating: 7.1, year: 2025, posterSeed: "#2A3B2A", description: "A community garden thrives suspiciously fast after a strange donation of soil.", duration: 98, featured: false },
  { id: 34, title: "Two Suns Over Marfa", genre: ["Sci-Fi", "Drama"], rating: 8.1, year: 2023, posterSeed: "#8C5A3B", description: "A small desert town adjusts to life after a second sun appears overnight.", duration: 120, featured: false },
  { id: 35, title: "Cheap Seats", genre: ["Comedy", "Sport"], rating: 7.2, year: 2024, posterSeed: "#6E6E3B", description: "Two lifelong rivals scalp tickets to the game that will decide their friendship.", duration: 93, featured: false },
  { id: 36, title: "The Weight of Water", genre: ["Drama"], rating: 8.8, year: 2021, posterSeed: "#3B5A6E", description: "A dam engineer must decide whether to flood the valley she grew up in.", duration: 129, featured: true },
  { id: 37, title: "Static and Bone", genre: ["Horror", "Sci-Fi"], rating: 7.5, year: 2022, posterSeed: "#2A2A4A", description: "An old radio tower starts picking up broadcasts from the future.", duration: 102, featured: false },
  { id: 38, title: "The Understated Life of Rosa Bell", genre: ["Drama", "Comedy"], rating: 8.3, year: 2020, posterSeed: "#8C3B3B", description: "A retired postal worker discovers a decades-old undelivered letter addressed to her.", duration: 111, featured: false },
  { id: 39, title: "Freight", genre: ["Action", "Crime"], rating: 7.4, year: 2023, posterSeed: "#3B3B3B", description: "A cargo inspector uncovers a smuggling route hidden in plain sight.", duration: 115, featured: false },
  { id: 40, title: "Migration Season", genre: ["Documentary", "Adventure"], rating: 8.5, year: 2024, posterSeed: "#4A6B4A", description: "Following one arctic tern's twenty-thousand-mile journey pole to pole.", duration: 85, featured: false },
  { id: 41, title: "The Understory Beneath", genre: ["Fantasy", "Adventure"], rating: 7.9, year: 2022, posterSeed: "#5A3B8C", description: "A cave surveyor finds a civilization that has never seen the surface.", duration: 125, featured: false },
  { id: 42, title: "Nine Lives of a Locksmith", genre: ["Comedy", "Mystery"], rating: 7.6, year: 2021, posterSeed: "#8C6E3B", description: "A locksmith with unusually good luck is hired to open a door no one should.", duration: 100, featured: false },
  { id: 43, title: "The Standby Pilot", genre: ["Drama", "Action"], rating: 8.0, year: 2025, posterSeed: "#3B4A3B", description: "A grounded pilot gets one more flight to prove the accident wasn't his fault.", duration: 119, featured: false },
  { id: 44, title: "Evening Frequencies", genre: ["Romance", "Drama"], rating: 8.4, year: 2019, posterSeed: "#6E3B4A", description: "A late-night radio host falls for a caller she's never seen.", duration: 107, featured: false },
];

/** All unique genres present in the catalog, alphabetized. */
function getAllGenres() {
  const set = new Set();
  movies.forEach((m) => m.genre.forEach((g) => set.add(g)));
  return Array.from(set).sort();
}
