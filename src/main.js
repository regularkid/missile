var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d", { alpha: false });
var framebuffer = ctx.getImageData(0, 0, canvas.width, canvas.height);
var framebuffer32Bit = new Uint32Array(framebuffer.data.buffer);
var input = new Input(canvas);

function Init()
{
    framebuffer32Bit.fill(0xFF00FF00);
}

function Update(dt)
{
    input.PostUpdate();
}

function Render()
{
}

function GameLoop()
{
    framebuffer32Bit.fill(0xFF00FF00);

    ctx.putImageData(framebuffer, 0, 0);
    window.requestAnimationFrame(GameLoop);
}

Init();
window.requestAnimationFrame(GameLoop);