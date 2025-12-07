var url = "http://colormind.io/api/";
var data = {
    model: "default",
    input: [[255, 43, 44], [90, 83, 82], "N", "N", "N"]
}
let catchPalette;
let check = '';
let aprovado = false;

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
    }
};



http.open("POST", url, true);
http.send(JSON.stringify(data));
fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => {
        const palette = json.result;
        catchPalette = palette;
        console.log("Palette:", palette);

    })
    .catch(err => {
        console.error("Error:", err);
    });

    

// Example: get a random coffee fact




    
var url2 = 'https://coffee.alexflipnote.dev/';
fetch(url2)
    .then(response => response.json())
    .then(json => {
        const coffeeImage = json.file;
        console.log("Coffee Image URL:", coffeeImage);
    })
    .catch(err => {
        console.error("Error:", err);
    });


calcularIdade = () => {
    const dataNasc = document.getElementById('dataNasc').value;
    const hoje = new Date();
    
var url4 = `https://digidates.de/api/v1/age/${dataNasc}`;
fetch(url4)
    .then(res => res.json())
    .then(data => {
        check = data.age;
        console.log("Idade:", data.age);
        if (dataNasc.length != 0 && check >= 18) {
            console.log('hanoi'); aprovadoi();
        }
        
    })
    .catch(err => {
        console.error("Error:", err);
    });

    
}




function getPalette() {



    let i = catchPalette.length*Math.random();

    let color1 = 'rgb(' + catchPalette[Math.floor(i)][0] + ',' + catchPalette[Math.floor(i)][1] + ',' + catchPalette[Math.floor(i)][2] + ')';
    let color2 = 'rgb(' + catchPalette[Math.floor((i + 1 + catchPalette.length) % catchPalette.length)][0] + ',' + catchPalette[Math.floor((i + 1 + catchPalette.length) % catchPalette.length)][1] + ',' + catchPalette[Math.floor((i + 1 + catchPalette.length) % catchPalette.length)][2] + ')';
    let color3 = 'rgb(' + catchPalette[Math.floor((i + 2 + catchPalette.length) % catchPalette.length)][0] + ',' + catchPalette[Math.floor((i + 2 + catchPalette.length) % catchPalette.length)][1] + ',' + catchPalette[Math.floor((i + 2 + catchPalette.length) % catchPalette.length)][2] + ')';

    // IT WORKS!!!!!!!!!1

let orientation = '0deg';

var dom = document.getElementById('body');
if(dom == null){
    var dom = document.getElementById('body2');
    dom.style.backgroundImage = '-moz-linear-gradient('
        + orientation + ', ' + color1 + ', ' + color2 + `,` + color3 + ')';
}
dom.style.backgroundImage = '-moz-linear-gradient('
    + orientation + ', ' + color1 + ', ' + color2 + `,` + color3 +')';
}
    function aprovadoi()
    {aprovado = true;}
    
function PAHHHH()
{
    if(aprovado == true){
        window.location.href = "https://igorlubaskorkiewicz.github.io/Site-Api/HTML/html2.html";
    }
}

function PAHHH()
{
    window.location.href = "https://igorlubaskorkiewicz.github.io/Site-Api/HTML/html.html" 

}

function randomColor()
{
    
    r = Math.trunc(Math.random()*256), g = Math.trunc(Math.random()*256), b = Math.trunc(Math.random()*256);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    let evilColor = 'rgb(' + (255 - r) + ',' + (255 - g) + ',' + (255 - b) + ')';
    document.getElementById('footer').style.backgroundColor = color; 
    document.getElementById('footer').style.color = evilColor;

}
randomColor();

function storeName() {
    const nameInput = document.getElementById('ageInput');
    let name = nameInput.value;
    var url3 = `https://api.agify.io/?name=${name}`;
    fetch(url3)
    .then(response => response.json()).then(json => {
        const age = json.age;
        console.log("Predicted Age:", age);
        document.querySelector('#resposta').innerHTML = `<h2> Belo nome ${name} </h2> <br>
        <p> você tem ${age} anos </p>`;
    })
    .catch(err => {
        console.error("Error:", err);
    });
    
    if(nameInput.length >= 1){

        console.log(nameInput);
        document.querySelector('#resposta').innerHTML = `<h2> Belo nome ${nameInput} </h2> <br>
        <p> você é {} </p>`;
    }
    
}

if (window.location.href == "https://igorlubaskorkiewicz.github.io/Site-Api/HTML/html2.html")
    {
        setInterval(() => {
            getPalette()        
        }, 1000);
    ;
    }

//rgb(5, 52, 162);
//rgb(250, 203, 93);
