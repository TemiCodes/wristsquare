function setup() {
    video = createCapture(VIDEO)
    video.size(500,600)
    canvas=createCanvas(500,500)
    canvas.position(600 , 100)
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes)
}
nosex=0
nosey=0
leftwristx=0
rightwristx=0
diffrence=0
function draw() {
    background("#8E8EE9")
    fill("#00FF99")
    stroke("#00FF99")
    square(nosex,nosey,diffrence)
    document.getElementById("length").innerHTML= "The Length of square is - " +diffrence+ "px"
    
}
function modelloaded() {
    console.log("model loaded/posenet inalitzed")
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        diffrence=floor(leftwristx-rightwristx)
    }
}