var canvas = new fabric.Canvas('myCanvas');

var playerObject="";
var blockImageObject = "";

blockImageWidth = 30;
blockImageHeigh = 30;

playerX = 10;
playerY = 10;



function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
         playerObject = Img;

         playerObject.scaleToWidth(150);
         playerObject.scaleToHeight(140);
         playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject)
    })
}

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth );
        blockImageObject.scaleToHeight(blockImageHeigh);
        blockImageObject.set({
           top:playerY,
           left:playerX
        });
        canvas.add(blockImageObject);
    })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey ==true && keyPressed =='80'){
        console.log("P e SHIFT pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeigh = blockImageHeigh + 10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeigh;
    }

    if(e.shiftKey && keyPressed=='77'){
        console.log("M e SHIFT pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeigh = blockImageHeigh - 10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeigh;

    }

    if(keyPressed == '38'){
        console.log("up")
        up();
    }

    if(keyPressed == '40'){
        console.log("down")
        down();
    }

    if(keyPressed == '37'){
        console.log("left")
        left();
    }

    if(keyPressed == '39'){
        console.log("right")
        right();
    }

    if(keyPressed == '87'){
        newImage('wall.jpg');
        console.log("w")
    }

    if(keyPressed == '71'){
        newImage('ground.png');
        console.log("g")
    }

    if(keyPressed == '76'){
        newImage('light_green.png');
        console.log("l");
    }

    if(keyPressed == '84'){
        newImage('trunk.jpg');
        console.log("t")
    }

    if(keyPressed == '82'){
        newImage('roof.jpg');
        console.log("r")
    }

    if(keyPressed == '89'){
        newImage('yellow_wall.png');
        console.log("y")
    }

    if(keyPressed == '68'){
        newImage('dark_green.png');
        console.log("d")
    }

    if(keyPressed == '85'){
        newImage('unique.png');
        console.log("u")
    }

    if(keyPressed == '67'){
        newImage('cloud.jpg');
        console.log("c")
    }


}

function up(){
    if(playerY >= 0){
        playerY = playerY - blockImageHeigh;
        console.log("altura da imagem do bloco = " + blockImageHeigh);
        console.log("Quando a tecla direcional Cima for pressionada, X= ", playerX + ", Y= ",playerY)
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    if(playerY <=500){
        playerY = playerY + blockImageHeigh;
        console.log("altura da imagem do bloco = " + blockImageHeigh);
        console.log("Quando a tecla direcional Baixo for pressionada, X= ", playerX + ", Y= ",playerY)
        canvas.remove(playerObject);
        playerUpdate(); 
    }
}

function left(){
    if(playerX > 0){
    playerX = playerX - blockImageWidth;
    console.log("altura da imagem do bloco = " + blockImageWidth);
    console.log("Quando a tecla direcional Cima for pressionada, X= ", playerX + ", Y= ",playerY)
    canvas.remove(playerObject);
    playerUpdate();
    }
}

function right(){
    if(playerX <=850){
    playerX = playerX + blockImageWidth;
    console.log("altura da imagem do bloco = " + blockImageWidth);
    console.log("Quando a tecla direcional Cima for pressionada, X= ", playerX + ", Y= ",playerY)
    canvas.remove(playerObject);
    playerUpdate();
    }
}