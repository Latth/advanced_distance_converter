let convertType = "miles";
const heading = document.querySelector("h1");
const intro = document.querySelector('p');
const answerDiv = document.getElementById("answer");
const form = document.getElementById("convert");


document.addEventListener('keydown', function (e) {
    let key = e.code;

    if (key == 'KeyK') {
        convertType = "kilometers"
        heading.innerHTML = "Kilometers to Miles Converter"
        intro.innerHTML = " Type in a number of kilometers and click the button to convert the distance to miles."
        console.log('work key k')
        //Change the heading
        // change intro paragraph
        //change the value of the converType variable
    } else if (key == 'KeyM') {
        convertType = "miles"
        heading.innerHTML = "Miles to Kilometers Converter"
        intro.innerHTML = " Type in a number of Miles and click the button to convert the distance to Kilometers."
        console.log('work key m')
    } else {

    }
})

form.addEventListener('submit', function (e) {
            e.preventDefault();
            const distance = parseFloat(document.getElementById('distance').value);

            if (distance) {
                if (convertType == "kilometers") {
                    let conversion = (distance * 0.621371192).toFixed(2)
                    answerDiv.innerHTML = conversion
                    answerDiv.innerHTML = `<h2>${distance} kilometers convert to ${conversion} miles</h2>`
                } else {
                    let conversion = (distance * 1.609344).toFixed(2)
                    answerDiv.innerHTML = conversion
                    answerDiv.innerHTML = `<h2>${distance} kilometers convert to ${conversion} miles</h2>`
                }

                }else{
                    answerDiv.innerHTML = `<h2 style="color: red">Invalid value</h2>`
                }
            })