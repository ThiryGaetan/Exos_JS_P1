function ageCheck(){
    let age = document.getElementById('age').value;
    if(age >= 18 && age < 110){
        alert('Vous êtes majeur.');
    }else if(age >= 0 && age < 18){
        alert('Vous êtes mineur.');
    }else{
        alert('Valeur invalide, doit être comprise entre 0 et 110.')
    }
}