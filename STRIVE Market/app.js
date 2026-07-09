      const categories = ["All", "Produce", "Dairy", "Meat & Protein", "Bakery", "Frozen", "Pantry", "Beverages", "Household", "Personal Care"];
      const stores = [
        {
          name: "Fresh Valley Market",
          shortName: "Fresh Valley",
          logo: `
            <span class="store-logo-mark">
              <span class="store-symbol">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M15.2 4.2c5.8 1.1 10.1 5.8 10.1 11.5 0 6.6-5.4 11.9-12 11.9-3.2 0-6.1-1.2-8.2-3.3 4.1-.1 7.1-1.2 9.2-3.3 2.2-2.2 3.2-5.4 3-9.8-2.2 4.9-5.6 8.1-10.6 9.6 1.2-6.9 4-12.4 8.5-16.6Z"/></svg>
              </span>
              <span class="store-logo-main">Fresh Valley</span>
              <span class="store-logo-sub">Market</span>
            </span>
          `,
          logoClass: "fresh",
          brandNote: "Fresh market style",
          pickup: true,
          delivery: true,
          window: "Pickup today 2-3 PM",
          detail: "1.4 mi away",
          profile: "Best produce and dairy selection. Prices are slightly higher.",
          priceFactor: 1.06,
          categoryPriceFactors: { Produce: 0.97, Dairy: 1.02 },
          unavailable: ["peanut-cereal"],
          featured: ["apples", "bananas", "spinach", "milk", "yogurt-tub"],
          pickupWindows: ["Today 2-3 PM", "Today 4-5 PM", "Tomorrow 10-11 AM"],
          deliveryWindows: ["Today 5-6 PM", "Today 7-8 PM", "Tomorrow 9-10 AM"],
          deliveryFee: 5.99,
          lowFeeWindow: "Tomorrow 9-10 AM",
          lowDeliveryFee: 3.99
        },
        {
          name: "Everyday Grocer",
          logo: `
            <span class="store-logo-mark">
              <span class="store-symbol">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 2.5 18.8 11l8.9-2.7-6.1 6.8 6.1 6.7-8.9-2.6-2.8 8.3-2.8-8.3-8.9 2.6 6.1-6.7-6.1-6.8L13.2 11 16 2.5Z"/></svg>
              </span>
              <span class="store-logo-main">EVERYDAY</span>
              <span class="store-logo-sub">Grocer</span>
            </span>
          `,
          logoClass: "everyday",
          brandNote: "Supercenter style",
          pickup: true,
          delivery: true,
          window: "Delivery today 5-6 PM",
          detail: "2.1 mi away",
          profile: "Broad inventory and fast delivery. Delivery fee is higher.",
          priceFactor: 1.0,
          categoryPriceFactors: { Pantry: 0.98, Household: 1.03 },
          unavailable: [],
          featured: ["cereal", "value-cereal", "rice", "chicken", "paper-towels"],
          pickupWindows: ["Today 3-4 PM", "Today 6-7 PM", "Tomorrow 11 AM-12 PM"],
          deliveryWindows: ["Today 3-4 PM", "Today 6-7 PM", "Tomorrow 9-10 AM"],
          deliveryFee: 6.99,
          lowFeeWindow: "Tomorrow 9-10 AM",
          lowDeliveryFee: 4.49
        },
        {
          name: "Trader Foods",
          logo: `
            <span class="store-logo-mark">
              <span class="store-symbol">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M22.3 4.7c2.8 0 5 2.3 5 5.1 0 5.3-6.5 13.2-11.3 17.5C11.2 23 4.7 15.1 4.7 9.8c0-2.8 2.2-5.1 5-5.1 2.6 0 4.3 1.6 5.2 3.1.4.6 1.8.6 2.2 0 .9-1.5 2.6-3.1 5.2-3.1Z"/></svg>
              </span>
              <span class="store-logo-main">Trader</span>
              <span class="store-logo-sub">Foods</span>
            </span>
          `,
          logoClass: "neighborhood",
          brandNote: "Specialty grocery style",
          pickup: true,
          delivery: false,
          window: "Pickup tomorrow 10-11 AM",
          detail: "0.8 mi away",
          profile: "Closest store with pickup only and a smaller selection.",
          priceFactor: 1.03,
          categoryPriceFactors: { Produce: 0.99, "Personal Care": 1.08 },
          unavailable: ["almond-milk", "gluten-free-bread", "family-rice", "yogurt-tub", "toothpaste"],
          featured: ["white-bread", "eggs-6", "bananas", "apples", "dish-soap"],
          pickupWindows: ["Today 4-5 PM", "Tomorrow 10-11 AM", "Tomorrow 1-2 PM"],
          deliveryWindows: [],
          deliveryFee: 0,
          lowFeeWindow: "",
          lowDeliveryFee: 0
        },
        {
          name: "COST CLUB",
          logo: `
            <span class="store-logo-mark">
              <span class="store-logo-main">COST CLUB</span>
              <span class="store-logo-sub">Warehouse</span>
            </span>
          `,
          logoClass: "value",
          brandNote: "Warehouse value style",
          pickup: true,
          delivery: true,
          window: "Lowest delivery fee",
          detail: "3.0 mi away",
          profile: "Lower prices and cheaper delivery. Fewer premium substitutions.",
          priceFactor: 0.91,
          categoryPriceFactors: { Pantry: 0.88, Household: 0.92, Produce: 0.95 },
          unavailable: ["gluten-free-bread", "spinach", "almond-milk"],
          featured: ["value-cereal", "rice", "pasta", "water", "paper-towels"],
          pickupWindows: ["Today 5-6 PM", "Tomorrow 9-10 AM", "Tomorrow 12-1 PM"],
          deliveryWindows: ["Today 7-8 PM", "Tomorrow 9-10 AM", "Tomorrow 2-3 PM"],
          deliveryFee: 2.99,
          lowFeeWindow: "Tomorrow 2-3 PM",
          lowDeliveryFee: 1.99
        }
      ];
      const goals = [
        { id: 1, title: "Basic Grocery List", difficulty: "Easy", skills: ["Sequencing", "Search", "Cart use"], instructions: "Add milk, eggs, and bread.", required: ["milk", "eggs", "bread"], budget: 20, checkout: "pickup", time: "5-8 minutes" },
        { id: 2, title: "Breakfast Items", difficulty: "Easy", skills: ["Category navigation", "Item recognition"], instructions: "Add cereal, milk, and bananas.", required: ["cereal", "milk", "bananas"], budget: 18, checkout: "pickup", time: "5-8 minutes" },
        { id: 3, title: "Simple Produce Practice", difficulty: "Easy", skills: ["Visual scanning", "Item selection"], instructions: "Add apples and bananas.", required: ["apples", "bananas"], constraint: "Add exactly 2 fruit items.", checkout: "review cart", time: "4-6 minutes" },
        { id: 4, title: "Household Basics", difficulty: "Easy", skills: ["Category navigation", "Functional shopping"], instructions: "Add paper towels, dish soap, and bottled water.", required: ["paper towels", "dish soap", "bottled water"], budget: 25, checkout: "pickup", time: "5-8 minutes" },
        { id: 5, title: "Search Practice", difficulty: "Easy", skills: ["Search", "Attention", "Error checking"], instructions: "Use the search bar to find yogurt, bread, and rice.", required: ["yogurt", "bread", "rice"], constraint: "Add only the requested items.", checkout: "confirm practice order", time: "5-8 minutes" },
        { id: 6, title: "Compare Cereal Prices", difficulty: "Moderate", skills: ["Price comparison", "Decision-making"], instructions: "Choose the cheaper cereal option, then add milk and bananas.", required: ["value oat cereal", "milk", "bananas"], budget: 25, checkout: "delivery", time: "8-10 minutes" },
        { id: 7, title: "Fruit and Dairy", difficulty: "Moderate", skills: ["Category sorting", "Working memory"], instructions: "Pick 2 fruits and 1 dairy item.", requiredCategories: { Produce: 2, Dairy: 1 }, budget: 20, checkout: "delivery", time: "8-10 minutes" },
        { id: 8, title: "Avoid Peanut Products", difficulty: "Moderate", skills: ["Label reading", "Safety awareness"], instructions: "Add cereal, bread, fruit, and yogurt.", required: ["cereal", "bread", "fruit", "yogurt"], avoid: "peanut", checkout: "delivery", time: "8-12 minutes" },
        { id: 9, title: "Budget Meal Prep", difficulty: "Moderate", skills: ["Planning", "Budgeting", "Sequencing"], instructions: "Add chicken, rice, frozen vegetables, and apples.", required: ["chicken", "rice", "frozen vegetables", "apples"], budget: 35, checkout: "pickup", time: "8-12 minutes" },
        { id: 10, title: "Coupon Practice", difficulty: "Moderate", skills: ["Attention to detail", "Discounts", "Checkout review"], instructions: "Add 4 grocery items and use 1 coupon item.", requiredCount: 4, couponRequired: true, budget: 30, checkout: "review discount", time: "8-12 minutes" },
        { id: 11, title: "Out-of-Stock Replacement", difficulty: "Hard", skills: ["Problem solving", "Substitution choice", "Budgeting"], instructions: "Add bread, milk, eggs, cereal, and apples.", required: ["bread", "milk", "eggs", "cereal", "apples"], outOfStock: ["apples"], budget: 45, checkout: "replacement", time: "10-15 minutes" },
        { id: 12, title: "Remove an Unnecessary Item", difficulty: "Hard", skills: ["Error detection", "Cart review", "Self-monitoring"], instructions: "Add chicken, rice, frozen vegetables, yogurt, and bananas.", required: ["chicken", "rice", "frozen vegetables", "yogurt", "bananas"], extraCartItem: "peanut butter", budget: 45, checkout: "remove extra item", time: "10-15 minutes" },
        { id: 13, title: "Compare Size and Price", difficulty: "Hard", skills: ["Price comparison", "Reasoning", "Attention"], instructions: "Choose the best-value rice, cereal, and yogurt.", required: ["family rice", "value oat cereal", "plain yogurt tub"], budget: 40, checkout: "delivery", time: "10-15 minutes" },
        { id: 14, title: "Allergy and Budget Challenge", difficulty: "Hard", skills: ["Safety judgment", "Substitution", "Budgeting"], instructions: "Add 6 items for a simple breakfast and lunch.", requiredCount: 6, avoid: "peanut", outOfStock: ["apples"], budget: 50, checkout: "either", time: "12-15 minutes" },
        { id: 15, title: "Delivery Fee Awareness", difficulty: "Hard", skills: ["Final-cost awareness", "Planning", "Financial reasoning"], instructions: "Add 8 groceries from the list.", requiredCount: 8, budget: 45, checkout: "delivery", lowestDelivery: true, time: "12-15 minutes" },
        { id: 16, title: "Three-Day Grocery Plan", difficulty: "Complex", skills: ["Planning", "Organization", "Executive function"], instructions: "Plan groceries for 3 days of meals for a household of 2. Include 2 proteins, 3 produce items, 1 dairy, and 1 pantry staple - minimum 7 items, no named examples given. Stay under $65.00. One of your planned items will be out of stock; you must substitute without exceeding budget. Complete checkout via delivery, choosing the cheapest available delivery window.", requiredCategories: { "Meat & Protein": 2, Produce: 3, Dairy: 1, Pantry: 1 }, requiredCount: 7, outOfStock: ["apples"], budget: 65, checkout: "delivery", lowestDelivery: true, time: "15-20 minutes" },
        { id: 17, title: "Budget With Substitutions", difficulty: "Complex", skills: ["Flexible thinking", "Budgeting", "Problem solving"], instructions: "Add 9 items for a week of meals, staying under $60.00. At least 2 items you select will be out of stock - substitute appropriately and justify each substitution choice as the closest match in price and category. Also include 1 item using an active coupon, and identify which item and discount you used before checkout.", requiredCount: 9, outOfStock: ["apples", "steak"], budget: 60, checkout: "replacements", couponRequired: true, couponRequiredCount: 1, minSubstitutions: 2, time: "15-20 minutes" },
        { id: 18, title: "Healthy Grocery Trip", difficulty: "Complex", skills: ["Planning", "Category reasoning", "Health literacy"], instructions: "Build a nutritionally balanced cart for 1 person for 4 days. Meet these minimums without further guidance: 3 fruits, 3 vegetables, 2 proteins, 1 dairy, 1 grain/pantry item - 10 items minimum. Stay under $55.00. Avoid any items containing peanuts. If your preferred protein or grain is unavailable, substitute and explain your reasoning.", requiredCategories: { Produce: 6, "Meat & Protein": 2, Dairy: 1, Pantry: 1 }, requiredCount: 10, avoid: "peanut", outOfStock: ["steak", "rice"], budget: 55, checkout: "either", minSubstitutions: 1, time: "15-20 minutes" },
        { id: 19, title: "Family Grocery Order", difficulty: "Complex", skills: ["Multi-step planning", "Divided attention", "Flexible problem solving"], instructions: "Shop for a family of 4 for breakfast, lunch, and dinner across 2 days - minimum 12 items, no category list provided. Stay under $90.00. Identify and apply at least 2 active coupons. One item will be out of stock - substitute it. Review your cart before checkout and remove any item that doesn't support a complete meal plan.", requiredCount: 12, couponRequired: true, couponRequiredCount: 2, outOfStock: ["apples"], budget: 90, checkout: "either", minSubstitutions: 1, time: "18-22 minutes" },
        { id: 20, title: "Full Grocery Checkout Challenge", difficulty: "Complex", skills: ["Full IADL simulation", "Executive function", "Safety", "Budget management"], instructions: "Complete a full weekly grocery order for a household with 1 dietary restriction (no peanuts) and 1 budget cap ($70.00). Add at least 10 items covering breakfast, lunch, and dinner. Two extra items not on any meal plan will be seeded in your cart - find and remove both before checkout. Choose between pickup and delivery based on which has the lower total cost including fees.", requiredCount: 10, avoid: "peanut", budget: 70, checkout: "either", extraCartItems: ["dish soap", "soda"], lowestTotalCheckout: true, time: "20-25 minutes" },
        { id: 21, title: "Find a Drink", difficulty: "Easy", skills: ["Search", "Simple scanning", "Cart use"], instructions: "Add bottled water and bananas.", required: ["bottled water", "bananas"], budget: 12, checkout: "pickup", time: "4-6 minutes" },
        { id: 22, title: "Lower-Cost Fruit Choice", difficulty: "Moderate", skills: ["Price comparison", "Budgeting", "Attention"], instructions: "Choose a lower-cost fruit, then add yogurt and rice.", required: ["bananas", "yogurt", "rice"], budget: 24, checkout: "pickup", time: "8-10 minutes" },
        { id: 23, title: "Cart Review With Coupon", difficulty: "Hard", skills: ["Cart review", "Discounts", "Error awareness"], instructions: "Add cereal, milk, apples, rice, and paper towels, then include 1 coupon item.", required: ["cereal", "milk", "apples", "rice", "paper towels"], couponRequired: true, budget: 42, checkout: "review discount", time: "12-15 minutes" },
        { id: 24, title: "Weekly Essentials Budget", difficulty: "Complex", skills: ["Planning", "Divided attention", "Budgeting"], instructions: "Build a weekly cart covering food and household essentials for a 2-person household - minimum 11 items, no item list provided. Stay under $80.00 after applying any available coupons; you must find and apply at least 1. At least 1 of your chosen items will be out of stock; substitute without breaking budget. Complete checkout, comparing pickup vs. delivery cost before choosing.", requiredCount: 11, couponRequired: true, couponRequiredCount: 1, outOfStock: ["apples"], budget: 80, checkout: "either", minSubstitutions: 1, lowestTotalCheckout: true, time: "18-22 minutes" }
      ];
      const products = [
        { id: "milk", name: "Milk", size: "1 gallon", price: 4.29, category: "Dairy", token: "MILK", tags: ["milk", "dairy"] },
        { id: "almond-milk", name: "Almond Milk", size: "64 oz", price: 3.99, category: "Dairy", token: "ALT", tags: ["milk", "dairy"] },
        { id: "eggs", name: "Large Eggs", size: "12 count", price: 3.49, category: "Dairy", token: "EGG", tags: ["eggs"] },
        { id: "eggs-6", name: "Eggs", size: "6 count", price: 2.19, category: "Dairy", token: "EGG", tags: ["eggs"] },
        { id: "bread", name: "Whole Wheat Bread", size: "20 oz", price: 3.29, category: "Bakery", token: "BRD", tags: ["bread"] },
        { id: "white-bread", name: "White Bread", size: "20 oz", price: 2.49, category: "Bakery", token: "BRD", tags: ["bread"] },
        { id: "multi-bread", name: "Multigrain Bread", size: "20 oz", price: 3.29, category: "Bakery", token: "BRD", tags: ["bread"] },
        { id: "gluten-free-bread", name: "Gluten-Free Bread", size: "16 oz", price: 5.99, category: "Bakery", token: "BRD", tags: ["bread"] },
        { id: "bananas", name: "Bananas", size: "bunch", price: 1.89, category: "Produce", token: "BAN", tags: ["bananas", "fruit"] },
        { id: "apples", name: "Apples", size: "3 lb bag", price: 4.99, category: "Produce", token: "APP", tags: ["apples", "fruit"], stock: false },
        { id: "carrots", name: "Carrots", size: "2 lb bag", price: 2.49, category: "Produce", token: "CAR", tags: ["vegetable"] },
        { id: "spinach", name: "Baby Spinach", size: "5 oz", price: 3.59, category: "Produce", token: "SPN", tags: ["vegetable"] },
        { id: "chicken", name: "Chicken Breast", size: "1.5 lb", price: 9.99, category: "Meat & Protein", token: "CHK", tags: ["chicken", "protein"] },
        { id: "steak", name: "Steak", size: "0.85 lb", price: 12.99, category: "Meat & Protein", token: "STK", tags: ["steak", "beef", "protein"], stock: false },
        { id: "ground-beef", name: "Ground Beef", size: "1 lb", price: 6.99, category: "Meat & Protein", token: "BEEF", tags: ["beef", "protein"] },
        { id: "turkey", name: "Ground Turkey", size: "1 lb", price: 5.99, category: "Meat & Protein", token: "TRY", tags: ["protein"] },
        { id: "rice", name: "White Rice", size: "1 lb", price: 2.49, category: "Pantry", token: "RIC", tags: ["rice", "grain"], stock: false },
        { id: "family-rice", name: "Family Rice", size: "5 lb", price: 6.49, category: "Pantry", token: "RIC", tags: ["rice", "grain"] },
        { id: "pasta", name: "Pasta", size: "16 oz", price: 1.79, category: "Pantry", token: "PAS", tags: ["grain"] },
        { id: "cereal", name: "Honey Crunch Cereal", size: "12 oz", price: 4.99, category: "Pantry", token: "CER", tags: ["cereal"] },
        { id: "value-cereal", name: "Value Oat Cereal", size: "18 oz", price: 3.49, category: "Pantry", token: "CER", tags: ["cereal"], coupon: 0.75 },
        { id: "peanut-cereal", name: "Peanut Cluster Cereal", size: "14 oz", price: 4.39, category: "Pantry", token: "NUT", tags: ["cereal", "peanut"], allergen: "Contains peanut ingredients" },
        { id: "yogurt", name: "Berry Yogurt Cups", size: "4-count", price: 4.49, category: "Dairy", token: "YOG", tags: ["yogurt", "dairy"] },
        { id: "yogurt-tub", name: "Plain Yogurt Tub", size: "32 oz", price: 5.29, category: "Dairy", token: "YOG", tags: ["yogurt", "dairy"] },
        { id: "frozen-veg", name: "Frozen Vegetables", size: "12 oz", price: 2.29, category: "Frozen", token: "FRZ", tags: ["frozen vegetables", "vegetable"] },
        { id: "peanut-butter", name: "Peanut Butter", size: "16 oz", price: 3.79, category: "Pantry", token: "NUT", tags: ["peanut"], allergen: "Contains peanuts" },
        { id: "soup", name: "Canned Soup", size: "15 oz", price: 1.89, category: "Pantry", token: "SUP", tags: ["soup"] },
        { id: "paper-towels", name: "Paper Towels", size: "2 rolls", price: 6.99, category: "Household", token: "TWL", tags: ["paper towels"], coupon: 1.00 },
        { id: "dish-soap", name: "Dish Soap", size: "24 oz", price: 3.29, category: "Household", token: "SOAP", tags: ["dish soap"] },
        { id: "water", name: "Bottled Water", size: "12-count", price: 4.99, category: "Beverages", token: "H2O", tags: ["bottled water", "water"] },
        { id: "soda", name: "Soda", size: "12-pack", price: 6.49, category: "Beverages", token: "SODA", tags: ["soda", "cola", "beverage"], coupon: 0.50 },
        { id: "toothpaste", name: "Toothpaste", size: "6 oz", price: 3.49, category: "Personal Care", token: "TOO", tags: ["personal care"] }
      ];
      const state = {
        view: "home",
        filter: "All",
        category: "All",
        goal: goals[0],
        store: null,
        cart: [],
        search: "",
        justAdded: "",
        fulfillment: "",
        window: "",
        tip: 0,
        hints: 0,
        corrections: 0,
        substitutions: [],
        activeLevel: "Easy",
        startTime: Date.now(),
        cartOpen: false,
        settings: { budget: true, substitutions: true, fees: true, coupons: true, hints: true, leftScan: false, aphasia: false, lowVision: false, storeChoiceCount: 4 }
      };

      function money(value) { return "$" + value.toFixed(2); }
      function productById(id) { return products.find((item) => item.id === id); }
      function selectedStore() { return state.store || stores[0]; }
      function storeProductAvailable(product, store = selectedStore()) {
        if (!product || !store) return false;
        return !(store.unavailable || []).includes(product.id);
      }
      function storePrice(product, store = selectedStore()) {
        if (!product) return 0;
        const categoryFactor = store.categoryPriceFactors && store.categoryPriceFactors[product.category] ? store.categoryPriceFactors[product.category] : 1;
        return Math.max(0.49, product.price * store.priceFactor * categoryFactor);
      }
      function cartLine(id) { return state.cart.find((line) => line.id === id); }
      function activeGoal() { return state.goal || goals[0]; }
      function cartProductsExpanded() {
        return state.cart.flatMap((line) => Array.from({ length: line.qty }, () => productById(line.id))).filter(Boolean);
      }
      function productMatchesRequirement(product, requirement) {
        const req = requirement.toLowerCase();
        const searchable = [product.name, product.category, ...(product.tags || [])].join(" ").toLowerCase();
        return searchable.includes(req) || req.split(/\s+/).every((word) => searchable.includes(word));
      }
      function isGoalOutOfStock(product, goal = activeGoal()) {
        if (!product || product.stock !== false || !goal.outOfStock || !state.settings.substitutions) return false;
        return goal.outOfStock.some((name) => productMatchesRequirement(product, name));
      }
      function linePrice(line) { const product = productById(line.id); return product ? storePrice(product) * line.qty : 0; }
      function couponTotal() {
        if (!state.settings.coupons) return 0;
        return state.cart.reduce((sum, line) => {
          const product = productById(line.id);
          return sum + ((product && product.coupon) ? product.coupon * line.qty : 0);
        }, 0);
      }
      function subtotal() { return state.cart.reduce((sum, line) => sum + linePrice(line), 0); }
      function serviceFee() {
        if (!state.settings.fees) return 0;
        const store = selectedStore();
        if (state.fulfillment === "delivery") return state.window === store.lowFeeWindow ? store.lowDeliveryFee : store.deliveryFee;
        if (state.fulfillment === "pickup") return 0;
        return 0;
      }
      function deliveryWindowFee(window, store = selectedStore()) {
        if (!state.settings.fees || !store.delivery) return 0;
        return window === store.lowFeeWindow ? store.lowDeliveryFee : store.deliveryFee;
      }
      function deliveryWindowLabel(window, store = selectedStore()) {
        if (!state.settings.fees || !store.delivery) return window;
        const fee = deliveryWindowFee(window, store);
        const surcharge = Math.max(0, store.deliveryFee - store.lowDeliveryFee);
        if (window === store.lowFeeWindow) return `${window} - ${money(fee)} lowest fee`;
        return `${window} - ${money(fee)}${surcharge ? ` (+${money(surcharge)} early delivery)` : ""}`;
      }
      function tax() { return Math.max(0, (subtotal() - couponTotal()) * 0.032); }
      function finalTotal() { return Math.max(0, subtotal() - couponTotal() + tax() + serviceFee() + Number(state.tip || 0)); }
      function budgetStatus() {
        const goal = activeGoal();
        if (!state.settings.budget || !goal.budget) return "not applicable";
        return finalTotal() <= goal.budget ? "Stayed under " + money(goal.budget) : "Over budget by " + money(finalTotal() - goal.budget);
      }
      function cartCount() {
        return state.cart.reduce((sum, line) => sum + line.qty, 0);
      }
      function categoryIcon(category) {
        const icons = {
          All: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.7 12 4l8 6.7v8.8a.5.5 0 0 1-.5.5h-5.2v-5.7H9.7V20H4.5a.5.5 0 0 1-.5-.5v-8.8Z"/></svg>`,
          Produce: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 6.2c1.4-2.2 3.5-3.1 6-2.6-.1 2.6-1.5 4.5-4.1 5.4 2.5.4 4.4 2.5 4.4 5.4 0 3.7-2.5 6.1-5.2 6.1-1 0-1.7-.3-2.3-.7-.6.4-1.4.7-2.3.7-2.7 0-5.2-2.4-5.2-6.1 0-3.2 2.2-5.5 5-5.5.8 0 1.7.2 2.5.6-.1-1.3.3-2.4 1.2-3.3Z"/></svg>`,
          Dairy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3.5h8l-1.1 3 1.6 2.1v11.2c0 .4-.3.7-.7.7H8.2a.7.7 0 0 1-.7-.7V8.6L9.1 6.5 8 3.5Zm1.6 7.8v6.8h4.8v-6.8H9.6Z"/></svg>`,
          "Meat & Protein": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 4.1c3.7 0 6.7 2.4 6.7 5.4 0 2.8-2.4 5.1-5.7 5.4-.7.1-1.2.5-1.4 1.1-.5 1.5-1.9 2.5-3.6 2.5-2.4 0-4.3-1.7-4.3-3.8 0-1.5.9-2.8 2.4-3.4.6-.3.9-.8.9-1.4-.1-3.2 2.1-5.8 5-5.8Zm-4 9.2c-.8 0-1.5.6-1.5 1.3s.7 1.3 1.5 1.3 1.5-.6 1.5-1.3-.7-1.3-1.5-1.3Z"/></svg>`,
          Bakery: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11.7c0-3.4 3.1-6.2 7-6.2s7 2.8 7 6.2v6.1c0 .4-.3.7-.7.7H5.7a.7.7 0 0 1-.7-.7v-6.1Zm3.1.1v4.4h7.8v-4.4c0-1.9-1.7-3.4-3.9-3.4s-3.9 1.5-3.9 3.4Z"/></svg>`,
          Frozen: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 3h2v6.1l4.2-4.2 1.4 1.4-4.2 4.2H21v2h-6.6l4.2 4.2-1.4 1.4-4.2-4.2V21h-2v-7.1l-4.2 4.2-1.4-1.4 4.2-4.2H3v-2h6.6L5.4 6.3l1.4-1.4L11 9.1V3Z"/></svg>`,
          Pantry: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5.2c0-1.2 2.2-2.2 5-2.2s5 1 5 2.2v13.6c0 1.2-2.2 2.2-5 2.2s-5-1-5-2.2V5.2Zm2.2 5.3v5.9h5.6v-5.9H9.2Z"/></svg>`,
          Beverages: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4v3l1.7 2.2c.5.6.8 1.4.8 2.2v9.1c0 .8-.7 1.5-1.5 1.5H9c-.8 0-1.5-.7-1.5-1.5v-9.1c0-.8.3-1.6.8-2.2L10 6V3Zm-.1 9v5.7h4.2V12H9.9Z"/></svg>`,
          Household: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h5.5v4H14v2.1l2.7 2.8c.5.5.8 1.2.8 2v5.6c0 .8-.7 1.5-1.5 1.5H8c-.8 0-1.5-.7-1.5-1.5v-5.6c0-.8.3-1.5.8-2L10 9.1V3Zm-.8 11.4v4.1h5.6v-4.1H9.2Z"/></svg>`,
          "Personal Care": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 17.8 7c.9-.2 1.8.4 2 1.3l1 4c.2.9-.4 1.8-1.3 2L5.7 17.8 4 10.5Zm2.7 1.4.7 3 9.9-2.5-.7-3-9.9 2.5Z"/></svg>`
        };
        return icons[category] || icons.All;
      }
      function productImage(product) {
        return `assets/products/${product.id}.png`;
      }
      function setView(view) {
        state.view = view;
        if (view !== "shop") state.cartOpen = false;
        document.body.classList.toggle("focus-mode", view !== "home");
        document.body.classList.toggle("home-mode", view === "home");
        document.body.classList.toggle("activity-mode", view !== "home");
        ["home", "store", "shop", "delivery", "checkout", "summary"].forEach((name) => {
          document.querySelector("#" + name + "View").classList.toggle("hidden", name !== view);
          document.querySelector("[data-step-pill='" + name + "']").classList.toggle("active", name === view);
        });
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      function renderGoals() {
        document.querySelector("#goalFilters").innerHTML = `
          <button class="filter-button" type="button" id="openFilterButton" aria-label="Filter tasks" title="Filter tasks: ${state.filter}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
          </button>
        `;
        const filtered = goals.filter((goal) => {
          if (state.filter === "All") return true;
          if (goal.difficulty === state.filter) return true;
          const skillText = goal.skills.join(" ").toLowerCase();
          return skillText.includes(state.filter.toLowerCase().replace(" & ", " "));
        });
        const cardSummary = (goal) => {
          const categoryText = goal.requiredCategories ? Object.entries(goal.requiredCategories).map(([cat, count]) => `${count} ${cat === "Meat & Protein" ? "protein" : cat.toLowerCase()}`).join(", ") : "";
          if (goal.id === 16) return "Plan a 3-day cart for 2 with category minimums, substitution, budget, and cheapest delivery.";
          if (goal.id === 17) return "Build a 9-item weekly cart with substitutions, budget control, and an active coupon.";
          if (goal.id === 18) return "Create a balanced 10-item cart with fruit, vegetables, proteins, dairy, pantry, and no peanuts.";
          if (goal.id === 19) return "Shop 12+ family meal items, use 2 coupons, handle one substitution, and review the cart.";
          if (goal.id === 20) return "Complete a 10+ item weekly order, avoid peanuts, remove seeded extras, and choose lowest cost.";
          if (goal.id === 24) return "Build an 11+ item weekly essentials cart with coupons, substitution, budget, and cost comparison.";
          if (categoryText) return `Meet category targets: ${categoryText}.`;
          if (goal.requiredCount) return `Add ${goal.requiredCount}${/\b(at least|minimum)\b/i.test(goal.instructions) ? "+" : ""} item${goal.requiredCount === 1 ? "" : "s"} and complete checkout.`;
          return goal.instructions.split(".")[0] + ".";
        };
        const levelClass = {
          Easy: "level-easy",
          Moderate: "level-moderate",
          Hard: "level-hard",
          Complex: "level-complex"
        };
        document.querySelector("#goalGrid").innerHTML = ["Easy", "Moderate", "Hard", "Complex"].map((level) => {
          const levelGoals = filtered.filter((goal) => goal.difficulty === level);
          if (!levelGoals.length) return "";
          return `
            <section class="task-level-section ${levelClass[level]}">
              <div class="task-level-heading">
                <h3>${level}</h3>
              </div>
              <div class="task-card-grid">
                ${levelGoals.map((goal) => `
                  <article class="card goal-card task-card ${levelClass[goal.difficulty]}" role="button" tabindex="0" data-start-goal="${goal.id}" aria-label="Start ${goal.title}">
                    <span class="activity-number">${String(goal.id).padStart(2, "0")}</span>
                    <h3>${goal.title}</h3>
                    <p>${cardSummary(goal)}</p>
                    <p class="activity-meta">${goal.time} · ${goal.skills.slice(0, 3).join(", ")}</p>
                  </article>
                `).join("")}
              </div>
            </section>
          `;
        }).join("") || `<div class="empty-state">No tasks match this filter.</div>`;
      }
      function renderStores() {
        const visibleStores = stores.slice(0, Math.max(1, Math.min(4, Number(state.settings.storeChoiceCount) || 1)));
        document.querySelector("#storeGrid").innerHTML = visibleStores.map((store, index) => `
          <article class="store-card brand-${store.logoClass}">
            <div class="store-identity">
              <div class="store-logo ${store.logoClass}" aria-hidden="true">${store.logo}</div>
              <div>
                <p class="store-brand-note">${store.brandNote}</p>
                <h3>${store.name}</h3>
                <div class="store-line"><span>${store.detail}</span></div>
              </div>
            </div>
            <div class="meta-row">
              <span class="pill ${store.pickup ? "good" : ""}">Pickup ${store.pickup ? "available" : "not available"}</span>
              <span class="pill ${store.delivery ? "good" : "warn"}">Delivery ${store.delivery ? "available" : "not available"}</span>
            </div>
            <p>${store.window}</p>
            <button class="btn-primary" type="button" data-store="${index}">Select Store</button>
          </article>
        `).join("");
      }
      function taskCardHtml() {
        const goal = activeGoal();
        const rules = [];
        if (goal.budget && state.settings.budget) rules.push("Budget: " + money(goal.budget));
        if (goal.constraint) rules.push(goal.constraint);
        if (goal.avoid) rules.push("Avoid " + goal.avoid + " products.");
        if (goal.outOfStock && state.settings.substitutions) rules.push("Substitution practice is active.");
        if (goal.couponRequiredCount || goal.couponRequired) rules.push(`Coupon items required: ${goal.couponRequiredCount || 1}`);
        if (goal.extraCartItems) rules.push(`Remove seeded extra items: ${goal.extraCartItems.length}`);
        if (goal.lowestDelivery) rules.push("Choose the cheapest delivery window.");
        if (goal.lowestTotalCheckout) rules.push("Choose the lower total-cost checkout option.");
        return `
          <h2>Goal: ${goal.title}</h2>
          <p>${goal.instructions}</p>
          <p><strong>Clinical skills:</strong> ${goal.skills.join(", ")}</p>
          <p><strong>Required:</strong> ${requiredDescription(goal)}</p>
          ${rules.length ? `<p><strong>Rules:</strong> ${rules.join(" ")}</p>` : ""}
        `;
      }
      function requiredDescription(goal) {
        if (goal.required) return goal.required.join(", ");
        if (goal.requiredCategories) return Object.entries(goal.requiredCategories).map(([cat, count]) => `${count} ${cat}`).join(", ");
        if (goal.requiredCount) return `${goal.requiredCount} grocery items`;
        return "not selected for this activity";
      }
      function renderShop() {
        document.querySelector("#taskStrip").innerHTML = taskCardHtml();
        const store = selectedStore();
        const marketHeader = document.querySelector("#marketHeader");
        marketHeader.className = `market-header brand-${store.logoClass}`;
        document.querySelector("#marketHeader").innerHTML = `
          <div class="market-store-brand">
            <div class="store-logo ${store.logoClass}" aria-hidden="true">${store.logo}</div>
            <div>
              <span class="market-eyebrow">Deliver or pick up from</span>
              <h2 class="market-title">${store.shortName || store.name}</h2>
            </div>
          </div>
          <div class="store-header-actions">
            <button class="store-change-button" type="button" data-go="store">Change store</button>
            <button class="store-cart-button ${state.justAdded ? "added-feedback" : ""}" type="button" id="cartToggleButton" aria-expanded="${state.cartOpen ? "true" : "false"}" aria-controls="cartPanel" aria-label="Open cart">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h2l2.2 10.2a2 2 0 0 0 2 1.6h6.9a2 2 0 0 0 1.9-1.4L21 8H7.1"/><path d="M10 21a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/><path d="M18 21a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/></svg>
              <span class="store-cart-count">${cartCount()}</span>
              <strong>${money(finalTotal())}</strong>
            </button>
          </div>
        `;
        document.querySelector("#categoryRow").innerHTML = categories.map((cat) => `<button class="chip ${state.category === cat ? "active" : ""}" type="button" data-category="${cat}"><span class="cat-icon">${categoryIcon(cat)}</span><span>${cat === "Meat & Protein" ? "Protein" : cat === "Personal Care" ? "Care" : cat}</span></button>`).join("");
        const query = state.search.trim().toLowerCase();
        const goal = activeGoal();
        let visible = products.filter((product) => state.category === "All" || product.category === state.category);
        if (query) {
          visible = visible.filter((product) => [product.name, product.size, product.category, ...(product.tags || [])].join(" ").toLowerCase().includes(query));
        }
        document.querySelector("#noResults").classList.toggle("hidden", visible.length > 0);
        document.querySelector("#productCountLabel").textContent = `${visible.length} items shown`;
        document.querySelector("#productGrid").innerHTML = visible.map((product) => {
          const out = isGoalOutOfStock(product, goal);
          const storeUnavailable = !storeProductAvailable(product, store);
          const adjustedPrice = storePrice(product, store);
          const justAdded = state.justAdded === product.id;
          return `
            <article class="product-card ${justAdded ? "added-feedback" : ""} ${storeUnavailable ? "store-unavailable" : ""}">
              <div class="product-art"><img src="${productImage(product)}" alt="" aria-hidden="true" /></div>
              <div class="meta-row">
                <span class="pill">${product.category}</span>
                ${product.coupon ? `<span class="pill good">Coupon ${money(product.coupon)} off</span>` : ""}
                ${product.allergen ? `<span class="pill danger">${product.allergen}</span>` : ""}
                ${out ? `<span class="pill warn">Out of stock</span>` : ""}
                ${storeUnavailable ? `<span class="pill muted">Not available in this store</span>` : ""}
              </div>
              <p class="product-title">${product.name}</p>
              <p>${product.size}</p>
              <div class="product-footer"><span class="price">${storeUnavailable ? "Unavailable" : money(adjustedPrice)}</span><button class="market-add ${out ? "replacement" : ""} ${storeUnavailable ? "unavailable" : ""} ${justAdded ? "added-feedback" : ""}" type="button" data-add="${product.id}" aria-label="${storeUnavailable ? product.name + " is not available in this store" : out ? "Choose replacement for " + product.name : "Add " + product.name}" ${storeUnavailable ? "disabled" : ""}>${justAdded ? "Added" : storeUnavailable ? "Not available" : out ? "Replace" : "+"}</button></div>
            </article>
          `;
        }).join("");
        document.querySelector("#mobileCartCta").innerHTML = "";
        renderCart();
      }
      function renderCart() {
        const goal = activeGoal();
        const over = goal.budget && state.settings.budget && finalTotal() > goal.budget;
        const cartPanel = document.querySelector("#cartPanel");
        cartPanel.classList.toggle("open", state.cartOpen);
        const cartHtml = state.cart.length ? state.cart.map((line) => {
          const product = productById(line.id);
          return `
            <div class="cart-item">
              <div class="cart-item-top"><strong>${product.name}</strong><span>${money(storePrice(product))} each</span></div>
              <div class="qty-row">
                <button class="btn-secondary" type="button" data-dec="${line.id}">-</button>
                <span>Quantity ${line.qty}</span>
                <button class="btn-secondary" type="button" data-inc="${line.id}">+</button>
                <button class="btn-danger" type="button" data-remove="${line.id}">Remove</button>
              </div>
              <span><strong>Item subtotal:</strong> ${money(linePrice(line))}</span>
            </div>
          `;
        }).join("") : `<div class="empty-state">Cart is empty.</div>`;
        cartPanel.innerHTML = `
          <div class="cart-header">
            <h2>Cart</h2>
            <div class="cart-header-actions">
              <span class="cart-count ${state.justAdded ? "added-feedback" : ""}">${cartCount()}</span>
              <button class="cart-close-button" type="button" id="cartCloseButton" aria-label="Close cart">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6 6 18"/></svg>
              </button>
            </div>
          </div>
          <div class="cart-scroll-area">
            ${goal.budget && state.settings.budget ? `<p class="${over ? "over-budget" : ""}"><strong>Budget:</strong> ${money(goal.budget)}<br><strong>Current Total:</strong> ${money(finalTotal())}</p>` : ""}
            ${over ? `<p class="over-budget">You are over budget. Remove or change an item before checkout.</p>` : ""}
            <div class="cart-items">${cartHtml}</div>
            <div class="money-table">
              ${moneyRows()}
            </div>
          </div>
          <div class="toolbar">
            <button class="btn-primary" type="button" id="cartContinueButton">Checkout cart • ${money(finalTotal())}</button>
          </div>
        `;
      }
      function moneyRows() {
        return `
          <div class="money-row"><span>Subtotal</span><strong>${money(subtotal())}</strong></div>
          <div class="money-row"><span>Coupons</span><strong>-${money(couponTotal())}</strong></div>
          <div class="money-row"><span>Estimated tax</span><strong>${money(tax())}</strong></div>
          <div class="money-row"><span>Pickup/delivery fee</span><strong>${money(serviceFee())}</strong></div>
          <div class="money-row"><span>Tip</span><strong>${money(Number(state.tip || 0))}</strong></div>
          <div class="money-row"><span>Final total</span><strong>${money(finalTotal())}</strong></div>
        `;
      }
      function orderSummaryHtml(title = "Order Review", isOpen = false) {
        return `
          <details class="panel order-review-panel" ${isOpen ? "open" : ""}>
            <summary>
              <span>${title}</span>
              <strong>${cartCount()} item${cartCount() === 1 ? "" : "s"} • ${money(finalTotal())}</strong>
            </summary>
            <div class="summary-list">
              ${state.cart.map((line) => {
                const product = productById(line.id);
                return `<div><strong>${product.name}</strong><span>${line.qty} at ${money(storePrice(product))} = ${money(linePrice(line))}</span></div>`;
              }).join("") || `<div><strong>No items</strong><span>Cart is empty.</span></div>`}
            </div>
            <div class="money-table">${moneyRows()}</div>
          </details>
        `;
      }
      function renderFulfillment() {
        const store = selectedStore();
        const methods = [
          { type: "pickup", title: "Pickup", windows: store.pickupWindows, fee: 0, available: store.pickup },
          { type: "delivery", title: "Delivery", windows: store.deliveryWindows, fee: state.settings.fees ? store.deliveryFee : 0, available: store.delivery }
        ];
        document.querySelector("#fulfillmentGrid").innerHTML = methods.map((method) => `
          <article class="choice-card ${state.fulfillment === method.type ? "selected" : ""}">
            <h3>${method.title}</h3>
            <p>${method.type === "delivery" ? "Delivery practice from the selected store." : "Pick up at the selected store."}</p>
            ${method.available ? "" : `<p><strong>Not available at this store</strong></p>`}
            <label class="field fulfillment-field">Time window
              <select data-window-for="${method.type}" ${method.available ? "" : "disabled"}>
                <option value="">Choose a window</option>
                ${method.windows.map((window) => `<option value="${window}" ${state.fulfillment === method.type && state.window === window ? "selected" : ""}>${method.type === "delivery" ? deliveryWindowLabel(window, store) : window}</option>`).join("")}
              </select>
            </label>
            ${method.type === "delivery" ? `<label class="field fulfillment-field">Tip <select id="tipSelect"><option value="0">No tip</option><option value="2">2.00</option><option value="4">4.00</option><option value="6">6.00</option></select></label>` : `<div class="fulfillment-note"><strong>Tip</strong><span>No tip needed for pickup.</span></div>`}
            <button class="btn-primary" type="button" data-fulfillment="${method.type}" ${method.available ? "" : "disabled"}>Choose ${method.title}</button>
          </article>
        `).join("");
        document.querySelector("#fulfillmentReview").innerHTML = orderSummaryHtml("Review Order");
        const tipSelect = document.querySelector("#tipSelect");
        if (tipSelect) tipSelect.value = String(state.tip || 0);
      }
      function renderCheckout() {
        document.querySelector("#checkoutSummary").innerHTML = `
          <div class="checkout-grid">
            ${orderSummaryHtml("Order Summary", true)}
            <div class="panel">
              <h3>Payment and Total</h3>
              <p><strong>Payment method:</strong> Card ending in 1234</p>
              <p><strong>Method:</strong> ${state.fulfillment || "not selected"} ${state.window ? "- " + state.window : ""}</p>
            </div>
          </div>
        `;
      }
      function addToCart(id) {
        const product = productById(id);
        const goal = activeGoal();
        const out = isGoalOutOfStock(product, goal);
        const storeUnavailable = !storeProductAvailable(product);
        if (storeUnavailable) return;
        if (out) {
          const reason = "is out of stock";
          const replacements = products.filter((item) => item.category === product.category && item.id !== product.id && storeProductAvailable(item) && item.tags.some((tag) => product.tags.includes(tag))).slice(0, 3);
          const selected = window.prompt(`"${product.name}" ${reason}. Type replacement number: ` + replacements.map((item, index) => `${index + 1}. ${item.name} ${money(storePrice(item))}`).join(" "));
          const replacement = replacements[Number(selected) - 1];
          if (replacement) {
            state.substitutions.push(`${product.name} replaced with ${replacement.name}`);
            addToCart(replacement.id);
          }
          return;
        }
        const line = cartLine(id);
        if (line) line.qty += 1;
        else state.cart.push({ id, qty: 1 });
        state.justAdded = id;
        state.cartOpen = true;
        renderAll();
        window.clearTimeout(state.justAddedTimer);
        state.justAddedTimer = window.setTimeout(() => {
          if (state.justAdded === id) {
            state.justAdded = "";
            if (state.view === "shop") renderShop();
          }
        }, 850);
      }
      function seedExtraItem() {
        const goal = activeGoal();
        const extraItems = goal.extraCartItems || (goal.extraCartItem ? [goal.extraCartItem] : []);
        extraItems.forEach((extraItem) => {
          const product = products.find((item) => item.name.toLowerCase() === extraItem || item.tags.includes(extraItem));
          if (product && !cartLine(product.id)) addToCart(product.id);
        });
      }
      function evaluate() {
        const goal = activeGoal();
        const cartProducts = cartProductsExpanded();
        const atLeastGoal = /\b(at least|minimum)\b/i.test(goal.instructions || "");
        let correct = [];
        let missed = [];
        let extra = [];
        if (goal.required) {
          const remaining = [...cartProducts];
          goal.required.forEach((req) => {
            const matchIndex = remaining.findIndex((product) => productMatchesRequirement(product, req));
            if (matchIndex >= 0) {
              correct.push(req);
              remaining.splice(matchIndex, 1);
            }
            else missed.push(req);
          });
          extra = remaining.map((product) => product.name);
        } else if (goal.requiredCategories) {
          Object.entries(goal.requiredCategories).forEach(([cat, count]) => {
            const got = cartProducts.filter((product) => product.category === cat).length;
            if (got >= count) correct.push(`${count} ${cat}`);
            else missed.push(`${count - got} more ${cat}`);
            if (!atLeastGoal && got > count) extra.push(`${got - count} extra ${cat}`);
          });
          if (!atLeastGoal) {
            const expectedCategories = Object.keys(goal.requiredCategories);
            cartProducts
              .filter((product) => !expectedCategories.includes(product.category))
              .forEach((product) => extra.push(product.name));
          }
          if (goal.requiredCount && cartProducts.length < goal.requiredCount) missed.push(`${goal.requiredCount - cartProducts.length} more total item${goal.requiredCount - cartProducts.length === 1 ? "" : "s"}`);
        } else if (goal.requiredCount) {
          if (cartProducts.length >= goal.requiredCount) correct.push(`${Math.min(cartProducts.length, goal.requiredCount)} of ${goal.requiredCount} items`);
          if (cartProducts.length < goal.requiredCount) missed.push(`${goal.requiredCount - cartProducts.length} more items`);
          if (!atLeastGoal && cartProducts.length > goal.requiredCount) extra.push(`${cartProducts.length - goal.requiredCount} extra item${cartProducts.length - goal.requiredCount === 1 ? "" : "s"}`);
        }
        const avoidErrors = goal.avoid ? cartProducts.filter((product) => product.tags.includes(goal.avoid)).map((product) => product.name) : [];
        const unavailableErrors = cartProducts.filter((product) => !storeProductAvailable(product)).map((product) => `${product.name} not available at ${selectedStore().shortName || selectedStore().name}`);
        const outOfStockErrors = goal.outOfStock ? cartProducts.filter((product) => isGoalOutOfStock(product, goal)).map((product) => `${product.name} was out of stock`) : [];
        const extraTargets = goal.extraCartItems || (goal.extraCartItem ? [goal.extraCartItem] : []);
        const seededExtraStillPresent = extraTargets.length ? cartProducts.filter((product) => extraTargets.some((extraItem) => product.name.toLowerCase() === extraItem || product.tags.includes(extraItem))).map((product) => `${product.name} should be removed`) : [];
        extra = [...extra, ...avoidErrors.map((name) => `${name} restricted`)];
        extra = [...extra, ...seededExtraStillPresent];
        const hasCheckoutSelection = Boolean(state.fulfillment && state.window);
        const exactCheckoutRequired = goal.checkout === "pickup" || goal.checkout === "delivery";
        const cheapestDeliveryOk = !goal.lowestDelivery || (state.fulfillment === "delivery" && state.window === selectedStore().lowFeeWindow);
        const lowestTotalOk = !goal.lowestTotalCheckout || state.fulfillment === "pickup";
        const checkoutOk = (exactCheckoutRequired ? state.fulfillment === goal.checkout && Boolean(state.window) : hasCheckoutSelection) && cheapestDeliveryOk && lowestTotalOk;
        const budgetOk = !goal.budget || !state.settings.budget || finalTotal() <= goal.budget;
        const couponItemsUsed = state.cart.reduce((count, line) => {
          const product = productById(line.id);
          return count + (product && product.coupon ? line.qty : 0);
        }, 0);
        const neededCoupons = goal.couponRequiredCount || (goal.couponRequired ? 1 : 0);
        const couponOk = neededCoupons === 0 || couponItemsUsed >= neededCoupons;
        const needsSubstitution = ["replacement", "replacements"].includes(goal.checkout) || /substitution/i.test(goal.title + " " + goal.instructions);
        const neededSubstitutions = goal.minSubstitutions || (needsSubstitution ? 1 : 0);
        const substitutionOk = neededSubstitutions === 0 || state.substitutions.length >= neededSubstitutions;
        const availabilityOk = unavailableErrors.length === 0 && outOfStockErrors.length === 0;
        const itemOk = missed.length === 0 && extra.length === 0 && avoidErrors.length === 0;
        const ruleChecks = [
          { label: "Required items/categories", ok: missed.length === 0, detail: missed.length ? `Missing: ${missed.join(", ")}` : "All required selections present" },
          { label: "No extra or restricted items", ok: extra.length === 0, detail: extra.length ? extra.join(", ") : "No unnecessary or restricted items" },
          { label: "Pickup/delivery selection", ok: checkoutOk, detail: checkoutOk ? `${state.fulfillment} ${state.window}` : goal.lowestDelivery ? `Expected delivery with the cheapest available window: ${selectedStore().lowFeeWindow}` : goal.lowestTotalCheckout ? "Expected the lower total-cost option after comparing pickup and delivery fees" : exactCheckoutRequired ? `Expected ${goal.checkout} with a selected time window` : "Pickup or delivery and a time window must be selected" },
          { label: "Budget accuracy", ok: budgetOk, detail: budgetOk ? budgetStatus() : budgetStatus() },
          { label: "Coupon rule", ok: couponOk, detail: neededCoupons ? (couponOk ? `${couponItemsUsed}/${neededCoupons} required coupon item${neededCoupons === 1 ? "" : "s"} used` : `Need ${neededCoupons} coupon item${neededCoupons === 1 ? "" : "s"}; used ${couponItemsUsed}`) : "Not required" },
          { label: "Substitution rule", ok: substitutionOk, detail: neededSubstitutions ? (substitutionOk ? `${state.substitutions.length}/${neededSubstitutions} required substitution${neededSubstitutions === 1 ? "" : "s"} completed` : `Need ${neededSubstitutions} substitution${neededSubstitutions === 1 ? "" : "s"}; completed ${state.substitutions.length}`) : "Not required" },
          { label: "Store availability", ok: availabilityOk, detail: [...unavailableErrors, ...outOfStockErrors].join(", ") || "All cart items are available/valid" }
        ];
        const passedRules = ruleChecks.filter((rule) => rule.ok).length;
        const complete = ruleChecks.every((rule) => rule.ok);
        const accuracyScore = Math.round((passedRules / ruleChecks.length) * 100);
        const blockingIssues = ruleChecks.filter((rule) => !rule.ok).map((rule) => `${rule.label}: ${rule.detail}`);
        return { correct, missed, extra, avoidErrors, checkoutOk, budgetOk, couponOk, substitutionOk, availabilityOk, itemOk, ruleChecks, blockingIssues, accuracyScore, complete, couponItemsUsed, neededCoupons, neededSubstitutions };
      }
      function completionTime() {
        const seconds = Math.max(1, Math.round((Date.now() - state.startTime) / 1000));
        const minutes = Math.floor(seconds / 60);
        const left = seconds % 60;
        return `${minutes} min ${left} sec`;
      }
      function renderSummary() {
        const evalData = evaluate();
        const goal = activeGoal();
        const result = evalData.complete ? "Successful - all task rules met" : evalData.correct.length ? "Not fully successful - review errors below" : "Not successful - required selections incomplete";
        const next = evalData.complete ? "progress to a higher complexity goal with added price comparison or substitutions" : "repeat a similar goal with focused support for cart review and checkout accuracy";
        state.nextStep = next;
        const rows = [
          ["Goal", goal.title],
          ["Result", result],
          ["Task Accuracy", `${evalData.accuracyScore}% (${evalData.ruleChecks.filter((rule) => rule.ok).length}/${evalData.ruleChecks.length} rules met)`],
          ["Rules Met", evalData.ruleChecks.filter((rule) => rule.ok).map((rule) => rule.label).join(", ") || "none"],
          ["Rules Needing Review", evalData.blockingIssues.join("; ") || "none"],
          ["Difficulty", goal.difficulty],
          ["Items Correct", evalData.correct.join(", ") || "not formally recorded"],
          ["Items Missed", evalData.missed.join(", ") || "none"],
          ["Extra/Unnecessary Items", evalData.extra.join(", ") || "none"],
          ["Budget", budgetStatus()],
          ["Final Total", money(finalTotal())],
          ["Pickup/Delivery Accuracy", evalData.checkoutOk ? "accurate" : "not aligned with selected goal or no time window selected"],
          ["Substitution Decision", state.substitutions.join("; ") || "not applicable"],
          ["Coupon Use", evalData.neededCoupons ? (evalData.couponOk ? `${evalData.couponItemsUsed}/${evalData.neededCoupons} required coupon item${evalData.neededCoupons === 1 ? "" : "s"} used` : `${evalData.couponItemsUsed}/${evalData.neededCoupons} required coupon item${evalData.neededCoupons === 1 ? "" : "s"} used`) : "not applicable"],
          ["Hints Used", String(state.hints)],
          ["Cart Corrections", String(state.corrections)],
          ["Completion Time", completionTime()],
          ["Clinical Skills", goal.skills.join(", ")],
          ["Suggested Next Step", next]
        ];
        document.querySelector("#performanceSummary").innerHTML = rows.map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join("");
        generateSoap();
      }
      function soapData() {
        const evalData = evaluate();
        const goal = activeGoal();
        const completionStatus = evalData.complete ? "completed successfully with all task rules met" : evalData.correct.length ? "did not fully meet task accuracy criteria" : "did not complete the required task accurately";
        return {
          goalTitle: goal.title,
          difficulty: goal.difficulty,
          completionStatus,
          accuracyScore: `${evalData.accuracyScore}%`,
          rulesMet: `${evalData.ruleChecks.filter((rule) => rule.ok).length}/${evalData.ruleChecks.length}`,
          rulesNeedingReview: evalData.blockingIssues.join("; ") || "none",
          skills: goal.skills.join(", "),
          itemsCorrect: evalData.correct.join(", ") || "not formally recorded",
          itemsMissed: evalData.missed.join(", ") || "none",
          extraItems: evalData.extra.join(", ") || "none",
          budgetStatus: budgetStatus(),
          finalTotal: money(finalTotal()),
          checkoutAccuracy: evalData.checkoutOk ? "accurate" : "not aligned with selected goal or no time window selected",
          substitutionAccuracy: evalData.substitutionOk ? (state.substitutions.join("; ") || "not required") : "required substitution was not completed",
          couponAccuracy: evalData.neededCoupons ? `${evalData.couponItemsUsed}/${evalData.neededCoupons} required coupon item${evalData.neededCoupons === 1 ? "" : "s"} used` : "not required",
          hintsUsed: String(state.hints),
          completionTime: completionTime(),
          corrections: String(state.corrections),
          nextStep: state.nextStep || "continued graded online grocery shopping practice"
        };
      }
      function generateSoap() {
        const data = soapData();
        document.querySelector("#soapOutput").value = `Patient participated in the Instant Grocery activity targeting ${data.skills}. Patient ${data.completionStatus} for the ${data.difficulty.toLowerCase()} level goal, "${data.goalTitle}," in ${data.completionTime}. Task accuracy was ${data.accuracyScore}, with ${data.rulesMet} required rule areas met. Correct selections included ${data.itemsCorrect}; missed items included ${data.itemsMissed}; extra or restricted items included ${data.extraItems}. Rules needing review: ${data.rulesNeedingReview}. Budget performance was ${data.budgetStatus}, with a final simulated total of ${data.finalTotal}. Pickup/delivery selection was ${data.checkoutAccuracy}. Coupon performance was ${data.couponAccuracy}. Substitution performance was ${data.substitutionAccuracy}. Patient used ${data.hintsUsed} hint(s) and made ${data.corrections} cart correction(s). Recommend ${data.nextStep}.`;
      }
      function renderSettings() {
        const difficultySelect = document.querySelector("#difficultySelect");
        difficultySelect.innerHTML = ["Easy", "Moderate", "Hard", "Complex"].map((item) => `<option ${activeGoal().difficulty === item ? "selected" : ""}>${item}</option>`).join("");
        renderGoalSelect();
        document.querySelector("#storeChoiceCountSelect").value = String(state.settings.storeChoiceCount || 1);
        ["budget", "substitution", "fees", "coupons", "hints"].forEach((name) => {
          const key = name === "substitution" ? "substitutions" : name;
          const el = document.querySelector("#" + name + "Toggle");
          if (el) el.checked = state.settings[key];
        });
        document.querySelector("#leftScanToggle").checked = state.settings.leftScan;
        document.querySelector("#aphasiaToggle").checked = state.settings.aphasia;
        document.querySelector("#lowVisionToggle").checked = state.settings.lowVision;
      }
      function renderGoalSelect() {
        const difficulty = document.querySelector("#difficultySelect").value || activeGoal().difficulty;
        document.querySelector("#goalSelect").innerHTML = goals.filter((goal) => goal.difficulty === difficulty).map((goal) => `<option value="${goal.id}" ${goal.id === activeGoal().id ? "selected" : ""}>${goal.title}</option>`).join("");
      }
      function renderAll() {
        document.body.classList.toggle("home-mode", state.view === "home");
        document.body.classList.toggle("activity-mode", state.view !== "home");
        document.querySelector("#brandTitle").textContent = state.view === "home" ? "STRIVE" : "Instant Grocery";
        document.querySelector("#brandSubtitle").textContent = state.view === "home" ? "Independence" : "Practice grocery delivery";
        renderGoals();
        renderStores();
        if (!document.querySelector("#shopView").classList.contains("hidden")) renderShop();
        if (!document.querySelector("#deliveryView").classList.contains("hidden")) renderFulfillment();
        if (!document.querySelector("#checkoutView").classList.contains("hidden")) renderCheckout();
        if (!document.querySelector("#summaryView").classList.contains("hidden")) renderSummary();
        document.body.classList.toggle("left-scan", state.settings.leftScan);
        document.body.classList.toggle("aphasia", state.settings.aphasia);
        document.body.classList.toggle("low-vision", state.settings.lowVision);
      }
      function installBackToHomeGuard() {
        if (!window.history || !window.history.pushState) return;
        const guardState = { instantGroceryBackGuard: true };
        window.history.replaceState({ instantGroceryHome: true }, "", window.location.href);
        window.history.pushState(guardState, "", window.location.href);
        window.addEventListener("popstate", () => {
          setView("home");
          window.history.pushState(guardState, "", window.location.href);
        });
      }
      function startGoal(goalId) {
        state.goal = goals.find((goal) => goal.id === Number(goalId));
        state.cart = [];
        state.fulfillment = "";
        state.window = "";
        state.tip = 0;
        state.hints = 0;
        state.corrections = 0;
        state.substitutions = [];
        state.startTime = Date.now();
        seedExtraItem();
        setView("store");
      }
      document.addEventListener("click", (event) => {
        const goalCard = event.target.closest(".goal-card[data-start-goal]");
        if (goalCard) {
          startGoal(goalCard.dataset.startGoal);
          return;
        }
        const button = event.target.closest("button");
        if (!button) return;
        if (button.id === "openFilterButton") {
          document.querySelector("#taskFilterSelect").value = state.filter;
          document.querySelector("#filterModal").classList.add("open");
        }
        if (button.id === "applyFilterButton") {
          state.filter = document.querySelector("#taskFilterSelect").value;
          document.querySelector("#filterModal").classList.remove("open");
          renderGoals();
        }
        if (button.id === "clearFilterButton") {
          state.filter = "All";
          document.querySelector("#taskFilterSelect").value = "All";
          document.querySelector("#filterModal").classList.remove("open");
          renderGoals();
        }
        if (button.dataset.store) {
          state.store = stores[Number(button.dataset.store)];
          if ((state.fulfillment === "delivery" && !state.store.delivery) || (state.fulfillment === "pickup" && !state.store.pickup)) {
            state.fulfillment = "";
            state.window = "";
            state.tip = 0;
          }
          setView("shop");
        }
        if (button.dataset.category) { state.category = button.dataset.category; renderShop(); }
        if (button.id === "cartToggleButton") {
          state.cartOpen = !state.cartOpen;
          renderShop();
        }
        if (button.id === "cartCloseButton") {
          state.cartOpen = false;
          renderShop();
        }
        if (button.dataset.add) addToCart(button.dataset.add);
        if (button.dataset.inc) { cartLine(button.dataset.inc).qty += 1; renderShop(); }
        if (button.dataset.dec) {
          const line = cartLine(button.dataset.dec);
          if (line) line.qty -= 1;
          if (line && line.qty <= 0) state.cart = state.cart.filter((item) => item.id !== button.dataset.dec);
          state.corrections += 1;
          renderShop();
        }
        if (button.dataset.remove) {
          state.cart = state.cart.filter((item) => item.id !== button.dataset.remove);
          state.corrections += 1;
          renderShop();
        }
        if (button.id === "cartContinueButton") setView("delivery");
        if (button.id === "cartContinueButtonMobile") { state.cartOpen = true; renderShop(); }
        if (button.id === "mobileViewCartButton") { state.cartOpen = true; renderShop(); }
        if (button.dataset.fulfillment) { state.fulfillment = button.dataset.fulfillment; renderFulfillment(); }
        if (button.id === "toCheckoutButton") {
          if (!state.fulfillment || !state.window) { alert("Choose pickup or delivery and select a time window before checkout."); return; }
          setView("checkout");
        }
        if (button.id === "confirmButton") setView("summary");
        if (button.dataset.go) setView(button.dataset.go);
        if (button.id === "homeButton") setView("home");
        if (button.id === "settingsButton" || button.id === "settingsButtonHero") { renderSettings(); document.querySelector("#settingsModal").classList.add("open"); }
        if (button.id === "taskButtonHeader" || button.id === "taskButtonInline" || button.id === "taskButtonMobile" || button.id === "taskButtonHome") { document.querySelector("#taskModalBody").innerHTML = taskCardHtml(); document.querySelector("#taskModal").classList.add("open"); }
        if (button.id === "hintButton") {
          if (!state.settings.hints) return;
          state.hints += 1;
          const storeHint = stores.slice(0, Math.max(1, Math.min(4, Number(state.settings.storeChoiceCount) || 1)))
            .map((store) => `${store.name}: ${store.profile}`)
            .join("\n");
          alert(`Hint: Start by checking the task card, then compare your cart to the required items and budget.\n\nStore differences:\n${storeHint}`);
          renderAll();
        }
        if (button.dataset.closeModal !== undefined) button.closest(".modal-backdrop").classList.remove("open");
        if (button.id === "clearSearchButton") { state.search = ""; document.querySelector("#searchInput").value = ""; renderShop(); }
        if (button.id === "applySettingsButton") {
          const selectedGoal = goals.find((goal) => goal.id === Number(document.querySelector("#goalSelect").value));
          if (selectedGoal) state.goal = selectedGoal;
          state.settings.budget = document.querySelector("#budgetToggle").checked;
          state.settings.substitutions = document.querySelector("#substitutionToggle").checked;
          state.settings.fees = document.querySelector("#feesToggle").checked;
          state.settings.coupons = document.querySelector("#couponsToggle").checked;
          state.settings.hints = document.querySelector("#hintsToggle").checked;
          state.settings.storeChoiceCount = Number(document.querySelector("#storeChoiceCountSelect").value) || 1;
          state.settings.leftScan = document.querySelector("#leftScanToggle").checked;
          state.settings.aphasia = document.querySelector("#aphasiaToggle").checked;
          state.settings.lowVision = document.querySelector("#lowVisionToggle").checked;
          if (!stores.slice(0, state.settings.storeChoiceCount).includes(state.store)) {
            state.store = stores[0];
          }
          document.querySelector("#settingsModal").classList.remove("open");
          renderAll();
        }
        if (button.id === "generateSoapButton") generateSoap();
        if (button.id === "copySoapButton") navigator.clipboard.writeText(document.querySelector("#soapOutput").value || "");
      });
      document.addEventListener("keydown", (event) => {
        const goalCard = event.target.closest(".goal-card[data-start-goal]");
        if (!goalCard) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          startGoal(goalCard.dataset.startGoal);
        }
      });
      document.addEventListener("change", (event) => {
        if (event.target.id === "difficultySelect") renderGoalSelect();
        if (event.target.dataset.windowFor) {
          state.fulfillment = event.target.dataset.windowFor;
          state.window = event.target.value;
          renderFulfillment();
        }
        if (event.target.id === "tipSelect") { state.tip = Number(event.target.value); renderFulfillment(); }
        if (event.target.id === "reviewedCheckbox") document.querySelector("#confirmButton").disabled = !event.target.checked;
      });
      document.querySelector("#searchInput").addEventListener("input", (event) => {
        state.search = event.target.value;
        renderShop();
      });
      document.querySelectorAll(".header-search input, .storefront-search-row input").forEach((input) => {
        input.addEventListener("input", (event) => {
          state.search = event.target.value;
          const shopSearch = document.querySelector("#searchInput");
          if (shopSearch) shopSearch.value = state.search;
          if (state.view === "shop") renderShop();
        });
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            if (state.view === "home") setView("store");
          }
        });
      });
      installBackToHomeGuard();
      renderAll();
