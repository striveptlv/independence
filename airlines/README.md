# STRIVE Airlines

STRIVE Airlines is a standalone flight-booking simulation designed for functional cognitive-rehabilitation practice. It gives patients a safe environment to practice travel planning, visual scanning, sequencing, memory, divided attention, budgeting, passenger-detail entry, error correction, and simulated payment without purchasing a real flight.

## Project files

- `index.html` — complete website, including its CSS and JavaScript
- `logo.png` — STRIVE logo used in the navigation header

No framework, package installation, database, or build process is required.

## Using the activity

1. Open `index.html` in a modern web browser.
2. Use the Settings button on the homepage to choose a default home airport. Las Vegas (LAS) is the initial default.
3. Choose an Easy, Moderate, Hard, or Complex scenario.
4. During the activity, select the information button in the header to review the current task as a bullet list.
5. Complete the search, flight selection, traveler information, review, and simulated payment steps.

The search form initially defaults to tomorrow. Round-trip searches initially show a return date five days later. These are intentionally different from the scenario target dates: the patient must change the fields to February 9, 2027 and, when applicable, February 14, 2027.

## Scenarios

The homepage provides eight activities: two activities at each difficulty level. Task 01, 03, 05, and 07 retain the original goals; Task 02, 04, 06, and 08 provide the additional traveler-count, timed-flight, seat-type, and strategic-seating goals.

### Easy — Two Tickets

- Two travelers
- One-way flight to Seattle (SEA)
- Required departure: February 9, 2027
- Search field initially defaults to tomorrow and must be changed
- Patient reads the first flight details aloud
- Saved practice Visa ending in 4242 is available

### Moderate — Timed Flight

- Two travelers
- Round trip to San Francisco (SFO)
- Required travel dates: February 9–14, 2027
- Required departure time: 12:05 PM
- Saved practice Visa ending in 4242 is available

### Hard — Two Travelers

- Two travelers
- Round trip to Orlando (MCO)
- Required travel dates: February 9–14, 2027
- $600 total budget
- One shared $40 checked bag
- Interactive seat map requiring exactly one aisle and one middle seat
- Auditory divided-attention task
- Saved card is expired; a fictional replacement card is required

### Complex — Independent Trip

- Two travelers
- Round trip to New York (JFK)
- Required travel dates: February 9–14, 2027
- $800 total budget
- Two $35 checked bags
- Nearly full seat map with only two available seats
- One correct pair: seat 8A beside the emergency exit and seat 12F beside the rear restroom
- Planted return-date error that must be corrected
- Saved card is expired; a fictional replacement card is required

## Airport behavior

The homepage Settings panel includes the supported major U.S. airports. The selected airport is saved in the browser and reused as the default starting airport.

If the home airport matches a scenario’s normal destination, STRIVE Airlines automatically substitutes another destination so the departure and arrival airports are never identical:

- SEA changes to SAN
- SFO changes to OAK
- MCO changes to TPA
- JFK changes to BOS

The activity can also request the device’s location and choose the closest airport from its included major-airport list. Location permission is optional.

## Simulated payment

This website does not process payments.

- Easy and Moderate provide a saved fictional Visa ending in 4242.
- Hard and Complex show an expired saved card and require another fictional card entry.
- Replacement-card fields are validated only inside the current page.
- Card details are not saved, uploaded, or transmitted.

Use fictional information only during practice.

## Privacy and safety

- No real flight is booked.
- No payment is submitted.
- Passenger-form information remains in the current browser page.
- The default-airport preference is stored only in the browser’s local storage.
- Device location is used only after the user grants browser permission.

## GitHub Pages

To publish with GitHub Pages:

1. Rename `strive-airlines.html` to `index.html`, or configure a link that points directly to `strive-airlines.html`.
2. Upload the HTML file and `logo.png` to the same repository directory.
3. In the repository settings, enable GitHub Pages for the desired branch and directory.

Keep `logo.png` beside the HTML file so the navigation logo loads correctly.

## Intended use

STRIVE Airlines is an educational and rehabilitation simulation. It is not affiliated with an airline and should not be used to purchase tickets or enter real payment information.
