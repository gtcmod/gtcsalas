async function searchPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    const salasGartic = [
        "038394720", "038394725", "03", "038394729", "05", "038394732", "046",
        "038394736", "08", "038394739", "010", "038394741", "012", "038394742",
        "014", "015", "047", "017", "038394745", "038394746", "044", "045",
        "022657", "027541", "027542", "030960", "037197", "059774", "060131",
        "0156331", "019472087", "019472095", "019472132", "023", "024", "026",
        "028", "029", "030", "0156348", "0156349", "01323822", "01433234",
        "01441928", "01495442", "08275914", "08870952", "08870959", "08870981",
        "015392586", "015392590", "018828862"
    ];

    for (const sala of salasGartic) {
        const response = await fetch(`https://gartic.com.br/info_sala.php?x=&id_sala=${sala}`);
        const data = await response.json();
        
        if (data && data.jogadores && data.jogadores.includes(playerName)) {
            document.getElementById('result').innerHTML = `O jogador ${playerName} foi encontrado na sala ${sala}.`;
            return;
        }
    }

    document.getElementById('result').innerHTML = `O jogador ${playerName} não foi encontrado em nenhuma sala.`;
}
