export default function clock(){
    const timer = document.getElementById("clock")
    let date = new Date
    const Y = date.getFullYear()
    const M = date.getMonth()+1 //compris entre 0 et 11 ... 
    const J = date.getDate()
    const H = date.getHours()
    const Min = date.getMinutes()
    const S = date.getSeconds()
    const string = J+"/"+M+"/"+Y+"<br/> "+H+":"+Min+":"+S
    timer.innerHTML = string
    setTimeout(clock ,1000)
}