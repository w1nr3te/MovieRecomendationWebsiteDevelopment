/**
 * movie-page.js
 * -----------------------------------------------------------------------
 * Full "IMDB-style" page for a single movie. It lives inside index.html
 * as one more <section class="page"> and is reached through the URL hash:
 *
 *     index.html#/movie/15
 *
 * so every movie has its own shareable link and the browser Back button
 * works. Needs: movies-data.js, movie-details.js, ui.js, main.js.
 * -----------------------------------------------------------------------
 */

let lastPageBeforeMovie = "home";

function formatDuration(minutes) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** Other movies ranked by how many genres they share with this one. */
function getSimilarMovies(movie, limit = 6) {
  return movies
    .filter((m) => m.id !== movie.id)
    .map((m) => ({
      movie: m,
      shared: m.genre.filter((g) => movie.genre.includes(g)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared || b.movie.rating - a.movie.rating)
    .slice(0, limit)
    .map((entry) => entry.movie);
}

function renderVideoSection(movie, extras) {
  const videos = extras.videos || [];

  if (!videos.length) {
    const searchUrl =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(`${movie.title} ${movie.year} official trailer`);

    return `
      <div class="mp-video-fallback">
        <i data-lucide="play-circle"></i>
        <div>
          <strong>No trailer added yet</strong>
          <p>Watch the trailer for ${movie.title} on YouTube.</p>
        </div>
        <a class="btn btn--primary" href="${searchUrl}" target="_blank" rel="noopener">
          <i data-lucide="external-link"></i> Search on YouTube
        </a>
      </div>
    `;
  }

  const tabs =
    videos.length > 1
      ? `<div class="mp-video-tabs">
          ${videos
            .map(
              (v, i) => `
            <button class="mp-video-tab ${i === 0 ? "is-active" : ""}" data-video="${v.id}">
              ${v.title}
            </button>`
            )
            .join("")}
        </div>`
      : "";

  return `
    <div class="mp-video">
      <iframe
        id="mp-player"
        src="https://www.youtube.com/embed/${videos[0].id}"
        title="${movie.title} video"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    ${tabs}
  `;
}

function renderMoviePage(movieId) {
  const root = document.getElementById("movie-page");
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    root.innerHTML = `
      <div class="mp-empty">
        <i data-lucide="film"></i>
        <h2>Movie not found</h2>
        <p>We couldn't find that movie.</p>
        <a class="btn btn--primary" href="#" data-action="movie-back">Back</a>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const extras = (typeof MOVIE_EXTRAS !== "undefined" && MOVIE_EXTRAS[movie.id]) || {};
  const isFav = isFavoriteMovie(movie.id);
  const similar = getSimilarMovies(movie);

  document.title = `${movie.title} (${movie.year}) — Reelist`;

  root.innerHTML = `
    <div class="mp-hero" style="--mp-poster: url('${new URL(movie.poster, document.baseURI).href}')">
      <div class="mp-hero__inner">
        <button class="btn btn--ghost btn--sm mp-back" data-action="movie-back">
          <i data-lucide="arrow-left"></i> Back
        </button>

        <div class="mp-hero__body">
          <div class="mp-poster">${renderPoster(movie)}</div>

          <div class="mp-info">
            <h1 class="mp-title">${movie.title}</h1>

            <div class="movie-card__meta mp-meta">
              <span>${movie.year}</span>
              <span class="dot">&middot;</span>
              <span>${formatDuration(movie.duration)}</span>
              ${renderStars(movie.rating)}
              <span class="mp-outof">/ 10</span>
            </div>

            <div class="genre-tags">
              ${movie.genre.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
            </div>

            <p class="mp-description">${movie.description}</p>

            ${
              extras.director
                ? `<p class="mp-credit"><span>Director</span>${extras.director}</p>`
                : ""
            }
            ${
              extras.cast
                ? `<p class="mp-credit"><span>Stars</span>${extras.cast.slice(0, 3).join(", ")}</p>`
                : ""
            }

            <div class="mp-actions">
              <button
                class="btn ${isFav ? "btn--secondary" : "btn--primary"}"
                data-action="toggle-favorite"
                data-id="${movie.id}"
              >
                <i data-lucide="heart"></i>
                ${isFav ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section mp-section">
      <div class="section__header"><h2 class="section__title">Trailer &amp; Clips</h2></div>
      ${renderVideoSection(movie, extras)}
    </div>

    ${
      extras.cast
        ? `<div class="section mp-section">
            <div class="section__header"><h2 class="section__title">Top Cast</h2></div>
            <ul class="mp-cast">
              ${extras.cast
                .map(
                  (name) => `
                <li class="mp-cast__item">
                  <span class="mp-cast__avatar">${getInitials(name)}</span>
                  <span class="mp-cast__name">${name}</span>
                </li>`
                )
                .join("")}
            </ul>
          </div>`
        : ""
    }

    ${
      similar.length
        ? `<div class="section mp-section">
            <div class="section__header"><h2 class="section__title">More Like This</h2></div>
            <div class="movie-grid" id="similar-grid"></div>
          </div>`
        : ""
    }
  `;

  if (similar.length) {
    renderMovieGrid(document.getElementById("similar-grid"), similar);
  }

  if (window.lucide) lucide.createIcons();

  // Count this visit toward the user's watch history (used by recommendations).
  const user = getCurrentUser();
  if (user && !user.watchHistory.includes(movie.id)) {
    updateCurrentUser({ watchHistory: [...user.watchHistory, movie.id].slice(-20) });
  }
}

// ---------------------------------------------------------------------
// Routing: #/movie/<id>
// ---------------------------------------------------------------------

let cameFromApp = false;

function handleRoute() {
  const match = location.hash.match(/^#\/movie\/(\d+)$/);

  if (match) {
    closeModal();
    if (state.currentPage !== "movie") lastPageBeforeMovie = state.currentPage;
    switchPage("movie");
    renderMoviePage(Number(match[1]));
  } else if (state.currentPage === "movie") {
    switchPage(lastPageBeforeMovie);
  }
}

function goBackFromMoviePage() {
  if (cameFromApp) {
    history.back();
  } else {
    // Page was opened directly from a link — there's no in-app history.
    history.replaceState(null, "", location.pathname + location.search);
    switchPage("home");
  }
}

window.addEventListener("hashchange", () => {
  if (/^#\/movie\/\d+$/.test(location.hash)) cameFromApp = true;
  handleRoute();
});

document.addEventListener("DOMContentLoaded", () => {
  handleRoute();

  // Swap between trailer / clips
  document.getElementById("movie-page").addEventListener("click", (e) => {
    const tab = e.target.closest("[data-video]");
    if (!tab) return;

    document.getElementById("mp-player").src =
      `https://www.youtube.com/embed/${tab.dataset.video}?autoplay=1`;

    document
      .querySelectorAll(".mp-video-tab")
      .forEach((t) => t.classList.toggle("is-active", t === tab));
  });
});