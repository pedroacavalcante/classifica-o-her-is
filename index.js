function classificacaoHeroi (nome,experienciaDoHeroi){
    let nivel
    
    if (experienciaDoHeroi < 1000) {
        nivel = "ferro";
    } else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
        nivel = "bronze"
    } else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
        nivel = "prata"
    } else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
        nivel = "ouro"
    } else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
        nivel = "platina"
    } else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
        nivel = "ascendente"
    } else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
        nivel = "imortal"
    } else {
        nivel = "radiante"
    } console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
    const nomeDoHeroi = "Batman"
    const experienciaDoHeroi = 3040

    const nomeDoHeroi1 = "Ronaldinho Gaucho"
    const experienciaDoHeroi1 = 5613

    const nomeDoHeroi2 = "One Punch Man"
    const experienciaDoHeroi2 = 9103

    const nomeDoHeroi3 = "Deus"
    const experienciaDoHeroi3 = 10000000

    classificacaoHeroi (nomeDoHeroi,experienciaDoHeroi)
    classificacaoHeroi (nomeDoHeroi1,experienciaDoHeroi1)
    classificacaoHeroi (nomeDoHeroi2,experienciaDoHeroi2)
    classificacaoHeroi (nomeDoHeroi3,experienciaDoHeroi3)







