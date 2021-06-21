let container = document.querySelector('#container');

function requestUserInput(){


let numberOfGrid = prompt("How many boxes would you like?(key in a value within 1-100)");
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
    showNoPixel(numberOfGrid);
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



let buttonClick = document.getElementById('btn').addEventListener('click', () => {
console.log("button test clicked");
gridFormation();

//activateAfter(i);
});

function randomColour() {
    let randomiser = Math.floor(Math.random()*16777215).toString(16);  
    return randomiser;
}

function activateAfter(i){


document.getElementById(`box_${i}`).addEventListener('mouseover', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "#" + randomColour(); 
    
});

document.getElementById(`box_${i}`).addEventListener('mouseout', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "#" + randomColour(); 
    
});

document.getElementById('black').addEventListener('click',()=>{
    console.log("black test clicked");
    blackColour(i);
})

document.getElementById('multiColor').addEventListener('click',()=>{
    console.log("multicolor test clicked");
    randomColourButton(i); 
})

document.getElementById('erase').addEventListener('click',()=>{
    console.log("erase test clicked");
    erase(i);
})

document.getElementById('darker').addEventListener('click',()=>{
    console.log("darker test clicked");
    darkerColour(i);
})


}

function incrementOpacity(x=0) {
    x+=3;
    return x
}

function darkerColour(i){
    document.getElementById(`box_${i}`).addEventListener('mouseover', (e)=>{
        console.log(e);
        document.getElementById(`box_${i}`).style.backgroundColor = "black";
        document.getElementById(`box_${i}`).style.opacity = (parseFloat(document.getElementById(`box_${i}`).style.opacity) || 0) + 0.1;
        
            setInterval(function(){
                document.getElementById(`box_${i}`).style.opacity = (parseFloat(document.getElementById(`box_${i}`).style.opacity) || 0) + 0.1;
            },1000)
    });
    
    document.getElementById(`box_${i}`).addEventListener('mouseout', (e)=>{
        console.log(e);
        //document.getElementById(`box_${i}`).style.filter =  `brightness(${value}%)`;
        document.getElementById(`box_${i}`).style.backgroundColor = "black";
        setInterval(function(){
            document.getElementById(`box_${i}`).style.opacity = (parseFloat(document.getElementById(`box_${i}`).style.opacity) || 0) - 0.05;
        },900)
        
    });
}


function randomColourButton(i){
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

function showNoPixel(i){
    let display = document.querySelector('#displayGridItem');
    display.textContent = "The amount of pixel is now: " + i;
    let displayContainer = document.querySelector('#displayGridNo');
    displayContainer.appendChild(display);
}

//for black and white square:


function blackColour(i) {
    
document.getElementById(`box_${i}`).addEventListener('mouseover', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "black"; 
    
});

document.getElementById(`box_${i}`).addEventListener('mouseout', (e)=>{
    console.log(e);
    document.getElementById(`box_${i}`).style.backgroundColor = "black"; 
    
});
}

function erase(i) {
    
    document.getElementById(`box_${i}`).addEventListener('mouseover', (e)=>{
        console.log(e);
        document.getElementById(`box_${i}`).style.backgroundColor = "white"; 
        
    });
    
    document.getElementById(`box_${i}`).addEventListener('mouseout', (e)=>{
        console.log(e);
        document.getElementById(`box_${i}`).style.backgroundColor = "white"; 
        
    });
    }