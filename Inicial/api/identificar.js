export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ erro: "Método não permitido" });
    }

    const { descricao } = req.body;

    if (!descricao) {
        return res.status(400).json({ erro: "Descrição vazia" });
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
Você é um geólogo especialista em mineralogia.
Identifique o mineral com base na descrição abaixo.

Descrição:
${descricao}

Responda no formato:
Nome do mineral:
Composição química:
Dureza:
Ambiente geológico:
`
                        }]
                    }]
                })
            }
        );

        const data = await response.json();

        const texto =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Não foi possível identificar o mineral.";

        res.status(200).json({ resposta: texto });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ resposta: "Erro ao consultar IA." });
    }
}
