function calculaRankingGeral() {
    let paises = [];
    let medalhasOuro = [];
    let medalhasPrata = [];
    let medalhasBronze = [];
    let totalMedalhas = [];
  
    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

        if (pais.toLowerCase() === "sair") {
            break;
        }
        //capitaliza a primeira letra do país
        pais = pais.charAt(0).toUpperCase() + pais.slice(1).toLowerCase();
        let medalhasOuropais = parseInt(prompt(`[${pais}] número de medalhas de ouro:`));
        let medalhasPratapais = parseInt(prompt(`[${pais}] número de medalhas de prata:`));
        let medalhasBronzepais = parseInt(prompt(`[${pais}] número de medalhas de bronze:`));
        let totalMedalhaspais = medalhasOuropais + medalhasPratapais + medalhasBronzepais;

        if (!isNaN(medalhasOuropais) && !isNaN(medalhasPratapais) && !isNaN(medalhasBronzepais)) {
            paises.push(pais);
            medalhasOuro.push(medalhasOuropais);
            medalhasPrata.push(medalhasPratapais);
            medalhasBronze.push(medalhasBronzepais);
            totalMedalhas.push(totalMedalhaspais);
        }
        else {
            alert("Por favor, insira um valor numérico válido para as medalhas.");
        }
    }
    if (paises.length > 0) {
        // ranking de medalhas
        let ranking = [];
        for (let i = 0; i < paises.length; i++) {
            ranking.push(`${paises[i]}: ${totalMedalhas[i]} medalhas`);
        }
        ranking.sort((a, b) => {
            let totalA = parseInt(a.split(": ")[1]);
            let totalB = parseInt(b.split(": ")[1]);
            return totalB - totalA;
        });
        //alert(`Ranking de medalhas:\n${ranking.join("\n")}`);

    }else {
        alert("Nenhum dado de medalhas foi inserido.");
    }
    // Exibir o ranking de medalhas
    console.log("#Ranking de medalhas:");
    for (let i = 0; i < paises.length; i++) {
        console.log(`#${paises[i]}: ${totalMedalhas[i]} medalhas`);
    }

    let escolha = prompt("Deseja ver o ranking por tipo de medalha? (s/n)");
    if (escolha.toLowerCase() === "s") {
        let tipo = prompt("Informe o tipo de medalha (ouro, prata ou bronze):");
        tipo = tipo.toLowerCase();
    
        if (tipo === "ouro") {
            console.log("#Ranking de medalhas de ouro:");
            for (let i = 0; i < paises.length; i++) {
                console.log(`#${paises[i]}: ${medalhasOuro[i]} medalhas de ouro`);
            }
        }
        else if (tipo === "prata") {
            console.log("#Ranking de medalhas de prata:");
            for (let i = 0; i < paises.length; i++) {
                console.log(`#${paises[i]}: ${medalhasPrata[i]} medalhas de prata`);
            }
        }
        else if (tipo === "bronze") {
            console.log("#Ranking de medalhas de bronze:");
            for (let i = 0; i < paises.length; i++) {
                console.log(`#${paises[i]}: ${medalhasBronze[i]} medalhas de bronze`);
            }
        }
        else {
            console.log("Tipo de medalha inválido.");
            return;
        }
    } 
}

calculaRankingGeral();
