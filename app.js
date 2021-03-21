// Тоглогчийн ээлжийг хадгалах хувьсагч, Player 1= 0, Player 2=1 гэж тмдглнэ
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// var dice = Math.floor(Math.random()*6) + 1;

// <div class="player-score" id="score-0">43</div>
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


document.querySelector(".dice").style.display = "none";
console.log('Шоо :  ' + dice );