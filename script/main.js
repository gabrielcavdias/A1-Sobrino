var tamanhoFont = Number(100)
var altcon = 0
const root = document.documentElement;
function aumentar(){ 
     root.style.setProperty("font-size",tamanhoFont++ + "%")
}
function diminuir(){ 
    root.style.setProperty("font-size",tamanhoFont-- + "%")
}
function altocontraste(){
    if(altcon>0){
        root.style.setProperty("--maincolor", "rgb(44, 44, 44)")
        root.style.setProperty("--sec-color", "rgb(71, 112, 226)")
        root.style.setProperty("--bg-color", "rgb(239, 239, 255)")
        root.style.setProperty("--list-color", "rgb(182, 188, 201)")
        root.style.setProperty("color", "#000")
        altcon=0
        
    }else{
        altcon+=1
        root.style.setProperty("--maincolor", "#000")
        root.style.setProperty("--sec-color", "#fff")
        root.style.setProperty("--bg-color", "#000")
        root.style.setProperty("--list-color", "000")
        root.style.setProperty("color", "#fff")
    }
}