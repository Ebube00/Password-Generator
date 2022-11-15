let psd = document.getElementById('psd')
let up = document.getElementById('up')
let low = document.getElementById('low')
let num = document.getElementById('num')
let cha = document.getElementById('cha')
let btn = document.getElementById('btn')

// let pass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?/.,><=-+'
    empass = ''
    let arr = []
    inputVal = psd.value
    
    up.addEventListener('change', ()=>{
        let upp = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
        if(up.checked == true){
            arr.push(upp) 
        }
    })
    low.addEventListener('click', ()=>{
        let loww = 'qwertyuioplkjhgfdsazxcvbnm'
        if(low.checked == true){
            arr.push(loww)  
        }
    })
    num.addEventListener('click', ()=>{
        let numm = '0123456789'
        if(num.checked == true){
            arr.push(numm)  
        }
    })
    cha.addEventListener('click', ()=>{
        let chaa = '!@#$%^&*()?/.,><=-+'
        if(cha.checked == true){
            arr.push(chaa)  
        }     
    })
    btn.addEventListener('click', ()=>{
        up.checked = false
        low.checked = false
        num.checked = false
        cha.checked = false
        empass = ''
        // inputVal = ''
        let varr = arr.join("")
        console.log(arr.join(""))
        for(let x = 0; x < 8; x++){
            let rand = Math.floor(Math.random() * varr.length)
            empass += varr[rand]
        }
        psd.value = empass
        arr = []
        varr = ''
        console.log(arr)
    })