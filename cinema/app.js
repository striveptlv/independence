const movies = [
  { id: "night-living-dead", title: "Night of the Living Dead", genre: "Classic horror", rating: "NR", minutes: 96, poster: "assets/night-of-the-living-dead.jpg", accent: "linear-gradient(135deg, #0c0f13, #b42318)", days: { Today: [{ time: "1:20 PM", price: 10 }, { time: "6:00 PM", price: 13 }, { time: "6:30 PM", price: 14 }], Friday: [{ time: "4:40 PM", price: 12 }, { time: "6:30 PM", price: 14 }, { time: "8:40 PM", price: 15 }], Saturday: [{ time: "4:15 PM", price: 10 }, { time: "5:10 PM", price: 13 }, { time: "8:15 PM", price: 15 }], Sunday: [{ time: "4:50 PM", price: 11 }, { time: "7:00 PM", price: 13 }] } },
  { id: "phantom-opera-1925", title: "The Phantom of the Opera (1925)", genre: "Silent horror drama", rating: "NR", minutes: 93, poster: "assets/phantom-of-the-opera.webp", accent: "linear-gradient(135deg, #20142f, #d7ad2f)", days: { Today: [{ time: "4:00 PM", price: 11 }], Friday: [{ time: "4:30 PM", price: 12 }, { time: "7:15 PM", price: 14 }], Saturday: [{ time: "12:45 PM", price: 11 }, { time: "3:10 PM", price: 12 }, { time: "8:00 PM", price: 15 }], Sunday: [{ time: "1:45 PM", price: 11 }, { time: "3:30 PM", price: 12 }, { time: "6:15 PM", price: 13 }, { time: "7:40 PM", price: 14 }] } },
  { id: "all-quiet-western-front-1930", title: "All Quiet At The Western Front (1930)", genre: "War drama", rating: "NR", minutes: 133, poster: "assets/all-quiet-western-front-1930.jpg", accent: "linear-gradient(135deg, #111, #6f7377)", days: { Today: [{ time: "12:50 PM", price: 11 }, { time: "5:10 PM", price: 13 }], Friday: [{ time: "2:20 PM", price: 12 }, { time: "7:05 PM", price: 14 }], Saturday: [{ time: "11:45 AM", price: 11 }, { time: "3:55 PM", price: 13 }, { time: "8:10 PM", price: 15 }], Sunday: [{ time: "1:30 PM", price: 11 }, { time: "6:45 PM", price: 13 }] } },
  { id: "the-big-trail-1930", title: "The Big Trail (1930)", genre: "Western adventure", rating: "NR", minutes: 125, poster: "assets/the-big-trail-1930.jpg", accent: "linear-gradient(135deg, #52301f, #d69a45)", days: { Today: [{ time: "1:40 PM", price: 11 }, { time: "5:30 PM", price: 13 }], Friday: [{ time: "3:00 PM", price: 12 }, { time: "6:50 PM", price: 14 }], Saturday: [{ time: "12:10 PM", price: 11 }, { time: "4:35 PM", price: 13 }, { time: "7:55 PM", price: 15 }], Sunday: [{ time: "2:00 PM", price: 11 }, { time: "5:55 PM", price: 13 }] } },
  { id: "star-is-born-1937", title: "A Star Is Born (1937)", genre: "Classic drama", rating: "NR", minutes: 111, poster: "assets/a-star-is-born-1937.jpg", accent: "linear-gradient(135deg, #7a2f2f, #f5820a)", days: { Today: [{ time: "3:30 PM", price: 11 }], Friday: [{ time: "3:30 PM", price: 12 }, { time: "6:30 PM", price: 14 }], Saturday: [{ time: "1:15 PM", price: 11 }, { time: "5:20 PM", price: 13 }, { time: "7:10 PM", price: 15 }], Sunday: [{ time: "2:10 PM", price: 11 }, { time: "5:30 PM", price: 13 }] } },
  { id: "gullivers-travels-1939", title: "Gulliver's Travels (1939)", genre: "Animated adventure", rating: "G", minutes: 76, poster: "assets/gullivers-travels.jpg", accent: "linear-gradient(135deg, #194f9f, #21a67a)", days: { Today: [{ time: "2:00 PM", price: 11 }, { time: "5:45 PM", price: 13 }, { time: "7:00 PM", price: 13 }], Friday: [{ time: "2:15 PM", price: 12 }, { time: "6:10 PM", price: 14 }], Saturday: [{ time: "12:30 PM", price: 12 }, { time: "4:20 PM", price: 13 }, { time: "7:30 PM", price: 15 }], Sunday: [{ time: "1:00 PM", price: 11 }, { time: "3:20 PM", price: 12 }, { time: "6:00 PM", price: 13 }] } }
];

const tasks = [
  { id: 1, title: "Book One Ticket", difficulty: "Easy", anyMovie: true, date: "Any", adult: 1, senior: 0, standard: 1, instruction: "Pick any movie, any showtime, and book 1 seat.", targets: ["Task orientation", "Basic sequencing"] },
  { id: 2, title: "Book For You And A Friend", difficulty: "Easy", anyMovie: true, date: "Any", adult: 2, senior: 0, standard: 2, mustBeTogether: true, instruction: "Book 2 tickets for any movie and showtime. Choose two seats next to each other.", targets: ["Quantity matching", "Seat-pair selection"] },
  { id: 3, title: "Try Adding A Snack", difficulty: "Easy", anyMovie: true, date: "Any", adult: 1, senior: 0, standard: 1, anySnack: true, instruction: "Book 1 ticket for any movie. Add any one snack before checkout.", targets: ["Step sequencing", "Noticing an optional step"] },
  { id: 4, title: "Match One Showtime", difficulty: "Easy", movie: "The Big Trail (1930)", date: "Today", time: "1:40 PM", adult: 1, senior: 0, standard: 1, instruction: "Book 1 ticket for The Big Trail (1930) at 1:40 PM today.", targets: ["Reading comprehension", "Scanning a short list"] },
  { id: 5, title: "Find The Accessible Seat", difficulty: "Moderate", movie: "Gulliver's Travels (1939)", date: "Today", time: "2:00 PM", adult: 1, senior: 0, wheelchair: 1, instruction: "Book 1 ticket for Gulliver's Travels (1939) at 2:00 PM today. Choose 1 wheelchair-accessible space.", targets: ["Accessible-seat recognition", "Visual discrimination"] },
  { id: 6, title: "Accessible Seat Plus Companion Seat", difficulty: "Moderate", movie: "A Star Is Born (1937)", date: "Today", time: "3:30 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, instruction: "Book 2 tickets for A Star Is Born (1937) at 3:30 PM. Choose 1 wheelchair-accessible space and 1 companion seat next to it.", targets: ["Spatial matching", "Two-step sequencing"] },
  { id: 7, title: "Match The Exact Date And Time", difficulty: "Moderate", movie: "All Quiet At The Western Front (1930)", date: "Friday", time: "7:05 PM", adult: 1, senior: 0, standard: 1, instruction: "Book 1 ticket for All Quiet At The Western Front (1930) on Friday at 7:05 PM.", targets: ["Working memory", "Detail-checking"] },
  { id: 8, title: "Avoid The Front Row", difficulty: "Moderate", movie: "The Phantom of the Opera (1925)", date: "Friday", time: "4:30 PM", adult: 2, senior: 0, standard: 2, avoidRows: ["A"], instruction: "Book 2 tickets for The Phantom of the Opera (1925) on Friday at 4:30 PM. Choose any 2 seats, but do not choose Row A.", targets: ["Inhibition", "Rule-following under one constraint"] },
  { id: 9, title: "Stay Under Budget", difficulty: "Hard", movie: "Night of the Living Dead", date: "Saturday", adult: 2, senior: 0, standard: 2, budget: 30, instruction: "Book 2 tickets for Night of the Living Dead on Saturday. Keep the total under $30.", targets: ["Budget awareness", "Running-total tracking"] },
  { id: 10, title: "Remember Your Snack Order", difficulty: "Hard", movie: "Gulliver's Travels (1939)", date: "Sunday", time: "3:20 PM", adult: 2, senior: 0, standard: 2, snacks: { candy: 1 }, instruction: "Book 2 tickets for Gulliver's Travels (1939) on Sunday at 3:20 PM. Remember to add 1 candy package before checkout.", targets: ["Prospective memory"] },
  { id: 11, title: "Pick The Better Showtime", difficulty: "Hard", movie: "The Phantom of the Opera (1925)", date: "Sunday", after: "2:00 PM", before: "7:00 PM", adult: 1, senior: 0, standard: 1, instruction: "Book 1 ticket for The Phantom of the Opera (1925) on Sunday. Choose a showtime that starts after 2:00 PM and before 7:00 PM.", targets: ["Comparison", "Decision-making"] },
  { id: 12, title: "Catch The Mistake", difficulty: "Hard", movie: "A Star Is Born (1937)", date: "Friday", time: "6:30 PM", adult: 2, senior: 0, standard: 2, forceReviewError: true, instruction: "Book 2 tickets for A Star Is Born (1937) on Friday at 6:30 PM. Before confirming, check the review screen carefully for an error and correct it.", targets: ["Error detection", "Self-monitoring"] },
  { id: 13, title: "Multi-Rule Accessible Booking", difficulty: "Complex", movie: "A Star Is Born (1937)", date: "Saturday", time: "5:20 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, avoidRows: ["A"], budget: 35, instruction: "Book 2 tickets for A Star Is Born (1937) on Saturday at 5:20 PM. Choose 1 wheelchair-accessible space and 1 companion seat, avoid Row A, and keep the total under $35.", targets: ["Executive function", "Holding multiple rules at once"] },
  { id: 14, title: "Remember The Code", difficulty: "Complex", movie: "Night of the Living Dead", date: "Saturday", after: "4:00 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, memoryCode: "BLUE 27", distractor: true, instruction: "Book 2 tickets for Night of the Living Dead on Saturday after 4:00 PM. Choose 1 wheelchair-accessible space and 1 companion seat. Remember the code BLUE 27 for checkout.", targets: ["Divided attention", "Dual-tasking"] },
  { id: 15, title: "Best Value Under Constraints", difficulty: "Complex", movie: "Night of the Living Dead", date: "Saturday", after: "4:00 PM", leastExpensive: true, adult: 2, senior: 0, wheelchair: 1, companion: 1, budget: 30, instruction: "Book 2 tickets for Night of the Living Dead on Saturday. Compare all valid showtimes after 4:00 PM and choose the least expensive one that still meets the accessible seating and budget rules.", targets: ["Planning", "Comparison shopping under pressure"] },
  { id: 16, title: "Join Friends With Existing Seats", difficulty: "Complex", movie: "The Big Trail (1930)", weekend: true, after: "4:00 PM", before: "8:30 PM", adult: 2, senior: 0, requiredSeats: ["F11", "F12"], friendSeats: ["F9", "F10"], mustJoinFriends: true, budget: 45, snacks: { "small-popcorn": 1 }, memoryCode: "FRIENDS", instruction: "Your friends already booked seats F9 and F10. Book 2 adult tickets for The Big Trail (1930) this weekend between 4:00 PM and 8:30 PM. Choose seats F11 and F12 so you sit next to them, keep the total under $45, add 1 small popcorn, and remember the code FRIENDS for checkout.", targets: ["Full executive function", "Working memory", "Error-checking"] }
];

const snacks = [
  { id: "small-popcorn", name: "Small Popcorn", price: 5.5, image: "assets/concession-small-popcorn-transparent.png" },
  { id: "large-popcorn", name: "Large Popcorn", price: 8.25, image: "assets/concession-large-popcorn-transparent.png" },
  { id: "drink", name: "Soft Drink", price: 4.75, image: "assets/concession-drink-transparent.png" },
  { id: "candy", name: "Candy Package", price: 4.25, image: "assets/concession-candy-package-transparent.png" }
];

const state = {
  view: "start",
  task: tasks[0],
  date: "Today",
  movieId: "",
  showtime: null,
  search: "",
  tickets: { adult: 0, senior: 0 },
  seats: [],
  snacks: {},
  paymentMethod: "saved-card",
  paymentEntryOpen: false,
  savedCardAvailable: true,
  newCardDefault: false,
  cues: true,
  taskFilter: "All",
  bookingStep: "movie",
  instructionsVisible: false,
  immediateFeedback: true,
  noteFormat: "soap",
  lastSummary: null,
  reviewSeeded: false,
  reviewOverride: null,
  orderOpen: false,
  corrections: 0,
  warnings: 0,
  adErrors: 0,
  startTime: Date.now()
};

const $ = (id) => document.getElementById(id);
const money = (value) => "$" + value.toFixed(2);
const movieByTitle = (title) => movies.find((movie) => movie.title === title);
const movieById = (id) => movies.find((movie) => movie.id === id);
const dateKeys = ["Today", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
const dateOffsets = { Today: 0, Friday: 1, Saturday: 2, Sunday: 3, Monday: 4, Tuesday: 5, Wednesday: 6 };
const dateForKey = (key) => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + (dateOffsets[key] ?? 0));
  return date;
};
const dateLabelForKey = (key) => {
  if (!dateOffsets.hasOwnProperty(key)) return key || "Any valid date";
  return new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" }).format(dateForKey(key));
};
const taskDateLabel = (task) => {
  if (task.weekend) return `${dateLabelForKey("Saturday")} or ${dateLabelForKey("Sunday")}`;
  return dateLabelForKey(task.date);
};
const taskDateMatches = (task, date) => {
  if (task.weekend) return ["Saturday", "Sunday"].includes(date);
  return task.date === "Any" || !task.date || date === task.date;
};
const ruleDateForTask = (task, sourceDate) => {
  if (task.weekend || task.date === "Any" || !task.date) return sourceDate;
  return task.date;
};
const showtimesForMovieDate = (movie, dateKey) => {
  if (!movie) return [];
  if (movie.days[dateKey]) return movie.days[dateKey];
  const fallbackKeys = ["Friday", "Saturday", "Sunday"];
  const offset = dateOffsets[dateKey] ?? 0;
  return movie.days[fallbackKeys[Math.max(0, offset - 1) % fallbackKeys.length]] || movie.days.Today || [];
};
const paymentMethodLabel = (method = state.paymentMethod) => ({
  "saved-card": "Saved practice card",
  "new-card": "New practice card"
}[method] || "Saved practice card");
const toMinutes = (label) => {
  const match = label.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hour = Number(match[1]) % 12;
  if (match[3].toUpperCase() === "PM") hour += 12;
  return hour * 60 + Number(match[2]);
};
const totalTicketsRequired = (task = state.task) => (task.adult || 0) + (task.senior || 0);
const selectedSeats = () => state.seats.map((id) => seatById(id)).filter(Boolean);
const ticketCount = () => state.tickets.adult + state.tickets.senior;
const taskInstructionLines = (instruction) => instruction
  .split(/(?<=\.)\s+/)
  .map((line) => line.replace(/\.$/, "").trim())
  .filter(Boolean);
const seatLayout = {
  A: Array.from({ length: 18 }, (_, index) => index + 1),
  B: Array.from({ length: 18 }, (_, index) => index + 1),
  C: Array.from({ length: 18 }, (_, index) => index + 1),
  D: Array.from({ length: 18 }, (_, index) => index + 1),
  E: Array.from({ length: 18 }, (_, index) => index + 1),
  F: Array.from({ length: 18 }, (_, index) => index + 1),
  G: Array.from({ length: 18 }, (_, index) => index + 1),
  H: Array.from({ length: 18 }, (_, index) => index + 1)
};

function syncTicketsToSelectedSeats() {
  const selectedCount = state.seats.length;
  const adultTarget = state.task.adult || 0;
  const seniorTarget = state.task.senior || 0;
  const adult = Math.min(selectedCount, adultTarget);
  const senior = Math.min(Math.max(selectedCount - adult, 0), seniorTarget);
  state.tickets = { adult, senior };
}

function initialDateForTask(task) {
  if (task.date && task.date !== "Any") return task.date;
  if (task.weekend) return "Saturday";
  return "Today";
}

function validShowtimes(movie, day, task = state.task) {
  if (!movie) return [];
  let times = showtimesForMovieDate(movie, day).slice();
  if (task.after) times = times.filter((slot) => toMinutes(slot.time) > toMinutes(task.after));
  if (task.before) times = times.filter((slot) => toMinutes(slot.time) < toMinutes(task.before));
  if (task.earliestAfter) {
    times = times.filter((slot) => toMinutes(slot.time) > toMinutes(task.earliestAfter)).sort((a, b) => toMinutes(a.time) - toMinutes(b.time)).slice(0, 1);
  }
  if (task.leastExpensive) {
    const valid = times.filter((slot) => !task.after || toMinutes(slot.time) > toMinutes(task.after));
    const min = Math.min(...valid.map((slot) => slot.price));
    times = valid.filter((slot) => slot.price === min).slice(0, 1);
  }
  return times;
}

function resetBooking(task) {
  state.task = task;
  state.bookingStep = "movie";
  state.date = initialDateForTask(task);
  state.movieId = "";
  state.showtime = null;
  state.search = "";
  state.tickets = { adult: 0, senior: 0 };
  state.seats = [];
  state.snacks = {};
  state.paymentMethod = state.savedCardAvailable && !state.newCardDefault ? "saved-card" : "new-card";
  state.paymentEntryOpen = false;
  state.reviewSeeded = false;
  state.reviewOverride = null;
  state.corrections = 0;
  state.warnings = 0;
  state.adErrors = 0;
  state.startTime = Date.now();
  $("memoryCodeInput").value = "";
}

function baseSeatType(row, number) {
  if (["A", "E"].includes(row) && number % 2 === 1) return "wheelchair";
  if (["A", "E"].includes(row) && number % 2 === 0) return "companion";
  if (["F", "G"].includes(row) && number >= 7 && number <= 14) return "premium";
  return "standard";
}

const occupiedSeatPatterns = [
  ["B4", "B5", "B9", "B10", "C8", "C9", "C10", "D8", "D9", "F14", "G14", "H14"],
  ["B14", "B15", "C3", "C4", "C15", "C16", "D3", "D4", "F4", "F5", "G4", "G5"],
  ["B7", "B8", "B9", "C7", "C8", "C9", "D7", "D8", "D9", "F10", "G10", "H10"],
  ["B3", "B4", "B15", "B16", "C4", "C5", "C14", "C15", "D5", "D14", "F5", "F14"],
  ["B10", "B11", "B12", "C10", "C11", "C12", "D10", "D11", "D12", "F8", "F9", "G8", "G9"],
  ["B5", "B6", "C5", "C6", "C13", "C14", "D5", "D6", "D13", "D14", "F11", "G11", "H11"]
];

function dynamicUnavailableSeats() {
  const key = `${state.movieId || state.task.movie}|${state.date}|${state.showtime?.time || ""}`;
  let seed = 0;
  for (const char of key) seed = (seed * 31 + char.charCodeAt(0)) % 9973;
  const pattern = occupiedSeatPatterns[seed % occupiedSeatPatterns.length];
  const extraPattern = occupiedSeatPatterns[(seed + 2) % occupiedSeatPatterns.length];
  const count = state.showtime ? 12 + (seed % 5) : 10;
  const candidates = [...pattern, ...extraPattern];
  const chosen = new Set();
  for (let i = 0; chosen.size < count && i < candidates.length * 3; i += 1) {
    const id = candidates[(seed + i * 3) % candidates.length];
    const match = id.match(/^([A-H])(\d+)$/);
    if (!match || ["wheelchair", "companion"].includes(baseSeatType(match[1], Number(match[2])))) continue;
    if (state.task.requiredSeats?.includes(id)) continue;
    chosen.add(id);
  }
  (state.task.friendSeats || []).forEach((id) => chosen.add(id));
  return chosen;
}

function seatType(row, number) {
  const id = `${row}${number}`;
  if (dynamicUnavailableSeats().has(id)) return "unavailable";
  return baseSeatType(row, number);
}

function seatById(id) {
  const match = id.match(/^([A-H])(\d+)$/);
  if (!match) return null;
  const row = match[1];
  const number = Number(match[2]);
  if (!seatLayout[row]?.includes(number)) return null;
  return { id, row, number, type: seatType(row, number), label: seatLabel(row, number) };
}

function seatLabel(row, number) {
  const type = seatType(row, number);
  if (type === "wheelchair") return `Wheelchair Space ${row}${number}`;
  if (type === "companion") return `Companion Seat ${row}${number}`;
  if (type === "premium") return `Premium Seat ${row}${number}`;
  return `Seat ${row}${number}`;
}

function companionNearWheelchair(wheelchairSeat, companionSeat) {
  if (!wheelchairSeat || !companionSeat || companionSeat.type !== "companion") return false;
  return wheelchairSeat.row === companionSeat.row && Math.abs(wheelchairSeat.number - companionSeat.number) <= 2;
}

function selectableMovieList() {
  const levels = { Easy: 3, Moderate: 6, Hard: 6, Complex: 6 };
  const target = movieByTitle(state.task.movie);
  if (state.task.anyMovie || !target) return movies.slice(0, levels[state.task.difficulty] || 5);
  const others = movies.filter((movie) => movie.id !== target.id);
  return [target, ...others].slice(0, levels[state.task.difficulty] || 5);
}

function totals() {
  const ticketPrice = state.showtime ? state.showtime.price : 0;
  const adult = state.tickets.adult * ticketPrice;
  const senior = state.tickets.senior * Math.max(7, ticketPrice - 2);
  const premium = selectedSeats().filter((seat) => seat.type === "premium").length * 3;
  const snackTotal = Object.entries(state.snacks).reduce((sum, [id, qty]) => {
    const snack = snacks.find((item) => item.id === id);
    return sum + (snack ? snack.price * qty : 0);
  }, 0);
  return { adult, senior, premium, snackTotal, total: adult + senior + premium + snackTotal };
}

function taskChecks(source = currentOrderForReview()) {
  const task = state.task;
  const seats = source.seats.map((id) => seatById(id)).filter(Boolean);
  const selectedIds = new Set(source.seats);
  const targetMovie = movieByTitle(task.movie) || movieByTitle(source.movie);
  const wheelchair = seats.filter((seat) => seat.type === "wheelchair");
  const companion = seats.filter((seat) => seat.type === "companion");
  const standard = seats.filter((seat) => seat.type === "standard");
  const premium = seats.filter((seat) => seat.type === "premium");
  const seatsTogetherOk = !task.mustBeTogether || seats.length < 2 || seats.some((seat) => seats.some((other) => seat.id !== other.id && seat.row === other.row && Math.abs(seat.number - other.number) === 1));
  const validDate = taskDateMatches(task, source.date);
  const comparisonDate = ruleDateForTask(task, source.date);
  const validTime = task.time ? source.time === task.time : true;
  const afterOk = task.after ? toMinutes(source.time || "12:00 AM") > toMinutes(task.after) : true;
  const beforeOk = task.before ? toMinutes(source.time || "11:59 PM") < toMinutes(task.before) : true;
  const earliestOk = task.earliestAfter ? validDate && source.time === validShowtimes(targetMovie, comparisonDate, task)[0]?.time : true;
  const leastExpensiveOk = task.leastExpensive ? validDate && source.time === validShowtimes(targetMovie, comparisonDate, task)[0]?.time : true;
  const pairOk = !task.companion || wheelchair.some((w) => companion.some((c) => companionNearWheelchair(w, c))) || task.allowClosestCompanions;
  const avoidRowsOk = !(task.avoidRows || []).some((row) => seats.some((seat) => seat.row === row));
  const standardOk = task.standard ? standard.length >= task.standard && (!task.requiredRow || standard.every((seat) => seat.row === task.requiredRow)) : standard.length === 0 || !task.avoidStandard;
  const requiredSeatsOk = !task.requiredSeats || task.requiredSeats.every((id) => selectedIds.has(id));
  const joinedFriendsOk = !task.mustJoinFriends || requiredSeatsOk;
  const budgetOk = !task.budget || totalsForOrder(source).total <= task.budget;
  const snackOk = Object.entries(task.snacks || {}).every(([id, qty]) => (source.snacks[id] || 0) === qty);
  const anySnackOk = !task.anySnack || Object.values(source.snacks).some((qty) => qty > 0);
  const avoidSnackOk = (task.avoidSnacks || []).every((id) => !source.snacks[id]);
  const memoryOk = !task.memoryCode || $("memoryCodeInput").value.trim().toUpperCase() === task.memoryCode.toUpperCase();
  const checks = [
    ["Movie", task.anyMovie || !task.movie || source.movie === task.movie],
    ["Date", validDate],
    ["Showtime", validTime && afterOk && beforeOk && earliestOk && leastExpensiveOk],
    ["Ticket quantity/type", source.tickets.adult === (task.adult || 0) && source.tickets.senior === (task.senior || 0)],
    ["Seat count", seats.length === totalTicketsRequired(task)],
    ["Wheelchair space count", wheelchair.length === (task.wheelchair || 0)],
    ["Companion seat count", companion.length >= (task.companion || 0)],
    ["Accessible pairing", pairOk],
    ["Restricted rows avoided", avoidRowsOk],
    ["Standard seat rule", standardOk],
    ["Seats together", seatsTogetherOk],
    ["Required seats", requiredSeatsOk],
    ["Joined friends", joinedFriendsOk],
    ["Premium/budget rule", (!task.avoidPremium || premium.length === 0) && budgetOk],
    ["Snack rule", snackOk && anySnackOk && avoidSnackOk],
    ["Memory code", memoryOk],
    ["Distracting ads avoided", !taskHasAds(task) || state.adErrors === 0]
  ];
  return checks.filter(([label]) => {
    if (label.includes("Wheelchair") && !task.wheelchair) return false;
    if (label.includes("Companion") && !task.companion) return false;
    if (label.includes("Memory") && !task.memoryCode) return false;
    if (label.includes("Snack") && !task.snacks && !task.avoidSnacks && !task.anySnack) return false;
    if (label.includes("Restricted") && !task.avoidRows) return false;
    if (label.includes("Premium") && !task.budget && !task.avoidPremium) return false;
    if (label.includes("Seats together") && !task.mustBeTogether) return false;
    if (label.includes("Required") && !task.requiredSeats) return false;
    if (label.includes("Joined") && !task.mustJoinFriends) return false;
    if (label.includes("Distracting") && !taskHasAds(task)) return false;
    return true;
  });
}

function totalsForOrder(order) {
  const slotPrice = order.price || 0;
  const adult = order.tickets.adult * slotPrice;
  const senior = order.tickets.senior * Math.max(7, slotPrice - 2);
  const premium = order.seats.map((id) => seatById(id)).filter((seat) => seat?.type === "premium").length * 3;
  const snackTotal = Object.entries(order.snacks).reduce((sum, [id, qty]) => {
    const snack = snacks.find((item) => item.id === id);
    return sum + (snack ? snack.price * qty : 0);
  }, 0);
  return { adult, senior, premium, snackTotal, total: adult + senior + premium + snackTotal };
}

function currentOrderForReview() {
  syncTicketsToSelectedSeats();
  const movie = movieById(state.movieId);
  return {
    movie: movie?.title || "Not selected",
    date: state.date,
    time: state.showtime?.time || "Not selected",
    price: state.showtime?.price || 0,
    tickets: { ...state.tickets },
    seats: [...state.seats],
    snacks: { ...state.snacks },
    paymentMethod: state.paymentMethod
  };
}

function maybeSeedReviewError(order) {
  if (!state.task.forceReviewError || state.reviewSeeded) return order;
  state.reviewSeeded = true;
  const withoutCompanion = order.seats.filter((id) => seatById(id)?.type !== "companion");
  state.reviewOverride = { ...order, seats: withoutCompanion.length < order.seats.length ? withoutCompanion : order.seats.slice(0, -1) };
  return state.reviewOverride;
}

function setView(view) {
  state.view = view;
  document.body.classList.toggle("activity-mode", view !== "start");
  ["start", "booking", "review", "summary"].forEach((name) => $(`${name}View`).classList.toggle("hidden", name !== view));
  const inBookingFlow = view === "booking";
  $("navHomeButton").classList.toggle("hidden", !inBookingFlow);
  $("navBackButton").classList.toggle("hidden", !inBookingFlow);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function currentStep() {
  return state.bookingStep;
}

function renderTaskOptions() {
  renderTaskFilters();
  renderHomeTaskGrid();
}

function renderTaskFilters() {
  const filterEl = $("taskFilters");
  if (!filterEl) return;
  filterEl.innerHTML = "";
}

function renderHomeTaskGrid() {
  const difficulties = ["Easy", "Moderate", "Hard", "Complex"];
  const groups = difficulties
    .filter((difficulty) => state.taskFilter === "All" || state.taskFilter === difficulty)
    .map((difficulty) => {
      const groupTasks = tasks.filter((task) => task.difficulty === difficulty);
      if (!groupTasks.length) return "";
      const levelClass = `level-${difficulty.toLowerCase()}`;
      return `
        <section class="difficulty-group ${levelClass}" aria-label="${difficulty} tasks">
          <h3>${difficulty}</h3>
          <div class="difficulty-grid">
            ${groupTasks.map((task) => `
              <article class="home-task-card ${state.task.id === task.id ? "active" : ""}" data-select-task="${task.id}" tabindex="0" role="button" aria-pressed="${state.task.id === task.id}">
                <h3>${task.title}</h3>
                <ul class="task-brief">
                  ${taskInstructionLines(task.instruction).map((line) => `<li>${line}</li>`).join("")}
                </ul>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    });
  $("homeTaskGrid").innerHTML = groups.join("");
}

function renderTaskCard() {
  const task = state.task;
  const visible = state.instructionsVisible;
  const timeRule = task.time || [task.earliestAfter ? `earliest after ${task.earliestAfter}` : "", task.after ? `after ${task.after}` : "", task.before ? `before ${task.before}` : ""].filter(Boolean).join(", ") || "Any valid showtime";
  const snackRule = task.anySnack ? "Add any 1 snack" : Object.entries(task.snacks || {}).map(([id, qty]) => `${qty} ${snacks.find((item) => item.id === id)?.name || id}`).join(", ");
  document.querySelector(".booking-layout")?.classList.toggle("instructions-hidden", !visible);
  $("taskCard").classList.toggle("hidden", !visible);
  $("taskCard").innerHTML = `
    <p class="section-tag">Task ${task.id}</p>
    <h2 class="task-title">${task.title}</h2>
    <div class="skill-tags">${task.targets.map((target) => `<span class="chip">${target}</span>`).join("")}</div>
    <p><strong>Instruction:</strong> ${task.instruction}</p>
    <ul class="target-list">
      <li>Movie: ${task.anyMovie ? "Any movie" : task.movie}</li>
      <li>Date: ${taskDateLabel(task)}</li>
      <li>Time: ${timeRule}</li>
      <li>Tickets: created automatically from selected seats (${(task.adult || 0)} adult${task.senior ? `, ${task.senior} senior` : ""})</li>
      <li>Seats: ${task.wheelchair || 0} wheelchair, ${task.companion || 0} companion${task.standard ? `, ${task.standard} regular` : ""}</li>
      ${task.requiredSeats ? `<li>Required seats: ${task.requiredSeats.join(", ")}</li>` : ""}
      ${task.friendSeats ? `<li>Friends already booked: ${task.friendSeats.join(", ")}</li>` : ""}
      ${task.budget ? `<li>Budget: under ${money(task.budget)}</li>` : ""}
      ${snackRule ? `<li>Snack: ${snackRule}</li>` : ""}
      ${task.memoryCode ? `<li>Memory code: ${task.memoryCode}</li>` : ""}
    </ul>
  `;
}

function renderDates() {
  $("dateTabs").innerHTML = dateKeys.map((date) => `
    <button class="date-tab ${state.date === date ? "active" : ""}" type="button" data-date="${date}">
      <span>${dateLabelForKey(date)}</span>
    </button>
  `).join("");
}

function renderMovies() {
  const query = state.search.toLowerCase();
  const list = selectableMovieList().filter((movie) => !query || movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query));
  $("movieGrid").innerHTML = list.map((movie) => {
    const slots = showtimesForMovieDate(movie, state.date);
    return `
      <article class="movie-card ${state.movieId === movie.id ? "active" : ""}" style="--poster: ${movie.accent}">
        <div class="poster">
          <img class="poster-image-${movie.id}" src="${movie.poster}" alt="${movie.title} poster" loading="lazy" />
          <span>${movie.rating} • ${movie.minutes} min</span>
        </div>
        <div class="movie-body">
          <strong>${movie.title}</strong>
          <p>${movie.genre}</p>
        </div>
        <div class="showtime-row">
          ${slots.length ? slots.map((slot) => `<button class="showtime ${state.movieId === movie.id && state.showtime?.time === slot.time ? "active" : ""}" type="button" data-movie="${movie.id}" data-time="${slot.time}" data-price="${slot.price}">${slot.time}<br><span class="price-note">${money(slot.price)}</span></button>`).join("") : "<span class='price-note'>No showtimes this day</span>"}
        </div>
      </article>
    `;
  }).join("");
  const movie = movieById(state.movieId);
  const dateOk = taskDateMatches(state.task, state.date);
  $("movieStatus").textContent = movie && state.showtime ? `${movie.title}, ${dateLabelForKey(state.date)} ${state.showtime.time}` : "Not selected";
  if (movie && state.showtime && !dateOk) $("movieStatus").textContent += " - check date";
  $("movieStatus").className = `status-pill ${movie && state.showtime ? (dateOk ? "good" : "warn") : ""}`;
}

function renderSeatMap() {
  $("seatMap").innerHTML = Object.entries(seatLayout).map(([row, seats]) => `
    <div class="seat-row ${row === "E" ? "section-start" : ""}">
      <span class="row-label">${row}</span>
      ${seats.map((number) => {
        if (!number) return `<span class="seat-spacer" aria-hidden="true"></span>`;
        const id = `${row}${number}`;
        const type = seatType(row, number);
        const selected = state.seats.includes(id);
        const cue = state.cues && ((state.task.wheelchair && type === "wheelchair") || (state.task.companion && type === "companion"));
        const text = type === "wheelchair" ? `<span class="wheelchair-symbol" aria-hidden="true">&#9855;</span>` : type === "unavailable" ? `<span class="occupied-symbol" aria-hidden="true">X</span>` : "";
        return `<button class="seat ${type} ${selected ? "selected" : ""} ${cue ? "cued" : ""}" type="button" data-seat="${id}" aria-label="${type === "unavailable" ? `Occupied seat ${id}` : seatLabel(row, number)}" ${type === "unavailable" ? "disabled" : ""}>${text}</button>`;
      }).join("")}
      <span class="row-label">${row}</span>
    </div>
  `).join("");
  $("seatLegend").innerHTML = [
    ["standard", "Free"], ["unavailable", "Occupied"], ["wheelchair", "Wheelchair accessible"]
  ].map(([type, label]) => `<span class="legend-item"><span class="legend-swatch seat ${type}"></span>${label}</span>`).join("");
  renderSeatFeedback();
}

function renderSeatFeedback(message = "") {
  const seats = selectedSeats();
  $("selectedSeatSummary").textContent = seats.length ? `Selected seats: ${seats.map((seat) => seat.label).join(" + ")}` : "Selected seats: none";
  const checks = taskChecks();
  const seatRelevant = checks.filter(([label]) => ["Seat count", "Wheelchair space count", "Companion seat count", "Accessible pairing", "Restricted rows avoided", "Standard seat rule", "Seats together", "Required seats", "Joined friends"].includes(label));
  const ok = seatRelevant.every(([, pass]) => pass) && state.seats.length === totalTicketsRequired();
  $("seatStatus").textContent = `${state.seats.length} of ${totalTicketsRequired()} selected`;
  $("seatStatus").className = `status-pill ${ok ? "good" : "warn"}`;
  const feedback = message || (ok ? "Seat selection matches the task." : "Check the seat types and number of seats before continuing.");
  $("seatFeedback").classList.toggle("hidden", !state.immediateFeedback);
  $("seatFeedback").textContent = state.immediateFeedback ? feedback : "";
  $("seatFeedback").className = `feedback-line ${ok ? "good" : "warn"} ${state.immediateFeedback ? "" : "hidden"}`;
}

function renderSnacks() {
  $("snackGrid").innerHTML = snacks.map((snack) => `
    <div class="snack-card">
      <img class="snack-image" src="${snack.image}" alt="" loading="lazy" />
      <strong>${snack.name}</strong>
      <p>${money(snack.price)}</p>
      <div class="qty-control">
        <button type="button" data-snack="${snack.id}" data-delta="-1" aria-label="Remove ${snack.name}">-</button>
        <span>${state.snacks[snack.id] || 0}</span>
        <button type="button" data-snack="${snack.id}" data-delta="1" aria-label="Add ${snack.name}">+</button>
      </div>
    </div>
  `).join("");
  const snackCheck = taskChecks().find(([label]) => label === "Snack rule");
  if (state.immediateFeedback) {
    $("snackStatus").textContent = snackCheck ? (snackCheck[1] ? "Snack rule met" : "Check snacks") : "Optional";
    $("snackStatus").className = `status-pill ${snackCheck?.[1] ? "good" : snackCheck ? "warn" : ""}`;
  } else {
    $("snackStatus").textContent = "Optional";
    $("snackStatus").className = "status-pill";
  }
  $("comboOffer").classList.toggle("hidden", !state.task.distractor);
}

function renderCheckout() {
  const field = $("memoryCodeField");
  const canUseSavedCard = state.savedCardAvailable;
  if (!canUseSavedCard && state.paymentMethod === "saved-card") state.paymentMethod = "new-card";
  const order = currentOrderForReview();
  const movie = movieById(state.movieId);
  const sum = totalsForOrder(order);
  const ticketTotal = sum.adult + sum.senior;
  const selectedSeatLabels = order.seats.map((id) => seatById(id)?.label || id);
  const seatText = selectedSeatLabels.join(", ") || "No seats selected";
  const ticketCountText = order.tickets.adult + order.tickets.senior;
  const snackCount = Object.values(order.snacks).reduce((total, qty) => total + qty, 0);
  const fees = sum.premium;
  $("checkoutSection").classList.toggle("payment-mode", state.paymentEntryOpen);
  field.classList.toggle("hidden", !state.task.memoryCode);
  if (state.task.memoryCode) $("memoryCodeLabel").textContent = "Enter remembered code";
  $("paymentEntryPanel").classList.toggle("hidden", !state.paymentEntryOpen);
  $("savedCardSummary").classList.toggle("hidden", state.paymentMethod !== "saved-card");
  $("newCardFields").classList.toggle("hidden", state.paymentMethod !== "new-card");
  $("checkoutPreview").innerHTML = `
    <div class="checkout-app-card">
      <div class="checkout-app-top">
        <button class="checkout-app-back" type="button" id="checkoutPreviewBack" aria-label="Back to snacks">‹</button>
        <h4>Checkout</h4>
        <span class="checkout-timer">Practice</span>
      </div>
      <div class="checkout-app-movie">
        ${movie ? `<img src="${movie.poster}" alt="${movie.title} poster" />` : `<div class="checkout-empty-poster">Poster</div>`}
        <div>
          <h5>${order.movie}</h5>
          <p>${movie?.rating || "NR"} • ${movie?.genre || "Movie"}</p>
          <p>${dateLabelForKey(order.date)}, ${order.time}${movie ? ` • ${movie.minutes} min` : ""}</p>
          <p>Silver Trail Cinema</p>
        </div>
      </div>
      <div class="checkout-app-section">
        <span class="checkout-label">Seat Info</span>
        <strong>Screen 1 - Budget</strong>
        <div class="checkout-seat-pills">${selectedSeatLabels.length ? selectedSeatLabels.map((seat) => `<span>${seat}</span>`).join("") : "<span>None</span>"}</div>
      </div>
      <div class="checkout-app-section">
        <span class="checkout-label">Tickets</span>
        <div class="checkout-bill-row"><span>Net Price (${ticketCountText} x Ticket${ticketCountText === 1 ? "" : "s"})</span><strong>${money(ticketTotal)}</strong></div>
        <div class="checkout-bill-row"><span>Seat Fees</span><strong>${money(fees)}</strong></div>
        <div class="checkout-bill-row total"><span>Total Ticket Price</span><strong>${money(ticketTotal + fees)}</strong></div>
        <button class="checkout-food-prompt" type="button" id="checkoutFoodPrompt">
          <span>🍿 Grab a bite</span>
          <strong>${snackCount ? `${snackCount} added` : "Add Food"}</strong>
        </button>
      </div>
      <div class="checkout-app-section">
        <span class="checkout-label">Bill Details</span>
        <div class="checkout-bill-row"><span>Sub Total</span><strong>${money(ticketTotal + fees)}</strong></div>
        <div class="checkout-bill-row"><span>Concessions</span><strong>${money(sum.snackTotal)}</strong></div>
        <div class="checkout-bill-row"><span>Payment</span><strong>${paymentMethodLabel(order.paymentMethod)}</strong></div>
      </div>
      <div class="checkout-offer-note">Add a payment method to continue. Any practice card number length is accepted in this mock checkout.</div>
      <button class="checkout-pay-strip" type="button" id="addPaymentMethodButton">
        <strong>Pay ${money(sum.total)}</strong>
        <span>Add Payment Method ›</span>
      </button>
      <p class="checkout-seat-summary">${seatText}</p>
    </div>
  `;
  $("addPaymentMethodButton").addEventListener("click", () => {
    state.paymentEntryOpen = true;
    state.paymentMethod = state.savedCardAvailable && !state.newCardDefault ? "saved-card" : "new-card";
    renderAll();
    $("paymentEntryPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("checkoutPreviewBack").addEventListener("click", () => {
    state.bookingStep = "snacks";
    state.paymentEntryOpen = false;
    renderAll();
  });
  $("checkoutFoodPrompt").addEventListener("click", () => {
    state.bookingStep = "snacks";
    state.paymentEntryOpen = false;
    renderAll();
    $("snackSection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    if (button.dataset.paymentMethod === "saved-card") button.classList.toggle("hidden", !canUseSavedCard);
    button.classList.toggle("active", button.dataset.paymentMethod === state.paymentMethod);
  });
}

function bookingSteps() {
  return ["movie", "seats", "snacks"];
}

function canNavigateToStep(step) {
  if (step === "start") return true;
  if (bookingSteps().includes(step)) {
    const index = bookingSteps().indexOf(step);
    if (index <= 0) return true;
    if (index === 1) return stepIsReady("movie");
    return stepIsReady("movie") && stepIsReady("seats");
  }
  if (step === "review") return stepIsReady("movie") && stepIsReady("seats");
  if (step === "summary") return state.view === "summary";
  return false;
}

function navigateToStep(step) {
  if (!canNavigateToStep(step)) {
    state.warnings += 1;
    renderAll();
    return;
  }
  if (step === "start") {
    setView("start");
    renderAll();
    return;
  }
  if (bookingSteps().includes(step)) {
    state.bookingStep = step;
    setView("booking");
    renderAll();
    return;
  }
  if (step === "review") {
    renderReview();
    setView("review");
    return;
  }
  if (step === "summary") setView("summary");
}

function stepIsReady(step = state.bookingStep) {
  if (step === "movie") return Boolean(state.movieId && state.showtime);
  if (step === "seats") return state.seats.length >= totalTicketsRequired();
  return true;
}

function renderBookingStep() {
  const visible = {
    movie: ["movieSection"],
    seats: ["seatSection"],
    snacks: state.paymentEntryOpen ? ["checkoutSection"] : ["snackSection", "checkoutSection"]
  };
  ["movieSection", "seatSection", "snackSection", "checkoutSection"].forEach((id) => {
    $(id).classList.toggle("hidden-page", !(visible[state.bookingStep] || []).includes(id));
  });
  const inBookingFlow = state.view === "booking";
  $("navHomeButton").classList.toggle("hidden", !inBookingFlow);
  $("navBackButton").classList.toggle("hidden", !inBookingFlow);
  $("navBackButton").disabled = bookingSteps().indexOf(state.bookingStep) === 0;
  $("navBackButton").setAttribute("aria-disabled", String(bookingSteps().indexOf(state.bookingStep) === 0));
  $("nextStepButton").textContent = state.bookingStep === "snacks" ? "Review Cart" : "Continue";
  const actionSlot = $(`${state.bookingStep}StepAction`);
  if (actionSlot && !$("nextStepButton").parentElement.isSameNode(actionSlot)) actionSlot.appendChild($("nextStepButton"));
  renderDistractorAds();
}

function taskHasAds(task = state.task) {
  return ["Hard", "Complex"].includes(task.difficulty);
}

function taskHasAdPopup(task = state.task) {
  return task.difficulty === "Complex";
}

function renderDistractorAds() {
  const adStrip = $("adStrip");
  const bottomAdZone = $("bottomAdZone");
  const showAds = taskHasAds();
  adStrip.classList.toggle("hidden", !showAds);
  bottomAdZone.classList.toggle("hidden", !showAds);
  if (!showAds) {
    adStrip.innerHTML = "";
    bottomAdZone.innerHTML = "";
    return;
  }
  const ads = [
    { title: "Flash Sale", text: "Limited-time movie deal", cta: "Claim Deal", size: "hero", image: "assets/cinema-ad-flash-sale.png" },
    { title: "Snack Combo", text: "Popcorn upgrade expires soon", cta: "Add Now", size: "bottom", image: "assets/cinema-ad-snack-combo.png" },
    { title: "VIP Seats", text: "Bright lights, big savings", cta: "See Promo", size: "bottom", image: "assets/cinema-ad-vip-seats.png" }
  ];
  const adButton = (ad, index) => `
    <button class="fake-ad fake-ad-${ad.size} ad-style-${(index % 3) + 1}" type="button" data-distractor-ad="${index}" aria-label="${ad.title}: ${ad.text}. ${ad.cta}">
      <img src="${ad.image}" alt="" loading="lazy" />
      <span>${ad.title}</span>
      <strong>${ad.text}</strong>
      <em>${ad.cta}</em>
    </button>
  `;
  adStrip.innerHTML = adButton(ads[0], 0);
  bottomAdZone.innerHTML = ads.slice(1).map((ad, index) => adButton(ad, index + 1)).join("");
}

function renderOrderPanel() {
  syncTicketsToSelectedSeats();
  const movie = movieById(state.movieId);
  const sum = totals();
  const itemCount = state.seats.length + Object.values(state.snacks).reduce((total, qty) => total + qty, 0);
  $("orderPanel").classList.toggle("collapsed", !state.orderOpen);
  $("orderPanel").innerHTML = `
    <div class="order-panel-inner">
      <div class="order-panel-head">
        <h2><span class="cart-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h15l-2 8H8L6 3H3"/><path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>Shopping Cart</span> ${itemCount ? `<span class="status-pill">${itemCount}</span>` : ""}</h2>
        <button class="order-toggle" type="button" id="orderToggleButton" aria-expanded="${state.orderOpen}">${state.orderOpen ? "Collapse cart" : `${money(sum.total)} · Cart`}</button>
      </div>
      <div class="order-panel-body">
        <div class="order-line"><span>Movie</span><strong>${movie?.title || "Not selected"}</strong></div>
        <div class="order-line"><span>Date/time</span><strong>${dateLabelForKey(state.date)}${state.showtime ? `, ${state.showtime.time}` : ""}</strong></div>
        <div class="order-line"><span>Tickets</span><strong>${state.tickets.adult} adult, ${state.tickets.senior} senior</strong></div>
        <div class="order-line"><span>Seats</span><strong>${selectedSeats().map((seat) => seat.id).join(", ") || "None"}</strong></div>
        <div class="order-line"><span>Snacks</span><strong>${Object.entries(state.snacks).filter(([, qty]) => qty).map(([id, qty]) => `${qty} ${snacks.find((item) => item.id === id).name}`).join(", ") || "None"}</strong></div>
        <div class="order-line"><span>Payment</span><strong>${paymentMethodLabel()}</strong></div>
        <div class="order-line"><span>Premium fees</span><strong>${money(sum.premium)}</strong></div>
        <div class="order-line total-line"><span>Total</span><strong>${money(sum.total)}</strong></div>
        ${state.task.budget ? `<p class="${sum.total <= state.task.budget ? "status-pill good" : "status-pill warn"}">Budget: under ${money(state.task.budget)}</p>` : ""}
      </div>
    </div>
  `;
}

function renderAll() {
  document.body.classList.toggle("low-vision", $("lowVisionToggle").checked);
  document.body.classList.toggle("high-contrast", $("highContrastToggle").checked);
  state.cues = $("cueToggle").checked;
  state.instructionsVisible = $("instructionsToggle").checked;
  state.immediateFeedback = $("feedbackToggle").checked;
  renderTaskCard();
  syncTicketsToSelectedSeats();
  renderDates();
  renderMovies();
  renderSeatMap();
  renderSnacks();
  renderCheckout();
  renderBookingStep();
  renderOrderPanel();
  renderHomeTaskGrid();
}

function selectSeat(id) {
  const seat = seatById(id);
  if (!seat || seat.type === "unavailable") return;
  if (state.seats.includes(id)) {
    state.seats = state.seats.filter((seatId) => seatId !== id);
    syncTicketsToSelectedSeats();
    renderAll();
    return;
  }
  state.seats.push(id);
  syncTicketsToSelectedSeats();
  if (state.immediateFeedback) {
    if (state.seats.length > totalTicketsRequired()) state.warnings += 1;
    if (state.task.wheelchair && seat.type === "standard") state.warnings += 1;
    if (state.task.avoidRows?.includes(seat.row)) state.warnings += 1;
  }
  renderAll();
}

function renderReview() {
  const order = maybeSeedReviewError(currentOrderForReview());
  const sum = totalsForOrder(order);
  const checks = taskChecks(order);
  const movie = movieById(state.movieId);
  const ticketTotal = sum.adult + sum.senior;
  const snackLines = Object.entries(order.snacks).filter(([, qty]) => qty).map(([id, qty]) => `${qty} ${snacks.find((item) => item.id === id).name}`).join(", ") || "None";
  const seatText = order.seats.map((id) => seatById(id)?.label || id).join(" + ") || "None";
  $("reviewLayout").classList.toggle("feedback-off", !state.immediateFeedback);
  $("reviewPanel").innerHTML = `
    <div class="checkout-confirmation">
      <div class="checkout-topbar">
        <button class="checkout-back" type="button" id="reviewBackInlineButton" aria-label="Return to checkout">←</button>
        <span>Checkout Process</span>
      </div>
      <div class="checkout-movie-summary">
        <div>
          <h2>${order.movie}</h2>
          <div class="checkout-tags">
            <span>${movie?.rating || "NR"}</span>
            <span>${movie?.minutes || ""} min</span>
            <span>${movie?.genre || "Movie"}</span>
          </div>
          <p>${dateLabelForKey(order.date)}, ${order.time}</p>
          <p>${order.tickets.adult + order.tickets.senior} ticket${order.tickets.adult + order.tickets.senior === 1 ? "" : "s"} • ${seatText}</p>
          <p>${paymentMethodLabel(order.paymentMethod)}</p>
        </div>
        ${movie ? `<img class="checkout-poster" src="${movie.poster}" alt="${movie.title} poster" />` : ""}
      </div>
      <div class="checkout-price">
        <div class="checkout-price-head">
          <strong>Price Breakdown</strong>
          <span>See More</span>
        </div>
        <div class="checkout-line"><span>Tickets</span><strong>${money(ticketTotal)}</strong></div>
        <div class="checkout-line"><span>Premium fees</span><strong>${money(sum.premium)}</strong></div>
        <div class="checkout-line"><span>Concessions</span><strong>${money(sum.snackTotal)}</strong></div>
        <div class="checkout-line"><span>Snacks</span><strong>${snackLines}</strong></div>
        <div class="checkout-line total"><span>Total price</span><strong>${money(sum.total)}</strong></div>
      </div>
      <div class="checkout-confirm-bar">
        <div>
          <span>${order.tickets.adult + order.tickets.senior} ticket${order.tickets.adult + order.tickets.senior === 1 ? "" : "s"}</span>
          <strong>${money(sum.total)}</strong>
        </div>
        <button class="btn-primary" type="button" id="confirmInlineButton">Pay ${money(sum.total)}</button>
      </div>
    </div>
  `;
  $("reviewBackInlineButton").addEventListener("click", () => $("backToBookingButton").click());
  $("confirmInlineButton").addEventListener("click", () => $("confirmButton").click());
  $("reviewChecklist").innerHTML = state.immediateFeedback ? checks.map(([label, pass], index) => `
    <label class="check-item">
      <input type="checkbox" data-review-check="${index}" ${pass ? "checked" : ""} />
      <span>${label}: ${pass ? "looks correct" : "needs correction"}</span>
    </label>
  `).join("") : "";
}

function confirmBooking() {
  const order = state.reviewOverride || currentOrderForReview();
  const checks = taskChecks(order);
  const passed = checks.filter(([, pass]) => pass).length;
  const score = Math.round((passed / checks.length) * 100);
  const minutes = Math.max(1, Math.round((Date.now() - state.startTime) / 60000));
  const missed = checks.filter(([, pass]) => !pass).map(([label]) => label);
  state.lastSummary = { score, minutes, missed };
  $("performanceSummary").innerHTML = `
    <div class="summary-head">
      <div>
        <p class="section-tag">Confirmation</p>
        <h2>Practice Booking Complete</h2>
        <p>Task ${state.task.id}: ${state.task.title} • ${minutes} minute${minutes === 1 ? "" : "s"}</p>
      </div>
      <p class="score">${score}%</p>
    </div>
    <div class="review-table">
      ${checks.map(([label, pass]) => `<div class="review-row"><span>${label}</span><strong>${pass ? "Met" : "Needs practice"}</strong></div>`).join("")}
    </div>
  `;
  renderTherapySummary(score, minutes, missed);
  setView("summary");
}

function renderTherapySummary(score, minutes, missed) {
  $("soapSummary").innerHTML = `
    <div class="summary-head compact">
      <div>
        <p class="section-tag">Therapist Summary</p>
        <h2>${state.noteFormat === "soap" ? "SOAP-Style Note" : "Paragraph Note"}</h2>
      </div>
      <div class="note-format-toggle" aria-label="Therapy note format">
        <button type="button" data-note-format="soap" class="${state.noteFormat === "soap" ? "active" : ""}">S: O: A: P:</button>
        <button type="button" data-note-format="paragraph" class="${state.noteFormat === "paragraph" ? "active" : ""}">Paragraph</button>
      </div>
    </div>
    <div class="soap ${state.noteFormat === "paragraph" ? "paragraph-note" : ""}">${therapyNote(score, minutes, missed)}</div>
  `;
  document.querySelectorAll("[data-note-format]").forEach((button) => {
    button.addEventListener("click", () => {
      state.noteFormat = button.dataset.noteFormat;
      $("noteFormatSelect").value = state.noteFormat;
      renderTherapySummary(score, minutes, missed);
    });
  });
}

function noteSections(score, minutes, missed) {
  const cueText = state.warnings > 0 || state.corrections > 0 ? "required cueing/error correction during the task" : "completed with limited cueing";
  const adText = state.adErrors ? ` Patient clicked ${state.adErrors} distracting advertisement${state.adErrors === 1 ? "" : "s"}, indicating reduced inhibition or susceptibility to visual distractors.` : "";
  return {
    subjective: "Patient participated in a simulated online movie ticket booking task targeting visual scanning, working memory, executive function, and dual tasking.",
    objective: `Patient completed "${state.task.title}" in approximately ${minutes} minute(s) with ${state.corrections} correction(s), ${state.warnings} warning cue(s), and ${state.adErrors} distracting ad click(s). Accuracy score: ${score}%. Task demands included movie/showtime selection, ticket quantity, accessible seating decisions, snack/payment review, and checkout confirmation.${adText}`,
    assessment: `Performance suggests ${score >= 85 ? "good functional carryover for structured digital booking tasks" : "continued need for practice with task monitoring and error detection"}. ${missed.length ? `Areas needing support: ${missed.join(", ")}.` : "All scored task requirements were met."}`,
    plan: "Continue graded digital IADL practice. Adjust difficulty, cueing, visual complexity, and memory load based on patient tolerance and independence."
  };
}

function therapyNote(score, minutes, missed) {
  const sections = noteSections(score, minutes, missed);
  if (state.noteFormat === "paragraph") {
    return `${sections.subjective} ${sections.objective} ${sections.assessment} ${sections.plan}`;
  }
  return `S: ${sections.subjective}

O: ${sections.objective}

A: ${sections.assessment}

P: ${sections.plan}`;
}

function openTaskModal() {
  if (state.view === "start") {
    $("modalContent").innerHTML = `
      <p class="section-tag" id="modalTitle">Cinema Simulator Guide</p>
      <h2>How To Use This Activity</h2>
      <p>Select a booking task from the home page, then guide the patient through the realistic sequence: choose a movie and showtime, select seats, decide whether to add concessions, enter mock payment information, and review the cart before confirming.</p>
      <h3>Clinical Setup</h3>
      <ul>
        <li>Use the gear icon to adjust visual cues, instruction visibility, immediate feedback, low-vision mode, contrast, audio, and saved-card settings.</li>
        <li>Start with Easy tasks for basic sequencing, then progress to Moderate, Hard, and Complex tasks as rules, memory demands, budgets, and distractors increase.</li>
        <li>Use only fake payment information. No real reservations, accounts, or payments are created.</li>
      </ul>
    `;
    $("taskModal").classList.remove("hidden");
    return;
  }
  const task = state.task;
  $("modalContent").innerHTML = `
    <p class="section-tag" id="modalTitle">Patient Instructions</p>
    <h2>Task ${task.id}: ${task.title}</h2>
    <p>${task.instruction}</p>
    <h3>Clinical Targets</h3>
    <ul>${task.targets.map((target) => `<li>${target}</li>`).join("")}</ul>
    <p class="disclaimer">Use fake payment information only. Do not enter real personal or financial details.</p>
  `;
  $("taskModal").classList.remove("hidden");
}

function speakTask() {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(state.task.instruction));
}

function openSettingsPanel() {
  $("setupPanel").classList.remove("hidden");
  $("cueToggle").focus();
}

function closeSettingsPanel() {
  $("setupPanel").classList.add("hidden");
}

function bindEvents() {
  if ($("taskFilters")) {
    $("taskFilters").addEventListener("click", (event) => {
      const button = event.target.closest("[data-task-filter]");
      if (!button) return;
      state.taskFilter = button.dataset.taskFilter;
      renderTaskFilters();
      renderHomeTaskGrid();
    });
  }
  $("homeTaskGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-select-task]");
    const id = Number(card?.dataset.selectTask || 0);
    if (!id) return;
    const task = tasks.find((item) => item.id === id);
    resetBooking(task);
    setView("booking");
    renderAll();
    if ($("audioToggle").checked) speakTask();
  });
  $("homeTaskGrid").addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest("[data-select-task]");
    if (!card) return;
    event.preventDefault();
    card.click();
  });
  ["cueToggle", "instructionsToggle", "feedbackToggle", "lowVisionToggle", "highContrastToggle"].forEach((id) => $(id).addEventListener("change", renderAll));
  $("savedCardToggle").addEventListener("change", () => {
    state.savedCardAvailable = $("savedCardToggle").checked;
    if (!state.savedCardAvailable) state.paymentMethod = "new-card";
    renderAll();
  });
  $("newCardDefaultToggle").addEventListener("change", () => {
    state.newCardDefault = $("newCardDefaultToggle").checked;
    if (state.paymentEntryOpen) state.paymentMethod = state.savedCardAvailable && !state.newCardDefault ? "saved-card" : "new-card";
    renderAll();
  });
  $("noteFormatSelect").addEventListener("change", () => {
    state.noteFormat = $("noteFormatSelect").value;
    if (state.view === "summary" && state.lastSummary) {
      renderTherapySummary(state.lastSummary.score, state.lastSummary.minutes, state.lastSummary.missed);
    }
  });
  $("audioToggle").addEventListener("change", () => { if ($("audioToggle").checked) speakTask(); });
  $("infoButton").addEventListener("click", openTaskModal);
  $("setupButton").addEventListener("click", () => { setView("start"); openSettingsPanel(); });
  $("closeSetupButton").addEventListener("click", closeSettingsPanel);
  $("closeTaskModal").addEventListener("click", () => $("taskModal").classList.add("hidden"));
  $("taskModal").addEventListener("click", (event) => { if (event.target.id === "taskModal") $("taskModal").classList.add("hidden"); });
  $("closeAdModal").addEventListener("click", () => $("adModal").classList.add("hidden"));
  $("dismissAdModal").addEventListener("click", () => $("adModal").classList.add("hidden"));
  $("adModal").addEventListener("click", (event) => { if (event.target.id === "adModal") $("adModal").classList.add("hidden"); });
  document.querySelector(".booking-main").addEventListener("click", (event) => {
    const ad = event.target.closest("[data-distractor-ad]");
    if (!ad) return;
    state.adErrors += 1;
    state.warnings += 1;
    if (taskHasAdPopup()) $("adModal").classList.remove("hidden");
    renderOrderPanel();
  });
  $("dateTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-date]");
    if (!button) return;
    state.date = button.dataset.date;
    state.movieId = "";
    state.showtime = null;
    state.seats = [];
    syncTicketsToSelectedSeats();
    renderAll();
  });
  $("movieGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-movie]");
    if (!button) return;
    state.movieId = button.dataset.movie;
    state.showtime = { time: button.dataset.time, price: Number(button.dataset.price) };
    state.seats = [];
    syncTicketsToSelectedSeats();
    renderAll();
  });
  $("seatMap").addEventListener("click", (event) => {
    const button = event.target.closest("[data-seat]");
    if (button) selectSeat(button.dataset.seat);
  });
  $("zoomSeatsButton").addEventListener("click", () => $("seatMapWrap").classList.toggle("zoomed"));
  $("snackGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-snack]");
    if (!button) return;
    const key = button.dataset.snack;
    state.snacks[key] = Math.max(0, (state.snacks[key] || 0) + Number(button.dataset.delta));
    if (!state.snacks[key]) delete state.snacks[key];
    renderAll();
  });
  $("dismissOfferButton").addEventListener("click", () => $("comboOffer").classList.add("hidden"));
  $("orderPanel").addEventListener("click", (event) => {
    const button = event.target.closest("#orderToggleButton");
    if (!button) return;
    state.orderOpen = !state.orderOpen;
    renderOrderPanel();
  });
  $("navHomeButton").addEventListener("click", () => navigateToStep("start"));
  $("navBackButton").addEventListener("click", () => {
    const steps = bookingSteps();
    const index = steps.indexOf(state.bookingStep);
    if (index <= 0) return;
    state.bookingStep = steps[index - 1];
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("nextStepButton").addEventListener("click", () => {
    if (state.bookingStep !== "snacks" && !stepIsReady()) {
      state.warnings += 1;
      renderAll();
      return;
    }
    if (state.bookingStep === "snacks") {
      renderReview();
      setView("review");
      return;
    }
    const steps = bookingSteps();
    state.bookingStep = steps[Math.min(steps.indexOf(state.bookingStep) + 1, steps.length - 1)];
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    button.addEventListener("click", () => {
      state.paymentMethod = button.dataset.paymentMethod;
      state.paymentEntryOpen = true;
      renderCheckout();
    });
  });
  $("closePaymentEntryButton").addEventListener("click", () => {
    state.paymentEntryOpen = false;
    renderAll();
  });
  $("reviewButton").addEventListener("click", () => { renderReview(); setView("review"); });
  $("backToBookingButton").addEventListener("click", () => {
    state.corrections += 1;
    state.reviewOverride = null;
    setView("booking");
    renderAll();
  });
  $("confirmButton").addEventListener("click", confirmBooking);
  $("newTaskButton").addEventListener("click", () => setView("start"));
  $("printButton").addEventListener("click", () => window.print());
}

function init() {
  renderTaskOptions();
  bindEvents();
  renderAll();
}

init();
