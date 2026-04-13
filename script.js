const questionsBank = {
    trevor: [
        { q: "Most important quality to succeed?", options: ["Grit", "Discipline", "Luck", "Connections"] },
        { q: "Your Spirit Animal?", options: ["Bear", "Lion", "Elephant", "Snake"] },
        { q: "Favorite day-out spot?", options: ["Mountains", "Beach", "Forest", "Road"] },
        { q: "Preferred way to learn?", options: ["Doing", "Watching", "Reading", "Listening"] },
        { q: "Your ideal workspace?", options: ["Minimalist", "Creative", "Busy", "Isolated"] },
        { q: "Favorite Season?", options: ["Rainy", "Summer", "Spring", "Winter"] },
        { q: "Best Era to live in?", options: ["The 90s", "The 2000s", "The 2010s", "Current 2020s"] }
    ],
    javier: [
        { q: "Someone cuts you off in traffic and yells at you. What do you do?", options: ["Ignore them completely", "Laugh and wave sarcastically", "Roll down window and yell back", "Memorize their license plate"] },
        { q: "A massive spider appears on the wall mid-shower. Your move?", options: ["Finish your shower", "Splash it with water", "Punch the wall. It dies today", "Trap it and relocate it"] },
        { q: "A slice of your favorite cheesecake is put in front of you. What happens?", options: ["Eat nothing/Leave it", "Eat a small portion", "Eat the whole slice", "Take it away so no one eats it"] },
        { q: "Stuck behind a slow walker in a narrow hallway. Move?", options: ["Walk at their pace", "Cough/Hum loudly", "Push past them immediately", "Go home; it was meant to be"] },
        { q: "You won $10,000 on a scratch-off. First thing you do?", options: ["Put it in savings", "Plan a massive night out", "Buy something expensive to show off", "Re-invest into a business"] },
        { q: "You walk into a meeting 20 mins late. Everyone stares. You say?", options: ["Blame others/Assistant", "Blame the traffic", "Gaslight: 'We started early?'", "Apologize: 'No excuse'"] },
        { q: "A ticking white box is on your doorstep. What do you do?", options: ["Call authorities immediately", "Record opening it for social media", "Open it right there", "Move it to the backyard and watch"] }
    ],
    eugene: [
        { q: "You pass the person in 2nd place during a race. What place are you in?", options: ["1st Place", "2nd Place", "3rd Place", "Hunting the leader"] },
        { q: "A doctor gives you 3 pills, one every half hour. How long do they last?", options: ["1.5 Hours", "60 Minutes", "All at once", "Second opinion"] },
        { q: "What weighs more: 100kg of lead or 100kg of feathers?", options: ["Lead", "They are the same", "Feathers (massive bag)", "Whichever I throw harder"] },
        { q: "A boy’s father is the son of my father. Who am I to the boy?", options: ["Grandfather", "Father", "Uncle", "Lone wolf (no family)"] },
        { q: "How many months have 28 days?", options: ["Only February", "I don't count days", "None (Leap year)", "All 12 of them"] },
        { q: "Light as a feather, but the strongest can't hold me long. What am I?", options: ["A bubble", "Breath", "A secret", "Temper"] },
        { q: "Trapped with 3 doors: Fire, Assassins, or a Lion (hasn't eaten in 3 years). Safest?", options: ["Door 1 (Fire)", "Door 3 (Lion)", "Door 2 (Assassins)", "Break a hole in the wall"] },
        { q: "The more of them you take, the more you leave behind. What are they?", options: ["Decisions", "Footsteps", "Souls", "No looking back"] }
    ]
};


const eliteFighters = {
    // 1xx - Stoic, 2xx - Showman, 3xx - Aggressive, 4xx - Strategic
    "111": "Islam Makhachev", "112": "GSP", "113": "Merab Dvalishvili", "114": "Movsar Evloev",
    "121": "Umar Nurmagomedov", "122": "Khabib Nurmagomedov", "123": "Aljamain Sterling", "124": "Belal Muhammad",
    "131": "Magomed Ankalaev", "132": "Jon Jones", "133": "Beneil Dariush", "134": "Arman Tsarukyan",
    "141": "Tatsuro Taira", "142": "Alexandre Pantoja", "143": "Mateusz Gamrot", "144": "Rafael Fiziev",
    "211": "Alex Pereira", "212": "Ilia Topuria", "213": "Joaquin Buckley", "214": "Michel Pereira",
    "221": "Conor McGregor", "222": "Sean O'Malley", "223": "Paddy Pimblett", "224": "Michael Page",
    "231": "Max Holloway", "232": "Anderson Silva", "233": "Kevin Holland", "234": "Yair Rodriguez",
    "241": "Israel Adesanya", "242": "Dominick Cruz", "243": "Brian Ortega", "244": "Brandon Moreno",
    "311": "Francis Ngannou", "312": "Khamzat Chimaev", "313": "Michael Chandler", "314": "Dricus Du Plessis",
    "321": "Justin Gaethje", "322": "Dustin Poirier", "323": "Charles Oliveira", "324": "Diego Lopes",
    "331": "Jiri Prochazka", "332": "Tom Aspinall", "333": "Sean Strickland", "334": "Dan Hooker",
    "341": "Benoit Saint Denis", "342": "Robert Whittaker", "343": "Paulo Costa", "344": "Khaos Williams",
    "411": "Kamaru Usman", "412": "Stipe Miocic", "413": "Colby Covington", "414": "Jan Blachowicz",
    "421": "Shavkat Rakhmonov", "422": "Alexander Volkanovski", "423": "Brandon Royval", "424": "Stephen Thompson",
    "431": "Leon Edwards", "432": "Cory Sandhagen", "433": "Gilbert Burns", "434": "Arnold Allen",
    "441": "Petr Yan", "442": "Henry Cejudo", "443": "Jack Della Maddalena", "444": "Ciryl Gane"
};


const tierB = { 
    "1": "Grant Dawson", "2": "Julianna Peña", "3": "Drew Dober", 
    "4": "Neil Magny", "5": "Bobby Green", "6": "Vicente Luque",
    "7": "Dan Ige", "8": "Tai Tuivasa", "9": "Kevin Holland",
    "10": "Derrick Lewis", "11": "Paul Felder", "12": "Jim Miller",
    "13": "Cub Swanson", "14": "Edson Barboza", "15": "Billy Quarantillo",
    "16": "Matt Brown", "17": "Michael Johnson", "18": "Clay Guida",
    "19": "Joanne Wood", "20": "Giga Chikadze"
};
const tierC = { "1": "Mark Zuckerberg", "2": "Bruce Buffer", "3": "Dana White", "4": "Joe Rogan","5": "Elon Musk","6": "Jon Anik"};


const secretData = {
    legacy: ["CM Punk", "CM Punk", "Anshul Jubli", "Zabit", "Mike Tyson", "Muhammad Ali"],
    money: ["Dillon Danis", "Dillon Danis", "Ben Askren", "Jake Paul", "Brock Lesnar", "Conor McGregor"]
};


// ... [Keep your questionsBank, eliteFighters, tierB, tierC, secretData exactly as you had them] ...

// --- 2. STATE ---
let d1, d2, d3, isSecret = false, secretChoice = null, score = 0;

function showRoom(id) {
    document.querySelectorAll('.room').forEach(r => r.classList.remove('active'));
    document.getElementById(id + '-room').classList.add('active');
}

function displayRandomQuestion(section, nextStepFunc) {
    const bank = questionsBank[section];
    const picked = bank[Math.floor(Math.random() * bank.length)];
    const room = document.getElementById(section + '-room');
    room.querySelector('p').innerText = picked.q;
    const optionsDiv = room.querySelector('.options');
    optionsDiv.innerHTML = ''; 
    picked.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => nextStepFunc(i + 1);
        optionsDiv.appendChild(btn);
    });
}

// Flow logic
function showTrevor() { displayRandomQuestion('trevor', (val) => { d2 = val; showJavier(); }); showRoom('trevor'); }
function showJavier() { displayRandomQuestion('javier', (val) => { d1 = val; showEugene(); }); showRoom('javier'); }
function showEugene() { displayRandomQuestion('eugene', (val) => { d3 = val; showRoom('decision'); }); showRoom('eugene'); }

function goToDana() { isSecret = false; startCage(); }
function goToAliSecret() { isSecret = true; showRoom('ali-secret'); }
function setSecret(choice) { secretChoice = choice; startCage(); }

// Cage Game
function startCage() {
    showRoom('cage');
    score = 0;
    let timeLeft = 4.5;
    const timerEl = document.getElementById('timer');
    const grid = document.getElementById('target-grid');
    grid.innerHTML = '';
    const countdown = setInterval(() => {
        timeLeft -= 0.1;
        timerEl.innerText = timeLeft.toFixed(2);
        if (timeLeft <= 0) { clearInterval(countdown); finishGame(); }
    }, 100);
    for (let i = 0; i < 5; i++) {
        setTimeout(() => { if (timeLeft > 0.3) spawnTarget(grid); }, i * 850);
    }
}

function spawnTarget(grid) {
    const target = document.createElement('button');
    target.className = 'target-btn';
    target.style.gridArea = `s${Math.floor(Math.random() * 9) + 1}`;
    target.onmousedown = (e) => { e.preventDefault(); score++; target.remove(); };
    grid.appendChild(target);
    setTimeout(() => { if(target) target.remove(); }, 800);
}

function finishGame() {
    let finalFighter = "";
    if (isSecret) {
        finalFighter = secretData[secretChoice][score > 5 ? 5 : score];
    } else {
        if (score >= 4) finalFighter = eliteFighters[`${d1}${d2}${d3}`] || "Elite Legend";
        else if (score === 3) {
            const keys = Object.keys(tierB);
            finalFighter = tierB[keys[Math.floor(Math.random() * keys.length)]];
        } else if (score >= 1) {
            const keys = Object.keys(tierC);
            finalFighter = tierC[keys[Math.floor(Math.random() * keys.length)]];
        } else finalFighter = "Hasbulla";
    }

    document.getElementById('fighter-name').innerText = finalFighter.toUpperCase();
    document.getElementById('score-text').innerText = `SCORE: ${score}/5`;
    let rarity = score >= 4 ? "UFC ELITE" : (score === 3 ? "GATE KEEPER" : "NO DAWG IN YOU");
    document.getElementById('rarity-text').innerText = rarity;
    showRoom('result');
}

// Nerd Quiz Logic (as you had it)
// ... [Keep startNerdQuiz, loadQuizQuestion, handleQuizAnswer, showQuizResult] ...

// --- NERD QUIZ DATA ---
const nerdQuestions = [
    { q: "Who holds the record for the most title defenses in UFC history?", a: "Jon Jones", options: ["Anderson Silva", "Jon Jones", "Demetrious Johnson", "GSP"] },
    { q: "Which fighter was the first to hold titles in two weight classes simultaneously?", a: "Conor McGregor", options: ["Daniel Cormier", "Amanda Nunes", "Conor McGregor", "Henry Cejudo"] },
    { q: "What was the main event of UFC 100?", a: "Brock Lesnar vs Frank Mir 2", options: ["GSP vs BJ Penn", "Brock Lesnar vs Frank Mir 2", "Jon Jones vs Shogun", "Anderson Silva vs Chael Sonnen"] },
    { q: "Who has the fastest knockout in UFC history (5 seconds)?", a: "Jorge Masvidal", options: ["Conor McGregor", "Jorge Masvidal", "Duane Ludwig", "Todd Duffee"] },
    { q: "In which city did UFC 1 take place?", a: "Denver", options: ["Las Vegas", "Denver", "Rio de Janeiro", "New York City"] },
    { q: "Who is known as 'The Count'?", a: "Michael Bisping", options: ["Michael Bisping", "Conor McGregor", "Darren Till", "Leon Edwards"] },
    { q: "Which fighter has the most wins in UFC history?", a: "Jim Miller", options: ["Donald Cerrone", "Jim Miller", "Andrei Arlovski", "Demian Maia"] },
    { q: "What is Max Holloway's nickname?", a: "Blessed", options: ["The Best", "Blessed", "The Great", "Rush"] },
    { q: "Who was the first ever UFC Heavyweight Champion?", a: "Mark Coleman", options: ["Randy Couture", "Mark Coleman", "Ken Shamrock", "Dan Severn"] },
    { q: "Which fighter is nicknamed 'The Spider'?", a: "Anderson Silva", options: ["Anderson Silva", "Luke Rockhold", "Israel Adesanya", "Vitor Belfort"] },
    { q: "In which country was UFC 193 (Rousey vs. Holm) held?", a: "Australia", options: ["USA", "Brazil", "Australia", "Canada"] },
    { q: "What is the nickname of Khabib Nurmagomedov?", a: "The Eagle", options: ["The Bear", "The Eagle", "The Lion", "The Dagestani"] },
    { q: "Who did Kamaru Usman defeat to win the Welterweight title?", a: "Tyron Woodley", options: ["Colby Covington", "Jorge Masvidal", "Tyron Woodley", "Leon Edwards"] },
    { q: "Which fighter is famous for the 'Stockton Slap'?", a: "Nate Diaz", options: ["Nate Diaz", "Jorge Masvidal", "Tony Ferguson", "Nick Diaz"] },
    { q: "Who was the first female UFC champion?", a: "Ronda Rousey", options: ["Miesha Tate", "Amanda Nunes", "Ronda Rousey", "Holly Holm"] },
    { q: "What is the weight limit for the Lightweight division?", a: "155 lbs", options: ["145 lbs", "155 lbs", "170 lbs", "135 lbs"] },
    { q: "Which fighter won the UFC 1 tournament?", a: "Royce Gracie", options: ["Ken Shamrock", "Royce Gracie", "Art Jimmerson", "Gerard Gordeau"] },
    { q: "Who is the youngest champion in UFC history?", a: "Jon Jones", options: ["Jose Aldo", "Jon Jones", "Max Holloway", "Brock Lesnar"] },
    { q: "What is the name of the UFC's veteran octagon announcer?", a: "Bruce Buffer", options: ["Joe Rogan", "Jon Anik", "Bruce Buffer", "Michael Buffer"] },
    { q: "Which fighter is known as 'Triple C'?", a: "Henry Cejudo", options: ["Henry Cejudo", "Conor McGregor", "Cody Garbrandt", "Dominick Cruz"] }
];

let currentQuizIndex = 0;
let quizScore = 0;

function startNerdQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    
    // Randomize the questions array every time the quiz starts
    nerdQuestions.sort(() => Math.random() - 0.5); 
    
    showRoom('quiz');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const data = nerdQuestions[currentQuizIndex];
    document.getElementById('quiz-question-num').innerText = `Question ${currentQuizIndex + 1}/5`;
    document.getElementById('quiz-question-text').innerText = data.q;
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    
    data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => handleQuizAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function handleQuizAnswer(choice) {
    if (choice === nerdQuestions[currentQuizIndex].a) {
        quizScore++;
    }
    
    currentQuizIndex++;
    
    // Change '5' to however many questions you want per round
    if (currentQuizIndex < 5) { 
        loadQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    showRoom('quiz-result');
    let status = "";
    if (quizScore === 5) status = "CERTIFIED UFC NERD";
    else if (quizScore >= 3) status = "CASUAL FAN";
    else status = "CASUAL DETECTED";
    
    document.getElementById('nerd-status').innerText = status;
    document.getElementById('nerd-score-text').innerText = `You got ${quizScore} out of 5 correct.`;
}