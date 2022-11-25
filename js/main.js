var ticket = 500;
var hotel = 250;
var walk = 120;
var total = (((ticket + hotel) * 11225) + (walk) * 11686);
console.log(` kerakli summa ` + " " + total);
var userName = prompt("Ismingizni kiriting");
var userMoney = prompt("Sayohat uchun ajratgan summangizni kiriting");
var kam = (total - userMoney);
var elTitle = document.querySelector(".title");
if (userMoney >= total) {
    elTitle.textContent = `Oq yo'l ${userName}`
} else {
    elTitle.textContent = `${userName}  ozgina sabr qiling sizda sayohat uchun ${kam} so'm  mablag' yetishmayapti !!!`
};