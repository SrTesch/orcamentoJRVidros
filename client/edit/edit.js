const enviarValores = async () => {
    const tipo = document.getElementById("tipoServ").value;
    const cor = document.getElementById("cor").value;
    const preco = document.getElementById("preco").value;
    
    const initReq = "http://localhost:3001";
    
    const requestBody = JSON.stringify({ tipo, cor, preco });

    try {
        const response = await fetch(initReq + "/changeValue", {
            method: "POST", // Use o método POST para enviar dados no corpo
            headers: {
                "Content-Type": "application/json", // Indique que você está enviando JSON
            },
            body: requestBody, // Insira o corpo da requisição JSON aqui
        });

        if (response.ok) {
            console.log("Valores alterados com sucesso");
        } else {
            console.log("Erro na resposta do servidor");
        }
    } catch (err) {
        console.error(err);
    }
};