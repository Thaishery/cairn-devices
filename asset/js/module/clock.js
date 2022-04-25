export default function clock(){
    while(1==1){
    setTimeout(refresh,1000)
    }
}
function refresh(){
    console.log(Date.now())
    return Date.now()
}