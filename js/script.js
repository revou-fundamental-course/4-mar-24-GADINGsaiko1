
try {
    function hiutngBmi(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    let weightError = document.getElementById('weightError');
    let heightError = document.getElementById('heightError');
    let ageError = document.getElementById('ageError');
    let note = document.getElementById('note');
    
    //  fitur validasi
    if (weight == ''){
        weightError .innerHTML = "tolong isi kolom Beratbadan!!";
    }else{
        weightError = ''
    };
    
    if (height == ''){
        heightError .innerHTML = "tolong isi kolom Tinngi!!";
    }else{
        heightError = ''
    };
    
    if (age == ''){
        ageError .innerHTML = "tolong isi kolom Umur!!"
    }else{
        ageError = ''
    };


    // perhitungan bmi / kalkulator
    let resultCount = weight / ((height/100) * (height/100));;
document.getElementById("resultCount") .innerHTML = resultCount.toFixed(2)

if (age < 18 && age > 0){
    fNote .innerHTML = "untuk umur di bawah 18, sebaiknya konsul ke dokter langsung";
}else{
    //   fitur pesan untuk user
    if (resultCount < 18.5){
        note .innerHTML = "anda memiliki kekurangan berat badan, sebaiknya lakukan program bulking untuk manikan Beratbadan";
    }else if (resultCount >= 18.5 && resultCount <= 24.9){
        note .innerHTML = "anda memiliki berat badan yang ideal(normal)";
    }else if (resultCount > 24.9 && 29.9){
        note .innerHTML = "anda memiliki Berat badan berlebih, lakukan program diet untuk menurunkan Beratbadan";
    }else if (resultCount > 29.9){
        note .innerHTML = " anda obesitas ";
    }else{
        note .innerHTML = "ERROR";
    };

    //  fitur pesan untuk user
    if (resultCount < 18.5){
        fNote .innerHTML = "kekurangan berat badan";
    }else if (resultCount >= 18.5 && resultCount <= 24.9){
        fNote .innerHTML = "Berat badan ideal(normal)";
    }else if (resultCount > 24.9 && 29.9){
        fNote .innerHTML = "Berat badan berlebih";
    }else if (resultCount > 29.9){
        fNote .innerHTML = " anda obesitas ";
    }else{
        fNote .innerHTML = "ERROR";
    };
};

};

// fitur reset button
let reset = document.getElementById('reset');
let inputs = document.querySelectorAll('input');

reset.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});

function resetR(){
    let resetN = document.getElementById('fNote')
    let resett = document.getElementById('note')
    let resetC = document.getElementById('resultCount')
    let weightError = document.getElementById('weightError');
    let heightError = document.getElementById('heightError');
    let ageError = document.getElementById('ageError');

    resetN .innerHTML = "-"
    resett .innerHTML = "-"
    resetC .innerHTML = "0"
    weightError .innerHTML = ""
    heightError .innerHTML = ""
    ageError .innerHTML = ""


};


} catch(err){
    console.log(err);
};


