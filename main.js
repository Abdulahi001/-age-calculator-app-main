const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const actualDay = document.getElementById('actual-day');
const actualMonth = document.getElementById('actual-month');
const actualYear = document.getElementById('actual-year');
const fieldSpan = document.querySelectorAll('#field')
const ifField = document.querySelectorAll('#if-field')
const validSpan = document.querySelectorAll('#valid')
const button = document.getElementById('btn');
const inputs = document.querySelectorAll('input');
let validDay = document.getElementById('valid-day');
let validMonth = document.getElementById('valid-month');
let validYear = document.getElementById('valid-year');
console.log(validSpan)
let mon = 12;
let y = 2024;
let d = 30;

button.addEventListener('click', () => {

     if(day.value > 0 && day.value <= d && month.value > 0 && month.value <= mon && year.value > 0 && year.value <= y) {
        actualDay.innerHTML = d - day.value  ;
        actualMonth.innerHTML = mon - month.value;
        actualYear.innerHTML = y - year.value;
    } else if(day.value > d && month.value > mon && year.value > y) {
        for(let i = 0; i < validSpan.length; i++) {
            validSpan[i].style.display = 'block'
        }
        ifField.forEach(p => {
            p.style.color = '#ff5757'
        })
        inputs.forEach(input => {
            input.style.border = '1px solid #ff5757'
        })



    } else if(day.value <= 0 && month.value <= 0 && year.value <= 0) {
        actualDay.innerHTML = '- -'
        actualMonth.innerHTML = '- -'
        actualYear.innerHTML = '- -'
        fieldSpan.forEach(span => {
            span.style.display = 'block'
        })
        ifField.forEach(p => {
            p.style.color = '#ff5757'
        })
        inputs.forEach(input => {
            input.style.border = '1px solid #ff5757'
        })
       

    } 




    
    if(day.value > d ) {
        validDay.style.display = 'block'
        ifField.forEach(p => {
            p.style.color = '#ff5757'
        })
        inputs.forEach(input => {
            input.style.border = '1px solid #ff5757'
            
        })
        validSpan.forEach(span , () => {
            
        })
    } else if(month.value > mon) {
        validMonth.style.display = 'block'
        ifField.forEach(p => {
            p.style.color = '#ff5757'
        })
        inputs.forEach(input => {
            input.style.border = '1px solid #ff5757'
            
        })
        validSpan.forEach(span , () => {
            
        })
    } else if(year.value > y) {
        validYear.style.display = 'block'
        ifField.forEach(p => {
            p.style.color = '#ff5757'
        })
        inputs.forEach(input => {
            input.style.border = '1px solid #ff5757'
            
        })
        validSpan.forEach(span , () => {
            
        })

    }

       
})