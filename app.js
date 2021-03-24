// Тоглоомын бүх газарт ашиглах глобал хувьсагч
activePlayer = 0;
// Тоглогчийн ээлжийг хадгалах хувьсагч, Player 1= 0, Player 2=1 гэж тмдглнэ
// Тоглогчдын цуглуулсан оноог хадгалах
scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;
// Тоглоомыг эхлүүлэх
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
function initGame(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('player-1-panel').classList.remove('active');
  document.querySelector('player-0-panel').classList.add('active');

  diceDom.style.display = "none";
}
// Шоог алга болгох
var diceDom = document.querySelector(".dice");
// Шоог шидэх Eventlistener
document.querySelector(".btn-roll").addEventListener("click", function() {
     // 1- 6 хүртэл санамсаргүй 1 тоог гаргаж авна

  var diceNumber = Math.floor(Math.random() * 6) + 1;

    // шооны зургыг web дээр гаргаж ирнэ
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургыг web дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо 1ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
    //1 ээс ялгаатай тоо буулаа.Нэмнэ
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
// 1 буусан тул тоглогчийн ээлжийн энэ хэсэгт сольж өгнө
   switchToNextPlayer();
  }
});

//HOLD Button-ы Event Listener
document.querySelector(".btn-hold").addEventListener("click", function() {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноон дээр нь нэмж өгнө.

  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + roundScore;

    // Уг тоглогч хожьсон эсэхийг шалгах (100-аас их эсэх)
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    // Уг тоглогч хожьсон эсэхийг шалгах (100-аас их эсэх)
    if (scores[activePlayer] >= 25) {
        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
  } else {
    // Дэлгэц дээр оноог нь өөрчилнө.
    switchToNextPlayer();
  }
});
// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг
function switchToNextPlayer() {
    // Тоглогчийн ээлжийг солино.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

    // 1 буусан тул тоглогчийн ээлжийн энэ хэсэгт сольж өгнө
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

       // Улаан цэгийг шилжүүлэх код
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
//New game буюу Шинэ тоглоом эхлүүлэх товчны EventListener
document.querySelector('.btn-new').addEventListener('click', initGame);
