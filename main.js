function preload(){

}
function setup(){
    canvas = createCanvas(640,450);
    canvas.position(110,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 200, 150, 256, 192);
    fill(220, 0, 0);
    circle(50, 50, 70);
    circle(590, 50, 70);
    circle(590, 400, 70);
    circle(50, 400, 70);
    fill(0, 255, 0);
    rect(85, 40, 470, 25);
    rect(85, 390, 470, 25);
    rect(38, 85, 25, 280);
    rect(578, 85, 25, 280);
}
function take_snapshot(){
    save('photo_frame.png');
}