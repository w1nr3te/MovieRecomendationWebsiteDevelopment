/**
 * ui.js
 * -----------------------------------------------------------------------
 * All DOM-rendering functions live here. Nothing in this file mutates
 * app state directly — it only reads data it's given and returns/injects
 * markup. State changes + event wiring happen in main.js.
 * -----------------------------------------------------------------------
 */

/** Generates a placeholder "poster" (gradient + initials) from a movie's seed color. */
function renderPoster(movie) {
  const initials = movie.title
    .split(" ")
    .filter((w) => w.length > 2 || w === w.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return `
    <div class="poster-placeholder" style="background: linear-gradient(160deg, ${movie.posterSeed}, #0D0F14);">
      <span class="poster-initials">${initials}</span>
    </div>
  `;
}

function renderStars(rating) {
  return `<span class="rating-badge"><i data-lucide="star"></i>${rating.toFixed(1)}</span>`;
}

function renderMovieCard(movie, isFavorite) {
  return `
    <article class="movie-card" data-id="${movie.id}" tabindex="0" role="button" aria-label="View details for ${movie.title}">
      <div class="movie-card__poster">
        ${renderPoster(movie)}
        <button
          class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
          data-action="toggle-favorite"
          data-id="${movie.id}"
          aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
          aria-pressed="${isFavorite}"
        >
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="movie-card__body">
        <h3 class="movie-card__title">${movie.title}</h3>
        <div class="movie-card__meta">
          <span>${movie.year}</span>
          <span class="dot">&middot;</span>
          <span>${movie.genre[0]}</span>
          ${renderStars(movie.rating)}
        </div>
        <button class="btn btn--ghost btn--full" data-action="view-details" data-id="${movie.id}">
          View Details
        </button>
      </div>
    </article>
  `;
}

function renderMovieGrid(containerEl, movieList, emptyMessage = "No movies match these filters yet.") {
  if (!movieList.length) {
    containerEl.innerHTML = `
      <div class="empty-state">
        <i data-lucide="film"></i>
        <p>${emptyMessage}</p>
      </div>
    `;
  } else {
    containerEl.innerHTML = movieList.map((m) => renderMovieCard(m, isFavoriteMovie(m.id))).join("");
  }
  if (window.lucide) lucide.createIcons();
}

function renderGenreFilterOptions(selectEl, genres) {
  const options = ['<option value="All">All Genres</option>']
    .concat(genres.map((g) => `<option value="${g}">${g}</option>`))
    .join("");
  selectEl.innerHTML = options;
}

function renderModal(movie) {
  const modal = document.getElementById("movie-modal");
  const isFav = isFavoriteMovie(movie.id);

  modal.querySelector(".modal__content").innerHTML = `
    <button class="modal__close" data-action="close-modal" aria-label="Close">
      <i data-lucide="x"></i>
    </button>
    <div class="modal__poster">${renderPoster(movie)}</div>
    <div class="modal__details">
      <h2>${movie.title}</h2>
      <div class="movie-card__meta modal__meta">
        <span>${movie.year}</span>
        <span class="dot">&middot;</span>
        <span>${movie.duration} min</span>
        ${renderStars(movie.rating)}
      </div>
      <div class="genre-tags">
        ${movie.genre.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
      </div>
      <p class="modal__description">${movie.description}</p>
      <div class="modal__actions">
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
  `;

  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
  if (window.lucide) lucide.createIcons();
  modal.querySelector(".modal__close").focus();

  // Log a watch-history impression for a logged-in user (used by recommendations).
  const user = getCurrentUser();
  if (user && !user.watchHistory.includes(movie.id)) {
    const history = [...user.watchHistory, movie.id].slice(-20); // cap history length
    updateCurrentUser({ watchHistory: history });
  }
}

function closeModal() {
  const modal = document.getElementById("movie-modal");
  modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

function isFavoriteMovie(movieId) {
  const user = getCurrentUser();
  return !!(user && user.favorites.includes(movieId));
}

function renderNav() {
  const user = getCurrentUser();
  const authArea = document.getElementById("nav-auth-area");

  if (user) {
    authArea.innerHTML = `
      <span class="nav-username"><i data-lucide="user-circle"></i>${user.username}</span>
      <button class="btn btn--ghost btn--sm" data-action="logout">Log Out</button>
    `;
  } else {
    authArea.innerHTML = `
      <button class="btn btn--primary btn--sm" data-action="open-login">Log In</button>
    `;
  }
  if (window.lucide) lucide.createIcons();
}

function renderHero(movie) {
  const hero = document.getElementById("hero-section");
  hero.style.setProperty("--hero-color", movie.posterSeed);
  hero.querySelector(".hero__eyebrow").textContent = "Featured";
  hero.querySelector(".hero__title").textContent = movie.title;
  hero.querySelector(".hero__description").textContent = movie.description;
  hero.querySelector(".hero__meta").innerHTML = `
    <span>${movie.year}</span><span class="dot">&middot;</span><span>${movie.genre.join(", ")}</span>${renderStars(movie.rating)}
  `;
  hero.querySelector('[data-action="hero-details"]').dataset.id = movie.id;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function openLoginOverlay() {
  document.getElementById("login-overlay").classList.add("is-open");
  document.body.classList.add("no-scroll");
  document.getElementById("login-username").focus();
}

function closeLoginOverlay() {
  document.getElementById("login-overlay").classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}
