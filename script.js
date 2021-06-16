let container = document.querySelector('#container');

function requestUserInput(){


let numberOfGrid = prompt("How many boxes would you like?(key in a value within 1-64)");
numberOfGrid = parseInt(numberOfGrid);

if (numberOfGrid <4 || numberOfGrid>64){
    alert("Value inserted not within range, please insert a value within 1 to 64");
    requestUserInput();
} else if (typeof numberOfGrid != "number" ) {
    alert("Value inserted not a number, please insert a value within 1 to 64");
    requestUserInput();
} else {
    console.log("reached end of requestUserInput function")
    
}
    console.log("testing return");
    return parseInt(numberOfGrid);
}

function gridFormation() {
let numberOfGrid = requestUserInput();
for (i = 0; i < numberOfGrid; i++){
        let grid = document.createElement('div');
        grid.id= "box_" + i;
        grid.classList.add('colourfulDiv');
        grid.textContent="this is grid no " + i;
        grid.style="font-size: 20px; display: grid;"
        container.appendChild(grid);
        console.log("grid formation number" + i);
    }
}

let buttonCLick = document.getElementById('btn').addEventListener('click', () => {
console.log("button test clicked");
gridFormation();
});

