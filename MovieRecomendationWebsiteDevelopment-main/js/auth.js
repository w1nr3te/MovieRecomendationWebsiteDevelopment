/**
 * auth.js
 * -----------------------------------------------------------------------
 * DEMO AUTHENTICATION ONLY.
 * This stores accounts in the browser's localStorage and "hashes"
 * passwords with a trivial, reversible checksum. It is NOT secure and
 * must never be used to protect real user data. It exists purely so the
 * UI has something to log in against while there's no backend.
 *
 * To upgrade later: replace the bodies of registerUser / loginUser /
 * logoutUser / getCurrentUser with real API calls (e.g. fetch() to your
 * auth endpoint) and swap localStorage session handling for real tokens.
 * The function signatures are designed to stay the same.
 * -----------------------------------------------------------------------
 */

const USERS_KEY = "movieApp_users";
const SESSION_KEY = "movieApp_session";

/** Trivial non-cryptographic checksum. NOT secure. Demo purposes only. */
function insecureHash(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/** Returns { success, error } */
function registerUser(username, email, password) {
  username = username.trim();
  email = email.trim().toLowerCase();

  if (!username || !email || !password) {
    return { success: false, error: "All fields are required." };
  }
  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  const users = getUsers();
  const exists = users.some(
    (u) => u.username.toLowerCase() === username.toLowerCase() || u.email === email
  );
  if (exists) {
    return { success: false, error: "An account with that username or email already exists." };
  }

  const newUser = {
    username,
    email,
    passwordHash: insecureHash(password),
    favorites: [],
    watchHistory: [],
  };
  users.push(newUser);
  saveUsers(users);
  return { success: true };
}

/** Returns { success, error } */
function loginUser(identifier, password, rememberMe) {
  identifier = identifier.trim().toLowerCase();
  const users = getUsers();
  const user = users.find(
    (u) => u.username.toLowerCase() === identifier || u.email === identifier
  );

  if (!user || user.passwordHash !== insecureHash(password)) {
    return { success: false, error: "Incorrect username/email or password." };
  }

  const session = { username: user.username };
  if (rememberMe) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    sessionStorage.removeItem(SESSION_KEY);
  } else {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    localStorage.removeItem(SESSION_KEY);
  }
  return { success: true };
}

function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

/** Reads whichever storage currently holds a session (remembered or tab-only). */
function getSession() {
  try {
    const remembered = localStorage.getItem(SESSION_KEY);
    if (remembered) return JSON.parse(remembered);
    const tabOnly = sessionStorage.getItem(SESSION_KEY);
    if (tabOnly) return JSON.parse(tabOnly);
  } catch {
    /* ignore parse errors */
  }
  return null;
}

/** Returns the full current user object (with favorites/history), or null if logged out. */
function getCurrentUser() {
  const session = getSession();
  if (!session) return null;
  const users = getUsers();
  return users.find((u) => u.username === session.username) || null;
}

/** Persists changes (e.g. updated favorites) back into the users list. */
function updateCurrentUser(updatedFields) {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const idx = users.findIndex((u) => u.username === session.username);
  if (idx === -1) return;
  users[idx] = { ...users[idx], ...updatedFields };
  saveUsers(users);
}
