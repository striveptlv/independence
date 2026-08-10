# STRIVE Airlines

STRIVE Airlines is a standalone flight-booking simulation designed for functional cognitive-rehabilitation practice. It gives patients a safe environment to practice travel planning, visual scanning, sequencing, memory, divided attention, budgeting, passenger-detail entry, error correction, and simulated payment without purchasing a real flight.

## Project files

- `strive-airlines.html` — complete website, including its CSS and JavaScript
- `logo.png` — STRIVE logo used in the navigation header

No framework, package installation, database, or build process is required.

## Using the activity

1. Open `strive-airlines.html` in a modern web browser.
2. Use the Settings button on the homepage to choose a default home airport. Las Vegas (LAS) is the initial default.
3. Choose an Easy, Moderate, Hard, or Complex scenario.
4. During the activity, select the information button in the header to review the current task as a bullet list.
5. Complete the search, flight selection, traveler information, review, and simulated payment steps.

The search form initially defaults to tomorrow. Round-trip searches initially show a return date five days later. These are intentionally different from the scenario target dates: the patient must change the fields to February 9, 2027 and, when applicable, February 14, 2027.

## Scenarios

### Easy — Family Visit

- One traveler
- One-way flight to Seattle (SEA)
- Required departure: February 9, 2027
- Search field initially defaults to tomorrow and must be changed
- Patient reads the first flight details aloud
- Saved practice Visa ending in 4242 is available

### Moderate — Budget Trip

- One traveler
- Round trip to Denver (DEN)
- Required travel dates: February 9–14, 2027
- $450 total budget
- One $35 checked bag
- Compare at least two fares and select free cancellation
- Saved practice Visa ending in 4242 is available

### Hard — Two Travelers

- Two travelers
- Round trip to Orlando (MCO)
- Required travel dates: February 9–14, 2027
- $600 total budget
- One shared $40 checked bag
- Different seat and meal preferences for each traveler
- Auditory divided-attention task
- Saved card is declined; a fictional replacement card is required

### Complex — Independent Trip

- Two travelers
- Round trip to New York (JFK)
- Required travel dates: February 9–14, 2027
- $800 total budget
- Two $35 checked bags
- Compare at least three flights
- Layover calculation and auditory interruption
- Planted return-date error that must be corrected
- Saved card is declined; a fictional replacement card is required

## Airport behavior

The homepage Settings panel includes the supported major U.S. airports. The selected airport is saved in the browser and reused as the default starting airport.

If the home airport matches a scenario’s normal destination, STRIVE Airlines automatically substitutes another destination so the departure and arrival airports are never identical:

- SEA changes to SAN
- DEN changes to SLC
- MCO changes to TPA
- JFK changes to BOS

The activity can also request the device’s location and choose the closest airport from its included major-airport list. Location permission is optional.

## Simulated payment

This website does not process payments.

- Easy and Moderate provide a saved fictional Visa ending in 4242.
- Hard and Complex simulate a declined saved card and require another fictional card entry.
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
