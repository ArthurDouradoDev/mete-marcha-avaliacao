// State management
const embeddedHeaders = [
  "Nome completo",
  "Já teve alguma experiência empreendedora (empresas ou startups)? ",
  "\"Eu, founder, declaro que tenho pelo menos 3 horas por semana durante 3 meses para me dedicar ao Mete Marcha\"",
  "Nome da startup (se tiver)",
  "Em que fase está a sua startup?",
  "Sua startup é em qual setor?",
  "Tem alguma ideia de solução? Se sim, qual(is)?",
  "Por que você e sua ideia devem fazer parte do Mete Marcha?",
  "Alguma dúvida, reclamação ou sugestão?"
];

// Founder names mapped to embeddedCsvData by index
const embeddedFounderNames = [
  "valentina vesari",
  "Telma Regina de Oliveira Corte",
  "Eyshila de Souza Pereira",
  "Sophia Reis Santana",
  "Pedro Xavier Rodrigues Sant'Ana",
  "Arthur Galvão Coutinho",
  "Vânia Laime Mamani",
  "Sandra Oseas",
  "Fernando Obata Mazzeo",
  "João Henrique Silva de Oliveira",
  "Suelen Aparecida Martins",
  "Lucas de Camargo Basseto Alves",
  "Talita de Souza",
  "Guilherme Tosi",
  "Raul Paes de Barros Belieiro",
  "Martha Aguiar de Barros Nunes",
  "Leandro Dri Manfiolete Troncoso",
  "Gregório Denadai Schmidt",
  "Andre Motta  Corrêa",
  "Alberto Kitanda Marcelino",
  "João Victor Cirto Martins",
  "Fabíola Pacello Salmeron",
  "Eliseu Fernando António Equele",
  "Carlos Cabombo do Nascimento Miguel",
  "Bruno de Oliveira Neves",
  "Adriana Santos de Oliveira",
  "Amílcar Ernesto António José",
  "Rachel Beatriz Aloma Vieira",
  "Laura Mattos de Arruda Campos",
  "Roberta faria da silva feitosa",
  "Guilherme Pego dos Santos",
  "Paulo Honorato Lisbôa",
  "Rwrsilany Silva",
  "Maria Beatriz Segatti Piedade",
  "Willian Cesar Ramos",
  "Vinicius Lima Lustoza",
  "Amanda Augusta Fernandes",
  "Antonius Alexandre Dorta Soares",
  "Matheus Ferreira de Argollo Gusman",
  "Faria Cusseta Samuel Francisco",
  "Mayara Amaral dos Santos",
  "Murilo Oliveira da Silva",
  "Ana Carolina Ferreira Barbara",
  "Venice Roberto Clemente",
  "Leonardo Parreira Xelegati",
  "João Pedro Passos Facioli",
  "Eduardo Alexandre Moura de Lima Oliveira",
  "Amir Reza Emadifard",
  "Ana Claudia Fattori",
  "Viviane Romanos Martins",
  "Sergio Bonini",
  "ANA CAROLINA FERREIRA BARBARA",
  "Ana cCarolina Prado Ricciardi",
  "Daniel Nogueira",
  "José Willame Leite De Sousa Filho",
  "Flávia Regina Binati de Oliveira",
  "Mateus Machado Frigo",
  "Tomásio Eduardo Januário",
  "Marcela Mobiglia D Agostini",
  "Rafaela Almeida Ramos",
  "Aleff dos Santos Rodrigues",
  "Dave Ronel",
  "Raphael Melo Gomes",
  "Débora Freitas Melo",
  "Juliano Nardelli Sasaki",
  "Jéssica Raidislaine Marcolino do Nascimento",
  "Rayssa Gomes Vieira"
];
const embeddedCsvData = [
  {
"originalIndex": 1,
"row": [
  "nao",
  "Sim",
  "Soltas",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Proporcionar um espaço seguro para mulheres 40+ que se sentem sozinhas criarem uma comunidade a partir de gostos semelhantes",
  "Option 1",
  ""
]
  },
  {
"originalIndex": 2,
"row": [
  "Sim",
  "Sim",
  "Bur_in",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Healthtech",
  "Um questionário para mapear a tendência do funcionário de PMEs desenvolver burnout",
  "Porquê ela soluciona um problema das MPEs e gera impacto positivo para os funcionários com a prevenção do desenvolvimento de Burnout.",
  "Colocar mais informações sobre horários, tempo de duração, modalidade dos encontros. "
]
  },
  {
"originalIndex": 3,
"row": [
  "Sim",
  "Sim",
  "BioConecta ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Facilitar o professor das grandes indústrias conectando as com cooperativas ",
  "Idealizei uma startup no catalise e gostaria de dar andamento.",
  "Participei do catalise 2025."
]
  },
  {
"originalIndex": 4,
"row": [
  "Não ",
  "Sim",
  "Ler+",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Queremos fazer um aplicativo que estimule a leitura infantil e sirva como impacto ao cenário da leitura brasileira contribuindo para a formação de uma nova geração de leitores.",
  "Criamos a ideia durante o Catálise desse ano, o qual ganhamos e queremos desenvolver melhor a ideia do projeto e transformar em uma verdadeira startup, pois ficamos apaixonados na ideia do app para a leitura infantil e realmente acreditamos que é um produto viável e que pode impactar positivamente a sociedade. ",
  "Viemos pelo catalise, nos indicaram o mete marcha pois ganhamos a última edição do catalise e viram grande potencial. "
]
  },
  {
"originalIndex": 5,
"row": [
  "Sim! Sou fundador da EdTech ArcadiA Education",
  "Sim",
  "ArcadiA",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Nosso produto é uma plataforma totalmente gamificada que une ferramentas potencializadas por Inteligência Artificial a alunos e professores para tornar o ensino com IA responsável, lúdico, e estratégico",
  "Eu e minha ideia devemos fazer parte do Mete Marcha porque temos como objetivo impactar a Educação no Brasil. Não é apenas sobre lançar um produto no mercado e buscar faturamento, mas é sobre impactar o ecossistema de empreendedorismo e revolucionar a forma como o estudante interage com a junção entre a Educação e a Tecnologia",
  ""
]
  },
  {
"originalIndex": 6,
"row": [
  "Nao",
  "Sim",
  "Contra",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Conectar, por meio de uma plataforma digital, praticantes de esportes que buscam companheiros para práticas esportivas em suas proximidades geográficas, como por exemplo um time para jogar contra no futebol e no basquete, um parceiro para jogar tênis, ou em qualquer outro esporte que não se pratique sozinho.",
  "Em minha opinião, o Mete Marcha propiciaria o ambiente perfeito para meu desenvolvimento pessoal quanto às minhas habilidades de inovação, empreendedorismo e liderança enquanto forneceria as ferramentas necessárias para a evolução de uma ideia capaz de facilitar a vida de pessoas como eu e quaisquer outros amantes de esportes no país, gerando maior acessibilidade e praticidade à uma prática tão essencial para a saúde e para a vida.",
  "Até quando se dá o processo seletivo do projeto Mete Marcha, e como ele será realizado?"
]
  },
  {
"originalIndex": 7,
"row": [
  "Ainda nenhuma que eu me lembre .",
  "Sim",
  "Startup teste",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Medicina personalizavel , otimizar a eficiência do diagnóstico mais preciso através de ferramentas  com dados . ",
  "Pois gostaria resolver o problema de saúde mais cedo e melhorar a eficiência do diagnóstico.",
  "Dúvidas posso criar individualmente , tenho outra ideias de startup como procedería então a seguir ?"
]
  },
  {
"originalIndex": 8,
"row": [
  "Nao",
  "Sim",
  "GeroMove",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Mobilidade e Transporte",
  "Sim. Gostaria de apoio tecnológico para desenvolver um aplicativo voltado à mobilidade urbana de idosos. A proposta é criar um dispositivo de uso intergeracional que auxilie jovens a acompanharem idosos em deslocamentos pela cidade, promovendo caminhadas mais seguras e acessíveis.\n\nA solução busca gerar impacto social por meio de:\n\n- melhoria da mobilidade segura de idosos em áreas urbanas;\n- incentivo à socialização e ao uso de espaços públicos;\n- fortalecimento das relações intergeracionais entre jovens e idosos;\n- criação de uma rede institucionalizada de apoio à locomoção assistida.\n\nAlém do impacto social, o aplicativo também poderá gerar dados relevantes para pesquisas sobre acessibilidade urbana, envelhecimento ativo e inclusão social.",
  "Acredito que minha ideia deve fazer parte do Mete Marcha por unir impacto social, inovação e potencial de transformação urbana. O projeto propõe uma solução tecnológica voltada à mobilidade assistida de idosos, promovendo segurança, inclusão e interação entre gerações em espaços públicos.\nAlém do desenvolvimento do aplicativo, a proposta também possui caráter social e científico, ao incentivar jovens a compreenderem os desafios enfrentados pelos idosos no cotidiano urbano. Essa experiência prática fortalece a empatia, a consciência cidadã e a valorização do envelhecimento ativo.\nTenho interesse em participar do programa porque acredito que o Mete Marcha pode oferecer o suporte técnico, estratégico e colaborativo necessário para transformar uma ideia com propósito social em uma solução real, escalável e acessível. Quero aprender, desenvolver a ideia de forma profissional e contribuir com um projeto que possa gerar impacto positivo na vida das pessoas e nas cidades.",
  "Agradeço pela oportunidade de participar do processo. Considero muito importante a existência de iniciativas que incentivem estudantes a desenvolver soluções com impacto social e apoio à inovação. Minha principal expectativa é poder aprender com profissionais da área e transformar a ideia em um projeto tecnicamente viável e acessível para a população."
]
  },
  {
"originalIndex": 9,
"row": [
  "Sim. Desde o ensino médio venho desenvolvendo projetos próprios ligados a empreendedorismo. O principal foi a criação de uma marca de streetwear com identidade voltada ao estilo Y2K, chamada HVNLY Clothing Brand. Fiquei responsável por todas as etapas do negócio: desenvolvimento das estampas, contato com fornecedores, produção das peças, divulgação nas redes sociais e vendas. Foi um projeto de pequena escala, resultando em aproximadamente 23,2% sobre a produção do lote, de modo a ser compativel com os objetivos inicialmente planejados para o projeto.",
  "Sim",
  "TOPA",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "O Topa, seria uma plataforma de reserva de quadras esportivas com sistema social de organização de jogos.\nO problema que o Topa resolve é duplo. Para jogadores, organizar uma partida hoje é caótico: a reserva é feita por telefone ou WhatsApp, muitas vezes achar quadras na região é difícil e demanda tempo e pesquisa manual sem direcionamento, o racha é controlado manualmente, e o organizador vira cobrador dos amigos toda semana. Para donos de quadra, a gestão de horários ainda é feita em planilhas ou cadernos, com alta taxa de no-show e sem nenhuma ferramenta de marketing digital/ marketplace acessível para achar os consumidores em potencial do seu produto.\nO Topa resolve os dois lados ao mesmo tempo. Quando um jogador reserva uma quadra pelo app, um lobby é criado automaticamente com link compartilhável. Os amigos entram, confirmam presença e enviam o comprovante de pagamento diretamente no app, que registra em tempo real quem pagou e quem não pagou, eliminando toda a gestão manual que hoje acontece no WhatsApp.\nPara os donos de quadra, o Topa entrega três ganhos concretos: aumento de ocupação via reservas digitais 24 horas por dia, gestão completa de agenda e pagamentos num único painel, e acesso a uma ferramenta de marketing chamada Topear — onde a quadra paga para aparecer com destaque nos resultados de busca para jogadores da região, similar ao modelo de restaurantes patrocinados do iFood.",
  "Sou um empreendedor brasileiro com histórico comprovado de execução. Fundei a HVNLY, uma marca de streetwear independente, onde conduzi todo o ciclo do negócio: design, produção, estratégia e vendas. Como resultado, a operacao obteve lucro de aproximadamente 23.2%. Essa experiência me ensinou na prática como sair de uma ideia e chegar num produto real com resultado financeiro.\nO Topa nasceu de uma dor que qualquer brasileiro que pratica esportes coletivos conhece, organizar jogos é um caos. Reserva por WhatsApp, dividir valor da quadra com controle manual, organizador que vira cobrador e a dificuldade de achar quadras novas na sua região de modo intuitivo sem pesquisa confusa no Google Maps. É um problema real, recorrente, e sem solução adequada no mercado brasileiro.\nAté aqui já construí uma base sólida: identidade visual definida, planejamento completo de produto com fluxos de usuário detalhados, modelo de negócio com cinco streams de receita, e um planejamento financeiro inicial estruturado com TAM, SAM e SOM.\nAcredito que o Mete Marcha é o ambiente certo para transformar esse planejamento em execução real: com mentoria, rede e estrutura para validar as primeiras hipóteses de mercado e preparar o Topa para captação.",
  ""
]
  },
  {
"originalIndex": 10,
"row": [
  "Participei durante um ano da empresa júnior de meu curso. Dentro do setor de marketing.",
  "Sim",
  "CarbonoColetivo",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Cleantech / Greentech",
  "Através de projetos de inpacto social, viabilizar a emissao de certificados de crédito de carbono",
  "Tornar viável e acessivel o mapeamento de redução de emissões de GEE dentro de projetos sociais que nao se limitam à reflorestamento. Portanto, evidenciar e quantificar o impacto socioambiental real através de nossas serviços ",
  ""
]
  },
  {
"originalIndex": 11,
"row": [
  "Sim",
  "Sim",
  "Sem nOme",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Sim",
  "Tirar a ideia do papel",
  "Não "
]
  },
  {
"originalIndex": 12,
"row": [
  "Sim",
  "Sim",
  "Ludotopia",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Edtech",
  "A minha startup é do ramo de jogos \"educativos\" (entre aspas, pois acreditamos que todo jogo ensina alguma coisa). Preciso de investidores para compra de insumos e fontes de marketing para validar e vender melhor os produtos em desenvolvimento.",
  "Pois a única coisa que falta são fontes e pessoas que acreditam em uma educação lúdica dos jogos analógicos e digitais que crescem a cada dia no nosso país, democratizando o acesso ao divertimento e ao aprendizado, de forma lúdica.",
  ""
]
  },
  {
"originalIndex": 13,
"row": [
  "Não ",
  "Sim",
  "Não tenho ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Não tenho ",
  "Porque ela é importante ",
  ""
]
  },
  {
"originalIndex": 14,
"row": [
  "Não. Somente experiência acadêmica, nesse contexto.",
  "Sim",
  "Stokio",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Healthtech",
  "Sim. A ideia é o Stokio, um software de gestão de estoque, medicamentos e insumos para abrigos e instituições de cuidado (ex.: lares, casas de acolhimento, unidades com farmácia interna), ILPI's no geral.\n\nProblema: muitas equipes ainda controlam medicamentos e materiais em planilhas, cadernos ou sistemas genéricos. Isso gera erros operacionais graves: não saber o que vence, onde está cada lote, quanto cada residente consome, dificuldade em relatórios regulatórios (ex.: psicotrópicos) e retrabalho na reposição.\n\nSolução: uma plataforma web que centraliza cadastro, posição física (armário/gaveta/setor), movimentações (entrada, saída, transferência), alertas (vencimento, estoque mínimo) e relatórios exportáveis (PDF/Excel), com controle de acesso por função e suporte a múltiplos abrigos.\n\nEstágio atual (caminho ao MVP): já existe um produto em desenvolvimento com dashboard, gestão de residentes e caselas, estoque unificado, movimentações, painel administrativo, auditoria e módulos opcionais (ex.: prontuário). O foco do MVP no Mete Marcha é validar com mais instituições reais se o fluxo diário reduz tempo e erros, especialmente relatórios, vencimentos e consumo por residente antes de escalar comercialmente, uma vez que tenho um cliente piloto.",
  "Acredito que o Stokio e eu temos muito fit com o Mete Marcha porque estamos exatamente no estágio em que o programa gera mais impacto: já existe uma dor real, uma solução possível e agora precisamos validar isso junto aos usuários certos.\n\nO problema que buscamos resolver é muito concreto. Instituições de longa permanência ainda enfrentam dificuldades com controle de estoque, vencimentos, rastreabilidade por residente, desperdícios e geração de relatórios confiáveis. Grande parte desse processo ainda depende de planilhas e controles manuais, o que gera retrabalho e insegurança operacional.\n\nO Stokio nasceu justamente para simplificar essa rotina. A ideia é construir uma solução prática, que reduza a complexidade do dia a dia da equipe e ajude as instituições a terem mais controle, previsibilidade e segurança nas operações.\n\nHoje já temos capacidade técnica para evoluir o produto continuamente, com entregas curtas e validações frequentes. Nossa visão é trabalhar sempre em ciclos rápidos: identificar uma hipótese, implementar uma melhoria e validar se aquilo realmente resolve uma dor do usuário. Queremos priorizar o que é útil de verdade no cotidiano das instituições, e não apenas funcionalidades “bonitas” sem impacto real.\n\nO Mete Marcha pode acelerar muito esse processo, principalmente através das mentorias, da estrutura de validação e do contato com usuários reais. Acreditamos que o programa pode nos ajudar a priorizar melhor o MVP, conduzir entrevistas mais eficientes e transformar feedback em evolução concreta do produto.\n\nMais do que sair com um sistema pronto, queremos sair com evidências reais de valor: economia de tempo, redução de desperdícios, menos rupturas de estoque e relatórios mais confiáveis. Para nós, validar impacto é tão importante quanto desenvolver tecnologia.",
  "Não"
]
  },
  {
"originalIndex": 15,
"row": [
  "Trabalho em uma startup mas quero abrir a minha",
  "Sim",
  "Algacore",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "A Algacore vai desenvolver um sistema de produção de ficocianina grau cosmetico em Fase 1 e farmacêutico em Fase 2 a partir de Arthrospira platensis (Spirulina), utilizando fotobiorreatores tubulares de PMMA indoors. O modelo é B2B, voltado a indústrias cosméticas e farmacêuticas e de ingredientes funcionais que demandam pigmento de alta pureza com rastreabilidade de processo.\nA ideia no futuro é ser carbono zero, para ser atrativa no mercado nacional via SBCE.",
  "Sou farmacêutico formado pela USP e empreendedor de primeira viagem. Na Algacore temos a tecnologia definida, o modelo financeiro desenvolvido e a sociedade sendo formalizada, mas ainda precisamos acelerar a validação comercial com clientes B2B e construir nossa rede de contatos no ecossistema de inovação. O Mete Marcha pode nos ajudar a trilhar esse caminho, oferecendo mentoria prática e conexão com outros empreendedores e parceiros dentro da USP.",
  ""
]
  },
  {
"originalIndex": 16,
"row": [
  "Trabalho na Brex - foi uma startup adquirida pelo Capital One. Atualmente estou desenvolvendo um projeto mas estou tendo dificuldades de como estruturar.",
  "Sim",
  "Sino App",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Edtech",
  "Estamos desenvolvendo um aplicativo pra facilitar estudo de mandarim no público brasileiro e português no público chinês ",
  "Acredito que é uma oportunidade de desenvolver um projeto que teria impacto pra estudantes de mandarim quanto chineses que estudam português, o que é interessante considerando que a China se conecta cada vez mais ao Brasil. ",
  ""
]
  },
  {
"originalIndex": 17,
"row": [
  "Não",
  "Sim",
  "Plantar floresta",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Implantação de sistemas agroflorestais por meio de pomares, hortas e jardins sensoriais agroecológicos em instituiçoes educativas",
  "A necessidade de trabalhar uma educação ambiental crítica e prática em instituicoes educativas.",
  ""
]
  },
  {
"originalIndex": 18,
"row": [
  "Ainda não.",
  "Sim",
  "Ta Na Mão (Protótipo)",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Estou idealizando e começando a validar a ideia de uma plataforma voltada para pequenos e médios empreendedores que realizam vendas principalmente pelo WhatsApp ou por sites externos independentes que não funcionam tão bem. A proposta é centralizar catálogo de produtos, organização de pedidos e clientes em um único ambiente simples e acessível, tornando a operação dessas PMEs mais profissional e eficiente, além de permitir que consumidores encontrem com mais facilidade negócios locais próximos, encurtando o processo de descoberta e aumentando a visibilidade e as vendas dessas empresas. Funcionando quase como um “iFood de variedades” na visão dos clientes, a plataforma reuniria diferentes vendedores locais, como floriculturas, lojas de suplementos, bijuterias, roupas, pet shops, eletrônicos, decoração artesanal, cosméticos, perfumaria, entre outros.",
  "Acredito que muitos pequenos empreendedores já possuem demanda e produtos de qualidade, mas ainda enfrentam dificuldades com organização, visibilidade digital e aquisição de novos clientes. Nossa proposta busca resolver problemas reais de PMEs brasileiros através de tecnologia acessível e de fácil utilização, conectando negócios locais a consumidores de maneira mais eficiente. Participar do Mete Marcha seria uma oportunidade importante para transformar a ideia em uma startup com potencial de impacto social e escalabilidade.",
  ""
]
  },
  {
"originalIndex": 19,
"row": [
  "NAo",
  "Sim",
  "Nao tenho",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Nao",
  "Quero ter start up",
  ""
]
  },
  {
"originalIndex": 20,
"row": [
  "Não ",
  "Sim",
  "Tecnologia ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Não ",
  "Porque acho salutar ",
  "Não "
]
  },
  {
"originalIndex": 21,
"row": [
  "Ja comecei uma empresa de chaveiros para ganhar dinheiro no início da faculdade",
  "Sim",
  "Nomos",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Outra",
  "Grande parte dos advogados têm um problema específico: clientes que ligam o tempo todo perguntando 'como está meu processo?'. A gente resolve isso com um portal do cliente que mostra, de forma visual, exatamente onde o processo está — com a linguagem certa para cada tipo de caso.",
  "Hoje, a Nomos é uma proposta simples mas que resolve um problema real para grande parte dos advogados, é um projeto que ja está sendo feito e tem tudo para dar certo.",
  ""
]
  },
  {
"originalIndex": 22,
"row": [
  "Sim, doze anos lidando com criação de startups e suas fases, pesquiso na área, empreendo e trabalhei também com fomento.",
  "Sim",
  "E ai Gepetto?",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Processos para Gestão Pública utilizando IA de segunda geração.",
  "A gestão pública é um entremeado de burocracia e o domínio de IA baixo - a maioria das pessoas só usa IA ruim e de maneira superficial.",
  "Nenhuma."
]
  },
  {
"originalIndex": 23,
"row": [
  "não",
  "Sim",
  "não tenho",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Healthtech",
  "não tenho",
  "porque quero aprender",
  "Eu não tenho nenhuma Startup, mas quero aprender "
]
  },
  {
"originalIndex": 24,
"row": [
  "Não",
  "Sim",
  "Educação",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Socializar e melhorar práticas de ensino de línguas africanas/minorizadas",
  "Porque percebo haver essa necessidade",
  "Goastaria de ter essa oprtunidade para aprender e interagir convosco."
]
  },
  {
"originalIndex": 25,
"row": [
  "Não",
  "Sim",
  "AgroNutri AI",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Ainda não estão totalmente definidas.",
  "Compreender todas as etapas que envolvem desde a idealização até a construção real da Startup.",
  ""
]
  },
  {
"originalIndex": 26,
"row": [
  "Não ",
  "Sim",
  "Projeto Amana",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Edtech",
  "​O Projeto Amana é uma interface técnica que atua na interseção entre a Linguística e a Psicologia Intercultural para qualificar o acolhimento de refugiados e migrantes. A solução utiliza a mediação linguística como uma ferramenta de suporte para pessoas com perfil de trauma severo, reconhecendo que o acolhimento humanitário exige mais do que a tradução literal; exige a validação da 'pessoa' em sua dimensão relacional. Através de fluxos que consideram princípios da Terapia Cognitivo-Comportamental (TCC) e do ensino de Português como Língua de Acolhimento (PLAC), o projeto mitiga ruídos de comunicação que geram estresse e desorientação, promovendo a reconstrução da autoestima e do sentido da vida em contextos de crise.",
  "Minha participação se justifica pela oportunidade de converter um projeto de pesquisa de alto rigor acadêmico em uma tecnologia social escalável. Sou mestranda no Programa de Pós-Graduação em Humanidades, Direitos e Outras Legitimidades (USP), sob orientação do Prof. Dr. Paulo Daniel Elias Farah, que também preside a BibliASPA - Biblioteca Centro de Pesquisa América do Sul Paises Árabes África. O projeto mobiliza minha formação como mediadora cultural pela OIM e a experiência prática no acolhimento de migrantes árabes e africanos, contando com o apoio futuro da ONG Arro para implementação de campo. A proposta alinha-se cientificamente à linha de pesquisa da Profª Drª Sylvia Duarte Dantas, integrando psicologia e direitos humanos para oferecer uma resposta ética e tecnicamente validada às lacunas do terceiro setor.",
  "Gostaria de destacar que o Projeto Amana está intrinsecamente ligado ao meu projeto de mestrado no PPGHDL/USP. Sob a orientação do Prof. Paulo Farah, pretendo utilizar o suporte do Mete Marcha para validar tecnicamente a interface de tradução e mediação, garantindo que o desenvolvimento da startup ocorra em total sinergia com os avanços científicos e éticos da minha pesquisa universitária."
]
  },
  {
"originalIndex": 27,
"row": [
  "Nenhuma ",
  "Sim",
  "Não tenho ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Ambiental ",
  "Consultoria sustentável ",
  "Não "
]
  },
  {
"originalIndex": 28,
"row": [
  "Não ",
  "Sim",
  "Não tem",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Não ",
  "Porque minha ideia pode ajudar produtores rurais do Brasil todo",
  ""
]
  },
  {
"originalIndex": 29,
"row": [
  "Sim! Durante a pandemia tive uma loja online, o que me possibilitou adquirir muitas experiências. ",
  "Sim",
  "RecriaHub ",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Fashiontech / Beautytech",
  "O Recria Hub é uma rede colaborativa de ateliês e marcas criativas voltada para moda circular, produção artesanal e impacto social.\n\nA proposta surgiu da percepção de dois problemas principais: o desperdício crescente da indústria da moda e a invisibilidade de muitos talentos artesanais, especialmente costureiras e artesãos que possuem grande conhecimento técnico, mas pouca valorização e oportunidade no mercado atual.\n\nO Recria Hub busca transformar essa realidade criando núcleos criativos colaborativos que unem costureiras, artesãos, jovens aprendizes e artistas independentes para desenvolver coleções limitadas e produtos autorais através de upcycling e reaproveitamento têxtil.\n\nDiferente do modelo tradicional da moda massificada, o foco não está em produzir milhares de peças iguais, mas em criar produtos exclusivos, sustentáveis e com identidade própria, valorizando o processo criativo, o trabalho manual e a história por trás de cada peça.\n\nCada núcleo do hub poderá possuir sua própria especialidade e identidade criativa, como roupas, crochê, bordado, calçados ou outros produtos artesanais, respeitando os talentos e características culturais de cada comunidade local. Apesar das diferentes identidades, todos os núcleos compartilharão a mesma metodologia colaborativa, sustentável e criativa proposta pelo Recria Hub.\n\nAlém da produção e comercialização dos produtos, o projeto também busca criar espaços de aprendizagem, convivência e capacitação, incentivando a troca de conhecimento entre gerações e fortalecendo a economia criativa local.\n\nA longo prazo, o objetivo é transformar o Recria Hub em uma rede escalável de produção criativa e circular, conectando diferentes ateliês e marcas independentes através de um mesmo ecossistema colaborativo.",
  "Acredito que o Recria Hub tem potencial para fazer parte do Meta Marcha por unir sustentabilidade, economia criativa e impacto social em um modelo de negócio inovador e com potencial de crescimento.\n\nA ideia surgiu a partir da minha própria experiência prática trabalhando com produção artesanal e upcycling. Hoje já atuo nesse mercado de forma independente e venho percebendo um crescimento real na demanda por peças autorais, sustentáveis e produzidas de forma mais humana e exclusiva. Atualmente, a procura já ultrapassa minha capacidade individual de produção, o que reforça o potencial de expansão do projeto e a necessidade de estruturar um modelo colaborativo e escalável.\n\nO Recria Hub busca criar uma alternativa à lógica da produção massificada da moda tradicional através de uma rede de ateliês e marcas criativas conectadas por um mesmo ecossistema colaborativo. O projeto pretende unir costureiras, artesãos, jovens aprendizes e artistas independentes para desenvolver produtos sustentáveis com identidade própria, valorizando o trabalho artesanal, o reaproveitamento têxtil e a economia circular.\n\nAlém do impacto ambiental positivo, o projeto também busca gerar oportunidades de renda, aprendizagem e inclusão produtiva para pessoas que muitas vezes não encontram espaço no mercado tradicional.\n\nVejo o Meta Marcha como uma oportunidade essencial para validar, estruturar e desenvolver o potencial do Recria Hub como uma startup criativa, sustentável e escalável.",
  "Apenas agradecer. Avante!!"
]
  },
  {
"originalIndex": 30,
"row": [
  "Não ",
  "Sim",
  "Não tenho.",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Brinquedos para faixa etária de 9-14 anos.",
  "Porque,  a  ideia de desenvolver brinquedos,  para está faixa etária tem como objetivo: desenvolver o aprendizado prático do raciocínio abstrato e estimular o pensamento estratégico. ",
  "Não "
]
  },
  {
"originalIndex": 31,
"row": [
  "Quando eu era adolescente tive uma loja de dropshipping e recentemente uma página de instagram que chegou a mais de 180k seguidores e vendi.",
  "Sim",
  "SploreAI",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Fintech",
  "Agente de IA para revenda de ingressos on-line, assegurando/automatizando a compra e facilitando a venda. ",
  "O mercado de shows brasileiro é o segundo maior do mundo, acima de países como Alemanha, Japão, Inglaterra e Canadá. Entretanto, nossa infraestrutura tecnológica e nossos índices de segurança sequer competem com os dessas superpotências.\n\nNesse contexto, o mercado de revenda de ingressos online movimenta milhões todos os anos — e hoje funciona de forma dispersa, insegura e informal, majoritariamente via grupos de WhatsApp. A demanda é alta, o senso de urgência é real e a dor é clara: comprador sem garantia, vendedor sem praticidade.\n\nPensando nisso, desenvolvemos um agente de IA integrado ao WhatsApp onde, em 4 a 5 mensagens, você compra o ingresso mais barato disponível naquele momento ou vende o seu sem precisar divulgar em grupos e redes sociais. Nós intermediamos a transação, garantindo segurança para ambos os lados.\n\nO desenvolvimento dessa solução passa pelo meu conhecimento em marketing e vendas — com experiência em páginas de dezenas de milhares de seguidores e como Diretor Comercial da ICMC JR, onde batemos o recorde histórico de faturamento no semestre — e pela visão técnica do meu sócio, com mais de 4 anos de programação, formação na Marinha e experiência sólida com IAs, APIs e agentes.",
  "Que as mentorias não sejam extremamente básicas, das quais qualquer um poderia aprender com vídeo no youtube."
]
  },
  {
"originalIndex": 32,
"row": [
  "Não",
  "Sim",
  "C.I.A (Companhia dos Insetos Ajudantes)",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Criação de insetos praga para fornecimento a laboratórios para otimizar criações e experimentos assim realizando pesquisas de forma mais eficiente",
  "É uma ideia que visa impulsionar a pesquisa do controle biológico no país (algo que vem crescendo a cada ano) mas que precisa de auxílio para realmente dar os primeiros passos",
  "Não"
]
  },
  {
"originalIndex": 33,
"row": [
  "Não",
  "Sim",
  "TaxDigital",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Outra",
  "Sim. O TaxDigital é uma plataforma educacional e tecnológica voltada à capacitação em contabilidade tributária na economia digital, com apoio de inteligência artificial especializada. A solução busca auxiliar estudantes, docentes e profissionais na compreensão de temas tributários complexos, especialmente aqueles relacionados à reforma tributária brasileira, ao IBS, à CBS, à tributação de plataformas digitais e às novas exigências de conformidade fiscal.\n\nA proposta combina base normativa estruturada, assistentes virtuais especializados, casos práticos, feedback formativo e recursos de análise documental. O objetivo é transformar conteúdos tributários complexos em experiências de aprendizagem aplicada, aproximando teoria, legislação e prática profissional.",
  "O TaxDigital deve fazer parte do Mete Marcha porque já possui uma proposta estruturada e vinculada a um problema real: a dificuldade de estudantes e profissionais compreenderem e aplicarem, de forma prática, as mudanças tributárias associadas à economia digital e à reforma tributária brasileira.\n\nA solução nasceu no contexto da minha pesquisa de doutorado na Universidade de São Paulo e está em fase de validação, com um protótipo inicial voltado à capacitação em contabilidade tributária digital. Neste momento, o projeto precisa avançar na definição do público prioritário, no refinamento da proposta de valor, nos testes com usuários e na construção de um modelo viável de expansão.\n\nMinha trajetória acadêmica e profissional em contabilidade, direito tributário, administração e ciência de dados contribui para a consistência técnica do projeto. Ao mesmo tempo, o Mete Marcha pode apoiar a transformação dessa base científica em uma solução mais aderente ao mercado, com potencial de impacto educacional e social.\n",
  "\nGostaria apenas de saber se o programa também acolhe projetos em fase de validação que tenham origem em pesquisa acadêmica e que já contem com um protótipo inicial. Tenho interesse em aprimorar o TaxDigital com apoio de mentoria, validação com usuários e orientação sobre modelo de negócio.\n"
]
  },
  {
"originalIndex": 34,
"row": [
  "Sim, há trabalhei em 2 projetos financiados pela EMBRAPII. O primeiro parceira IPT/CTC no desenvolvimento de semente de cana de açucar e depois na ESALQ/empresa sementeira relacionada a tratamento industrial de sementes com biocontroladores ",
  "Sim",
  "BioTSI",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Desenvolvimento de uma tecnologia para controle de qualidade de sementes tratadas com bioinsumos, utilizando análise de imagens multiespectrais e fluorescência para monitoramento não destrutivo da presença, distribuição e viabilidade de microrganismos benéficos, como Trichoderma spp. e Bacillus spp., durante o armazenamento.\n\nA proposta busca integrar inteligência espectral, análise de imagens e modelos preditivos para auxiliar empresas de sementes e tratamento industrial de sementes (TSI) na padronização, rastreabilidade e validação da qualidade biológica dos tratamentos realizados.\n\nA solução poderá futuramente evoluir para uma plataforma/software de diagnóstico rápido aplicada ao setor de sementes e bioinsumos.",
  "Acredito que minha ideia possui potencial de inovação por unir tecnologia de sementes, bioinsumos e análise de imagens multiespectrais para resolver um problema ainda pouco explorado no setor: o controle de qualidade de microrganismos aplicados via tratamento industrial de sementes (TSI).\n\nAtualmente, o uso de bioinsumos cresce rapidamente no agronegócio, porém o monitoramento da sobrevivência e da qualidade desses microrganismos nas sementes ainda depende de análises laboratoriais destrutivas, demoradas e de alto custo. Minha proposta busca desenvolver uma solução não destrutiva, rápida e escalável utilizando análise de imagens multiespectrais, fluorescência e modelos preditivos aplicados à análise de sementes.\n\nSou doutoranda na área de tecnologia de sementes e atualmente desenvolvo exatamente essa linha de pesquisa no meu doutorado, avaliando a sobrevivência de microrganismos benéficos em sementes tratadas e armazenadas por meio de análises espectrais e microbiológicas. Os resultados obtidos até o momento são bastante promissores, indicando potencial para distinção e monitoramento dos bioinsumos por assinaturas espectrais específicas.\n\nAcredito que participar do Mete Marcha será importante para transformar uma pesquisa acadêmica com potencial aplicado em uma solução inovadora conectada às demandas reais do mercado, além de desenvolver conhecimentos em empreendedorismo, validação de mercado e modelagem de negócios.",
  ""
]
  },
  {
"originalIndex": 35,
"row": [
  "Sim.",
  "Sim",
  "Mudô",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "A ideia é criar uma startup que transforme a mudança residencial em algo simples, organizado e praticamente automático. Hoje, mudar de casa normalmente significa estresse, perda de tempo, dezenas de contatos diferentes, preocupação com transporte, montagem, limpeza, danos, vistoria e coordenação de prestadores. Muitas pessoas precisam conciliar tudo isso enquanto continuam trabalhando e mantendo a rotina.\n\nA proposta da startup é resolver exatamente essa dor: o cliente informa o que precisa com poucos cliques, e toda a operação é organizada pela plataforma. A startup seria responsável pela curadoria e coordenação dos parceiros envolvidos, entregando ao cliente uma experiência centralizada, segura e sem dor de cabeça.\n\nO objetivo é que, principalmente em mudanças menores ou apartamentos compactos, o cliente possa literalmente sair para trabalhar pela manhã e voltar no mesmo dia para um novo endereço já organizado, com móveis montados, itens posicionados e tudo pronto para uso. Uma “mudança por um clique”.\n\nMais do que transportar caixas, a startup vende tranquilidade, praticidade e ganho de tempo em um dos momentos mais cansativos da vida das pessoas. O diferencial está justamente em transformar um processo caótico em uma experiência premium, simples e confiável.",
  "Acredito que eu e minha ideia podemos contribuir muito com o Mete Marcha porque estamos exatamente no momento de transformação que o programa busca apoiar: uma ideia com potencial real de mercado, mas que precisa ser validada, estruturada e desenvolvida da forma correta.\nMinha startup nasce da observação de um problema cotidiano que afeta milhares de pessoas: o estresse e a desorganização envolvidos em mudanças residenciais. A proposta busca transformar esse processo em uma experiência mais simples, segura e eficiente, centralizando a gestão dos serviços e oferecendo mais praticidade ao cliente. Vejo potencial em criar uma solução escalável em um mercado grande, fragmentado e ainda pouco inovador.\nMais do que apenas ter uma ideia, tenho vontade genuína de construir algo relevante. Tenho buscado estudar o mercado, conversar sobre o modelo de negócio, entender dores reais dos usuários e refletir sobre diferenciais que tornem a solução sustentável e competitiva. Quero usar o programa como uma oportunidade de aprender fazendo, testar hipóteses e evoluir a ideia com apoio de mentores e contato com outros empreendedores.\nComo estudante de engenharia, acredito que posso agregar ao programa com pensamento analítico, organização, capacidade de resolver problemas e vontade de executar. Ao mesmo tempo, sei reconhecer que empreender exige aprendizado constante, e justamente por isso acredito que o Mete Marcha é o ambiente ideal para transformar essa ideia em algo concreto, validado e com potencial de impacto real.",
  ""
]
  },
  {
"originalIndex": 36,
"row": [
  "Não",
  "Sim",
  "Acompanhamento Didático Pedagógico Individualizado (ADPI)",
  "Lançamento (Precisa de ajuda com contatos, investidores)",
  "Edtech",
  "Sanar a falta de dedicação/atenção dos pais aos cuidados educacionais dos filhos.",
  "Gostaria de refinar e formalizar o empreendimento que desenvolvi.",
  ""
]
  },
  {
"originalIndex": 37,
"row": [
  "Não",
  "Sim",
  "Não se aplica",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Capacitação sobre Emergências climáticas, soluções baseadas na natureza e governança",
  "Demanda por estrutura de governança robusta das organizações, conhecimento sobre processos",
  ""
]
  },
  {
"originalIndex": 38,
"row": [
  "sim em empresa (farmácia)",
  "Sim",
  "ainda não há",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "trata-se de uma GovTech com possibilidade de desmembrar em Healthtech e Edtech, pois é um banco de dados com todas as informações dos municípios do Brasil com dados que podem ajudar tomada de decisões e decisões estratégicas para governantes e empreendedores, ou seja, iniciativas de natureza pública e privada",
  "por ter potencial em ser concretizado como GovTech e ainda contar com possibilidade de desmembrar em Healthtech e Edtech futuramente",
  "dúvidas surgem durante a prática, as etapas pra implementação de sonho e sua concretização em iniciativas plausíveis "
]
  },
  {
"originalIndex": 39,
"row": [
  "Não",
  "Sim",
  "Não tem",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Protocolo de infraestrutura de rede social descentralizada",
  "Possível impacto social e soberania digital",
  "Não"
]
  },
  {
"originalIndex": 40,
"row": [
  "Amigo da poli quando participava em diversas atividades ",
  "Sim",
  "Não tenho ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Ainda não tenho até ao momento",
  "É importante para o crescimento acadêmico ",
  "Eu não vejo se é para todos estudantes de diversos níveis ou é direcionado só para graduação essa é minha dúvida que encontrei."
]
  },
  {
"originalIndex": 41,
"row": [
  "Sim",
  "Sim",
  "Sankofa",
  "Lançamento (Precisa de ajuda com contatos, investidores)",
  "Fintech",
  "Não ",
  "Estamos abrindo uma empresa",
  ""
]
  },
  {
"originalIndex": 42,
"row": [
  "Sim, trabalhei na AmBev durante 4 anos com gestão de projetos e marketing. Entrei na empresa através da ZxVentures, antiga startup/área de inovação da empresa, no departamento de franquias e bares proprietários (HighEnd). O último cargo que exerci foi como Coordenador de Marketing da área de \"Home Draft\" focado no consumo de chopp em casa com dois negócios: Chopp Brahma Express e PerfectDraft.",
  "Sim",
  "Motriz (apenas ideia, não oficial)",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "A ideia é uma plataforma de Sportstech focada em preencher uma lacuna crítica no cenário esportivo brasileiro: a falta de preparação física específica para atletas amadores e universitários. Hoje, quem pratica modalidades como corrida, natação ou esportes coletivos acaba refém de treinos de musculação genéricos que não geram transferência de performance e muitas vezes concorrem com a carga da modalidade principal, aumentando o risco de lesões. Minha solução é um sistema inteligente onde o usuário insere sua modalidade, momento da temporada, histórico de lesões e a plataforma gera prescrições de força específicas, baseadas na biomecânica de cada esporte. O objetivo é democratizar o acesso ao treinamento de força de alto rendimento, oferecendo um suporte técnico escalável que otimize o gesto esportivo, blinde o atleta contra lesões e traga assertividade para um contexto de prática esportiva que hoje carece de especificidade.",
  "Minha trajetória une alguns aspectos que entendo serem essenciais para a inovação: a bagagem analítica e metódica da engenharia associados a alguns anos no mercado corporativo (Ambev) e a sólida base científica que estou construindo na Escola de Educação Física e Esporte (EEFE). Fiz minha transição de carreira porque enxergo o esporte como uma ferramenta real de transformação social, mas que precisa ser aplicada com o rigor técnico correto para não gerar o efeito reverso através de lesões: desmotivação, cinesiofobia e, por fim, o afastamento da prática de atividades esportivas. Enxergo o Match USP como o ecossistema perfeito para essa ideia nascer, visto que proporciona um amplo suporte de mentorias, mecanismos de validação e feedbacks constantes para entender de fato a viabilidade da ideia. Além disso, diante do cenário universitário da USP, com suas dezenas de atléticas carentes de preparação física específica, representa o laboratório perfeito e o material humano ideal para rodarmos o Produto Mínimo Viável (MVP).",
  "Minha única dúvida neste momento é em relação ao cronograma do programa: quando teremos as devolutivas desta etapa de ideação e como se dará o processo de iniciação e os próximos passos para os projetos selecionados?"
]
  },
  {
"originalIndex": 43,
"row": [
  "Participei por algum tempo da empresa júnior do meu curso de graduação em Ciências Biológicas, pela USP Ribeirão.  A empresa se chamava Biocenos.",
  "Sim",
  "Afrobio (provisório)",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Percebo que há uma pobreza de opções de materiais educativos científicos com abordagem afrocentrada fora da escola, voltado para o cotidiano familiar. A solução que visualizo para esse problema é a criação de uma editora que produza esse tipo de material (científico e afrocentrado) para ser utilizado fora da escola, engajando os membros da comunidade e do núcleo familiar em atividades educativas e divertidas. \nOs materiais podem variar desde livros infantis (livros cartonados, toque e sinta, livros com sons, pop-up etc) até pôsteres divertidos para serem colados nas paredes dos quartos (num estilo anos 2000 revival) e kits de experimentos.\nMinhas inspirações são os clubes de leitura de assinatura mensal, que muitas vezes utilizam produtos já produzidos por outras empresas, e a revistas como a Super Interessante e a Ciência Hoje para crianças.",
  "Minha ideia deve fazer parte do Programa porque eu sou a cliente modelo do meu próprio negócio. Sou uma mulher negra, bióloga e com uma filha pequena, menor de 1 ano. Consigo analisar o que funciona e o que não funciona para crianças da idade dela através da observação de nossa própria realidade. Além disso, por ter uma formação como professora de Ciências crítica, consigo também selecionar bem o que é adequado e desejado para que ela aprenda.",
  "-"
]
  },
  {
"originalIndex": 44,
"row": [
  "Não ",
  "Sim",
  "Não tem.",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "Não ",
  "Porque acredito que toda idéia pode agregar.",
  ""
]
  },
  {
"originalIndex": 45,
"row": [
  "A minha primeira e, por enquanto, única experiência, foi durante a atividade Empreender por 1 dia da disciplina de Empreendedorismo que estou fazendo na FEARP. Vendemos lanches naturais de frango para alunos que estudam no período noturno.",
  "Sim",
  "Ponto Apoio",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "A minha ideia atual é ter um clube de benefícios voltado para entregadores de aplicativo que trabalham com delivery. Os grandes players, iFood, 99food, Keeta e etc possuem seu próprio clube de benefícios - seja com descontos em combustíveis, seguro para moto, plano de saúde e etc - e minha proposta é trabalhar em cima das dores desse público e possibilitar que o próprio entregador possa acessar vários benefícios sem estar \"filiado\" a uma plataforma ou outra através de um pagamento mensal (recorrência).",
  "Eu já participei de diversos cursos de empreendedorismo e pré-acelerações - capacitações como o Empreende no Supera Parque em Ribeirão Preto, pré-aceleração Startyou do Núcleo de Empreendedores da FEARP, Programa Zero to One da FEASP - e não consigo avançar com a minha ideia. Além de conhecer uma nova entidade, vejo que a forma de vocês trabalharem no Mete Marcha pode me dar os suportes que preciso para superar barreiras e meter marcha no meu projeto.",
  "Agradeço a oportunidade de tentar o processo seletivo. Agradeço aos voluntários por se disponibilizarem."
]
  },
  {
"originalIndex": 46,
"row": [
  "Já participei em empresa Junior durante o período da faculdade por dois anos, e atualmente tenho minha empresa (voltada para atendimentos de fisioterapia)",
  "Sim",
  "-",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Healthtech",
  "Solução: implementar o que deve ser realizado com o paciente durante período hospitalar (pós fratura por exemplo) e não é realizado..\n\nMinha atuação é no setor de Ortopedia e Trauma, com experiencia em parte ambulatorial e hospitalar. Atualmente, quando uma pessoa fratura o quadril, na maioria dos hospitais públicos (e muitos privados) não é realizado os cuidados/orientaçoes e apresentado alinha de cuidado necessária para essa pessoa voltar a seu estado funcional pré fratura. Ou seja, não é feito com o paciente (além da cirurgia que já foi feita) o que no mundo se preconiza como padrão ouro, seja por falta de equipe, conhecimento dos profissionais, falta de estrutura etc.\n\nAi ideia surgiu a partir do Mestrado, onde estamos mapeando essas barreiras (dificultados de se realizar o que deveria ser realizado) nos hospitais, com contato direto com os profissionais de saúde e com os gestores dos hospitais, para assim propor soluções/consultoria, baseado no contexto do hospital, para melhorar essa situação e o paciente ter a linha de cuidado que precisa, mas em muitos casos, não recebe.",
  "Temos o objetivo de materializar a ideia em ações práticas, para construir soluções que vão ser benéficas ao \"comprador\"e consequentemente. e mais ainda ao beneficiário (paciente), fazendo assim o hospital economizar em glosas, encargos e custos referente ao paciente. ",
  ""
]
  },
  {
"originalIndex": 47,
"row": [
  "Sim. Eu já tive uma experiência empreendedora, chegando a execução de trabalhos pilotos",
  "Sim",
  "ENTECO - Environmental Technical Consultancy ",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Tecnologia",
  "A ideia é fornecer soluções para micro e pequenos empreendimentos ",
  "Eu e a minha ideia devemos fazer parte do Mete Marcha porque precisamos de validações de profissionais para enfrentar a maior fatia do mercado, a dos micro e pequenos empreendimentos.",
  "Receberei feedback? Gratidão. Bons dias!"
]
  },
  {
"originalIndex": 48,
"row": [
  "I have participated the Courses of inova USP and AUSPIN",
  "Sim",
  "ainda nao tenho",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Cleantech / Greentech",
  "Tenho uma ideia de solução baseada no desenvolvimento de biocompósitos biodegradáveis produzidos a partir de resíduos lignocelulósicos brasileiros, com potencial para substituir parcialmente embalagens e recipientes descartáveis de plástico ou isopor. A proposta inicial é focar em aplicações secas ou de baixo contato com umidade, como bandejas, suportes e embalagens leves.",
  "Minha ideia deve fazer parte do Mete Marcha porque busca responder a um problema real: a dependência de embalagens e recipientes descartáveis de origem plástica e a baixa valorização de resíduos lignocelulósicos disponíveis no Brasil. A proposta combina sustentabilidade, aproveitamento de resíduos e desenvolvimento de materiais biodegradáveis com potencial de aplicação em embalagens e recipientes leves.\n\nTenho experiência prática com materiais compósitos, recursos lignocelulósicos, caracterização físico-mecânica e desenvolvimento de materiais leves. O Mete Marcha pode ajudar a transformar essa base técnica em uma proposta de negócio mais clara, com definição de mercado, validação com usuários, protótipo mínimo e estratégia de entrada no setor.",
  ""
]
  },
  {
"originalIndex": 49,
"row": [
  "Não. ",
  "Sim",
  "Distensio ",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Outra",
  "Minha ideia é promover trabalhos grupais em instituições comprometidas com a transformação social. Considerando os desafios do mundo do trabalho, atualmente extremamente precarizado, e após alguns anos trabalhando em um coletivo independente e estudando a perspectiva de coletivos, a partir da psicanálise, a ideia se baseia na premissa de que em um mundo diverso e desigual, temos que \"capacitar\" as pessoas para transformar a diferença e a heterogeneidade em potência, ao invés de limitação nos trabalhos coletivos. O trabalho grupal partiria de uma lógica customizada a cada caso, enfatizando o valor da escuta, como um ativo complexo. Não se trata de oferecer trabalho analítico ou clínico, mas sim de dinâmicas grupais a partir da premissa de que a heterogeneidade no grupo, pode ser potência criativa. Para isso o trabalho envolve tanto uma perspectiva estrutural em termos das desigualdades sociais, mas também se especifica pelo \"conflito local\", a cada situação. ",
  "Porque considero que tenho um produto viável, que precisa de melhor estruturação e principalmente direcionamento de público-alvo. No meu percurso trago uma formação em Comunicação Social e Relações Públicas, atuação de uma década no mercado publicitário, e de 2019 para cá, dedicação à formação em psicanálise. Isso nao é \"o produto\" em questão, mas que me dá uma amplitude de \"escuta\" bastante considerável. O mestrado em Psicologia Clínica, produziu uma base de formação política fundamental, para que eu esteja avisada dos riscos da cooptação dos discursos pelo capitalismo tardio, que é avesso às transformações sociais e assim construir um projeto alinhado com perspectivas de mitigação das desigualdades, pelas vias possíveis. ",
  "Não, obrigada!"
]
  },
  {
"originalIndex": 50,
"row": [
  "Sou MEI trabalhando com consultoria autônoma em Treinamento e Desenvolvimento",
  "Sim",
  "Ainda não tenho nome",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Gostaria de criar uma edtech para capacitação de líderança feminina que seria também um grupo de network e apoio.",
  "Minha pesquisa no mestrado é sobre competências políticas de executivas. Apesar dessas competências serem essenciais para o desenvolvimento da carreira,  elas ainda são muito pouco exploradas diretamente. A ideia central é capacitar mulheres principalmente nessas competências e proporcionar um ambiente de network, já que essa é uma das dimensões das competências políticas. Essa é uma iniciativa que ajudaria a fortalecer a liderança feminina minimizando a desigualdade de gêneros nas posições de poder nas organizações.  Eu já tenho experiência de quase 10 anos em Treinamento e Desenvolvimento prestando serviços por intermédio de outras consultorias, também facilito cursos de empreendedorismo para o SEBRAE. Agora gostaria de ajuda para estruturar a minha própria empresa. ",
  "Apenas fiquei na dúvida se esse programa também seria para a pós graduação."
]
  },
  {
"originalIndex": 51,
"row": [
  "Apenas de curta duração no e-commerce",
  "Sim",
  "Sinala",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Fintech",
  "Sim. A ideia inicial é desenvolver uma plataforma de inteligência para antecipar reclamações e conflitos em bancos digitais, fintechs e instituições de pagamento.\n\nO problema que queremos atacar é que muitas dores dos usuários, como cobranças indevidas, dificuldades com cartão, problemas em transações, demora no atendimento ou suspeitas de fraude, só são tratadas quando já se transformaram em reclamações formais, perda de confiança ou churn. A proposta é usar IA e modelos quantitativos para classificar interações de clientes, identificar temas recorrentes, medir o risco de escalonamento e sugerir ações preventivas para que a instituição resolva o problema antes que ele se agrave.\n\nO MVP poderia começar de forma simples: um painel que analisa reclamações públicas, tickets simulados ou bases fornecidas por parceiros, classificando cada caso por tema, urgência, sentimento e risco de escalonamento. Com isso, a solução ajudaria instituições financeiras a priorizar casos críticos, reduzir reclamações formais, melhorar a experiência do consumidor e diminuir custos operacionais.",
  "A ideia deve fazer parte do Mete Marcha porque combina uma dor real de mercado, impacto social e possibilidade concreta de MVP. Reclamações bancárias e conflitos entre consumidores e instituições financeiras geram custos, perda de confiança e desgaste regulatório. Ao mesmo tempo, muitos desses problemas poderiam ser antecipados com melhor uso de dados, IA e modelos de priorização. O Mete Marcha é o ambiente ideal para validar essa hipótese, conversar com usuários, testar a persona, receber feedbacks e transformar a proposta em um MVP simples, útil e mensurável.\n\nAlém disso, acredito que meu perfil contribui diretamente para a execução da ideia. Sou mestrando em Matemática Aplicada na USP e formado em Ciência da Computação pela UFSC, com experiência em aprendizado de máquina, aprendizado por reforço, otimização, programação em Python e C++, pesquisa acadêmica e desenvolvimento de protótipos. Já trabalhei em projetos envolvendo reinforcement learning e otimização combinatória, incluindo a aplicação de GNN e Double DQN a um problema de escalonamento de tarefas em nanossatélites. Também tive experiência internacional no Manipal Institute of Technology, na Índia, onde implementei e comparei modelos de deep learning para classificação de imagens de câncer oral.\n\nEssa trajetória me dá uma base técnica forte para transformar uma dor complexa em um sistema quantitativo de decisão. A proposta exige exatamente esse tipo de combinação: entender dados, modelar risco, classificar problemas, priorizar casos e construir uma solução testável. Ao mesmo tempo, minha experiência com customer experience na AIESEC me ajuda a olhar para o lado humano do problema, entendendo que reclamações bancárias não são apenas números, mas conflitos reais entre consumidores e instituições.\n\nPor isso, vejo o Mete Marcha como o espaço certo para unir minha formação técnica, minha experiência com problemas reais e minha vontade de construir uma solução com impacto econômico e social. Estou disposto a me comprometer com a trilha, validar a dor com usuários reais, receber feedbacks constantes, ajustar a proposta rapidamente e trabalhar para chegar a um MVP funcional.",
  "Não tenho reclamações. Como sugestão, seria muito interessante que o programa incentivasse conexões com potenciais usuários, mentores ou profissionais de mercado desde as primeiras etapas, especialmente para ajudar as equipes a validarem melhor suas dores e personas.\n\nNo meu caso, como a ideia envolve bancos, fintechs e experiência do consumidor em serviços financeiros, seria muito valioso ter orientação sobre como conduzir entrevistas de validação com potenciais usuários, especialistas ou profissionais do setor de forma objetiva e ética."
]
  },
  {
"originalIndex": 52,
"row": [
  "Fiz parte da empresa júnior do meu curso de graduação em Ciências Biológicas na USP Ribeirão. A empresa se chama Biocenos.",
  "Sim",
  "AfroBio (provisório)",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Edtech",
  "Estou preenchendo o formulário novamente porque ontem preenchi sem muita disponibilidade de tempo para elaborar.\nA partir do nascimento da minha filha, que ainda está com menos de 1 ano, percebi uma falta. Gostaria de acessar materiais educativos científicos para utilizar com ela em casa e em outros espaços não formais de educação, sem a mediação da escola, mas que fossem criados a partir de uma proposta específica de filosofia da educação (tal como a pedagogia Waldorf): a Afrocentricidade.\nFaço parte de alguns coletivos de biólogos e de educadores infantis afrocentrados que tem uma percepção semelhante. Em outros coletivos de pais e pais, também suponho que encontraria eco em relação a essa falta.\n\nA solução que penso para esse problema é a criação de uma editora focada no público infantil e em suas famílias que viabilize o acesso a materiais educativos científicos que já existem e que podem se encaixar nas premissas da Afrocentricidade e que também crie e distribua seus próprios materiais educativos: caixas maker, livros cartonados/toque e sinta/sonoros, brinquedos/bonecas, revistas.\n",
  "Como disse na questão anterior, ontem não tive tanto tempo disponível para elaborar e, por isso, estou preenchendo o formulário novamente.\nPenso que devo fazer parte do Mete Marcha porque faço parte de uma minoria e, a cada dia, percebo que o meu acúmulo curricular não tem se transformado em mobilidade social e melhores condições sócio-econômicas. A oportunidade de participar me ajudaria a promover essa transformação.\nTambém penso que devo participar porque estou num momento em que as ideias que incubo há muito tempo precisam ser lançadas ao mundo, testadas e dar certo. Com a chegada da minha filha, eu simplesmente preciso que as coisas dêem certo. E agora, mais do que nunca, em meio ao cansaço intenso do primeiro ano de maternidade, eu tenho encontrado uma disposição e um senso de autonomia e auto-responsabilidade como nunca antes tive.\nVale acrescentar também que, apesar de não possuir experiência ou formação significativa no universo dos negócios, eu e meu companheiro (co-founder, tbm aluno USP) temos uma sólida formação filosófica afrocentrada que garantiria a coerência do negócio ao longo de sua trajetória.",
  "-"
]
  },
  {
"originalIndex": 53,
"row": [
  "sim",
  "Sim",
  "EquiClin AI",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Healthtech",
  "Sim. A ideia é desenvolver uma solução voltada à auditoria, validação e adaptação de critérios clínicos e modelos preditivos utilizados na saúde, especialmente aqueles criados a partir de populações diferentes da brasileira ou com baixa representatividade de minorias.\n\nMuitos critérios clínicos, scores de risco e modelos utilizados atualmente foram desenvolvidos em contextos epidemiológicos, genéticos e sociais diferentes do Brasil. Isso pode gerar vieses, baixa sensibilidade para determinados grupos, superestimação ou subestimação de riscos e perda de oportunidade de diagnóstico ou prevenção.\n\nA solução proposta seria uma plataforma/metodologia que permita:\n\nvalidar critérios clínicos em bases brasileiras;\navaliar desempenho por subgrupos populacionais;\nidentificar vieses e limitações de aplicabilidade;\npropor recalibração ou adaptação contextual;\ngerar relatórios explicáveis para apoio à decisão clínica, pesquisa e governança em saúde.\n\nO primeiro caso de uso poderia ser em oncogenética e risco hereditário, especialmente em síndromes hereditárias de câncer e variantes relevantes no contexto brasileiro, como TP53 p.R337H.\n\nA proposta não é substituir o médico ou diretrizes clínicas, mas apoiar instituições de saúde na construção de critérios mais justos, auditáveis, explicáveis e adaptados à realidade das populações que pretendem cuidar.",
  "Porque esta ideia nasce da interseção entre ciência, tecnologia, saúde e impacto social.\n\nMinha trajetória combina atuação prática em inteligência artificial e ciência de dados aplicada à saúde, experiência com projetos reais em ambientes clínicos e pesquisa acadêmica voltada à predição de risco, oncogenética e modelos explicáveis. Isso me permite enxergar um problema que é técnico, mas também clínico, ético e populacional.\n\nA ideia tem potencial de impacto porque discute uma dor crescente da saúde digital: não basta importar modelos, critérios ou algoritmos desenvolvidos em outros contextos. É preciso validar se eles realmente funcionam para a população brasileira e para grupos que muitas vezes ficam sub-representados nos dados.\n\nO Mete Marcha poderia ajudar a transformar essa visão em um produto viável, com definição clara de MVP, modelo de negócio, validação com potenciais clientes e estruturação da solução para gerar impacto real.\n\nAcredito que essa proposta deve fazer parte do programa porque une inovação com responsabilidade: busca usar dados e IA não apenas para automatizar decisões, mas para tornar a saúde mais precisa, segura, explicável e inclusiva.",
  "Minha principal dúvida é se o programa contempla ideias na área de healthtech/deeptech, especialmente soluções que envolvem validação científica, dados de saúde, governança, LGPD e possível parceria com instituições clínicas ou acadêmicas.\n\nComo sugestão, seria muito interessante que o Mete Marcha oferecesse mentorias específicas para projetos de saúde, incluindo temas como validação de MVP em ambiente clínico, regulação, proteção de dados, propriedade intelectual e conexão com hospitais, laboratórios, universidades ou operadoras de saúde."
]
  },
  {
"originalIndex": 54,
"row": [
  "não",
  "Sim",
  " ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Outra",
  "ainda não",
  "para desenvolver uma base",
  ""
]
  },
  {
"originalIndex": 55,
"row": [
  "Penas na ideação",
  "Sim",
  "Ainda em definição",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Fashiontech / Beautytech",
  "Desenvolvimento de uma marca autoral de roupas e acessórios produzidos em pequena escala, utilizando modelagem experimental, identidade cultural brasileira e produção consciente.\nA proposta busca testar a criação de peças voltadas ao ambiente universitário, especialmente dentro da USP, explorando circulação, pertencimento e expressão individual através da moda.\nO projeto também pretende utilizar tecidos já existentes e produção sob demanda para evitar desperdício.",
  "Sou estudante da USP e acredito que o ambiente universitário pode funcionar como um espaço vivo de experimentação para novos modelos de criação, circulação e validação de produtos autorais. Tenho experiência prévia com design e desenvolvimento de moda, incluindo reconhecimento em concurso da área, e atualmente possuo recursos materiais iniciais para começar os protótipos do projeto.\nQuero participar do Mete Marcha para transformar uma ideia ainda intuitiva em um modelo estruturado, aprendendo sobre validação de mercado, posicionamento e construção de MVP. Acredito que o programa pode me ajudar a transformar uma iniciativa criativa em uma proposta sustentável e com identidade própria.",
  "Nenhuma no momento."
]
  },
  {
"originalIndex": 56,
"row": [
  "Não ",
  "Sim",
  "Health PEP",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Edtech",
  "O Health PEP é uma plataforma SaaS de simulação de Prontuário Eletrônico do Paciente (PEP) voltada para instituições de ensino na área da saúde, com foco inicial na enfermagem. A solução foi desenvolvida para aproximar estudantes da realidade dos sistemas informatizados utilizados em hospitais e serviços de saúde.\n\nA plataforma permite que os alunos realizem registros de enfermagem, implementem assistência à saúde de forma segura e integrada, acompanhem prescrições, utilizem recursos de segurança do paciente, Treinem habilidades e realizem conferências à beira leito e desenvolvam competências relacionadas à documentação clínica e aos processos assistenciais digitais em um ambiente seguro de aprendizagem.\n\nO Health PEP busca reduzir a lacuna entre a formação acadêmica e a prática profissional, preparando estudantes para atuar em um sistema de saúde cada vez mais digitalizado e contribuindo para a formação de profissionais mais qualificados, seguros e preparados para o mercado de trabalho.",
  "Acredito que o Health PEP tem grande potencial para fazer parte do Mete Marcha porque nasce de um problema real observado durante a formação de estudantes da área da saúde: a distância entre o ambiente acadêmico e a realidade digital dos serviços de saúde. Apesar da ampla utilização de prontuários eletrônicos e sistemas informatizados em hospitais e clínicas, muitos alunos concluem sua formação com pouca experiência prática nessas ferramentas.\n\nO Health PEP foi idealizado para reduzir essa lacuna por meio de uma plataforma de simulação de Prontuário Eletrônico do Paciente, permitindo que estudantes desenvolvam competências relacionadas aos registros clínicos, segurança do paciente, prescrições e processos assistenciais digitais em um ambiente seguro de aprendizagem.\n\nAlém do potencial de impacto na formação de futuros profissionais de saúde, acredito que o Mete Marcha é o ambiente ideal para validar essa solução junto aos usuários, aprimorar o modelo de negócio e desenvolver um MVP alinhado às necessidades reais do mercado. Estou disposta a dedicar tempo, receber feedbacks, testar hipóteses e evoluir a ideia de forma estruturada, aproveitando a mentoria e a metodologia oferecidas pelo programa.\n\nMais do que desenvolver uma startup, meu objetivo é contribuir para a formação de profissionais mais preparados para atuar em um sistema de saúde cada vez mais tecnológico, promovendo inovação, qualidade assistencial e segurança do paciente.",
  ""
]
  },
  {
"originalIndex": 57,
"row": [
  "de forma direta não, porém após formado tive experiencia como colaborador em um Studio de personal trainer na minha cidade  ",
  "Sim",
  "ainda não tenho ",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Healthtech",
  "Sim, a princípio gostaria de otimizar o tempo do meu mestrado, que é voltado à investigação de moléculas liberadas pelo músculo durante o exercício físico, e tentar transladar esses achados para a prática, seja para o aumento da performance em esportistas e/ou para a qualidade de vida e saúde da população de risco ",
  "Pois acredito que a minha ideia tem potencial de atingir públicos diversos e ser um produto e/ou serviço de uso crônico e não momentâneo",
  "nenhuma"
]
  },
  {
"originalIndex": 58,
"row": [
  "Não, mas estou inscrito na disciplina DPG5011 - Formação de Cientista Empreendedor (2026). ",
  "Sim",
  "CropSmart Solutions",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Tecnologia",
  "Sim. Nossa solução é um gêmeo digital (Digital Twin) do sistema solo–planta–clima que transforma dados agronômicos em recomendações calibradas de fertilização e bioinsumos, com evidência científica auditável. Os nossos pilares são: (i) Calibração de fertilização; (ii) Validação de bioinsumos e Monitoramento de saúde do solo + Eficiência Nutricional. ",
  "O CropSmart Solutions está construindo um gêmeo digital do sistema solo–planta–clima para calibrar fertilização e validar bioinsumos com evidência científica auditável — começando pelo café arábica do Sudeste, uma cultura de US$ 30 bi/ano que ainda decide adubação no \"achismo\".\n\nQueremos fazer parte do Mete Marcha por três razões concretas:\n\n1. Nossa solução depende exatamente desse ecossistema: acesso a pesquisadores de solo/nutrição de plantas, áreas experimentais para calibrar o modelo e proximidade com produtores e cooperativas do Sul de Minas. \n\n2. Estamos saindo da fase de hipótese para a de validação com piloto (parceria com algumas agroindustrias). Precisamos de método para transformar tração técnica em tração comercial — modelagem de negócio, pricing para indústria de insumos, go-to-market B2B. \n\n3. Sou estudante de doutorado em Meteorologia no Instituto de Astronomia, Geofísica e Ciências Atmosféricas (IAG-USP). Especialista em modelagem numérica atmosférica, hidrologia e agrometeorologia. Conto também com:\n1) Especialista em Direito Ambiental e Constitucional (PROCAM-IEE-USP); \n2) Especialista em créditos de carbono, questões agrícolas envolvendo emissões de gases do efeito estufa (IAG-USP); \n3) Doutorandos desenvolvendo pesquisas sobre as interações multiníveis envolvendo a microbiota do solo, a cultura do milho e a praga Spodoptera frugiperda (lagarta-do-cartucho)(ESALQ/USP) e;\n4) Doutorandos atuando em microbiologia veterinária e epidemiologia aplicada à produção animal (FMVZ-USP). \n\n",
  ""
]
  },
  {
"originalIndex": 59,
"row": [
  "Não",
  "Sim",
  "Não tenho",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Healthtech",
  "Sim. Desenvolvimento de tecnologia para verificação de sinais vitais em pacientes graves durante transporte intrahospitalar",
  "Para que eu não seja um mero doutorando que aguarda outros desenvolverem a tecnologia sem siquer fazer idéia das etapas até a realização da matéria.",
  ""
]
  },
  {
"originalIndex": 60,
"row": [
  "Não",
  "Sim",
  "Norte",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  " A ideia é construir um assistente de inteligência de negócio acessado via WhatsApp para pequenas e médias empresas — varejo, restaurantes, e-commerce pequeno e prestadores de serviço. A maioria dessas PMEs já usa sistemas como Bling, Tiny, Omie, máquinas de cartão e marketplaces, mas o dono raramente abre dashboard ou planilha para entender o próprio negócio. A solução conecta esses sistemas via API e entrega, dentro do WhatsApp que ele já usa o dia inteiro, três coisas: respostas a perguntas em linguagem natural (\"quanto vendi essa semana?\", \"qual produto vende mais?\"), alertas proativos sobre estoque crítico, queda de margem e fluxo de caixa, e sugestões de ação (preparar pedido a fornecedor, ajustar preço, conversar com cliente inadimplente).",
  "Atuo há dois anos como consultora de negócios na interseção entre tecnologia e operação em uma consultoria nacional, onde já lidero um pequeno time em projetos, mas meu sonho é empreender e quero começar a buscá-lo no Mete Marcha. ",
  ""
]
  },
  {
"originalIndex": 61,
"row": [
  "sim",
  "Sim",
  "Arbos Brasil",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Cleantech / Greentech",
  "Sim. Certificação pra produtores de café em Agricultura Regenerativa.",
  "Acredito que o Mete Marcha pode ajudar no processo de validação do MVP e modelo de negócios por estar dentro do ecossistema da USP e principalmente pela ESALQ que é referência no Agro.",
  ""
]
  },
  {
"originalIndex": 62,
"row": [
  "yes",
  "Sim",
  "GreenOx",
  "Lançamento (Precisa de ajuda com contatos, investidores)",
  "Cleantech / Greentech",
  "not yet",
  "this idea is brilliant",
  "no"
]
  },
  {
"originalIndex": 63,
"row": [
  "Não",
  "Sim",
  "Solvit",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Analytics para PMEs, ciência de dados/analytics para pequenas e médias empresas. ",
  "Porque existe um vasto mercado de 19 milhões de PMEs brasileiras sem acesso a ferramentas de análise de dados acessíveis e prontas para uso.",
  "sem comentários"
]
  },
  {
"originalIndex": 64,
"row": [
  "Sim, trabalhei em uma startup chamada Niahub.",
  "Sim",
  "CarbonoColetivo",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Cleantech / Greentech",
  "Sim.Sim.\n\nPretendo desenvolver uma startup voltada para democratizar o acesso de pequenos e médios proprietários rurais ao mercado de créditos de carbono.\nA solução consiste em uma plataforma e rede de suporte técnico que permita agrupar diversas pequenas propriedades em um único projeto de carbono, reduzindo os custos e a complexidade de certificação. A empresa seria responsável pelo diagnóstico ambiental, monitoramento das áreas, coleta de dados de campo, acompanhamento da restauração florestal e gestão da comercialização dos créditos gerados.\nO objetivo é transformar áreas de restauração, regeneração natural e sistemas agroflorestais em oportunidades de geração de renda para pequenos produtores, ao mesmo tempo em que contribui para a captura de carbono, conservação da biodiversidade e recuperação de ecossistemas.\n",
  "Acredito que eu e minha ideia devemos fazer parte do Mete Marcha porque estamos buscando transformar um desafio ambiental em uma solução de impacto social, econômico e ambiental.\n\nSou estudante de Gestão Ambiental e venho desenvolvendo conhecimentos em restauração ecológica, sistemas agroflorestais e créditos de carbono. Durante essa trajetória, percebi que pequenos e médios produtores rurais possuem potencial para participar do mercado de carbono, mas encontram barreiras técnicas, financeiras e burocráticas que dificultam seu acesso.\n\nMinha proposta é criar uma solução capaz de conectar esses produtores ao mercado de créditos de carbono por meio da gestão compartilhada de projetos de restauração e captura de carbono, gerando renda no campo e contribuindo para a recuperação ambiental.\n\nO Mete Marcha representa uma oportunidade para transformar essa ideia em um modelo de negócio viável, validando a proposta, desenvolvendo competências empreendedoras e conectando o projeto a uma rede de mentores e parceiros que podem acelerar seu impacto.\n",
  "Não obrigada"
]
  },
  {
"originalIndex": 65,
"row": [
  "Não",
  "Sim",
  "ParaJus IA",
  "Ideação (Tem a ideia, mas não sabe por onde começar)",
  "Tecnologia",
  "Legaltech - automatizar petições e acompanhamento de processos",
  "Temos uma ideia com grande potencial, mas ainda buscamos definir o melhor caminho para desenvolvê-la. Acreditamos que existe uma forte convergência entre o Direito e a Tecnologia, uma relação que, apesar de promissora, ainda parece pouco explorada, especialmente no Brasil, um dos países mais litigiosos do mundo. \nPor isso, entendemos que o momento é muito favorável para o desenvolvimento de soluções tecnológicas voltadas ao setor jurídico. Essas ferramentas têm o potencial de reduzir prazos, minimizar retrabalhos e aumentar a eficiência dos processos.\nAssim, o Mete Marcha se mostra como a solução ideal, pois é uma oportunidade para aprendermos na prática como desenvolver a ideia, visto que somos iniciantes no empreendedorismo. ",
  ""
]
  },
  {
"originalIndex": 66,
"row": [
  "Sim,  já participei de diversas atividades do SEBRAE, incluindo o EMPRETEC. Agora, estou no processo de abertura da empresa junto com um escritório de contabilidade.",
  "Sim",
  "Casa Marcolino - Arquitetura &  Urbanismo",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Outra",
  "Serviços de Habitação Baseados em Políticas Públicas",
  "Porque a minha ideia ajuda a garantir o direito à moradia a quem precisa e colabora com a dignidade humana.",
  ""
]
  },
  {
"originalIndex": 67,
"row": [
  "SIM.",
  "Sim",
  "Hi connexions",
  "Validação (Já tem um MVP e quer ajuda na validação)",
  "Tecnologia",
  "Uma ferramenta smartifcada para PMEs adotarem AI para organização da informação.",
  "Porque essa ideia vai contribuir tanto para as PMEs e para a Mete Matcha, podemos testar internamente também e ajudar a todos. Para aproveitarmos o avanço da IA, essa ferramenta vai democrazia e o acesso a todos. ",
  ""
]
  }
];

let csvData = [...embeddedCsvData];        // Parsed CSV records
let headers = [...embeddedHeaders];        // CSV Headers
let evaluations = {};    // { ideaKey: { status: 'selecionada'|'espera'|'desclassificada'|null, comments: '...' } }
let activeView = 'continuous';
let activeIdeaIndex = 0; // For focused reader mode
let filteredIdeas = [];  // Current filtered records for rendering
let sectorsList = [];    // Unique sectors
let stagesList = [];     // Unique stages
let saveTimeout = null;
let completionShown = false; // Track if the completion overlay was already shown
let hasFounderNameColumn = true; // Whether the CSV has a "Nome completo" column

// Dynamic column getters (handle both old and new CSV format)
function colFounder() { return hasFounderNameColumn ? 0 : -1; }
function colExp() { return hasFounderNameColumn ? 1 : 0; }
function colDedication() { return hasFounderNameColumn ? 2 : 1; }
function colName() { return hasFounderNameColumn ? 3 : 2; }
function colStage() { return hasFounderNameColumn ? 4 : 3; }
function colSector() { return hasFounderNameColumn ? 5 : 4; }
function colSolution() { return hasFounderNameColumn ? 6 : 5; }
function colMotivation() { return hasFounderNameColumn ? 7 : 6; }
function colSuggestions() { return hasFounderNameColumn ? 8 : 7; }

// Toast helper
function showToast(text, type = 'success') {
  const toast = document.getElementById('toast-el');
  const icon = document.getElementById('toast-icon');
  const message = document.getElementById('toast-text');
  
  message.textContent = text;
  toast.className = `toast visible ${type}`;
  
  // Update icon based on type
  let iconName = 'info';
  if (type === 'success') iconName = 'check';
  else if (type === 'warning') iconName = 'alert-triangle';
  else if (type === 'error') iconName = 'x-octagon';
  
  icon.setAttribute('data-lucide', iconName);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// Custom CSV parser handling newlines in quoted fields
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++; // Skip escape quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push("");
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += c;
    }
  }
  
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  
  return lines;
}

// Initialize application when data is pre-embedded
function initializeWithEmbeddedData() {
  // Inject founder names into embedded data rows
  csvData = embeddedCsvData.map((item, idx) => {
    const founderName = embeddedFounderNames[idx] || '';
    return {
      originalIndex: item.originalIndex,
      row: [founderName, ...item.row]
    };
  });
  headers = [...embeddedHeaders];
  hasFounderNameColumn = true;

  // Load comments and evaluations from LocalStorage
  loadEvaluations();

  // Extract unique sectors and stages
  const sectorsSet = new Set();
  const stagesSet = new Set();
  
  csvData.forEach(item => {
    const sector = item.row[colSector()];
    const stage = item.row[colStage()];
    if (sector && sector.trim()) sectorsSet.add(sector.trim());
    if (stage && stage.trim()) stagesSet.add(stage.trim());
  });

  sectorsList = Array.from(sectorsSet).sort();
  stagesList = Array.from(stagesSet).sort();

  // Populate filter dropdowns
  populateFilters();

  // Update KPIs
  updateKPIs();

  // Render Dashboard
  applyFilters();

  // Switch views display
  document.getElementById('loader-state').classList.add('hidden');
  document.getElementById('app-wrapper').classList.remove('hidden');
  document.getElementById('view-tabs').classList.remove('hidden');
  updateExportVisibility();
  
  activeView = 'continuous';
  showView(activeView);
  
  showToast(`Carregado: ${csvData.length} ideias carregadas com sucesso!`, 'success');
  lucide.createIcons();
}

// Initialize application when data is loaded
function initializeData(parsedLines) {
  if (parsedLines.length < 2) {
    showToast("Arquivo CSV inválido ou muito curto.", "error");
    return;
  }

  headers = parsedLines[0];
  
  // Detect if CSV has founder name column
  const firstHeader = (headers[0] || '').trim().toLowerCase();
  hasFounderNameColumn = firstHeader.includes('nome') && firstHeader.includes('completo');
  
  // Filter out headers, empty rows and store items with their original index
  csvData = parsedLines.slice(1)
    .map((row, idx) => ({
      originalIndex: idx + 1, // Store original spreadsheet line number
      row: row
    }))
    .filter(item => item.row.length > 2 && item.row[colSolution()] && item.row[colSolution()].trim() !== "");

  // Load comments and evaluations from LocalStorage
  loadEvaluations();

  // Extract unique sectors and stages
  const sectorsSet = new Set();
  const stagesSet = new Set();
  
  csvData.forEach(item => {
    const sector = item.row[colSector()];
    const stage = item.row[colStage()];
    if (sector && sector.trim()) sectorsSet.add(sector.trim());
    if (stage && stage.trim()) stagesSet.add(stage.trim());
  });

  sectorsList = Array.from(sectorsSet).sort();
  stagesList = Array.from(stagesSet).sort();

  // Populate filter dropdowns
  populateFilters();

  // Update KPIs
  updateKPIs();

  // Render Dashboard
  applyFilters();

  // Switch views display
  document.getElementById('loader-state').classList.add('hidden');
  document.getElementById('app-wrapper').classList.remove('hidden');
  document.getElementById('view-tabs').classList.remove('hidden');
  updateExportVisibility();
  
  activeView = 'continuous';
  showView(activeView);
  
  showToast(`Carregado: ${csvData.length} ideias importadas com sucesso!`, 'success');
  lucide.createIcons();
}

// Generate unique identifier for an idea row to robustly bind evaluations
function getIdeaKey(item) {
  // Use startup name if present, combined with solution content details to ensure uniqueness
  const name = item.row[colName()] ? item.row[colName()].trim() : '';
  const solSnippet = item.row[colSolution()] ? item.row[colSolution()].substring(0, 30).replace(/\s+/g, '') : '';
  return `${name}_${item.originalIndex}_${solSnippet}`;
}

// LocalStorage loading & saving
function loadEvaluations() {
  const stored = localStorage.getItem('mete_marcha_evaluations');
  if (stored) {
    try {
      evaluations = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse evaluations from localStorage", e);
      evaluations = {};
    }
  }
}

function saveEvaluations() {
  localStorage.setItem('mete_marcha_evaluations', JSON.stringify(evaluations));
  
  // Visual feedback
  const indicator = document.getElementById('save-status');
  indicator.classList.add('visible');
  
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    indicator.classList.remove('visible');
  }, 1500);
  
  // Dynamic updates
  updateKPIs();
  updateExportVisibility();
  checkAllCategorized();
}

function updateIdeaEvaluation(ideaKey, status, comments) {
  if (!evaluations[ideaKey]) {
    evaluations[ideaKey] = { status: null, comments: '' };
  }
  
  if (status !== undefined) {
    evaluations[ideaKey].status = status;
  }
  if (comments !== undefined) {
    evaluations[ideaKey].comments = comments;
  }

  saveEvaluations();
  
  // Update UI cards status classes without full rerender
  const gridCards = document.querySelectorAll(`.idea-card[data-key="${ideaKey}"]`);
  gridCards.forEach(card => {
    card.className = `idea-card status-${status || 'pendente'}`;
    const badge = card.querySelector('.badge-status');
    if (badge) {
      badge.className = `badge badge-status ${status || 'pendente'}`;
      badge.textContent = status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Pendente';
    }
    
    // Show/hide comment indicator on card
    const commentInd = card.querySelector('.card-comment-indicator');
    if (commentInd) {
      const hasComment = comments && comments.trim() !== '';
      if (hasComment) commentInd.classList.remove('hidden');
      else commentInd.classList.add('hidden');
    }
  });

  // Update in continuous view if rendered
  const contCards = document.querySelectorAll(`.continuous-card[data-key="${ideaKey}"]`);
  contCards.forEach(card => {
    card.className = `continuous-card status-${status || 'pendente'}`;
  });
}

// Save idea toggle and UI update
function toggleSaveIdea(ideaKey) {
  if (!evaluations[ideaKey]) {
    evaluations[ideaKey] = { status: null, comments: '', saved: false };
  }
  
  const isSavedNow = !evaluations[ideaKey].saved;
  evaluations[ideaKey].saved = isSavedNow;
  
  saveEvaluations();
  updateSaveUI(ideaKey, isSavedNow);
  
  if (activeView === 'saved') {
    applyFilters(); // Rerender saved ideas list
  }
  
  if (isSavedNow) {
    showToast("Ideia salva nos favoritos!", "success");
  } else {
    showToast("Ideia removida dos favoritos.", "info");
  }
}

function updateSaveUI(ideaKey, isSavedNow) {
  const bookmarkBtns = document.querySelectorAll(`.btn-save-bookmark[data-save-key="${ideaKey}"]`);
  bookmarkBtns.forEach(btn => {
    if (isSavedNow) {
      btn.classList.add('is-saved');
    } else {
      btn.classList.remove('is-saved');
    }
  });
  
  if (modalItemKey === ideaKey) {
    const modalSaveBtn = document.getElementById('modal-save-btn');
    if (modalSaveBtn) {
      if (isSavedNow) {
        modalSaveBtn.classList.add('is-saved');
      } else {
        modalSaveBtn.classList.remove('is-saved');
      }
    }
  }
  
  const readerSaveBtn = document.getElementById('reader-save-btn');
  if (readerSaveBtn && filteredIdeas.length > 0) {
    const currentItem = filteredIdeas[activeIdeaIndex];
    if (getIdeaKey(currentItem) === ideaKey) {
      if (isSavedNow) {
        readerSaveBtn.classList.add('is-saved');
      } else {
        readerSaveBtn.classList.remove('is-saved');
      }
    }
  }
}

// Dropdowns populator
function populateFilters() {
  const sectorSelect = document.getElementById('filter-sector');
  const stageSelect = document.getElementById('filter-stage');
  
  // Clear previous additions
  sectorSelect.innerHTML = '<option value="all">Todos os setores</option>';
  stageSelect.innerHTML = '<option value="all">Todas as fases</option>';

  sectorsList.forEach(sector => {
    const opt = document.createElement('option');
    opt.value = sector;
    opt.textContent = sector;
    sectorSelect.appendChild(opt);
  });

  stagesList.forEach(stage => {
    const opt = document.createElement('option');
    opt.value = stage;
    opt.textContent = stage;
    stageSelect.appendChild(opt);
  });
}

// KPI Summary calculator
function updateKPIs() {
  const total = csvData.length;
  let selected = 0;
  let wait = 0;
  let rejected = 0;
  let evaluated = 0;

  csvData.forEach(item => {
    const key = getIdeaKey(item);
    const evalState = evaluations[key];
    if (evalState) {
      if (evalState.status === 'selecionada') selected++;
      else if (evalState.status === 'espera') wait++;
      else if (evalState.status === 'desclassificada') rejected++;
      
      if (evalState.status || (evalState.comments && evalState.comments.trim())) {
        evaluated++;
      }
    }
  });

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-selected').textContent = selected;
  document.getElementById('stat-wait').textContent = wait;
  document.getElementById('stat-rejected').textContent = rejected;
  document.getElementById('stat-evaluated').textContent = `${evaluated} / ${total}`;
  
  const progress = total > 0 ? Math.round((evaluated / total) * 100) : 0;
  document.getElementById('stat-progress-text').textContent = `${progress}%`;
  document.getElementById('stat-progress-bar').style.width = `${progress}%`;
}

// Check if all ideas have a status (categorized) and show completion overlay
function areAllCategorized() {
  if (csvData.length === 0) return false;
  return csvData.every(item => {
    const key = getIdeaKey(item);
    return evaluations[key]?.status != null;
  });
}

function updateExportVisibility() {
  const allDone = areAllCategorized();
  
  // Count remaining pending ideas
  let pendingCount = 0;
  csvData.forEach(item => {
    const key = getIdeaKey(item);
    if (!evaluations[key]?.status) {
      pendingCount++;
    }
  });
  
  // Global Export Button in Header
  const exportBtn = document.getElementById('global-export-btn');
  if (exportBtn) {
    if (allDone) {
      exportBtn.classList.remove('hidden');
    } else {
      exportBtn.classList.add('hidden');
    }
  }

  // Export CSV Button in Reports
  const reportExportBtn = document.getElementById('btn-export-csv');
  const lockMsg = document.getElementById('export-csv-lock-msg');
  
  if (reportExportBtn) {
    if (allDone) {
      reportExportBtn.classList.remove('hidden');
      if (lockMsg) lockMsg.classList.add('hidden');
    } else {
      reportExportBtn.classList.add('hidden');
      if (lockMsg) {
        lockMsg.classList.remove('hidden');
        lockMsg.innerHTML = `<i data-lucide="lock" style="width: 1rem; height: 1rem; display: inline-block; vertical-align: middle; margin-right: 0.25rem; color: var(--color-wait);"></i> Exportação de CSV liberada após avaliar todas as ideias (Restam ${pendingCount} pendentes).`;
        lucide.createIcons();
      }
    }
  }
}

function checkAllCategorized() {
  if (completionShown) return;
  if (!areAllCategorized()) return;
  
  completionShown = true;
  showCompletionOverlay();
}

function showCompletionOverlay() {
  const overlay = document.getElementById('completion-overlay');
  if (!overlay) return;
  
  // Count summary stats for overlay
  let selected = 0, wait = 0, rejected = 0;
  csvData.forEach(item => {
    const key = getIdeaKey(item);
    const status = evaluations[key]?.status;
    if (status === 'selecionada') selected++;
    else if (status === 'espera') wait++;
    else if (status === 'desclassificada') rejected++;
  });
  
  document.getElementById('completion-stat-selected').textContent = selected;
  document.getElementById('completion-stat-wait').textContent = wait;
  document.getElementById('completion-stat-rejected').textContent = rejected;
  document.getElementById('completion-stat-total').textContent = csvData.length;
  
  overlay.classList.add('open');
  lucide.createIcons();
}

function closeCompletionOverlay() {
  const overlay = document.getElementById('completion-overlay');
  if (overlay) overlay.classList.remove('open');
}

// Filter and Sort Engine
function applyFilters() {
  const searchVal = document.getElementById('filter-search').value.toLowerCase();
  const sectorVal = document.getElementById('filter-sector').value;
  const stageVal = document.getElementById('filter-stage').value;
  const statusVal = document.getElementById('filter-status').value;
  const sortVal = document.getElementById('sort-by').value;

  // Update mobile active filter badge count
  let activeFilterCount = 0;
  if (searchVal.trim() !== '') activeFilterCount++;
  if (sectorVal !== 'all') activeFilterCount++;
  if (stageVal !== 'all') activeFilterCount++;
  if (statusVal !== 'all') activeFilterCount++;
  if (sortVal !== 'index-asc') activeFilterCount++;

  const countBadge = document.getElementById('filter-active-count');
  if (countBadge) {
    if (activeFilterCount > 0) {
      countBadge.textContent = activeFilterCount;
      countBadge.classList.remove('hidden');
    } else {
      countBadge.classList.add('hidden');
    }
  }

  filteredIdeas = csvData.filter(item => {
    const key = getIdeaKey(item);
    
    // If we are in saved ideas view, only show saved items
    if (activeView === 'saved' && evaluations[key]?.saved !== true) return false;

    // Sector filter
    if (sectorVal !== 'all' && item.row[colSector()] !== sectorVal) return false;
    
    // Stage filter
    if (stageVal !== 'all' && item.row[colStage()] !== stageVal) return false;
    
    // Status filter
    const status = evaluations[key]?.status;
    if (statusVal !== 'all') {
      if (statusVal === 'pending' && status) return false;
      if (statusVal !== 'pending' && status !== statusVal) return false;
    }

    // Search filter
    if (searchVal) {
      const name = (item.row[colName()] || '').toLowerCase();
      const solution = (item.row[colSolution()] || '').toLowerCase();
      const exp = (item.row[colExp()] || '').toLowerCase();
      const motivation = (item.row[colMotivation()] || '').toLowerCase();
      
      const matches = name.includes(searchVal) || 
                      solution.includes(searchVal) || 
                      exp.includes(searchVal) ||
                      motivation.includes(searchVal);
      if (!matches) return false;
    }

    return true;
  });

  // Sorting logic
  filteredIdeas.sort((a, b) => {
    if (sortVal === 'index-asc') {
      return a.originalIndex - b.originalIndex;
    } else if (sortVal === 'name-asc') {
      const nameA = (a.row[colName()] || '').trim().toLowerCase();
      const nameB = (b.row[colName()] || '').trim().toLowerCase();
      return nameA.localeCompare(nameB);
    } else if (sortVal === 'sector-asc') {
      const secA = (a.row[colSector()] || '').trim().toLowerCase();
      const secB = (b.row[colSector()] || '').trim().toLowerCase();
      return secA.localeCompare(secB);
    } else if (sortVal === 'status-asc') {
      const keyA = getIdeaKey(a);
      const keyB = getIdeaKey(b);
      const statA = evaluations[keyA]?.status || 'pending';
      const statB = evaluations[keyB]?.status || 'pending';
      
      const weight = { 'selecionada': 1, 'espera': 2, 'desclassificada': 3, 'pending': 4 };
      return weight[statA] - weight[statB];
    }
    return 0;
  });

  // Render active view based on activeView state
  if (activeView === 'dashboard') {
    renderDashboardGrid();
  } else if (activeView === 'saved') {
    renderSavedIdeasGrid();
  } else if (activeView === 'continuous') {
    renderContinuousList();
  } else if (activeView === 'reader') {
    // Reset reader index if it went out of bounds
    if (activeIdeaIndex >= filteredIdeas.length) {
      activeIdeaIndex = 0;
    }
    renderReaderView();
  }
}

// HTML generators helpers
function getStatusBadgeHTML(status) {
  const displayStatus = status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Pendente';
  return `<span class="badge badge-status ${status || 'pendente'}">${displayStatus}</span>`;
}

function getStartupDisplayName(item) {
  const name = item.row[colName()];
  if (name && name.trim()) {
    return name.trim();
  }
  return `Startup Sem Nome #${item.originalIndex}`;
}

function getFounderDisplayName(item) {
  const idx = colFounder();
  if (idx < 0) return '';
  const founder = item.row[idx];
  if (!founder || !founder.trim()) return '';
  // Capitalize each word properly
  return founder.trim().split(/\s+/).map(word => {
    if (word.length <= 2) return word.toLowerCase(); // prepositions like 'de', 'da'
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function getFounderHTML(item) {
  const founder = getFounderDisplayName(item);
  if (!founder) return '';
  return `<span class="founder-name"><i data-lucide="user" style="width: 0.8rem; height: 0.8rem;"></i> ${founder}</span>`;
}

// Render VIEW 1: Dashboard Grid
function renderDashboardGrid() {
  const container = document.getElementById('ideas-grid-container');
  container.innerHTML = '';

  if (filteredIdeas.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-secondary);">
        <i data-lucide="info" style="width: 3rem; height: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: inline-block;"></i>
        <h3>Nenhuma startup encontrada com os filtros selecionados.</h3>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Experimente alterar ou limpar os filtros na barra superior.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filteredIdeas.forEach(item => {
    const key = getIdeaKey(item);
    const evalState = evaluations[key];
    const status = evalState?.status;
    const comments = evalState?.comments || '';
    const hasComment = comments.trim() !== '';

    const card = document.createElement('div');
    card.className = `idea-card status-${status || 'pendente'}`;
    card.setAttribute('data-key', key);
    card.setAttribute('data-index', item.originalIndex);
    
    card.innerHTML = `
      <div class="card-header-meta">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn-save-bookmark ${evalState?.saved ? 'is-saved' : ''}" data-save-key="${key}" title="Salvar ideia">
            <i data-lucide="bookmark" style="width: 1.1rem; height: 1.1rem;"></i>
          </button>
          <span class="card-index">Linha #${item.originalIndex}</span>
        </div>
        <div class="card-badges">
          <span class="badge badge-sector">${item.row[colSector()] || 'Outra'}</span>
          <span class="badge badge-stage">${item.row[colStage()] || 'Ideação'}</span>
          ${getStatusBadgeHTML(status)}
        </div>
      </div>
      
      <h3>${getStartupDisplayName(item)}</h3>
      ${getFounderHTML(item)}
      <p class="card-solution-preview">${item.row[colSolution()] || '(Sem descrição da solução)'}</p>
      
      <div class="card-footer">
        <div class="card-comment-indicator ${hasComment ? '' : 'hidden'}">
          <i data-lucide="message-square" style="width: 0.8rem; height: 0.8rem;"></i>
          <span>Anotado</span>
        </div>
      </div>
    `;

    // Click event on save button
    const saveBtn = card.querySelector('.btn-save-bookmark');
    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSaveIdea(key);
      });
    }

    // Click event opens details modal
    card.addEventListener('click', () => {
      openDetailModal(item);
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// Render VIEW 5: Saved Ideas Grid
function renderSavedIdeasGrid() {
  const container = document.getElementById('saved-ideas-grid-container');
  container.innerHTML = '';

  if (filteredIdeas.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-secondary);">
        <i data-lucide="bookmark" style="width: 3rem; height: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: inline-block;"></i>
        <h3>Nenhuma ideia salva encontrada com os filtros selecionados.</h3>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Para salvar ideias, clique no ícone de marcador nas ideias do Painel Geral ou do Modo Foco.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filteredIdeas.forEach(item => {
    const key = getIdeaKey(item);
    const evalState = evaluations[key];
    const status = evalState?.status;
    const comments = evalState?.comments || '';
    const hasComment = comments.trim() !== '';

    const card = document.createElement('div');
    card.className = `idea-card status-${status || 'pendente'}`;
    card.setAttribute('data-key', key);
    card.setAttribute('data-index', item.originalIndex);
    
    card.innerHTML = `
      <div class="card-header-meta">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn-save-bookmark ${evalState?.saved ? 'is-saved' : ''}" data-save-key="${key}" title="Salvar ideia">
            <i data-lucide="bookmark" style="width: 1.1rem; height: 1.1rem;"></i>
          </button>
          <span class="card-index">Linha #${item.originalIndex}</span>
        </div>
        <div class="card-badges">
          <span class="badge badge-sector">${item.row[colSector()] || 'Outra'}</span>
          <span class="badge badge-stage">${item.row[colStage()] || 'Ideação'}</span>
          ${getStatusBadgeHTML(status)}
        </div>
      </div>
      
      <h3>${getStartupDisplayName(item)}</h3>
      ${getFounderHTML(item)}
      <p class="card-solution-preview">${item.row[colSolution()] || '(Sem descrição da solução)'}</p>
      
      <div class="card-footer">
        <div class="card-comment-indicator ${hasComment ? '' : 'hidden'}">
          <i data-lucide="message-square" style="width: 0.8rem; height: 0.8rem;"></i>
          <span>Anotado</span>
        </div>
      </div>
    `;

    // Click event on save button
    const saveBtn = card.querySelector('.btn-save-bookmark');
    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSaveIdea(key);
      });
    }

    // Click event opens details modal
    card.addEventListener('click', () => {
      openDetailModal(item);
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// Render VIEW 2: Continuous view (one after another)
function renderContinuousList() {
  const container = document.getElementById('continuous-list-container');
  container.innerHTML = '';

  if (filteredIdeas.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem; color: var(--text-secondary);">
        <i data-lucide="info" style="width: 3rem; height: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: inline-block;"></i>
        <h3>Nenhuma startup encontrada com os filtros selecionados.</h3>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filteredIdeas.forEach(item => {
    const key = getIdeaKey(item);
    const evalState = evaluations[key];
    const status = evalState?.status;
    const comment = evalState?.comments || '';

    const wrapper = document.createElement('div');
    wrapper.className = `continuous-card status-${status || 'pendente'}`;
    wrapper.setAttribute('data-key', key);

    wrapper.innerHTML = `
      <div class="continuous-header">
        <div class="continuous-header-details">
          <h3 style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            ${getStartupDisplayName(item)}
            <button class="btn-save-bookmark ${evalState?.saved ? 'is-saved' : ''}" data-save-key="${key}" title="Salvar ideia">
              <i data-lucide="bookmark" style="width: 1.25rem; height: 1.25rem;"></i>
            </button>
          </h3>
          ${getFounderHTML(item)}
          <div class="card-badges">
            <span class="badge badge-sector">${item.row[colSector()] || 'Outra'}</span>
            <span class="badge badge-stage">${item.row[colStage()] || 'Ideação'}</span>
            <span class="badge badge-stage">Linha #${item.originalIndex}</span>
          </div>
        </div>
        
        <div class="badge-status-container">
          ${getStatusBadgeHTML(status)}
        </div>
      </div>
      
      <div class="continuous-sections">
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div class="info-section">
            <h4><i data-lucide="lightbulb" style="width: 1rem; height: 1rem;"></i> Proposta / Ideia de Solução</h4>
            <p>${item.row[colSolution()] || '(Nenhuma descrição fornecida)'}</p>
          </div>
          <div class="info-section">
            <h4><i data-lucide="star" style="width: 1rem; height: 1rem;"></i> Por que fazer parte do Mete Marcha?</h4>
            <p>${item.row[colMotivation()] || '(Nenhuma justificativa fornecida)'}</p>
          </div>
          <div class="info-section">
            <h4><i data-lucide="trending-up" style="width: 1rem; height: 1rem;"></i> Fase da Startup</h4>
            <p>${item.row[colStage()] || 'Não informada'}</p>
          </div>
          <div class="info-section">
            <h4><i data-lucide="briefcase" style="width: 1rem; height: 1rem;"></i> Experiência Empreendedora</h4>
            <p>${item.row[colExp()] || 'Sem histórico do fundador'}</p>
          </div>
          ${item.row[colSuggestions()] ? `
            <div class="info-section">
              <h4><i data-lucide="help-circle" style="width: 1rem; height: 1rem;"></i> Dúvidas ou Sugestões</h4>
              <p>${item.row[colSuggestions()]}</p>
            </div>
          ` : ''}
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="eval-widget">
            <span class="eval-widget-label">Avaliação</span>
            <div class="eval-buttons" style="display: flex; flex-direction: column; gap: 0.5rem;">
              <button class="eval-btn eval-btn-selecionada ${status === 'selecionada' ? 'active' : ''}" data-action-status="selecionada">
                <i data-lucide="check-circle-2"></i> Selecionar Startup
              </button>
              <button class="eval-btn eval-btn-espera ${status === 'espera' ? 'active' : ''}" data-action-status="espera">
                <i data-lucide="clock"></i> Colocar em Espera
              </button>
              <button class="eval-btn eval-btn-desclassificada ${status === 'desclassificada' ? 'active' : ''}" data-action-status="desclassificada">
                <i data-lucide="x-circle"></i> Desclassificar
              </button>
            </div>
          </div>
          
          <div class="comment-area">
            <label>Comentários do Avaliador</label>
            <textarea class="comment-textbox continuous-comment" placeholder="Anote seus comentários sobre esta ideia...">${comment}</textarea>
          </div>
        </div>
      </div>
    `;

    // Interactive button clicks inside Continuous view
    const btns = wrapper.querySelectorAll('[data-action-status]');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const btnStatus = btn.getAttribute('data-action-status');
        const currentStatus = evaluations[key]?.status;
        
        // Toggle active state
        const newStatus = (currentStatus === btnStatus) ? null : btnStatus;
        
        // Update active states visual classes
        btns.forEach(b => b.classList.remove('active'));
        if (newStatus) {
          btn.classList.add('active');
        }
        
        updateIdeaEvaluation(key, newStatus, undefined);
      });
    });

    const saveBtn = wrapper.querySelector('.btn-save-bookmark');
    saveBtn.addEventListener('click', () => {
      toggleSaveIdea(key);
    });

    // Comment input autosave
    const textarea = wrapper.querySelector('.continuous-comment');
    textarea.addEventListener('input', () => {
      updateIdeaEvaluation(key, undefined, textarea.value);
    });

    container.appendChild(wrapper);
  });

  lucide.createIcons();
}

// Render VIEW 3: Focused Reader view (Carousel)
function renderReaderView() {
  const container = document.getElementById('reader-card-content');
  const sidePanel = document.querySelector('.reader-sidebar');
  
  if (filteredIdeas.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; color: var(--text-secondary);">
        <i data-lucide="info" style="width: 3rem; height: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: inline-block;"></i>
        <h3>Nenhuma startup corresponde aos filtros de busca para leitura.</h3>
      </div>
    `;
    sidePanel.style.pointerEvents = 'none';
    sidePanel.style.opacity = '0.5';
    lucide.createIcons();
    return;
  }

  sidePanel.style.pointerEvents = 'auto';
  sidePanel.style.opacity = '1';

  const item = filteredIdeas[activeIdeaIndex];
  const key = getIdeaKey(item);
  const evalState = evaluations[key];
  const status = evalState?.status;
  const comment = evalState?.comments || '';

  // Set side bar fields active states
  const sidebarBtns = sidePanel.querySelectorAll('[data-status]');
  sidebarBtns.forEach(btn => {
    const btnStatus = btn.getAttribute('data-status');
    if (status === btnStatus) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  const commentText = document.getElementById('reader-comment');
  commentText.value = comment;

  container.innerHTML = `
    <div class="reader-content-body">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Avaliando Ideia ${activeIdeaIndex + 1} de ${filteredIdeas.length} (Linha #${item.originalIndex})</span>
          <h2 style="font-size: 1.8rem; margin-top: 0.25rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            ${getStartupDisplayName(item)}
            <button class="btn-save-bookmark ${evalState?.saved ? 'is-saved' : ''}" id="reader-save-btn" title="Salvar ideia">
              <i data-lucide="bookmark" style="width: 1.4rem; height: 1.4rem;"></i>
            </button>
          </h2>
          ${getFounderHTML(item)}
        </div>
        <div class="card-badges">
          <span class="badge badge-sector" style="font-size: 0.8rem; padding: 0.3rem 0.6rem;">${item.row[colSector()] || 'Outra'}</span>
          <span class="badge badge-stage" style="font-size: 0.8rem; padding: 0.3rem 0.6rem;">${item.row[colStage()] || 'Ideação'}</span>
          ${getStatusBadgeHTML(status)}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
        <div class="info-section">
          <h4 style="font-size: 0.95rem;"><i data-lucide="lightbulb" style="width: 1.1rem; height: 1.1rem;"></i> Proposta / Ideia de Solução</h4>
          <p style="font-size: 1.05rem; line-height: 1.7;">${item.row[colSolution()] || '(Sem descrição da ideia)'}</p>
        </div>
        
        <div class="info-section">
          <h4 style="font-size: 0.95rem;"><i data-lucide="star" style="width: 1.1rem; height: 1.1rem;"></i> Por que deve fazer parte do Mete Marcha?</h4>
          <p style="font-size: 1.05rem; line-height: 1.7;">${item.row[colMotivation()] || '(Sem justificativa fornecida)'}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div class="info-section">
            <h4><i data-lucide="trending-up" style="width: 1rem; height: 1rem;"></i> Fase da Startup</h4>
            <p style="font-size: 0.9rem;">${item.row[colStage()] || 'Não informada.'}</p>
          </div>
          <div class="info-section">
            <h4><i data-lucide="briefcase" style="width: 1rem; height: 1rem;"></i> Experiência Empreendedora</h4>
            <p style="font-size: 0.9rem;">${item.row[colExp()] || 'Sem histórico anterior.'}</p>
          </div>
          <div class="info-section">
            <h4><i data-lucide="help-circle" style="width: 1rem; height: 1rem;"></i> Dúvidas ou Sugestões</h4>
            <p style="font-size: 0.9rem;">${item.row[colSuggestions()] || 'Sem observações.'}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="reader-nav-controls">
      <button class="action-btn" id="reader-prev-btn" ${activeIdeaIndex === 0 ? 'disabled' : ''}>
        <i data-lucide="chevron-left"></i> Anterior (Seta Esquerda)
      </button>
      
      <span style="font-size: 0.875rem; color: var(--text-muted); font-weight: 500;">
        Progresso nos Filtros: ${activeIdeaIndex + 1} / ${filteredIdeas.length}
      </span>

      <button class="action-btn" id="reader-next-btn" ${activeIdeaIndex === filteredIdeas.length - 1 ? 'disabled' : ''}>
        Próximo (Seta Direita) <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;

  // Next / Prev actions
  document.getElementById('reader-prev-btn')?.addEventListener('click', () => navigateReader(-1));
  document.getElementById('reader-next-btn')?.addEventListener('click', () => navigateReader(1));
  document.getElementById('reader-save-btn')?.addEventListener('click', () => toggleSaveIdea(key));

  lucide.createIcons();
}

function navigateReader(direction) {
  const nextIndex = activeIdeaIndex + direction;
  if (nextIndex >= 0 && nextIndex < filteredIdeas.length) {
    activeIdeaIndex = nextIndex;
    renderReaderView();
  }
}

// Render VIEW 4: Statistics & Reports
function renderReportsView() {
  // 1. Evaluations status count
  let selected = 0, wait = 0, rejected = 0, pending = 0;
  csvData.forEach(item => {
    const key = getIdeaKey(item);
    const status = evaluations[key]?.status;
    if (status === 'selecionada') selected++;
    else if (status === 'espera') wait++;
    else if (status === 'desclassificada') rejected++;
    else pending++;
  });

  const total = csvData.length;
  const getPercent = val => total > 0 ? Math.round((val / total) * 100) : 0;

  const statusChart = document.getElementById('stats-status-chart');
  statusChart.innerHTML = `
    <div class="bar-chart-row">
      <div class="bar-chart-info">
        <span class="bar-chart-label" style="color: var(--color-selected);">Selecionadas</span>
        <span class="bar-chart-value">${selected} (${getPercent(selected)}%)</span>
      </div>
      <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${getPercent(selected)}%; background-color: var(--color-selected);"></div></div>
    </div>
    <div class="bar-chart-row">
      <div class="bar-chart-info">
        <span class="bar-chart-label" style="color: var(--color-wait);">Em Espera</span>
        <span class="bar-chart-value">${wait} (${getPercent(wait)}%)</span>
      </div>
      <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${getPercent(wait)}%; background-color: var(--color-wait);"></div></div>
    </div>
    <div class="bar-chart-row">
      <div class="bar-chart-info">
        <span class="bar-chart-label" style="color: var(--color-rejected);">Desclassificadas</span>
        <span class="bar-chart-value">${rejected} (${getPercent(rejected)}%)</span>
      </div>
      <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${getPercent(rejected)}%; background-color: var(--color-rejected);"></div></div>
    </div>
    <div class="bar-chart-row">
      <div class="bar-chart-info">
        <span class="bar-chart-label" style="color: var(--text-secondary);">Pendentes de Avaliação</span>
        <span class="bar-chart-value">${pending} (${getPercent(pending)}%)</span>
      </div>
      <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${getPercent(pending)}%; background-color: var(--text-muted);"></div></div>
    </div>
  `;

  // 2. Sectors breakdown
  const sectorsMap = {};
  csvData.forEach(item => {
    const sector = item.row[colSector()] || 'Outra';
    sectorsMap[sector] = (sectorsMap[sector] || 0) + 1;
  });

  const sortedSectors = Object.entries(sectorsMap).sort((a, b) => b[1] - a[1]);
  const maxSectorCount = sortedSectors.length > 0 ? sortedSectors[0][1] : 0;
  
  const sectorsChart = document.getElementById('stats-sectors-chart');
  sectorsChart.innerHTML = '';
  sortedSectors.forEach(([sector, count]) => {
    const pct = maxSectorCount > 0 ? Math.round((count / maxSectorCount) * 100) : 0;
    const totalPct = getPercent(count);
    sectorsChart.innerHTML += `
      <div class="bar-chart-row">
        <div class="bar-chart-info">
          <span class="bar-chart-label">${sector}</span>
          <span class="bar-chart-value">${count} (${totalPct}%)</span>
        </div>
        <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${pct}%;"></div></div>
      </div>
    `;
  });

  // 3. Stages breakdown
  const stagesMap = {};
  csvData.forEach(item => {
    const stage = item.row[colStage()] || 'Ideação';
    stagesMap[stage] = (stagesMap[stage] || 0) + 1;
  });

  const sortedStages = Object.entries(stagesMap).sort((a, b) => b[1] - a[1]);
  const maxStageCount = sortedStages.length > 0 ? sortedStages[0][1] : 0;

  const stagesChart = document.getElementById('stats-stages-chart');
  stagesChart.innerHTML = '';
  sortedStages.forEach(([stage, count]) => {
    const pct = maxStageCount > 0 ? Math.round((count / maxStageCount) * 100) : 0;
    const totalPct = getPercent(count);
    stagesChart.innerHTML += `
      <div class="bar-chart-row">
        <div class="bar-chart-info">
          <span class="bar-chart-label">${stage}</span>
          <span class="bar-chart-value">${count} (${totalPct}%)</span>
        </div>
        <div class="bar-chart-track"><div class="bar-chart-fill" style="width: ${pct}%; background-color: #a855f7;"></div></div>
      </div>
    `;
  });
}

// Modal view triggers
let modalItemKey = null;

function openDetailModal(item) {
  modalItemKey = getIdeaKey(item);
  const evalState = evaluations[modalItemKey];
  const status = evalState?.status;
  const comment = evalState?.comments || '';

  document.getElementById('modal-title').textContent = getStartupDisplayName(item);
  const modalFounder = document.getElementById('modal-founder-container');
  if (modalFounder) {
    modalFounder.innerHTML = getFounderHTML(item);
  }
  document.getElementById('modal-solution').textContent = item.row[colSolution()] || '(Sem descrição)';
  document.getElementById('modal-motivation').textContent = item.row[colMotivation()] || '(Sem descrição)';
  document.getElementById('modal-stage').textContent = item.row[colStage()] || '(Sem fase informada)';
  document.getElementById('modal-experience').textContent = item.row[colExp()] || '(Sem descrição)';
  
  const isSaved = evalState?.saved === true;
  const modalSaveBtn = document.getElementById('modal-save-btn');
  if (modalSaveBtn) {
    modalSaveBtn.className = `btn-save-bookmark ${isSaved ? 'is-saved' : ''}`;
  }

  const suggestions = item.row[colSuggestions()];
  const suggSection = document.getElementById('modal-suggestions-section');
  if (suggestions && suggestions.trim()) {
    suggSection.classList.remove('hidden');
    document.getElementById('modal-suggestions').textContent = suggestions;
  } else {
    suggSection.classList.add('hidden');
  }

  // Badges
  const badgesContainer = document.getElementById('modal-badges');
  badgesContainer.innerHTML = `
    <span class="badge badge-sector">${item.row[colSector()] || 'Outra'}</span>
    <span class="badge badge-stage">${item.row[colStage()] || 'Ideação'}</span>
    <span class="badge badge-stage">Linha #${item.originalIndex}</span>
    <span id="modal-status-badge">${getStatusBadgeHTML(status)}</span>
  `;

  // Set active status on buttons
  const buttons = document.querySelectorAll('#detail-modal [data-status]');
  buttons.forEach(btn => {
    const btnStatus = btn.getAttribute('data-status');
    if (status === btnStatus) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Comments box
  const commentBox = document.getElementById('modal-comment');
  commentBox.value = comment;

  // Open classes
  document.getElementById('detail-modal').classList.add('open');
}

function closeDetailModal() {
  document.getElementById('detail-modal').classList.remove('open');
  modalItemKey = null;
}

// Modal buttons actions
document.querySelectorAll('#detail-modal [data-status]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!modalItemKey) return;
    const btnStatus = btn.getAttribute('data-status');
    const currentStatus = evaluations[modalItemKey]?.status;
    
    // Toggle if clicked again
    const newStatus = (currentStatus === btnStatus) ? null : btnStatus;
    
    // Update local buttons visual feedback
    document.querySelectorAll('#detail-modal [data-status]').forEach(b => {
      if (b.getAttribute('data-status') === newStatus) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // Update badge
    document.getElementById('modal-status-badge').innerHTML = getStatusBadgeHTML(newStatus);
    
    // Save evaluation
    updateIdeaEvaluation(modalItemKey, newStatus, undefined);
  });
});

// Modal comment typing autosave
document.getElementById('modal-comment').addEventListener('input', (e) => {
  if (!modalItemKey) return;
  updateIdeaEvaluation(modalItemKey, undefined, e.target.value);
});

// Reader Mode evaluation controls sidebar
document.querySelectorAll('.reader-sidebar [data-status]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (filteredIdeas.length === 0) return;
    const currentItem = filteredIdeas[activeIdeaIndex];
    const key = getIdeaKey(currentItem);
    const btnStatus = btn.getAttribute('data-status');
    const currentStatus = evaluations[key]?.status;

    const newStatus = (currentStatus === btnStatus) ? null : btnStatus;
    
    // Save
    updateIdeaEvaluation(key, newStatus, undefined);
    
    // Rerender view to refresh layout colors
    renderReaderView();
  });
});

// Reader Mode comment typing auto-save
document.getElementById('reader-comment').addEventListener('input', (e) => {
  if (filteredIdeas.length === 0) return;
  const currentItem = filteredIdeas[activeIdeaIndex];
  const key = getIdeaKey(currentItem);
  
  updateIdeaEvaluation(key, undefined, e.target.value);
});

// Navigation and tabs view toggling
function showView(viewName) {
  activeView = viewName;
  
  // Reapply filters to correctly segment ideas (e.g. filter only saved ones if the saved tab is selected)
  applyFilters();
  
  // Update tabs links active
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update panes display
  document.querySelectorAll('.view-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  const targetPane = document.getElementById(`view-${viewName}`);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  // Update filter panel visibility
  const filterPanel = document.querySelector('.filter-panel');
  if (filterPanel) {
    if (viewName === 'dashboard' || viewName === 'continuous' || viewName === 'saved') {
      filterPanel.classList.remove('hidden');
    } else {
      filterPanel.classList.add('hidden');
    }
  }

  // Rerender contents for report view (others are triggered by applyFilters())
  if (viewName === 'reports') {
    renderReportsView();
  }
}

// Mobile collapsible filters toggle logic
const btnFilterToggle = document.getElementById('btn-filter-toggle');
const filterGridContainer = document.getElementById('filter-grid-container');
if (btnFilterToggle && filterGridContainer) {
  btnFilterToggle.addEventListener('click', () => {
    filterGridContainer.classList.toggle('show-filters');
    btnFilterToggle.classList.toggle('expanded');
  });
}

// Hook tab switches
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.getAttribute('data-view');
    showView(view);
  });
});

// Filters handlers
document.getElementById('filter-search').addEventListener('input', applyFilters);
document.getElementById('filter-sector').addEventListener('change', applyFilters);
document.getElementById('filter-stage').addEventListener('change', applyFilters);
document.getElementById('filter-status').addEventListener('change', applyFilters);
document.getElementById('sort-by').addEventListener('change', applyFilters);

document.getElementById('btn-reset-filters').addEventListener('click', () => {
  document.getElementById('filter-search').value = '';
  document.getElementById('filter-sector').value = 'all';
  document.getElementById('filter-stage').value = 'all';
  document.getElementById('filter-status').value = 'all';
  document.getElementById('sort-by').value = 'index-asc';
  applyFilters();
  showToast("Filtros redefinidos.", "success");
});

// Modal Close handlers
document.getElementById('modal-close-btn').addEventListener('click', closeDetailModal);
document.getElementById('modal-save-btn')?.addEventListener('click', () => {
  if (modalItemKey) {
    toggleSaveIdea(modalItemKey);
  }
});
document.getElementById('detail-modal').addEventListener('click', (e) => {
  if (e.target.id === 'detail-modal') {
    closeDetailModal();
  }
});

// Keyboard navigation shortcuts for focused reader mode
window.addEventListener('keydown', (e) => {
  // Avoid firing hotkeys when typing in comment fields
  if (document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'INPUT') {
    return;
  }

  // Hotkey Esc -> close modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('detail-modal');
    if (modal.classList.contains('open')) {
      closeDetailModal();
    }
  }

  // Only if app is active and reader is open
  if (activeView === 'reader' && filteredIdeas.length > 0) {
    if (e.key === 'ArrowRight') {
      navigateReader(1);
    } else if (e.key === 'ArrowLeft') {
      navigateReader(-1);
    } else if (e.key === '1') {
      triggerReaderStatusChange('selecionada');
    } else if (e.key === '2') {
      triggerReaderStatusChange('espera');
    } else if (e.key === '3') {
      triggerReaderStatusChange('desclassificada');
    } else if (e.key === '0') {
      triggerReaderStatusChange(null);
    }
  }
});

function triggerReaderStatusChange(targetStatus) {
  if (filteredIdeas.length === 0) return;
  const currentItem = filteredIdeas[activeIdeaIndex];
  const key = getIdeaKey(currentItem);
  
  updateIdeaEvaluation(key, targetStatus, undefined);
  renderReaderView();
  showToast(`Ideia avaliada como: ${targetStatus || 'Pendente'}`, 'success');
}

// EXPORT EXCEL/CSV FILE IMPLEMENTATION
function escapeCSVField(val) {
  if (val === undefined || val === null) return '';
  let str = val.toString().trim();
  // Replace any linebreaks or quotes to prevent breaking structure
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function exportToCSV() {
  if (csvData.length === 0) return;

  // Construct headers: original headers + Evaluation Status + Evaluation Comments
  const exportHeaders = [...headers, 'Status Avaliação', 'Comentários Avaliador'];
  const rows = [exportHeaders];

  csvData.forEach(item => {
    const key = getIdeaKey(item);
    const evalState = evaluations[key];
    const status = evalState?.status || '';
    const comments = evalState?.comments || '';
    
    const rowData = [...item.row, status, comments];
    rows.push(rowData);
  });

  // Join CSV using proper newline character and comma separator
  const csvContent = rows.map(r => r.map(escapeCSVField).join(',')).join('\n');
  
  // Force download with UTF-8 BOM so Excel opens special accents correctly
  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", "mete_marcha_planilha_avaliada.csv");
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Planilha CSV avaliada exportada com sucesso!", "success");
}

// Backup JSON Actions
function exportToJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(evaluations, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "backup_avaliacoes_mete_marcha.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.removeChild(downloadAnchor);
  showToast("Backup das avaliações baixado em JSON!", "success");
}

// Load CSV File Handler
function handleCSVText(text) {
  try {
    const parsedLines = parseCSV(text);
    initializeData(parsedLines);
  } catch (err) {
    console.error(err);
    showToast("Erro ao processar a planilha. Verifique o formato do arquivo CSV.", "error");
  }
}

// Setup file pickers and drag-drops
const fileInput = document.getElementById('csv-file-input');
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (evt) => handleCSVText(evt.target.result);
  reader.readAsText(file, 'utf-8');
});

const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  
  const file = e.dataTransfer.files[0];
  if (!file || !file.name.endsWith('.csv')) {
    showToast("Por favor, selecione apenas arquivos .csv", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = (evt) => handleCSVText(evt.target.result);
  reader.readAsText(file, 'utf-8');
});

// Hook backup actions
document.getElementById('btn-export-csv').addEventListener('click', exportToCSV);
document.getElementById('global-export-btn').addEventListener('click', exportToCSV);
document.getElementById('btn-export-json').addEventListener('click', exportToJSON);

// Hook completion overlay actions
document.getElementById('completion-export-btn')?.addEventListener('click', () => {
  exportToCSV();
  closeCompletionOverlay();
});
document.getElementById('completion-review-btn')?.addEventListener('click', () => {
  closeCompletionOverlay();
  showView('continuous');
});

// Import backup json
const jsonImportInput = document.getElementById('json-import-input');
jsonImportInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const imported = JSON.parse(evt.target.result);
      // Simple validation
      if (typeof imported === 'object' && imported !== null) {
        evaluations = { ...evaluations, ...imported };
        saveEvaluations();
        updateKPIs();
        applyFilters();
        showToast("Backup JSON importado e mesclado com sucesso!", "success");
      } else {
        showToast("Formato de backup JSON inválido.", "error");
      }
    } catch (err) {
      showToast("Erro ao processar arquivo JSON.", "error");
    }
  };
  reader.readAsText(file, 'utf-8');
});

// Auto-load attempt from server (relative path)
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Check if we have embedded data
  if (typeof embeddedCsvData !== 'undefined' && embeddedCsvData.length > 0) {
    initializeWithEmbeddedData();
    return;
  }

  // Update loading status text to reflect auto-loading attempt
  const loadingStatus = document.getElementById('loading-status-text');
  if (loadingStatus) {
    loadingStatus.textContent = "Tentando carregar 'planilha.csv' automaticamente...";
  }

  fetch('planilha.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch spreadsheet: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      handleCSVText(text);
    })
    .catch(err => {
      console.warn("Auto load fetch failed (expected if double clicking file://):", err.message);
      
      // Hide loading screen
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) loadingScreen.classList.add('hidden');
      
      // Show file uploader
      const dropZone = document.getElementById('drop-zone');
      if (dropZone) dropZone.classList.remove('hidden');
      
      const autoLoadAttempt = document.getElementById('auto-load-attempt');
      if (autoLoadAttempt) {
        autoLoadAttempt.classList.remove('hidden');
        autoLoadAttempt.innerHTML = `
          <span style="color: var(--text-muted);"><i data-lucide="alert-circle" style="display:inline-block; vertical-align:middle; width: 1rem;"></i> Sem auto-carregamento automático da planilha. Selecione manualmente o arquivo acima.</span>
        `;
        lucide.createIcons();
      }
    });
});