// Initial scores
let homeTeamScore = 0;
let awayTeamScore = 0;

// Grab score elements
let homeScore = document.getElementById('home-score');
let awayScore = document.getElementById('away-score');

// Home team buttons
let homeOne = document.getElementById('home-one');
let homeTwo = document.getElementById('home-two');
let homeThree = document.getElementById('home-three');

// Away team buttons
let awayOne = document.getElementById('away-one');
let awayTwo = document.getElementById('away-two');
let awayThree = document.getElementById('away-three');

// Home Team Functions
function addOneHome() {
    homeTeamScore += 1;
    homeScore.textContent = homeTeamScore;
}

function addTwoHome() {
    homeTeamScore += 2;
    homeScore.textContent = homeTeamScore;
}

function addThreeHome() {
    homeTeamScore += 3;
    homeScore.textContent = homeTeamScore;
}

// Away Team Functions
function addOneAway() {
    awayTeamScore += 1;
    awayScore.textContent = awayTeamScore;
}

function addTwoAway() {
    awayTeamScore += 2;
    awayScore.textContent = awayTeamScore;
}

function addThreeAway() {
    awayTeamScore += 3;
    awayScore.textContent = awayTeamScore;
}