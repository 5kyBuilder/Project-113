function preload()
{

};

function setup()
{
    canvas = createCanvas(500,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 500, 300);
    tint(tint_color);
    rect(490, 0, 60, 300);
    rect(0, 0, 500, 10);
    rect(0, 0, 10, 300);
    rect(0, 290, 500, 10);

}

function apply()
{
    tint_color = document.getElementById("tint_color").value;
}

function take_snapshot()
{
    save("photo.png");
}