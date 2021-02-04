

var logi = document.getElementById("logar")

logi.addEventListener("click", () => {
    const nm = document.getElementById("name")
    const pw = document.getElementById("pass")
    const logo = document.getElementById("logo")
    let vn = nm.value 
    let vp = pw.value

    if (vn == "exemple@gmail.com" && vp == "senha123"){
        console.log("logou")
        nm.style.border = "2px solid white"
        pw.style.border = "2px solid white"
        
        logo.style.animation = "rodar 0.5s forwards"
        
    }
    else {
        console.log("não logou")
        nm.style.border = "2px dotted rgb(235, 68, 68)"
        pw.style.border = "2px dotted rgb(235, 68, 68)"

        logo.style.animation = "none"

    }
})