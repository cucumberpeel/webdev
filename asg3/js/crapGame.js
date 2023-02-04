function crap() {

    let img = new Array("images/dice_1.gif", "images/dice_2.gif", "images/dice_3.gif", 
    "images/dice_4.gif", "images/dice_5.gif", "images/dice_6.gif");

    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    var sum = die1 + die2;

    let result = "<p> Dice 1: " + die1 + "<p> <img src=" + img[die1-1] + " />";
    result += "<p> Dice 2: " + die2 + "<p> <img src=" + img[die2-1] + " />";
    result += "<p> Sum: " + sum + "<p>";

    if (sum == 7 || sum == 11) {
        result += "<p>You win!<p>";
    }
    if (sum == 2 || sum == 3 || sum == 12) {
        result += "<p>You crapped out! Try again!<p>";
    }

    let HTMLHEAD = " <!DOCTYPE html><html><head><link rel='stylesheet' href='../asg3/css/crapGame.css' type='text/css'></head> <body> <a href='../asg3/index.html'>Return to Assignment 3</a>";

    document.open();
    document.write(HTMLHEAD);
    document.title = "Crap Game | Asg 3 | Amory Gao";

    document.write(result);
    document.write("<p><button onclick='crap()'>Try again</button>");

    document.close();
}