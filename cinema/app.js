const movies = [
  { id: "night-living-dead", title: "Night of the Living Dead", genre: "Classic horror", rating: "NR", minutes: 96, poster: "assets/night-of-the-living-dead.jpg", accent: "linear-gradient(135deg, #0c0f13, #b42318)", days: { Today: [{ time: "1:20 PM", price: 10 }, { time: "6:00 PM", price: 13 }, { time: "6:30 PM", price: 14 }], Friday: [{ time: "4:40 PM", price: 12 }, { time: "6:30 PM", price: 14 }, { time: "8:40 PM", price: 15 }], Saturday: [{ time: "4:15 PM", price: 10 }, { time: "5:10 PM", price: 13 }, { time: "8:15 PM", price: 15 }], Sunday: [{ time: "4:50 PM", price: 11 }, { time: "7:00 PM", price: 13 }] } },
  { id: "phantom-opera-1925", title: "The Phantom of the Opera (1925)", genre: "Silent horror drama", rating: "NR", minutes: 93, poster: "assets/phantom-of-the-opera.webp", accent: "linear-gradient(135deg, #20142f, #d7ad2f)", days: { Today: [{ time: "4:00 PM", price: 11 }], Friday: [{ time: "4:30 PM", price: 12 }, { time: "7:15 PM", price: 14 }], Saturday: [{ time: "12:45 PM", price: 11 }, { time: "3:10 PM", price: 12 }, { time: "8:00 PM", price: 15 }], Sunday: [{ time: "1:45 PM", price: 11 }, { time: "3:30 PM", price: 12 }, { time: "6:15 PM", price: 13 }, { time: "7:40 PM", price: 14 }] } },
  { id: "star-is-born-1937", title: "A Star Is Born (1937)", genre: "Classic drama", rating: "NR", minutes: 111, poster: "assets/a-star-is-born-1937.jpg", accent: "linear-gradient(135deg, #7a2f2f, #f5820a)", days: { Today: [{ time: "3:30 PM", price: 11 }], Friday: [{ time: "3:30 PM", price: 12 }, { time: "6:30 PM", price: 14 }], Saturday: [{ time: "1:15 PM", price: 11 }, { time: "5:20 PM", price: 13 }, { time: "7:10 PM", price: 15 }], Sunday: [{ time: "2:10 PM", price: 11 }, { time: "5:30 PM", price: 13 }] } },
  { id: "gullivers-travels-1939", title: "Gulliver's Travels (1939)", genre: "Animated adventure", rating: "G", minutes: 76, poster: "assets/gullivers-travels.jpg", accent: "linear-gradient(135deg, #194f9f, #21a67a)", days: { Today: [{ time: "2:00 PM", price: 11 }, { time: "5:45 PM", price: 13 }, { time: "7:00 PM", price: 13 }], Friday: [{ time: "2:15 PM", price: 12 }, { time: "6:10 PM", price: 14 }], Saturday: [{ time: "12:30 PM", price: 12 }, { time: "4:20 PM", price: 13 }, { time: "7:30 PM", price: 15 }], Sunday: [{ time: "1:00 PM", price: 11 }, { time: "3:20 PM", price: 12 }, { time: "6:00 PM", price: 13 }] } }
];

const tasks = [
  { id: 1, title: "Single Wheelchair-Accessible Seat", difficulty: "Easy", movie: "Gulliver's Travels (1939)", date: "Today", time: "2:00 PM", adult: 1, senior: 0, wheelchair: 1, companion: 0, instruction: "Book 1 adult ticket for Gulliver's Travels (1939) at 2:00 PM today. Choose 1 wheelchair-accessible space.", targets: ["Visual scanning", "Simple attention", "Accessible seat recognition"] },
  { id: 2, title: "Wheelchair Space Plus Companion Seat", difficulty: "Easy", movie: "A Star Is Born (1937)", date: "Today", time: "3:30 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, instruction: "Book 2 tickets for A Star Is Born (1937) at 3:30 PM. Choose 1 wheelchair-accessible space and 1 companion seat next to it.", targets: ["Spatial awareness", "Seat-type matching", "Sequencing"] },
  { id: 16, title: "Book Two Tickets Only", difficulty: "Easy", movie: "Night of the Living Dead", date: "Today", time: "1:20 PM", adult: 2, senior: 0, standard: 2, instruction: "Book 2 adult tickets for Night of the Living Dead at 1:20 PM today. Choose any 2 regular seats together.", targets: ["Simple sequencing", "Ticket quantity", "Seat selection"] },
  { id: 3, title: "Avoid Standard Seats", difficulty: "Moderate", movie: "The Phantom of the Opera (1925)", date: "Today", time: "4:00 PM", adult: 1, senior: 0, wheelchair: 1, companion: 0, avoidStandard: true, instruction: "Book 1 adult ticket for The Phantom of the Opera (1925) at 4:00 PM. Choose a wheelchair-accessible space, not a regular theater seat.", targets: ["Inhibition", "Visual discrimination", "Rule following"] },
  { id: 4, title: "Date, Time, And Accessible Seating", difficulty: "Moderate", movie: "Night of the Living Dead", date: "Friday", time: "6:30 PM", adult: 1, senior: 0, wheelchair: 1, companion: 0, instruction: "Book 1 adult ticket for Night of the Living Dead on Friday at 6:30 PM. Choose 1 wheelchair-accessible space.", targets: ["Working memory", "Attention to detail", "Date/time scanning"] },
  { id: 5, title: "Adult And Companion Ticket", difficulty: "Moderate", movie: "A Star Is Born (1937)", date: "Saturday", time: "1:15 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, instruction: "Book 2 tickets for A Star Is Born (1937) on Saturday at 1:15 PM. Choose 1 wheelchair-accessible space and 1 companion seat next to it.", targets: ["Working memory", "Spatial awareness", "Error checking"] },
  { id: 6, title: "Avoid The Front Accessible Section", difficulty: "Moderate", movie: "Gulliver's Travels (1939)", date: "Today", time: "5:45 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, avoidRows: ["A", "B"], instruction: "Book 2 tickets for Gulliver's Travels (1939) at 5:45 PM. Choose 1 wheelchair-accessible space and 1 companion seat, but do not choose the accessible section closest to the screen.", targets: ["Inhibition", "Spatial reasoning", "Executive function"] },
  { id: 7, title: "Snack Memory With Accessible Seating", difficulty: "Hard", movie: "Night of the Living Dead", date: "Today", time: "6:00 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, snacks: { "small-popcorn": 1 }, instruction: "Book 2 tickets for Night of the Living Dead at 6:00 PM. Choose 1 wheelchair-accessible space and 1 companion seat. Add 1 small popcorn.", targets: ["Prospective memory", "Sequencing", "Dual tasking"] },
  { id: 8, title: "Budget Limit With Accessible Seating", difficulty: "Hard", movie: "Night of the Living Dead", date: "Any", after: "5:00 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, budget: 35, avoidPremium: true, instruction: "Book 2 tickets for Night of the Living Dead after 5:00 PM. Choose 1 wheelchair-accessible space and 1 companion seat. Keep the total under $35.", targets: ["Budget awareness", "Planning", "Comparison"] },
  { id: 9, title: "Flexible Time Rule And Accessible Seating", difficulty: "Hard", movie: "The Phantom of the Opera (1925)", date: "Sunday", after: "2:00 PM", before: "7:00 PM", adult: 3, senior: 0, wheelchair: 1, companion: 2, allowClosestCompanions: true, instruction: "Book 3 tickets for The Phantom of the Opera (1925) on Sunday. The movie must start after 2:00 PM but before 7:00 PM. Choose 1 wheelchair-accessible space and 2 companion seats if available.", targets: ["Cognitive flexibility", "Time comparison", "Problem solving"] },
  { id: 10, title: "Review And Correct Accessible Seating Error", difficulty: "Hard", movie: "A Star Is Born (1937)", date: "Friday", time: "6:30 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, forceReviewError: true, instruction: "Book 2 tickets for A Star Is Born (1937) on Friday at 6:30 PM. Choose 1 wheelchair-accessible space and 1 companion seat.", targets: ["Error detection", "Working memory", "Self-monitoring"] },
  { id: 11, title: "Dual Task With Code Recall", difficulty: "Complex", movie: "Night of the Living Dead", date: "Saturday", after: "4:00 PM", adult: 2, senior: 0, wheelchair: 1, companion: 1, avoidRows: ["A", "B"], memoryCode: "BLUE 27", distractor: true, instruction: "Book 2 tickets for Night of the Living Dead on Saturday after 4:00 PM. Choose 1 wheelchair-accessible space and 1 companion seat, avoid the front row, and remember this code: BLUE 27. You will be asked for it at checkout.", targets: ["Dual tasking", "Divided attention", "Inhibition"] },
  { id: 12, title: "Distractor Resistance And Snack Rule", difficulty: "Complex", movie: "Gulliver's Travels (1939)", date: "Sunday", earliestAfter: "3:00 PM", adult: 3, senior: 0, wheelchair: 1, companion: 2, snacks: { "small-popcorn": 1 }, avoidSnacks: ["drink"], distractor: true, instruction: "Book 3 tickets for Gulliver's Travels (1939) on Sunday at the earliest showtime after 3:00 PM. Choose 1 wheelchair-accessible space and 2 companion seats if available. Add 1 small popcorn, and do not add drinks even if a combo offer appears.", targets: ["Inhibition", "Prospective memory", "Decision making"] },
  { id: 13, title: "Compare Prices And Accessible Seating", difficulty: "Complex", movie: "Night of the Living Dead", date: "Saturday", after: "4:00 PM", leastExpensive: true, adult: 2, senior: 0, wheelchair: 1, companion: 1, instruction: "Book 2 tickets for Night of the Living Dead on Saturday. Choose the least expensive showing after 4:00 PM. Select 1 wheelchair-accessible space and 1 companion seat.", targets: ["Comparison shopping", "Planning", "Accessibility awareness"] },
  { id: 14, title: "Multi-Constraint Realistic Booking", difficulty: "Complex", movie: "A Star Is Born (1937)", weekend: true, after: "5:00 PM", before: "8:00 PM", adult: 2, senior: 1, wheelchair: 1, companion: 2, avoidRows: ["A", "B"], budget: 50, snacks: { "small-popcorn": 1 }, memoryCode: "HARBOR", instruction: "Book tickets for 2 adults and 1 senior for A Star Is Born (1937) this weekend. The movie must start between 5:00 PM and 8:00 PM. Choose 1 wheelchair-accessible space and 2 companion seats, avoid the first two rows, keep the total under $50, add 1 small popcorn, and remember the word HARBOR for checkout.", targets: ["Executive function", "Working memory", "Error detection"] },
  { id: 15, title: "Standard Seat Practice", difficulty: "Easy", movie: "Gulliver's Travels (1939)", date: "Today", time: "7:00 PM", adult: 2, senior: 0, standard: 2, requiredRow: "D", optional: true, instruction: "Book 2 adult tickets for Gulliver's Travels (1939) at 7:00 PM. Choose two regular seats together in Row D.", targets: ["Standard seat comparison", "Scanning", "Sequencing"] }
];

const snacks = [
  { id: "small-popcorn", name: "Small Popcorn", price: 5.5 },
  { id: "large-popcorn", name: "Large Popcorn", price: 8.25 },
  { id: "drink", name: "Soft Drink", price: 4.75 },
  { id: "candy", name: "Candy", price: 4.25 }
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
  cues: true,
  taskFilter: "All",
  bookingStep: "movie",
  instructionsVisible: false,
  immediateFeedback: true,
  reviewSeeded: false,
  reviewOverride: null,
  orderOpen: false,
  corrections: 0,
  warnings: 0,
  startTime: Date.now()
};

const $ = (id) => document.getElementById(id);
const money = (value) => "$" + value.toFixed(2);
const movieByTitle = (title) => movies.find((movie) => movie.title === title);
const movieById = (id) => movies.find((movie) => movie.id === id);
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
  A: Array.from({ length: 16 }, (_, index) => index + 1),
  B: Array.from({ length: 16 }, (_, index) => index + 1),
  C: [null, null, 2, 3, null, 5, 6, null, 8, 9, null, null, 12, 13, null, null],
  D: [null, 1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13, null, null],
  E: [null, 1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13, null, null],
  F: [1, 2, 3, 4, null, 6, 7, null, 9, 10, null, 12, 13, 14, 15, 16]
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
  let times = (movie.days[day] || []).slice();
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
  state.reviewSeeded = false;
  state.reviewOverride = null;
  state.corrections = 0;
  state.warnings = 0;
  state.startTime = Date.now();
  $("memoryCodeInput").value = "";
}

function baseSeatType(row, number) {
  if (row === "C" && [2, 3, 5, 6, 9, 12, 13].includes(number)) return "wheelchair";
  if ((row === "C" && [8].includes(number)) || (row === "D" && [5, 10, 11].includes(number)) || (row === "F" && [7, 11].includes(number))) return "companion";
  if (["E", "F"].includes(row) && number >= 8 && number <= 13) return "premium";
  return "standard";
}

function dynamicUnavailableSeats() {
  const key = `${state.movieId || state.task.movie}|${state.date}|${state.showtime?.time || ""}`;
  const pool = ["D1", "D2", "D3", "D6", "D7", "D8", "D9", "E3", "E4", "E6", "E8", "E9", "E10", "F6", "F9", "F12", "F13", "F14"];
  let seed = 0;
  for (const char of key) seed = (seed * 31 + char.charCodeAt(0)) % 9973;
  const count = state.showtime ? 10 + (seed % 7) : 12;
  const chosen = new Set();
  for (let i = 0; chosen.size < count && i < pool.length * 2; i += 1) {
    const id = pool[(seed + i * 7) % pool.length];
    const match = id.match(/^([A-F])(\d+)$/);
    if (!match || ["wheelchair", "companion"].includes(baseSeatType(match[1], Number(match[2])))) continue;
    chosen.add(id);
  }
  return chosen;
}

function seatType(row, number) {
  const id = `${row}${number}`;
  if (dynamicUnavailableSeats().has(id)) return "unavailable";
  return baseSeatType(row, number);
}

function seatById(id) {
  const match = id.match(/^([A-F])(\d+)$/);
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
  const levels = { Easy: 3, Moderate: 5, Hard: 8, Complex: 8 };
  const target = movieByTitle(state.task.movie);
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
  const wheelchair = seats.filter((seat) => seat.type === "wheelchair");
  const companion = seats.filter((seat) => seat.type === "companion");
  const standard = seats.filter((seat) => seat.type === "standard");
  const premium = seats.filter((seat) => seat.type === "premium");
  const validDate = task.weekend ? ["Saturday", "Sunday"].includes(source.date) : task.date === "Any" || !task.date || source.date === task.date;
  const validTime = task.time ? source.time === task.time : true;
  const afterOk = task.after ? toMinutes(source.time || "12:00 AM") > toMinutes(task.after) : true;
  const beforeOk = task.before ? toMinutes(source.time || "11:59 PM") < toMinutes(task.before) : true;
  const earliestOk = task.earliestAfter ? source.time === validShowtimes(movieByTitle(task.movie), source.date, task)[0]?.time : true;
  const leastExpensiveOk = task.leastExpensive ? source.time === validShowtimes(movieByTitle(task.movie), source.date, task)[0]?.time : true;
  const pairOk = !task.companion || wheelchair.some((w) => companion.some((c) => companionNearWheelchair(w, c))) || task.allowClosestCompanions;
  const avoidRowsOk = !(task.avoidRows || []).some((row) => seats.some((seat) => seat.row === row));
  const standardOk = task.standard ? standard.length >= task.standard && (!task.requiredRow || standard.every((seat) => seat.row === task.requiredRow)) : standard.length === 0 || !task.avoidStandard;
  const budgetOk = !task.budget || totalsForOrder(source).total <= task.budget;
  const snackOk = Object.entries(task.snacks || {}).every(([id, qty]) => (source.snacks[id] || 0) === qty);
  const avoidSnackOk = (task.avoidSnacks || []).every((id) => !source.snacks[id]);
  const memoryOk = !task.memoryCode || $("memoryCodeInput").value.trim().toUpperCase() === task.memoryCode.toUpperCase();
  const checks = [
    ["Movie", source.movie === task.movie],
    ["Date", validDate],
    ["Showtime", validTime && afterOk && beforeOk && earliestOk && leastExpensiveOk],
    ["Ticket quantity/type", source.tickets.adult === (task.adult || 0) && source.tickets.senior === (task.senior || 0)],
    ["Seat count", seats.length === totalTicketsRequired(task)],
    ["Wheelchair space count", wheelchair.length === (task.wheelchair || 0)],
    ["Companion seat count", companion.length >= (task.companion || 0)],
    ["Accessible pairing", pairOk],
    ["Restricted rows avoided", avoidRowsOk],
    ["Standard seat rule", standardOk],
    ["Premium/budget rule", (!task.avoidPremium || premium.length === 0) && budgetOk],
    ["Snack rule", snackOk && avoidSnackOk],
    ["Memory code", memoryOk]
  ];
  return checks.filter(([label]) => {
    if (label.includes("Wheelchair") && !task.wheelchair) return false;
    if (label.includes("Companion") && !task.companion) return false;
    if (label.includes("Memory") && !task.memoryCode) return false;
    if (label.includes("Snack") && !task.snacks && !task.avoidSnacks) return false;
    if (label.includes("Restricted") && !task.avoidRows) return false;
    if (label.includes("Premium") && !task.budget && !task.avoidPremium) return false;
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
    snacks: { ...state.snacks }
  };
}

function maybeSeedReviewError(order) {
  if (!state.task.forceReviewError || state.reviewSeeded) return order;
  state.reviewSeeded = true;
  state.reviewOverride = { ...order, seats: order.seats.filter((id) => seatById(id)?.type !== "companion") };
  return state.reviewOverride;
}

function setView(view) {
  state.view = view;
  ["start", "booking", "review", "summary"].forEach((name) => $(`${name}View`).classList.toggle("hidden", name !== view));
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
  document.querySelector(".booking-layout")?.classList.toggle("instructions-hidden", !visible);
  $("taskCard").classList.toggle("hidden", !visible);
  $("taskCard").innerHTML = `
    <p class="section-tag">Task ${task.id}</p>
    <h2 class="task-title">${task.title}</h2>
    <div class="skill-tags">${task.targets.map((target) => `<span class="chip">${target}</span>`).join("")}</div>
    <p><strong>Instruction:</strong> ${task.instruction}</p>
    <ul class="target-list">
      <li>Movie: ${task.movie}</li>
      <li>Date: ${task.weekend ? "Saturday or Sunday" : task.date || "Any valid date"}</li>
      <li>Time: ${task.time || [task.earliestAfter ? `earliest after ${task.earliestAfter}` : "", task.after ? `after ${task.after}` : "", task.before ? `before ${task.before}` : ""].filter(Boolean).join(", ")}</li>
      <li>Tickets: created automatically from selected seats (${(task.adult || 0)} adult${task.senior ? `, ${task.senior} senior` : ""})</li>
      <li>Seats: ${task.wheelchair || 0} wheelchair, ${task.companion || 0} companion${task.standard ? `, ${task.standard} regular` : ""}</li>
      ${task.budget ? `<li>Budget: under ${money(task.budget)}</li>` : ""}
      ${task.memoryCode ? `<li>Memory code: ${task.memoryCode}</li>` : ""}
    </ul>
  `;
}

function renderDates() {
  const dates = ["Today", "Friday", "Saturday", "Sunday"];
  $("dateTabs").innerHTML = dates.map((date) => `<button class="date-tab ${state.date === date ? "active" : ""}" type="button" data-date="${date}">${date}</button>`).join("");
}

function renderMovies() {
  const query = state.search.toLowerCase();
  const list = selectableMovieList().filter((movie) => !query || movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query));
  $("movieGrid").innerHTML = list.map((movie) => {
    const slots = movie.days[state.date] || [];
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
  $("movieStatus").textContent = movie && state.showtime ? `${movie.title}, ${state.date} ${state.showtime.time}` : "Not selected";
  $("movieStatus").className = `status-pill ${movie && state.showtime ? "good" : ""}`;
}

function renderSeatMap() {
  $("seatMap").innerHTML = Object.entries(seatLayout).map(([row, seats]) => `
    <div class="seat-row">
      <span class="row-label">${row}</span>
      ${seats.map((number) => {
        if (!number) return `<span class="seat-spacer" aria-hidden="true"></span>`;
        const id = `${row}${number}`;
        const type = seatType(row, number);
        const selected = state.seats.includes(id);
        const cue = state.cues && ((state.task.wheelchair && type === "wheelchair") || (state.task.companion && type === "companion"));
        const text = type === "wheelchair" ? `<span class="wheelchair-symbol" aria-hidden="true">&#9855;</span>` : type === "unavailable" ? `<span aria-hidden="true">&#9679;</span>` : "";
        return `<button class="seat ${type} ${selected ? "selected" : ""} ${cue ? "cued" : ""}" type="button" data-seat="${id}" aria-label="${seatLabel(row, number)}" ${type === "unavailable" ? "disabled" : ""}>${text}</button>`;
      }).join("")}
    </div>
  `).join("");
  $("seatLegend").innerHTML = [
    ["standard", "Standard"], ["selected", "Selected"], ["unavailable", "Unavailable"], ["wheelchair", "Wheelchair space"], ["companion", "Companion"], ["premium", "Premium"]
  ].map(([type, label]) => `<span class="legend-item"><span class="legend-swatch seat ${type}"></span>${label}</span>`).join("");
  renderSeatFeedback();
}

function renderSeatFeedback(message = "") {
  const seats = selectedSeats();
  $("selectedSeatSummary").textContent = seats.length ? `Selected seats: ${seats.map((seat) => seat.label).join(" + ")}` : "Selected seats: none";
  const checks = taskChecks();
  const seatRelevant = checks.filter(([label]) => ["Seat count", "Wheelchair space count", "Companion seat count", "Accessible pairing", "Restricted rows avoided", "Standard seat rule"].includes(label));
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
  field.classList.toggle("hidden", !state.task.memoryCode);
  if (state.task.memoryCode) $("memoryCodeLabel").textContent = "Enter remembered code";
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

function stepHelpText() {
  if (state.bookingStep === "movie") return state.movieId && state.showtime ? "Movie and showtime selected." : "Choose a movie, date, and showtime first.";
  if (state.bookingStep === "seats") return stepIsReady("seats") ? "Seats selected. Tickets will match the selected seats automatically." : `Choose ${totalTicketsRequired()} seat${totalTicketsRequired() === 1 ? "" : "s"} or spaces.`;
  return "Add or avoid snacks, enter any memory code, then review the order.";
}

function renderBookingStep() {
  const visible = {
    movie: ["movieSection"],
    seats: ["seatSection"],
    snacks: ["snackSection", "checkoutSection"]
  };
  ["movieSection", "seatSection", "snackSection", "checkoutSection"].forEach((id) => {
    $(id).classList.toggle("hidden-page", !(visible[state.bookingStep] || []).includes(id));
  });
  $("prevStepButton").disabled = bookingSteps().indexOf(state.bookingStep) === 0;
  $("nextStepButton").textContent = state.bookingStep === "snacks" ? "Review Order" : "Continue";
  $("stepHelpText").textContent = stepHelpText();
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
        <h2>Order ${itemCount ? `<span class="status-pill">${itemCount}</span>` : ""}</h2>
        <button class="order-toggle" type="button" id="orderToggleButton" aria-expanded="${state.orderOpen}">${state.orderOpen ? "Collapse" : `${money(sum.total)} · Expand`}</button>
      </div>
      <div class="order-panel-body">
        <div class="order-line"><span>Movie</span><strong>${movie?.title || "Not selected"}</strong></div>
        <div class="order-line"><span>Date/time</span><strong>${state.date}${state.showtime ? `, ${state.showtime.time}` : ""}</strong></div>
        <div class="order-line"><span>Tickets</span><strong>${state.tickets.adult} adult, ${state.tickets.senior} senior</strong></div>
        <div class="order-line"><span>Seats</span><strong>${selectedSeats().map((seat) => seat.id).join(", ") || "None"}</strong></div>
        <div class="order-line"><span>Snacks</span><strong>${Object.entries(state.snacks).filter(([, qty]) => qty).map(([id, qty]) => `${qty} ${snacks.find((item) => item.id === id).name}`).join(", ") || "None"}</strong></div>
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
  $("reviewLayout").classList.toggle("feedback-off", !state.immediateFeedback);
  $("reviewPanel").innerHTML = `
    <p class="section-tag">Checkout Review</p>
    <h2>Review Before Confirming</h2>
    <div class="review-table">
      <div class="review-row"><span>Movie</span><strong>${order.movie}</strong></div>
      <div class="review-row"><span>Date/time</span><strong>${order.date}, ${order.time}</strong></div>
      <div class="review-row"><span>Tickets</span><strong>${order.tickets.adult} adult, ${order.tickets.senior} senior</strong></div>
      <div class="review-row"><span>Seats</span><strong>${order.seats.map((id) => seatById(id)?.label || id).join(" + ") || "None"}</strong></div>
      <div class="review-row"><span>Snacks</span><strong>${Object.entries(order.snacks).filter(([, qty]) => qty).map(([id, qty]) => `${qty} ${snacks.find((item) => item.id === id).name}`).join(", ") || "None"}</strong></div>
      <div class="review-row"><span>Total</span><strong>${money(sum.total)}</strong></div>
    </div>
  `;
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
  $("performanceSummary").innerHTML = `
    <p class="section-tag">Confirmation</p>
    <h2>Practice Booking Complete</h2>
    <p class="score">${score}%</p>
    <p>Completed Task ${state.task.id}: ${state.task.title} in about ${minutes} minute${minutes === 1 ? "" : "s"}.</p>
    <div class="review-table">
      ${checks.map(([label, pass]) => `<div class="review-row"><span>${label}</span><strong>${pass ? "Met" : "Needs practice"}</strong></div>`).join("")}
    </div>
  `;
  $("soapSummary").innerHTML = `
    <p class="section-tag">Therapist Summary</p>
    <h2>SOAP-Style Note</h2>
    <div class="soap">${soapNote(score, minutes, missed)}</div>
  `;
  setView("summary");
}

function soapNote(score, minutes, missed) {
  const cueText = state.warnings > 0 || state.corrections > 0 ? "required cueing/error correction during the task" : "completed with limited cueing";
  return `S: Patient participated in a simulated online movie ticket booking task targeting visual scanning, working memory, executive function, and dual tasking.

O: Patient completed "${state.task.title}" in approximately ${minutes} minute(s) with ${state.corrections} correction(s) and ${state.warnings} warning cue(s). Accuracy score: ${score}%. Task demands included movie/showtime selection, ticket quantity, accessible seating decisions, snack/payment review, and checkout confirmation.

A: Performance suggests ${score >= 85 ? "good functional carryover for structured digital booking tasks" : "continued need for practice with task monitoring and error detection"}. ${missed.length ? `Areas needing support: ${missed.join(", ")}.` : "All scored task requirements were met."}

P: Continue graded digital IADL practice. Adjust difficulty, cueing, visual complexity, and memory load based on patient tolerance and independence.`;
}

function openTaskModal() {
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
  $("audioToggle").addEventListener("change", () => { if ($("audioToggle").checked) speakTask(); });
  $("infoButton").addEventListener("click", openTaskModal);
  $("setupButton").addEventListener("click", () => { setView("start"); openSettingsPanel(); });
  $("closeSetupButton").addEventListener("click", closeSettingsPanel);
  $("closeTaskModal").addEventListener("click", () => $("taskModal").classList.add("hidden"));
  $("taskModal").addEventListener("click", (event) => { if (event.target.id === "taskModal") $("taskModal").classList.add("hidden"); });
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
  $("homeFromBookingButton").addEventListener("click", () => navigateToStep("start"));
  $("prevStepButton").addEventListener("click", () => {
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
