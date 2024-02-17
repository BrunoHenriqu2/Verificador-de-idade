var button = document.querySelector("input#verify")
button.addEventListener("click", Verificar)

function Verificar () {
    var date = new Date()
    var year = date.getFullYear()
    var res = document.querySelector("div#res")
    var Text = document.querySelector("input#year")

    if (Number(Text.value.length) == 0 || Number(Text.value) > year) {
        window.alert("Insira uma data válida!")
    } else {
        var radm = document.getElementsByName("radsex")[0]
        var radf = document.getElementsByName("radsex")[1]
        var age = year - Number(Text.value)
        var gender = ""
        if (radm.checked) {
            gender = "Male"

            if (age >= 0 && age < 7) {
                res.innerHTML = '<img src = "Imagens/bebe.png" alt = "imagem de um bebê">'
                res.innerHTML += `<p> você nem saiu do berço ainda! apenas ${age} ano (s) </p>`
            } else if (age >= 7 && age < 18) {
                res.innerHTML = '<img src = "Imagens/Kevin.png" alt = "imagem de uma criança">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else if (age >= 18 && age < 30) {
                res.innerHTML = '<img src = "Imagens/homem jovem.png" alt = "imagem de um jovem adulto">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else if (age >= 30 && age <= 50) {
                res.innerHTML = '<img src = "Imagens/veio.png" alt = "imagem de um homem">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else {
                res.innerHTML = '<img src = "Imagens/veio mais veio.png" alt = "imagem de um velho">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            }
        } else {
            gender = "Female"

            if (age >= 0 && age < 3) {
                res.innerHTML = '<img src = "Imagens/bebe.png" alt = "imagem de um bebê">'
                res.innerHTML += `<p> você nem saiu do berço ainda! apenas ${age} ano (s) </p>`
            } else if (age >= 13 && age < 18) {
                res.innerHTML = '<img src = "Imagens/carine menina crianca.png" alt = "imagem de uma criança">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else if (age >= 18 && age < 30) {
                res.innerHTML = '<img src = "Imagens/mulher jovem.png" alt = "imagem de um jovem adulto">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else if (age >= 30 && age <= 50) {
                res.innerHTML = '<img src = "Imagens/mulher adulta.png" alt = "imagem de um homem">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            } else {
                res.innerHTML = '<img src = "Imagens/veia.png" alt = "imagem de um velho">'
                res.innerHTML += `<p> você tem ${age} anos! </p>`
            }
        }
    }
}
