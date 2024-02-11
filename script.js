class surowiec{
  constructor(nazwa, rzadkosc, wytrzymalosc, ilosc) {
      this.nazwa = nazwa;
      this.rzadkosc = rzadkosc;
      this.wytrzymalosc = wytrzymalosc;
      this.ilosc = ilosc;
    }
}
class narzedzie{
  constructor(nazwa, rzadkosc, punkty_uzycia, czy_posiadany){
    this.nazwa = nazwa;
    this.rzadkosc = rzadkosc;
    this.punkty_uzycia = punkty_uzycia;
    this.czy_posiadany = czy_posiadany;
  }
}

var drewno = new surowiec("drewno", 1, 10, 0);
var kamien = new surowiec("kamien", 2, 30, 0);
var zelazo = new surowiec("zelazo", 3, 50, 0);
var diament = new surowiec("diament", 4, 100, 0);

var w_pickaxe = new narzedzie("drewniany kilof", 1, 60, false);
var s_pickaxe = new narzedzie("kamienny kilof", 2, 132, false);
var i_pickaxe = new narzedzie("zelazny kilof", 3, 251, false);
var d_pickaxe = new narzedzie("diamentowy kilof", 4, 1562, false);
var hp = 20;
var stick = 0;
var money = 0;

function zagraj(){
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var play = document.getElementById("gra");
    var rules = document.getElementById("zasady");
    var web = document.getElementById("web");
    var DREWNO = document.getElementById("drewno");
    var KAMIEN = document.getElementById("kamien");
    var ZELAZO = document.getElementById("zelazo");
    var DIAMENT = document.getElementById("diament");
    var W_P = document.getElementById("w_pickaxe");
    var S_P = document.getElementById("s_pickaxe");
    var I_P = document.getElementById("i_pickaxe");
    var D_P = document.getElementById("d_pickaxe");
    var STICK = document.getElementById("stick");
    var HP = document.getElementById("HP");
    var chat = document.getElementById("chat");
    drewno.ilosc = 0;
    kamien.ilosc = 0;
    zelazo.ilosc = 0;
    diament.ilosc = 0;
    hp = 20;
    stick = 0;
    w_pickaxe.czy_posiadany = false;
    s_pickaxe.czy_posiadany = false;
    i_pickaxe.czy_posiadany = false;
    d_pickaxe.czy_posiadany = false;
    DREWNO.innerHTML = drewno.ilosc;
    KAMIEN.innerHTML = kamien.ilosc;
    ZELAZO.innerHTML = zelazo.ilosc;
    DIAMENT.innerHTML = diament.ilosc;
    W_P.innerHTML = "X";
    S_P.innerHTML = "X";
    I_P.innerHTML = "X";
    D_P.innerHTML = "X";
    STICK.innerHTML = stick;
    HP.innerHTML = hp;
    chat.innerHTML = "";
    
    hp = 20;
    rules.style.display = "none"
    play.style.className = "showed-div";
    if (play.style.display === "block") {
        play.style.display = "none";
      } 
    else {
        play.style.display = "block";
        body.style.backgroundImage = "url('world.png')";
    }
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } 
    else {
      menu.style.display = "none";
    }
    if (web.style.display === "none") {
      web.style.display = "block";
    } 
    else {
      web.style.display = "none";
    }
    console.log("start");
    
}

function zasady(){
    var web = document.getElementById("menu");
    var body = document.getElementById("body");
    var rules = document.getElementById("zasady");
    if (rules.style.display === "block") {
        rules.style.display = "none";
      } 
    else {
        rules.style.display = "block";
    body.style.backgroundImage = "url('menu.jpg')";
    }
    if (web.style.display === "none") {
      web.style.display = "block";
    } 
    else {
      web.style.display = "none";
      body.style.backgroundImage = "url('dirt.jpg')";
    }
    rules.style.visibility = "visible";
    console.log("zasady");
}
function powrot()
{
    var web = document.getElementById("menu");
    var body = document.getElementById("body");
    var rules = document.getElementById("zasady");
    if (rules.style.display === "none") {
        rules.style.display = "block";
      } 
    else {
    rules.style.display = "none";
    body.style.backgroundImage = "url('menu.jpg')";
    }
    if (web.style.display === "block") {
        web.style.display = "none";
      } 
      else {
        web.style.display = "block";
      }
      console.log("powrot");
}
function wyjdz()
{
  var menu = document.getElementById("menu");
  var body = document.getElementById("body");
  var play = document.getElementById("gra");
  var web = document.getElementById("web");
  if (play.style.display === "none") {
    play.style.display = "block";
  } 
  else {
    play.style.display = "none";
    body.style.backgroundImage = "url('menu.jpg')";
  }
  if (web.style.display === "block") {
    web.style.display = "none";
  } 
  else {
    web.style.display = "block";
  }
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } 
  else {
    menu.style.display = "none";
  }
  console.log("powrot");
}








var DREWNO = document.getElementById("drewno");
var STICK = document.getElementById("stick");

function kop_drewno() {
  var chat = document.getElementById("chat");
  chat .innerHTML = "Stworzono 4 deski";
  var DREWNO = document.getElementById("drewno")
  var HP = document.getElementById("HP");
  hp--;
  HP.innerHTML = hp;
  drewno.ilosc += 4;
  DREWNO.innerHTML = drewno.ilosc;
  if (drewno.ilosc > 64) {
    DREWNO.innerHTML = 64;
  }
  if (hp < 0) {
    HP.innerHTML = 0;
  }
  if (hp <= 0) {
    lose();
  }
}

function craft_sticks() {
  var DREWNO = document.getElementById("drewno");
  var STICK = document.getElementById("stick");
  var chat = document.getElementById("chat");
  if (drewno.ilosc < 2) {
    chat .innerHTML = "Za malo drewna";
  }
  if (drewno.ilosc >= 64) {
    drewno.ilosc = 64
    DREWNO.innerHTML = drewno.ilosc;
  }
  if (stick == 62) {
    stick = 64
    drewno.ilosc -= 2;
    STICK.innerHTML = stick;
    DREWNO.innerHTML = drewno.ilosc;
  }
  if (drewno.ilosc > 1) {
    if (stick < 64) {
      chat .innerHTML = "Stworzono 4 patyki";
      stick += 4;
      drewno.ilosc -= 2;
      STICK.innerHTML = stick;
      DREWNO.innerHTML = drewno.ilosc;
      console.log(stick);
    }
    else {
      stick = 64;
      drewno.ilosc -= 0;
    }
  }
}
function craft_w_pickaxe() {
  var DREWNO = document.getElementById("drewno");
  var STICK = document.getElementById("stick");
  var W_P = document.getElementById("w_pickaxe");
  var chat = document.getElementById("chat");
  if (drewno.ilosc < 3 && stick < 2) {
    chat.innerHTML = "Za malo drewna i patykow";
  }
  else if (drewno.ilosc < 3) {
    chat.innerHTML = "Za malo drewna";
  }
  else if (stick < 2) {
    chat.innerHTML = "Za malo patykow";
  }
  
  if (w_pickaxe.czy_posiadany == false){
    if (drewno.ilosc >= 64) {
      drewno.ilosc = 64
      DREWNO.innerHTML = drewno.ilosc;
    }
      if (drewno.ilosc >= 3 && stick >= 2){
      chat.innerHTML = "Stworzono drewniany kilof";
      drewno.ilosc -= 3;
      stick -= 2;
      w_pickaxe.czy_posiadany = true;
      DREWNO.innerHTML = drewno.ilosc;
      STICK.innerHTML = stick;
      W_P.innerHTML = "✓";
  }
  else {
    drewno.ilosc -= 0;
    stick -= 0;
    DREWNO.innerHTML = drewno.ilosc;
    STICK.innerHTML = stick;
  }
  }
}

function kop_kamien() {
  var KAMIEN = document.getElementById("kamien");
  var HP = document.getElementById("HP");
  var chat = document.getElementById("chat");
    chat.innerHTML = "Brak drewnianego kilofa";
    if (w_pickaxe.czy_posiadany == true){
      chat.innerHTML = "Wydobyto kamien";
      hp-=2;
      HP.innerHTML = hp;
      kamien.ilosc += 1;
      KAMIEN.innerHTML = kamien.ilosc;
      if (kamien.ilosc > 64) {
        KAMIEN.innerHTML = 64;
      }
      if (hp < 0) {
        HP.innerHTML = 0;
      }
      if (hp <= 0) {
        lose();
      }
  }
  
}

function craft_s_pickaxe() {
  var KAMIEN = document.getElementById("kamien");
  var STICK = document.getElementById("stick");
  var S_P = document.getElementById("s_pickaxe");
  var chat = document.getElementById("chat");
  if (kamien.ilosc < 3 && stick < 2) {
    chat.innerHTML = "Za malo kamienia i patykow";
  }
  else if (kamien.ilosc < 3) {
    chat.innerHTML = "Za malo kamienia";
  }
  else if (stick < 2) {
    chat.innerHTML = "Za malo patykow";
  }

  if (s_pickaxe.czy_posiadany == false){
    if (kamien.ilosc >= 64) {
      kamien.ilosc = 64
      KAMIEN.innerHTML = kamien.ilosc;
    }
      if (kamien.ilosc >= 3 && stick >= 2){
      chat.innerHTML = "Stworzono kamienny kilof";
      kamien.ilosc -= 3;
      stick -= 2;
      s_pickaxe.czy_posiadany = true;
      KAMIEN.innerHTML = kamien.ilosc;
      STICK.innerHTML = stick;
      S_P.innerHTML = "✓";
  }
  else {
    kamien.ilosc -= 0;
    stick -= 0;
    KAMIEN.innerHTML = kamien.ilosc;
    STICK.innerHTML = stick;
  }
  }
}

function kop_zelazo() {
  var ZELAZO = document.getElementById("zelazo");
  var HP = document.getElementById("HP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak kamiennego kilofa";
      if (s_pickaxe.czy_posiadany == true){
      chat.innerHTML = "Wydobyto zelazo";
      hp-= 3;
      HP.innerHTML = hp;
      zelazo.ilosc += 1;
      ZELAZO.innerHTML = zelazo.ilosc;
      if (zelazo.ilosc > 64) {
        ZELAZO.innerHTML = 64;
      }
      if (hp < 0) {
        HP.innerHTML = 0;
      }
      if (hp <= 0) {
        lose();
      }
  }
  
}

function craft_i_pickaxe() {
  var ZELAZO = document.getElementById("zelazo");
  var STICK = document.getElementById("stick");
  var I_P = document.getElementById("i_pickaxe");
  var chat = document.getElementById("chat");
  if (zelazo.ilosc < 3 && stick < 2) {
    chat.innerHTML = "Za malo zelaza i patykow";
  }
  else if (zelazo.ilosc < 3) {
    chat.innerHTML = "Za malo zelaza";
  }
  else if (stick < 2) {
    chat.innerHTML = "Za malo patykow";
  }

  if (i_pickaxe.czy_posiadany == false){
    if (zelazo.ilosc >= 64) {
      zelazo.ilosc = 64
      ZELAZO.innerHTML = zelazo.ilosc;
    }
      if (zelazo.ilosc >= 3 && stick >= 2){
      chat.innerHTML = "Stworzono zelazny kilof";
      zelazo.ilosc -= 3;
      stick -= 2;
      i_pickaxe.czy_posiadany = true;
      ZELAZO.innerHTML = zelazo.ilosc;
      STICK.innerHTML = stick;
      I_P.innerHTML = "✓";
  }
  else {
    zelazo.ilosc -= 0;
    stick -= 0;
    ZELAZO.innerHTML = zelazo.ilosc;
    STICK.innerHTML = stick;
  }
  }
}

function kop_diamenty() {
  var DIAMENT = document.getElementById("diament");
  var HP = document.getElementById("HP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak zelaznego kilofa";
    if (i_pickaxe.czy_posiadany == true){
      chat.innerHTML = "Wydobyto diament";
      hp-=4;
      HP.innerHTML = hp;
      diament.ilosc += 1;
      DIAMENT.innerHTML = diament.ilosc;
      if (diament.ilosc > 64) {
        DIAMENT.innerHTML = 64;
      }
      if (hp < 0) {
        HP.innerHTML = 0;
      }
      if (hp <= 0) {
        lose();
      }
  }
  
}

function craft_d_pickaxe() {
  var DIAMENT = document.getElementById("diament");
  var STICK = document.getElementById("stick");
  var D_P = document.getElementById("d_pickaxe");
  var chat = document.getElementById("chat");
  if (diament.ilosc < 3 && stick < 2) {
    chat.innerHTML = "Za malo diamentow i patykow";
  }
  else if (diament.ilosc < 3) {
    chat.innerHTML = "Za malo diamentow";
  }
  else if (stick < 2) {
    chat.innerHTML = "Za malo patykow";
  }

  if (d_pickaxe.czy_posiadany == false){
    if (diament.ilosc >= 64) {
      diament.ilosc = 64
      DIAMENT.innerHTML = diament.ilosc;
    }
      if (diament.ilosc >= 3 && stick >= 2){
      chat.innerHTML = "Stworzono diamentowy kilof" + "<br>" + "Mozna zakonczyc gre";
      diament.ilosc -= 3;
      stick -= 2;
      d_pickaxe.czy_posiadany = true;
      DIAMENT.innerHTML = diament.ilosc;
      STICK.innerHTML = stick;
      D_P.innerHTML = "✓";
  }
  else {
    diament.ilosc -= 0;
    stick -= 0;
    DIAMENT.innerHTML = zelazo.ilosc;
    STICK.innerHTML = stick;
  }
  }
}

function ending() {
  var play = document.getElementById("gra");
  var web = document.getElementById("web");
  var end = document.getElementById("ending");
  if (d_pickaxe.czy_posiadany == true) {
    /* console.log("koniec"); */
    if (play.style.display === "none") {
      play.style.display = "block";
    } 
    else {
      play.style.display = "none";
      body.style.backgroundImage = "url('dirt.jpg')";
      
    }
    if (web.style.display === "none") {
      web.style.display = "block";
    } 
    else {
      web.style.display = "none";
    }
    if (end.style.display === "block") {
      end.style.display = "none";
    } 
    else {
      end.style.display = "block";
    }
  }
}

function wyjdz2()
{
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var end = document.getElementById("ending");
    if (end.style.display === "none") {
        end.style.display = "block";
      } 
    else {
    end.style.display = "none";
    body.style.backgroundImage = "url('menu.jpg')";
    }
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } 
      else {
        menu.style.display = "block";
      }
      console.log("powrot");
}

function lose() {
    var play = document.getElementById("gra");
    var web = document.getElementById("web");
    var lose = document.getElementById("lose");
    
      /* console.log("koniec"); */
      if (play.style.display === "none") {
        play.style.display = "block";
      } 
      else {
        play.style.display = "none";
        body.style.backgroundImage = "url('dirt.jpg')";
        
      }
      if (web.style.display === "none") {
        web.style.display = "block";
      } 
      else {
        web.style.display = "none";
      }
      if (lose.style.display === "block") {
        lose.style.display = "none";
      } 
      else {
        lose.style.display = "block";
      }
    }

    function wyjdz3()
{
    var menu = document.getElementById("menu");
    var body = document.getElementById("body");
    var lose = document.getElementById("lose");
    if (lose.style.display === "none") {
      lose.style.display = "block";
      } 
    else {
      lose.style.display = "none";
    body.style.backgroundImage = "url('menu.jpg')";
    }
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } 
      else {
        menu.style.display = "block";
      }
      console.log("powrot");
}

function wood_sell() {
  var DREWNO = document.getElementById("drewno");
  var MONEY = document.getElementById("MP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak desek";
    if (drewno.ilosc > 0){
      chat.innerHTML = "Sprzedano 1 deski";
      money += 3;
      drewno.ilosc -= 1;
      DREWNO.innerHTML = drewno.ilosc;
      MONEY.innerHTML = money;
  }
}

function stone_sell() {
  var KAMIEN = document.getElementById("kamien");
  var MONEY = document.getElementById("MP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak kamienia";
    if (kamien.ilosc > 0){
      chat.innerHTML = "Sprzedano kamien";
      money += 20;
      kamien.ilosc -= 1;
      KAMIEN.innerHTML = kamien.ilosc;
      MONEY.innerHTML = money;
  }
}

function iron_sell() {
  var ZELAZO = document.getElementById("zelazo");
  var MONEY = document.getElementById("MP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak zelaza";
    if (zelazo.ilosc > 0){
      chat.innerHTML = "Sprzedano zelazo";
      money += 30;
      zelazo.ilosc -= 1;
      ZELAZO.innerHTML = zelazo.ilosc;
      MONEY.innerHTML = money;
  }
}

function diamond_sell() {
  var DIAMENT = document.getElementById("diament");
  var MONEY = document.getElementById("MP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Brak diamentow";
    if (diament.ilosc > 0){
      chat.innerHTML = "Sprzedano diament";
      money += 40;
      diament.ilosc -= 1;
      DIAMENT.innerHTML = diament.ilosc;
      MONEY.innerHTML = money;
  }
}

function buy_food() {
  var HP = document.getElementById("HP");
  var MONEY = document.getElementById("MP");
  var chat = document.getElementById("chat");
  chat.innerHTML = "Za malo pieniedzy";
  if (money >= 30){
    if (hp >= 20 || hp >= 17 || hp >= 18 || hp >= 19) {
      money -= 0;
      HP.innerHTML = 20;
      MONEY.innerHTML = money;
    }
    else {
      chat.innerHTML = "Zakupiono 4 punkty zycia";
      money -= 30;
      hp += 4;
      MONEY.innerHTML = money;
      HP.innerHTML = hp;
    }
  }
}
var chat = document.getElementById("chat");