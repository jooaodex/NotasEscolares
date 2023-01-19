/* TRANSFORMAR NOTAS ESCOLARES

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

*/


function getScore(score){
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    if(scoreA){
        console.log("NOTA A")
    }else if(scoreB){
        console.log("NOTA B")
    }else if(scoreC){
        console.log("NOTA C")
    }else if(scoreD){
        console.log("NOTA D")
    }else if(scoreF){
        console.log("NOTA F")
    }else{
        console.log("Nota inválida")
    }

    return score;
}

getScore(91)
getScore(85)
getScore(73)
getScore(61)
getScore(55)
getScore(-1)
getScore(101)