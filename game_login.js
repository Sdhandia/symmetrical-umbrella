function addUser(){
    player1_name = document.getElementById("player_1name_input").nodeValue;
    player2_name = document.getElementById("player_2name_input").nodeValue;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}