canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
nasamarsimage = ["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpeg"]
randomnumber = Math.floor(Math.random()*4)
background_image = nasamarsimage[randomnumber]
rover_width = 100
rover_height = 100
rover_img = "rover.png"
roverx = 10
rovery = 10
function add(){
    background_imagetag = new Image()
    background_imagetag.onload = uploadbackground
    background_imagetag.src = background_image

    rover_imagetag = new Image()
    rover_imagetag.onload = uploadrover
    rover_imagetag.src = rover_img
}
function uploadbackground(){
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height)

}
function uploadrover(){
    ctx.drawImage(rover_imagetag, roverx, rovery, rover_width, rover_height)

}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keypress = e.keyCode
if (keypress=="38") {
    up()
}
if (keypress=="40") {
    down()
}
if (keypress=="37") {
    left()
}
if (keypress=="39") {
    right()
}
}
function up(){
    if (rovery > 0) {
        rovery = rovery - 10
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if (rovery < 600) {
        rovery = rovery + 10
        uploadbackground()
        uploadrover()
    }
}
function left(){
    if (roverx > 0) {
        roverx = roverx - 10
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if (roverx < 800) {
        roverx = roverx + 10
        uploadbackground()
        uploadrover()
    }
}