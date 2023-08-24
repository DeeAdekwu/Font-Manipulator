
noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.position(150, 150)
    
    canvas = createCanvas(700, 500);
    canvas.position(930,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#12927F');
    fill('#99e6e6');
    textSize(difference)
   text("Hello!" , noseX, noseY)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " +noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        console.log("lestWrist = " + leftWristX +" rightWristX = "+ rightWristX + "difference = " + difference);
    }
}