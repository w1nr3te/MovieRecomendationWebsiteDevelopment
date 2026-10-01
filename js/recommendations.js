/**
 * recommendations.js
 * -----------------------------------------------------------------------
 * Simple weighted scoring so the site has "personalized" recommendations
 * without a backend. Swap getRecommendedMovies()'s internals for a real
 * API call later — the function signature can stay identical.
 * -----------------------------------------------------------------------
 */

const WEIGHTS = {
  favoriteGenreMatch: 3,
  historyGenreMatch: 1.5,
  ratingMultiplier: 0.6,
};

/** Movies a user has already favorited/watched are excluded from their own recs. */
function getRecommendedMovies(user, allMovies, limit = 8) {
  if (!user || (user.favorites.length === 0 && user.watchHistory.length === 0)) {
    return getPopularMovies(allMovies, limit);
  }

  const favoriteGenres = collectGenres(user.favorites, allMovies);
  const historyGenres = collectGenres(user.watchHistory, allMovies);
  const seenIds = new Set([...user.favorites, ...user.watchHistory]);

  const scored = allMovies
    .filter((m) => !seenIds.has(m.id))
    .map((movie) => {
      let score = 0;
      movie.genre.forEach((g) => {
        if (favoriteGenres.has(g)) score += WEIGHTS.favoriteGenreMatch;
        if (historyGenres.has(g)) score += WEIGHTS.historyGenreMatch;
      });
      score += movie.rating * WEIGHTS.ratingMultiplier;
      return { movie, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.movie);
}

function collectGenres(movieIds, allMovies) {
  const genres = new Set();
  movieIds.forEach((id) => {
    const movie = allMovies.find((m) => m.id === id);
    if (movie) movie.genre.forEach((g) => genres.add(g));
  });
  return genres;
}

function getPopularMovies(allMovies, limit = 8) {
  return [...allMovies].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

/** "Trending" mock: newer + highly rated movies float up. */
function getTrendingMovies(allMovies, limit = 8) {
  const trendScore = (m) => m.year * 2 + m.rating;
  return [...allMovies].sort((a, b) => trendScore(b) - trendScore(a)).slice(0, limit);
}
