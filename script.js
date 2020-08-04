var tryCounter = 3;
var inputDisplay = document.getElementById('pinInputDisplayArea');
document.getElementById('correct-match').style.display = 'none';
document.getElementById('wrong-match').style.display = 'none';

function initialState(){
    document.getElementById('wrong-match').style.display = 'none';
    document.getElementById('generatedPinDisplay').value = '';
    document.getElementById('pinInputDisplayArea').value = '';
    tryCounter = 3; 
}

function generateRandomPin(){
    var pin = Math.floor(1000 + Math.random()*9000);
    document.getElementById('generatedPinDisplay').value = pin;
    document.getElementById('pinInputDisplayArea').value = '';
    document.getElementById('btnSubmit').disabled = false;
    tryCounter = 3;
    document.getElementById('try-left').innerText = tryCounter + ' try left';
    document.getElementById('correct-match').style.display = 'none';
    document.getElementById('wrong-match').style.display = 'none';
}

function btnNumber_Clicked(value){
    if(inputDisplay.value.length < 4){
        inputDisplay.value = inputDisplay.value + value;
    }
    document.getElementById('correct-match').style.display = 'none';
    document.getElementById('wrong-match').style.display = 'none';
}

function btnDelete_Clicked(){
    inputDisplay.value = inputDisplay.value.substr(0,inputDisplay.value.length -1);
}

function btnC_Clicked(){
    inputDisplay.value = '';
}

function btnSubmit_Clicked(generate, input){
    if(generate == input && (generate != '' || input != '')){
        document.getElementById('correct-match').style.display =  'block';
        initialState();
    }
    else if(generate == '' || input == ''){
        return;
    }
    else{
        document.getElementById('wrong-match').style.display =  'block';
        document.getElementById('pinInputDisplayArea').value = '';
        tryCounter--;
        if(tryCounter < 1){
            document.getElementById('btnSubmit').disabled = true;
        }
        document.getElementById('try-left').innerText = tryCounter + ' try left';
    }

}