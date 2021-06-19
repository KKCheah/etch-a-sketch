let container = document.querySelector('#container');

function requestUserInput(){


let numberOfGrid = prompt("How many boxes would you like?(key in a value within 1-64)");
numberOfGrid = parseInt(numberOfGrid);




document.getElementById('container').style.gridTemplateColumns = `repeat(${numberOfGrid}, minmax(0, 1fr))`;
document.getElementById('container').style.gridTemplateRows = `repeat(${numberOfGrid}, minmax(0, 1fr))`;
//document.getElementById('container').style.gridTemplateRows = `repeat(${numberOfGrid}, 1fr)`;



if (numberOfGrid <1 || numberOfGrid>100){
    alert("Value inserted not within range, please insert a value within 1 to 100");
    requestUserInput();
} else if (typeof numberOfGrid != "number" ) {
    alert("Value inserted not a number, please insert a value within 1 to 100");
    requestUserInput();
} else {
    console.log("reached end of requestUserInput function")
    
}
    console.log("testing return");
    return parseInt(numberOfGrid);
}




function gridFormation() {
let numberOfGrid = requestUserInput();

    printOneRow(numberOfGrid*numberOfGrid);

}



function printOneRow(numberOfGrid){
    
    for (i = 0; i < numberOfGrid; i++){
        let grid = document.createElement('div');
        grid.id= "box_" +i;
        grid.classList.add('colourfulDiv');
        //grid.textContent="this is grid no " + i;
        grid.style="font-size: 20px; min-height: 0; min-width: 0;"
        container.appendChild(grid);
        console.log("grid formation number" + i);
        activateAfter(i); 
    }

}



let buttonCLick = document.getElementById('btn').addEventListener('click', () => {
console.log("button test clicked");
gridFormation();
//activateAfter(i);
});

function activateAfter(i){

function randomColour() {
    let randomiser = Math.floor(Math.random()*16777215).toString(16);  
    return randomiser;
}

document.getElementById(`box_${i}`).addEventListener('mouseover', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "#" + randomColour(); 
    
});

document.getElementById(`box_${i}`).addEventListener('mouseout', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "#" + randomColour(); 
    
});
}

function clearHTML() {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

document.getElementById('clear').addEventListener('click', () => { location.reload()
 console.log("reload");   
})

document.getElementById('reset').addEventListener('click', () => {
    clearHTML();
    console.log("test reset");
    gridFormation();   
   })
