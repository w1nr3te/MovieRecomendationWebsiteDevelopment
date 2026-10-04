/**
 * main.js
 * -----------------------------------------------------------------------
 * App bootstrap and event wiring. Holds the one small piece of runtime
 * state (active filters) that doesn't belong in localStorage, and
 * delegates every click to the right handler.
 * -----------------------------------------------------------------------
 */

const state = {
  activeGenreFilter: "All",
  activeSort: "rating",
  currentPage: "home",
};

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderGenreFilterOptions(document.getElementById("genre-filter"), getAllGenres());
  renderHomePage();
  wireGlobalEvents();
  maybeShowLoginOnFirstVisit();
  if (window.lucide) lucide.createIcons();
});

// ---------------------------------------------------------------------
// Page rendering
// ---------------------------------------------------------------------

function renderHomePage() {
  const featured = movies.filter((m) => m.featured);
  renderHero(featured[Math.floor(Math.random() * featured.length)]);

  const user = getCurrentUser();
  renderMovieGrid(document.getElementById("recommended-grid"), getRecommendedMovies(user, movies, 8));
  renderMovieGrid(document.getElementById("trending-grid"), getTrendingMovies(movies, 8));
  renderMovieGrid(document.getElementById("popular-grid"), getPopularMovies(movies, 8));
}

function renderDiscoverPage() {
  let results = [...movies];

  if (state.activeGenreFilter !== "All") {
    results = results.filter((m) => m.genre.includes(state.activeGenreFilter));
  }

  const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
  if (searchTerm) {
    results = results.filter((m) => m.title.toLowerCase().includes(searchTerm));
  }

  results.sort((a, b) =>
    state.activeSort === "rating" ? b.rating - a.rating : b.year - a.year
  );

  renderMovieGrid(document.getElementById("discover-grid"), results, "No movies match your search or filters.");
}

function renderFavoritesPage() {
  const user = getCurrentUser();
  const favoriteMovies = user ? movies.filter((m) => user.favorites.includes(m.id)) : [];
  renderMovieGrid(
    document.getElementById("favorites-grid"),
    favoriteMovies,
    "You haven't favorited any movies yet. Tap the heart on a movie card to save it here."
  );
}

function renderProfilePage() {
  const user = getCurrentUser();
  if (!user) return;
  document.getElementById("profile-username").textContent = user.username;
  document.getElementById("profile-email").textContent = user.email;
  document.getElementById("profile-favorites-count").textContent = user.favorites.length;
  document.getElementById("profile-history-count").textContent = user.watchHistory.length;
}

function switchPage(pageName) {
  // Favorites and Profile require login.
  if ((pageName === "favorites" || pageName === "profile") && !getCurrentUser()) {
    openLoginOverlay();
    showToast("Log in to view this page.");
    return;
  }

  // Leaving the movie page: clear its #/movie/ID hash and restore the tab title.
  if (pageName !== "movie") {
    if (location.hash.startsWith("#/movie/")) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    document.title = "Reelist — Discover your next favorite movie";
  }

  state.currentPage = pageName;
  document.querySelectorAll(".page").forEach((el) => el.classList.toggle("is-active", el.dataset.page === pageName));
  document.querySelectorAll(".nav-link").forEach((el) => el.classList.toggle("is-active", el.dataset.page === pageName));

  if (pageName === "discover") renderDiscoverPage();
  if (pageName === "favorites") renderFavoritesPage();
  if (pageName === "profile") renderProfilePage();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------------------------------------------------------------------
// Login overlay first-visit behavior
// ---------------------------------------------------------------------

function maybeShowLoginOnFirstVisit() {
  const dismissed = sessionStorage.getItem("movieApp_overlayDismissed");
  if (!getCurrentUser() && !dismissed) {
    openLoginOverlay();
  }
}

// ---------------------------------------------------------------------
// Event delegation
// ---------------------------------------------------------------------

function wireGlobalEvents() {
  // Nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage(link.dataset.page);
      document.getElementById("mobile-nav").classList.remove("is-open");
    });
  });

  document.getElementById("mobile-nav-toggle").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.toggle("is-open");
  });

  // Delegated clicks (cards, buttons rendered dynamically)
  document.body.addEventListener("click", (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) {
      // Clicking a card itself (not a specific button) opens details.
      const card = e.target.closest(".movie-card");
      if (card) openMovieDetails(Number(card.dataset.id));
      return;
    }

    const action = actionEl.dataset.action;
    const id = Number(actionEl.dataset.id);

    switch (action) {
      case "view-details":
      case "hero-details":
        openMovieDetails(id);
        break;
      case "toggle-favorite":
        toggleFavorite(id);
        break;
      case "close-modal":
        closeModal();
        break;
      case "open-movie-page":
        closeModal(); // the link's #/movie/ID hash does the navigation
        break;
      case "movie-back":
        e.preventDefault();
        goBackFromMoviePage();
        break;
      case "open-login":
        openLoginOverlay();
        break;
      case "close-login":
        closeLoginOverlay();
        sessionStorage.setItem("movieApp_overlayDismissed", "true");
        break;
      case "logout":
        logoutUser();
        renderNav();
        showToast("Logged out.");
        if (state.currentPage === "favorites" || state.currentPage === "profile") switchPage("home");
        break;
      case "switch-to-register":
        toggleAuthForms("register");
        break;
      case "switch-to-login":
        toggleAuthForms("login");
        break;
    }
  });

  // Cards are keyboard-activatable too
  document.body.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".movie-card");
    if (card) {
      e.preventDefault();
      openMovieDetails(Number(card.dataset.id));
    }
  });

  // Modal backdrop click closes it
  document.getElementById("movie-modal").addEventListener("click", (e) => {
    if (e.target.id === "movie-modal") closeModal();
  });

  // Escape key closes modal / overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Discover filters
  document.getElementById("genre-filter").addEventListener("change", (e) => {
    state.activeGenreFilter = e.target.value;
    renderDiscoverPage();
  });
  document.getElementById("sort-filter").addEventListener("change", (e) => {
    state.activeSort = e.target.value;
    renderDiscoverPage();
  });
  document.getElementById("search-input").addEventListener("input", debounce(renderDiscoverPage, 200));

  // Auth forms
  document.getElementById("login-form").addEventListener("submit", handleLoginSubmit);
  document.getElementById("register-form").addEventListener("submit", handleRegisterSubmit);
}

function openMovieDetails(movieId) {
  const movie = movies.find((m) => m.id === movieId);
  if (movie) renderModal(movie);
}

function toggleFavorite(movieId) {
  const user = getCurrentUser();
  if (!user) {
    openLoginOverlay();
    showToast("Log in to save favorites.");
    return;
  }

  const isFav = user.favorites.includes(movieId);
  const updatedFavorites = isFav
    ? user.favorites.filter((id) => id !== movieId)
    : [...user.favorites, movieId];

  updateCurrentUser({ favorites: updatedFavorites });
  showToast(isFav ? "Removed from favorites." : "Added to favorites.");

  // Re-render whatever is currently visible so the heart icon / lists stay in sync.
  if (document.getElementById("movie-modal").classList.contains("is-open")) {
    openMovieDetails(movieId);
  }
  if (state.currentPage === "home") renderHomePage();
  if (state.currentPage === "discover") renderDiscoverPage();
  if (state.currentPage === "favorites") renderFavoritesPage();
  if (state.currentPage === "movie") renderMoviePage(movieId);
}

// ---------------------------------------------------------------------
// Auth form handling
// ---------------------------------------------------------------------

function toggleAuthForms(which) {
  document.getElementById("login-form").classList.toggle("is-hidden", which !== "login");
  document.getElementById("register-form").classList.toggle("is-hidden", which !== "register");
  document.getElementById("auth-error").textContent = "";
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const rememberMe = document.getElementById("login-remember").checked;

  const result = loginUser(identifier, password, rememberMe);
  const errorEl = document.getElementById("auth-error");

  if (!result.success) {
    errorEl.textContent = result.error;
    return;
  }

  errorEl.textContent = "";
  e.target.reset();
  closeLoginOverlay();
  renderNav();
  showToast(`Welcome back, ${getCurrentUser().username}!`);
  if (state.currentPage === "home") renderHomePage();
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const result = registerUser(username, email, password);
  const errorEl = document.getElementById("auth-error");

  if (!result.success) {
    errorEl.textContent = result.error;
    return;
  }

  // Auto-login after successful registration.
  loginUser(username, password, true);
  errorEl.textContent = "";
  e.target.reset();
  closeLoginOverlay();
  renderNav();
  showToast(`Account created. Welcome, ${username}!`);
  if (state.currentPage === "home") renderHomePage();
}

// ---------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}