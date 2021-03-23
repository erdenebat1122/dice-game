// Тоглогчийн ээлжийг хадгалах хувьсагч, Player 1= 0, Player 2=1 гэж тмдглнэ
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random()*6)+1;
// Программ эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Шоог шидэх Eventlistener
document.querySelector(".btn-roll").addEventListener("click",function(){
    // 1- 6 хүртэл санамсаргүй 1 тоог гаргаж авна
    var diceNumber = Math.floor(Math.random()*6)+1;
    // шооны зургыг web дээр гаргаж ирнэ
    diceDom.style.display = "block";
    // Буусан санамсаргүй тоонд харгалзах шооны зургыг web дээр гаргаж ирнэ
    diceDom.src = 'dice-' + diceNumber + '.png';
    // Буусан тоо 1ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if(diceNumber !== 1){
//1 ээс ялгаатай тоо буулаа.Нэмнэ
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else{
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
// 1 буусан тул тоглогчийн ээлжийн энэ хэсэгт сольж өгнө
// Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
// Үгүй бол идэвхтэй тоглогчийг 0 болго.
// Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

   

   // Улаан цэгийг шилжүүлэх код
   document.querySelector(".player-0-panel").classList.toggle('active');
   document.querySelector(".player-1-panel").classList.toggle('active');

   // Шоог түр алга болгоно.
   diceDom.style.display = "none";


// if(activePlayer === 0){
//     activePlayer = 1;
// }else{
//     activePlayer = 0;
// }
     }
});