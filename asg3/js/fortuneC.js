window.onload = fortuneC();

function fortuneC() {
    let fortuneArray = new Array("Slow progress is better than no progress.",
    "Life begins at the end of your comfort zone.",
    "If you can be anything in this world, be kind.",
    "Happiness is not the absence of problems, it's the ability to deal with them.",
    "You cannot start the next chapter of your life if you keep re-reading the previous one.")

    let fortuneImgArray = new Array("images/slow-progress.jpg","images/comfort-zone.jpg","images/be-kind.jpg",
    "images/happiness.jpeg","images/next-chapter.jpg");

    let n = Math.floor(Math.random() * fortuneArray.length);

    document.open();
    
    let result = "<p>" + fortuneArray[n] + "<p> <img src=" + fortuneImgArray[n] + " />";
    document.write(result);

    document.close()
}