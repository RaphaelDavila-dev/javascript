var agora = new Date()
var hora = agora.getHours()
if(hora< 12){
    console.log(`Bom dia! são ${hora}AM`)
} else if(hora >12 && hora < 18){
    console.log(`Boa tarde! são ${hora}PM`)
} else if(hora < 18 && hora >22){
    console.log(`Boa noite! são ${hora}PM`)
}  else{
    console.log(`Boa madrugada! São ${hora}AM Vai dormi porra! ta no corujão?`)
}