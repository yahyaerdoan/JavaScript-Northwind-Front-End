window.addEventListener("DOMContentLoaded", () => {
  const gametables = Array.from(document.querySelectorAll(".gametable"));
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");

  let gametable = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isGameActive = true;

  // Sabit değişkenler
  const PLAYERXWON = "PLAYERXWON";
  const PLAYEROWON = "PLAYEROWON";
  const TIE = "TIE";

  const winningConditions = [   
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Üç durumu karşılaştırır, eşit toplam yoksa devam eder. Üç eşit şekil sağlanırsa kazanır.
  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = gametable[winCondition[0]];
      const b = gametable[winCondition[1]];
      const c = gametable[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      else if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    // Kazanan oyuncuyu duyur.
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERXWON : PLAYEROWON); 
      isGameActive = false;
      return;
    }

    // Boş kutu olup olmadığını kontrol eder. false ise oyun biter.
    if (!gametable.includes("")) announce(TIE); 
  }

  // Kazananlar aççıklanır.
  const announce = (type) => {
    switch (type) {
      case PLAYEROWON:
        announcer.innerHTML = 'Congratulations <span class="playero">" o "</span> won!';
        break;
      case PLAYERXWON:
        announcer.innerHTML = 'Congratulations <span class="playerx">" x "</span> won!';
        break;
      case TIE:
        announcer.innerText = "You didn't win, restart?";
    }
    announcer.classList.remove("hide");
  };

  // Şekilleri kontrol eder.
  const isValidAction = (gametable) => {
    if (gametable.innerText === "X" || gametable.innerText === "O") {
      return false;
    }
    return true;
  };

  const updateGametable = (index) => {
    gametable[index] = currentPlayer;
  };

  // Oyuncuları sırasıyla döndürür.
  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const userAction = (gametable, index) => {
    if (isValidAction(gametable) && isGameActive) {
        gametable.innerText = currentPlayer;
        gametable.classList.add(`player${currentPlayer}`);
      updateGametable(index);
      handleResultValidation();
      changePlayer();
    }
  };

  const resetGametable = () => {
    gametable = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.classList.add("hide");

    if (currentPlayer === "O") {
      changePlayer();
    }

    gametables.forEach((gametable) => {
        gametable.innerText = "";
        gametable.classList.remove("playerx");
        gametable.classList.remove("playero");
    });
  };

  gametables.forEach((gametable, index) => {
    gametable.addEventListener("click", () => userAction(gametable, index));
  });

  resetButton.addEventListener("click", resetGametable);
});
