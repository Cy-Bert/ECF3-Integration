document.querySelector("#like").onclick = function () {
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};

document.querySelector('#buttonInfo').onclick = function () {
    let div = document.querySelector("#closeInfo");
    div.classList.toggle("hidden");
    div.animate(
        [
            //keyframes
            { transform: 'translateY(100%' },
            { transform: 'translateY(-20%' }, //Ajout d'un rebont
            { transform: 'translateY(0' },
        ],
        {  //timing options
            duration: 2000,
            iterations: 1
        }
    )

}

document.querySelector('#closedArrow').onclick = function () {
    document.querySelector('#closeInfo').classList.toggle("hidden");
}