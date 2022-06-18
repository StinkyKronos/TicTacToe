buttons = document.getElementsByClassName("btn");
reloadButton = document.getElementById("reload");
winLines = document.getElementsByClassName("win-line"); 

currentSymbol = "X";

Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.innerHTML != ""){
            return;
        }
        button.innerHTML = currentSymbol;
        if (currentSymbol == "X"){
            currentSymbol = "O";
        }
        else{
            currentSymbol = "X";
        }
    
        checkWinner();
    });
});



// HARD CODING 101

let col1 = document.getElementById("col1")  
let col2 = document.getElementById("col2")
let col3 = document.getElementById("col3")
let col4 = document.getElementById("col4")
let col5 = document.getElementById("col5")
let col6 = document.getElementById("col6")
let col7 = document.getElementById("col7")
let col8 = document.getElementById("col8")
let col9 = document.getElementById("col9")

let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")
let line4 = document.getElementById("line4")
let line5 = document.getElementById("line5")
let line6 = document.getElementById("line6")
let line7 = document.getElementById("line7")
let line8 = document.getElementById("line8")


function checkWinner(){
    if (col1.innerHTML == "O" && col2.innerHTML =="O" && col3.innerHTML == "O"){
        line1.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col1.innerHTML == "X" && col2.innerHTML =="X" && col3.innerHTML == "X"){
        line1.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
        
    }
    else if (col4.innerHTML == "O" && col5.innerHTML =="O" && col6.innerHTML == "O"){
        line2.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col4.innerHTML == "X" && col5.innerHTML =="X" && col6.innerHTML == "X"){
        line2.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col7.innerHTML == "O" && col8.innerHTML =="O" && col9.innerHTML == "O"){
        line3.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col7.innerHTML == "X" && col8.innerHTML =="X" && col9.innerHTML == "X"){
        line3.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col1.innerHTML == "O" && col5.innerHTML =="O" && col9.innerHTML == "O"){
        line7.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col1.innerHTML == "X" && col5.innerHTML =="X" && col9.innerHTML == "X"){
        line7.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col3.innerHTML == "O" && col5.innerHTML =="O" && col7.innerHTML == "O"){
        line8.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col3.innerHTML == "X" && col5.innerHTML =="X" && col7.innerHTML == "X"){
        line8.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col1.innerHTML == "O" && col4.innerHTML =="O" && col7.innerHTML == "O"){
        line4.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col1.innerHTML == "X" && col4.innerHTML =="X" && col7.innerHTML == "X"){
        line4.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col2.innerHTML == "O" && col5.innerHTML =="O" && col8.innerHTML == "O"){
        line5.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col2.innerHTML == "X" && col5.innerHTML =="X" && col8.innerHTML == "X"){
        line5.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
    else if (col3.innerHTML == "O" && col6.innerHTML =="O" && col9.innerHTML == "O"){
        line6.style.display = "block";
        setTimeout(function(){
            alert("O wins!");
        }, 250);
    }
    else if (col3.innerHTML == "X" && col6.innerHTML =="X" && col9.innerHTML == "X"){
        line6.style.display = "block";
        setTimeout(function(){
            alert("X wins!");
        }, 250);
    }
}

reloadButton.addEventListener("click", function(){
    Array.from(buttons).forEach(button => {
        button.innerHTML = "";
    });
    Array.from(winLines).forEach(lines => {
        lines.style.display = "none";
    })
})

