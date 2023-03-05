noseX = ""
noseY = ""




function preload(){
       clownnose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
       
}


function setup(){
mycanvas = createCanvas(700, 450)
mycanvas.position(350,175)
//mycanvas.center()

video = createCapture(VIDEO)
video.hide()

pN = ml5.poseNet(video,modalloaded)
pN.on('pose', gotPoses)

}


function draw(){
    image(video ,0,0,700,450)
    image(clownnose , noseX+15, noseY-30,35,35) 
         
    //fill(255,0,0)
    //stroke(255,0,0)
    //circle(noseX,noseY,20) 
}

function modalloaded(){
   console.log("osnfodfbonposndponopnoanfnasodsofnosnfoasndfosaanfosdnsdfnsfdnbaBFosndosafosnsofnsnoasnf") 
}

function take_snapshot(){
    save("clown.png")
}



function gotPoses(results){
console.log("prince")
    if(results.length > 0){
         console.log(results)
         noseX = results[0].pose.nose.x
         noseY = results[0].pose.nose.y
     
            }
}
 

