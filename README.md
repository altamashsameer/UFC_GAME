# UFC_GAME
Experience a high-stakes MMA career path! Face the Coaches, master the "Cage" reaction test, and unlock 64+ unique fighter outcomes. Think you're a fanatic? Take the randomized Nerd Quiz to prove your status.

MVPTable of Contents

* Project Overview
* Tech Stack
* Game Design & User Experience (UX)
* Core Working Logic & Mathematical Architecture
* Technical Challenges & Solutions
* The "Ali Secret" Easter Egg
* Retention Strategy: The Nerd Quiz Loop
* Legal Disclaimer

Project Overview

UFC Gauntlet is a web-based "Fighter Generator" and "Reaction Test" designed as a Lean MVP. The project simulates a fighter's journey through elite coaching camps, culminating in a high-pressure "Cage" performance test to determine their ultimate UFC persona.

Tech Stack

HTML5: Semantic structure for a multi-room "Single Page Application" (SPA) feel.CSS3: Custom UI/UX featuring radial gradients, aggressive typography (Oswald), and keyframe animations for "Juice."JavaScript (ES6): Custom logic for state management, randomized data injection, and mathematical permutations.

Game Design

The design follows a Mobile-First approach, utilizing high-contrast colors (Octagon Red, Championship Gold) to mimic the UFC’s broadcast branding."Juice" & Feedback: Every screen transition utilizes fadeIn animations, and the "Cage" targets use scale-pulsing to provide visual cues to the player.Dynamic UI: Buttons are generated on the fly, ensuring that the interface is never cluttered with irrelevant options.

Working Logic

The 64-Fighter AlgorithmThe heart of the game is a personality-to-fighter mapping system. Instead of random assignment, the game uses Permutations and Combinations to create a specific identity for the player.The System: There are 3 Coaches, each representing a different psychological pillar. Each coach offers 4 possible responses.The Math: Using a 3-variable coordinate system where n = 4 options and k = 3 coaches, we achieve:4 x 4 x 4 = 64 unique outcomes. Mapping: Each choice is assigned a value (1 to 4). These are concatenated into a string (e.g., "124"), which acts as a unique ID to pull a specific Elite Fighter from the data library.

Challenges & SolutionsThe Sequence Challenge

During development, we faced an issue where randomized questions were causing "logic drift"—the user’s choices weren't consistently mapping to the correct fighter IDs because the sequence of questions was too chaotic.The Solution:We decoupled the Question Bank from the Input Value. We implemented a "Fixed-Section" logic where, regardless of which random question is pulled for a coach, the index of the chosen answer (1, 2, 3, or 4) always maps back to the specific character trait needed for the permutation. This allowed for high replayability (different questions) without breaking the underlying mathematical mapping.

The "Ali Secret" Easter Egg

To reward player curiosity, we implemented a hidden path at "The Crossroads." * While the main CTA (Call to Action) pushes players toward Dana White’s office, a small, low-contrast "Back" button is hidden in the corner.Clicking this triggers the Ali Abdelaziz Secret Path, a high-risk/high-reward route that bypasses standard logic to unlock legendary or "Money Fight" icons like Brock Lesnar or Jake Paul based on performance.

Retention Strategy

The Nerd Quiz LoopTo simulate modern mobile game Retention Loops, I implemented a cross-game link at the final result screen.The Nerd Quiz: A 5-question randomized test pulled from a 20-question pool.Cross-Promotion: Once a player finishes the Gauntlet, they are prompted to test their knowledge. This increases "Session Length," a key metric for casual game studios. At the end of the Quiz, the player is looped back to the start of the Gauntlet, creating a circular user journey.

Legal Disclaimer

This is a personal, non-commercial fan-made project. It is developed strictly for portfolio demonstration purposes and is not intended for profit or business use. All trademarks, logos, and fighter likenesses (UFC, athlete names, etc.) are the property of their respective owners. I do not claim any ownership over the UFC brand.

Developer: ALTAMASH SAMEER
email : altamashsameer@gmail.com
