document.querySelector("#like").onclick = function()
{
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};

document.querySelector('#buttonInfo').onclick = function()
{
    document.querySelector('#closeInfo').classList.toggle("hidden");
    document.querySelector('#openInfo').classList.toggle("hidden");
}

document.querySelector('#closedArrow').onclick = function()
{
    document.querySelector('#closeInfo').classList.toggle("hidden");
    document.querySelector('#openInfo').classList.toggle("hidden");
}