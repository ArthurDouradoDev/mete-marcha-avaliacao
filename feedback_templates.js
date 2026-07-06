/**
 * Templates de mensagens de feedback para o processo seletivo Mete Marcha.
 *
 * Variáveis disponíveis (substituídas em tempo de execução):
 *   {saudacao}  — "Bom dia", "Boa tarde" ou "Boa noite" (automático)
 *   {nome}      — Primeiro nome do candidato, com inicial maiúscula
 *   {avaliador} — Nome do avaliador (salvo no localStorage)
 */
const FEEDBACK_TEMPLATES = {
    selecionado: `{saudacao}, {nome}!

Temos uma ótima notícia: você foi selecionado(a) para a próxima etapa do programa Mete Marcha! 🎉

Em breve, enviaremos mais informações sobre os próximos passos. Parabéns pela aprovação e estamos ansiosos para trabalhar com você.

Qualquer dúvida, estamos à disposição.
Abraços,
{avaliador}`,

    espera: `{saudacao}, {nome}!

Gostaríamos de informar que o seu projeto foi muito bem avaliado e você está na nossa lista de espera. 🚀

Caso surjam novas vagas, entraremos em contato. Agradecemos muito pelo seu interesse e dedicação.

Qualquer dúvida, estamos à disposição.
Abraços,
{avaliador}`,

    desclassificado: `{saudacao}, {nome}!

Agradecemos muito pelo seu interesse e por ter se inscrito no Mete Marcha. Após uma avaliação cuidadosa, infelizmente não seguiremos com o seu projeto para a próxima etapa nesta edição.

Incentivamos que continue desenvolvendo sua ideia e esperamos vê-lo(a) em futuras oportunidades!

Qualquer dúvida, estamos à disposição.
Abraços,
{avaliador}`,

    padrao: `{saudacao}, {nome}!

Seu projeto foi avaliado no processo seletivo do Mete Marcha. Em breve, enviaremos o resultado final.

Qualquer dúvida, estamos à disposição.
Abraços,
{avaliador}`
};
