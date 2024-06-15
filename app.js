const form = document.querySelector("form")
const body = document.querySelector("body")
//this usecase will give you empty
//const height= parseInt(document.querySelector("#height").value)


form.addEventListener("submit",function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value)
    const height= parseInt(document.querySelector("#height").value)
    const result = document.querySelector("#results")
    if (height==='' || height <0 || isNaN(height)) {
        result.innerText=   `Please give a valid Height ${height}`
    } else if
    (weight==='' || weight <0 || isNaN(weight)) {
        result.innerText=   `Please give a valid Weight ${weight}`
    }
    else{
        const bmi =(weight/((height*height)/10000)).toFixed(2)
        let weightCategory = '';

        if (bmi < 18.6) {
            weightCategory = 'You are Under Weight ';
            body.style.backgroundColor= "orange"
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            weightCategory = 'Normal';
            body.style.backgroundColor= "lightgreen"
        } else {
            weightCategory = 'You are Over Weight';
            body.style.backgroundColor= "red"
        }
        result.innerHTML= `<span>${weightCategory} & your BMI is: ${bmi} </span>`
    }
})