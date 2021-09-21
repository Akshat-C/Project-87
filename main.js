var canvas = new fabric.Canvas("myCanvas");
var img_obj = "";
var bx = 1;
var by = 50;
var bw = 150;
var bh = 280;

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        img_obj = Img;
        img_obj.scaleToWidth(bw);
        img_obj.scaleToHeight(bh);
        img_obj.set({
            top: by,
            left: bx
        });
        canvas.add(img_obj);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == 65)
    {
        bx = -40;
        new_image("Apple.jpg");
        console.log("a is pressed");
    } else if (keypressed == 71)
    {
        bx = 187;
        new_image("Grape.jpg")
        console.log("g is pressed");
    } else if (keypressed == 77)
    {
        bx = 442;
        new_image("Mango.jpg")
        console.log("m is pressed");
    } else if (keypressed == 79)
    {
        bx = 642;
        new_image("Orange.jpg")
        console.log("o is pressed");
    } else if (keypressed == 83)
    {
        bx = 907;
        new_image("Strawberry.jpg")
        console.log("s is pressed");
    }
}