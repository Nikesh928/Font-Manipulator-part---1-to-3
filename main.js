difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO); // Code for accessing the live webcam
    video.size(550, 500);

    canvas = createCanvas(550, 550); // Code for Creating the canvas
    canvas.position(560,150); // Position of the canvas

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) 
{
    if(results.length > 0) 
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    } 
}
function draw() {
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px"; // The font size will be equal to difference 
    textSize(difference); //The Difference is the distance between left and right wrist
    fill('#FFE787');
    text('Nikesh', 50, 400); //This will show the name Nikesh on the canvas based on the movements of my wrists
}