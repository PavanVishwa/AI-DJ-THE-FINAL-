song1="";
song2="";

function preload(){
 song1=loadSound("The_Chainsmokers_Closer.mp3");
 song2=loadSound("Jastin biber.mp3");   
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
        fill("#FF0000");
        stroke("#0000FF");
        if(scorerightwrist > 0.2){
            circle(leftwristx,leftwristy,20);
    
            if(rightwristy > 0 && rightwristy <= 100){
                document.getElementById("Speed").innerHTML="Speed = 0.5x";
                song.rate(0.5);
            }
    
            else if(rightwristy > 100 && rightwristy <= 200){
                document.getElementById("Speed").innerHTML="Speed = 1x";
                song.rate(1);
            }
    
            else if(rightwristy > 200 && rightwristy <= 300){
                document.getElementById("Speed").innerHTML="Speed = 1.5x";
                song.rate(1.5);
            }
    
            else if(rightwristy > 300 && rightwristy <= 400){
                document.getElementById("Speed").innerHTML="Speed = 2x";
                song.rate(2);
            }
            
            else if(rightwristy > 400 ){
                document.getElementById("Speed").innerHTML="Speed = 2.5x";
                song.rate(2.5);
            }
    
    
        }
    
        if(scoreleftwrist > 0.2){
            circle(leftwristx,leftwristy,20);
        
            zack=Number(leftwristy);
           king=floor(zack);
         
          volume=king/500;
        
        document.getElementById("Volume").innerHTML="Volume = "+volume;
        song.setVolume(volume);
        }
}

function preload(){
    song1=loadSound("The_Chainsmokers_Closer.mp3");
    song2=loadSound("Jastin biber.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop(){
    song.stop();
}

function modelLoaded(){
    console.log("Model is on")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx= results[0].pose.leftWrist.x;
        leftwristy= results[0].pose.leftWrist.y;
        console.log(leftwristx,leftwristy);
        rightwristx= results[0].pose.rightWrist.x;
        rightwristy= results[0].pose.rightWrist.y;
        console.log(rightwristx,rightwristy);
       scoreleftwrist=results[0].pose.keypoints[9].score;
       scorerightwrist=results[0].pose.keypoints[10].score; 
    }   
   }
   
