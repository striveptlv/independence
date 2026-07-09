const PAYMENT_BANK = {
  accountNumber: "334221098",
  routingNumber: "58293041",
  accountName: "Jordan Lee",
};

const LOGIN = {
  username: "JordanL",
  password: "Therapy",
};

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function displayDateFromIso(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const TODAY = toIsoDate(new Date());
const DUE_DATE = toIsoDate(addDays(new Date(), 30));
const DISPLAY_DUE_DATE = displayDateFromIso(DUE_DATE);
const FULL_PAYMENT = 2513.05;
const MINIMUM_PAYMENT = 35.0;
let autoPromptQueue = [];
let autoPromptIndex = 0;
let autoPromptTimer = null;

const GOAL_PRESETS = {
  easy: ["login", "choice", "payment"],
  medium: ["login", "reference", "choice", "payment", "score"],
  hard: ["login", "reference", "choice", "payment", "score", "dispute"],
  realistic: ["login", "choice", "payment", "score", "dispute", "fraud"],
};

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

function setStatus(element, message, type) {
  if (!element) return;
  element.textContent = message;
  element.className = `status ${type || ""}`.trim();
}

function refreshOverlayState() {
  const visibleLayer = document.querySelector(".modal:not(.hidden), .popup:not(.hidden), .toast:not(.hidden)");
  document.body.classList.toggle("prompt-active", Boolean(visibleLayer));
}

function scheduleNextAutoPrompt(delay = 4500) {
  window.clearTimeout(autoPromptTimer);
  if (autoPromptIndex >= autoPromptQueue.length) return;

  autoPromptTimer = window.setTimeout(() => {
    const nextPrompt = autoPromptQueue[autoPromptIndex];
    autoPromptIndex += 1;
    showLayer(nextPrompt);
  }, delay);
}

function showLayer(element) {
  if (!element) return;
  element.classList.remove("hidden");
  refreshOverlayState();
}

function hideLayer(element) {
  if (!element) return;
  element.classList.add("hidden");
  refreshOverlayState();
  if (
    element.matches("[data-promo-modal], [data-chat-popup]") &&
    !document.body.classList.contains("prompt-active")
  ) {
    scheduleNextAutoPrompt(4500);
  }
}

function checkAllGoalsCompleted() {
  const goals = document.querySelectorAll("[data-goal-item]:not([hidden])");
  const completionModal = document.querySelector("[data-complete-modal]");
  if (!goals.length || !completionModal || completionModal.dataset.shown === "true") return;

  const allDone = Array.from(goals).every((goal) => goal.classList.contains("completed"));
  if (allDone) {
    completionModal.dataset.shown = "true";
    showLayer(completionModal);
  }
}

function completeGoal(goalName) {
  document.querySelectorAll(`[data-goal-item="${goalName}"]`).forEach((item) => {
    item.classList.add("completed");
    const box = item.querySelector(".goal-box");
    if (box) box.textContent = "✓";
  });
  checkAllGoalsCompleted();
}

function currentLevel() {
  if (document.body.classList.contains("easy-mode")) return "easy";
  if (document.body.classList.contains("medium-mode")) return "medium";
  if (document.body.classList.contains("hard-mode")) return "hard";
  if (document.body.classList.contains("realistic-mode")) return "realistic";
  return "";
}

function selectedGoalsForPage() {
  const level = currentLevel();
  const fallback = GOAL_PRESETS[level] || [];
  const params = new URLSearchParams(window.location.search);
  const queryGoals = params.get("goals");
  const storedGoals = level ? window.sessionStorage.getItem(`visaGoals:${level}`) : "";
  const rawGoals = queryGoals || storedGoals || fallback.join(",");
  const allowed = new Set(fallback);
  const selected = rawGoals
    .split(",")
    .map((goal) => goal.trim())
    .filter((goal) => allowed.has(goal));

  return selected.length ? selected : fallback;
}

function applySelectedGoals() {
  const selected = new Set(selectedGoalsForPage());
  document.querySelectorAll("[data-goal-item]").forEach((item) => {
    item.hidden = !selected.has(item.dataset.goalItem);
  });
}

function updateDynamicDates() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (node.nodeValue.includes("April 18, 2026")) {
      node.nodeValue = node.nodeValue.replaceAll("April 18, 2026", DISPLAY_DUE_DATE);
    }
  });
}

function showDashboard(shell, loginScreen, dashboardTop) {
  if (loginScreen) loginScreen.remove();
  shell.classList.remove("hidden");
  if (dashboardTop) {
    window.history.replaceState(null, "", "#dashboard");
    dashboardTop.scrollIntoView({ behavior: "auto", block: "start" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  initializeAutoPrompts();
}

function initializeLogin() {
  const shell = document.querySelector("[data-secure-shell]");
  const loginScreen = document.querySelector("[data-login-screen]");
  const loginForm = document.querySelector("[data-login-form]");
  const loginStatus = document.querySelector("[data-login-status]");
  const dashboardTop = document.querySelector("[data-dashboard-top]");

  if (!shell || !loginScreen || !loginForm) return;

  shell.classList.add("hidden");

  if (!selectedGoalsForPage().includes("login")) {
    showDashboard(shell, loginScreen, dashboardTop);
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (username !== LOGIN.username || password !== LOGIN.password) {
      setStatus(loginStatus, "Incorrect username or password.", "error");
      return;
    }

    completeGoal("login");
    setStatus(loginStatus, "", "");
    showDashboard(shell, loginScreen, dashboardTop);
  });
}

function initializePaymentForms() {
  document.querySelectorAll("[data-payment-form]").forEach((form) => {
    const amountInput = form.querySelector("[data-amount]");
    const dateInput = form.querySelector("[data-date]");
    const status = form.querySelector("[data-status]");
    const radioButtons = form.querySelectorAll("input[name='paymentOption']");

    if (dateInput) {
      dateInput.min = TODAY;
      dateInput.max = DUE_DATE;
      dateInput.value = TODAY;
    }

    radioButtons.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (amountInput) {
          amountInput.value = radio.value === "minimum" ? MINIMUM_PAYMENT.toFixed(2) : FULL_PAYMENT.toFixed(2);
        }
        completeGoal("choice");
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const pickedDate = String(formData.get("paymentDate") || "");
      const amount = Number(formData.get("paymentAmount"));
      const paymentOption = String(formData.get("paymentOption") || "");

      if (
        formData.get("bankAccountNumber") !== PAYMENT_BANK.accountNumber ||
        formData.get("routingNumber") !== PAYMENT_BANK.routingNumber ||
        formData.get("accountName") !== PAYMENT_BANK.accountName
      ) {
        setStatus(status, "Bank details do not match the practice checking account.", "error");
        return;
      }

      if (!pickedDate || pickedDate < TODAY || pickedDate > DUE_DATE) {
        setStatus(status, `Choose a payment date on or before ${DISPLAY_DUE_DATE}.`, "error");
        return;
      }

      if (!amount || amount <= 0) {
        setStatus(status, "Enter a valid payment amount.", "error");
        return;
      }

      if (form.dataset.rejectFull === "true" && paymentOption === "full") {
        setStatus(status, "Payment rejected: insufficient funds in the linked bank account for full balance payment.", "error");
        return;
      }

      completeGoal("choice");
      completeGoal("payment");
      const typeLabel = paymentOption === "minimum" ? "minimum payment" : "full balance payment";
      setStatus(
        status,
        `${formatMoney(amount)} scheduled for ${pickedDate} using ${typeLabel}.`,
        "success"
      );
    });
  });
}

function initializeTabs() {
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-target]");
    const panels = group.parentElement.querySelectorAll("[data-tab-panel]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.target;
        buttons.forEach((item) => item.classList.remove("active"));
        panels.forEach((panel) => panel.classList.add("hidden"));
        button.classList.add("active");
        const selected = document.getElementById(target);
        if (selected) selected.classList.remove("hidden");
      });
    });
  });
}

function initializeScoreButtons() {
  document.querySelectorAll("[data-show-score]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector("[data-score-modal]");
      showLayer(modal);
      completeGoal("score");
    });
  });

  document.querySelectorAll("[data-close-score]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector("[data-score-modal]");
      hideLayer(modal);
    });
  });
}

function initializeDismissButtons() {
  document.querySelectorAll("[data-dismiss]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.closest(".modal, .popup, .toast");
      hideLayer(target);
    });
  });
}

function initializeDisputes() {
  const modal = document.querySelector("[data-transaction-modal]");
  const modalTitle = document.querySelector("[data-transaction-title]");
  const modalText = document.querySelector("[data-transaction-text]");
  const disputeButton = document.querySelector("[data-transaction-dispute]");
  const fraudButton = document.querySelector("[data-transaction-fraud]");
  let activeRow = null;

  document.querySelectorAll("[data-transaction-row]").forEach((row) => {
    row.addEventListener("click", () => {
      activeRow = row;
      if (modalTitle) modalTitle.textContent = row.dataset.merchant || "Selected transaction";
      if (modalText) modalText.textContent = `${row.dataset.date || "Pending"} • ${row.dataset.amount || ""}`;
      showLayer(modal);
    });
  });

  if (disputeButton) {
    disputeButton.addEventListener("click", () => {
      const statusTarget = document.querySelector("[data-dispute-status]");
      if (activeRow) {
        activeRow.dataset.state = "submitted";
        activeRow.classList.add("resolved");
      }
      completeGoal("dispute");
      setStatus(statusTarget, "Dispute request submitted for the selected charge.", "success");
      hideLayer(modal);
    });
  }

  if (fraudButton) {
    fraudButton.addEventListener("click", () => {
      const statusTarget = document.querySelector("[data-fraud-status]") || document.querySelector("[data-dispute-status]");
      if (activeRow) {
        activeRow.dataset.state = "submitted";
        activeRow.classList.add("resolved");
      }
      completeGoal("fraud");
      setStatus(statusTarget, "Fraud alert submitted for the selected transaction.", "success");
      hideLayer(modal);
    });
  }
}

function initializeReferenceLinks() {
  document.querySelectorAll("[data-reference-link]").forEach((link) => {
    link.addEventListener("click", () => {
      completeGoal("reference");
    });
  });
}

function initializeStatusChips() {
  const modal = document.querySelector("[data-chip-modal]");
  const title = document.querySelector("[data-chip-title]");
  const body = document.querySelector("[data-chip-body]");

  document.querySelectorAll("[data-status-chip]").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (title) title.textContent = chip.dataset.title || chip.textContent.trim();
      if (body) body.textContent = chip.dataset.body || "";
      showLayer(modal);
    });
  });
}

function initializeAutoPrompts() {
  const loginScreen = document.querySelector("[data-login-screen]");
  if (loginScreen && !loginScreen.classList.contains("hidden")) return;
  if (document.body.dataset.autoPromptsStarted === "true") return;
  document.body.dataset.autoPromptsStarted = "true";

  const promoModal = document.querySelector("[data-promo-modal]");
  const popup = document.querySelector("[data-chat-popup]");
  autoPromptQueue = [promoModal, popup].filter(Boolean);
  autoPromptIndex = 0;
  scheduleNextAutoPrompt(4500);
}

function initializeMobileNav() {
  const closeDrawers = () => {
    document.querySelectorAll(".tabs.open").forEach((drawer) => drawer.classList.remove("open"));
    document.querySelectorAll("[data-mobile-nav-toggle]").forEach((button) => button.setAttribute("aria-expanded", "false"));
    document.body.classList.remove("nav-drawer-open");
  };

  document.querySelectorAll("[data-mobile-nav-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");
      const drawer = targetId ? document.getElementById(targetId) : null;
      if (!drawer) return;

      const shouldOpen = !drawer.classList.contains("open");
      closeDrawers();
      if (shouldOpen) {
        drawer.classList.add("open");
        document.querySelectorAll(`[aria-controls="${targetId}"]`).forEach((pairedButton) => {
          pairedButton.setAttribute("aria-expanded", "true");
        });
        document.body.classList.add("nav-drawer-open");
      }
    });
  });

  document.querySelectorAll("[data-mobile-nav-close]").forEach((button) => {
    button.addEventListener("click", closeDrawers);
  });

  document.querySelectorAll("[data-tabs] [data-target]").forEach((button) => {
    button.addEventListener("click", closeDrawers);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawers();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateDynamicDates();
  applySelectedGoals();
  initializeLogin();
  initializePaymentForms();
  initializeTabs();
  initializeScoreButtons();
  initializeDismissButtons();
  initializeDisputes();
  initializeReferenceLinks();
  initializeStatusChips();
  initializeMobileNav();
  initializeAutoPrompts();
});
