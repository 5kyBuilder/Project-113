function preload()
{

};

function setup()
{
    canvas = createCanvas(500,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 300);
    rect(490, 0, 60, 300);
    rect(0, 0, 500, 10);
    rect(0, 0, 10, 300);
    rect(0, 290, 500, 10);

}
