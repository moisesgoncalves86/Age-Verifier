function verify() {
    var date = new Date()
    var year = date.getUTCFullYear()
    var fYear = document.getElementById('txtYear')
    var res = document.querySelector('div#res')
    if (fYear.value.length == 0 || Number(fYear.value) > year) {
        window.alert('[ERROR] Please check your data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fYear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'man'
            if (age >=0 && age <=5){
                img.setAttribute('src', 'h0-5.png')
            }else if (age <= 10) {
                img.setAttribute('src', 'h5-10.png')
            }else if (age <= 15){
                img.setAttribute('src', 'h10-15.png')
            }else if (age <=20){
                img.setAttribute('src', 'h15-20.png')
            }else if (age <= 30){
                img.setAttribute('src', 'h20-30.png')
            }else if (age <= 40){
                img.setAttribute('src', 'h30-40.png')
            }else if (age <= 50){
                img.setAttribute('src', 'h40-50.png')
            }else if (age <= 60){
                img.setAttribute('src', 'h50-60.png')
            }else if (age <= 70){
                img.setAttribute('src', 'h60-70.png')
            }else if (age <= 125){
                img.setAttribute('src', 'h70-100.png')
            }

        }else if (fsex[1].checked) {
            gender = 'woman'
           if (age >= 0 && age <= 5){
            img.setAttribute('src', 'm0-5.png')
           }else if (age <= 10){
            img.setAttribute('src', 'm5-10.png')
           }else if (age <= 15){
            img.setAttribute('src', 'm10-15.png')
           }else if (age <= 20){
            img.setAttribute('src', 'm15-20.png')
           } else if (age <= 30){
            img.setAttribute('src', 'm20-30.png')
           }else if (age <= 40){
            img.setAttribute('src', 'm30-40.png')
           }else if (age <= 50){
            img.setAttribute('src', 'm40-50.png')
           }else if (age <= 60){
            img.setAttribute('src', 'm50-60.png')
           }else if (age <= 70){
            img.setAttribute('src', 'm60-70.png')
           }else if (age <= 125){
           img.setAttribute('src', 'm70-100.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${age} years old ${gender}.`
        res.appendChild(img)
    }
    

}
