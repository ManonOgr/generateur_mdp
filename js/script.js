var passwordoutput = document.getElementById("passwordoutput");
//tableau minuscule
var tabmin = [
  "a",
  "z",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "q",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "w",
  "x",
  "c",
  "v",
  "b",
  "n",
];

//tableau majuscule
var tabmaj = [
  "A",
  "Z",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "Q",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "W",
  "X",
  "C",
  "V",
  "B",
  "N",
];
//tableau numero
var tabnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//tableau symbole
var tabsymbole = [
  "$",
  "%",
  "^",
  "&",
  "!",
  "@",
  "#",
  ":",
  ";",
  "'",
  ",",
  ".",
  ">",
  "/",
  "*",
  "-",
  ",",
  "|",
  "?",
  "~",
  "_",
  "=",
  "+",
];

function generateur() {
  var totaltableaux = [].concat(
  
    lowercase.checked ? tabmin : [],
    uppercase.checked ? tabmaj : [],
    numbers.checked ? tabnum : [],
    symbols.checked ? tabsymbole : []
  );

  var passwordLength = parseInt(document.getElementById("taille").value);
  var mdp = "";

  if (totaltableaux.length < 1 && passwordLength < 8) {
    alert("Selectionnez au moins un critère");
    alert("Minimum 8 caractères");
  } else if (totaltableaux.length >= 1 && passwordLength < 8) {
    alert("Minimum 8 caractères");
  }
  ///// si l'utilisateur saisi aucun critère
  else if (totaltableaux.length < 1 && passwordLength < 8) {
    alert("Selectionnez au moins un critère");
  } else if (totaltableaux.length < 1 && passwordLength >= 8) {
    alert("Selectionnez au moins un critère");
  } else {
    for (i = 0; i < passwordLength; i++) {
      mdp += totaltableaux[Math.floor(Math.random() * totaltableaux.length)];
    }
    passwordoutput.value = mdp;
  }
}

function copie() {
  if (document.getElementById("passwordoutput").value == 0) {
    alert("Il n y a rien à copier");
  } else {
    passwordoutput.select();
    document.execCommand("copy");
    alert("Copié");
  }
}

function best() {
  document.getElementById("taille").value = 16;

  document.getElementById("lowercase").checked = true;
  document.getElementById("uppercase").checked = true;
  document.getElementById("numbers").checked = true;
  document.getElementById("symbols").checked = true;

  generateur();
}
