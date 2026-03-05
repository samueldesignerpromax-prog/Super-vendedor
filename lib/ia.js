// IA Super Vendedor - Convence o cliente a comprar!

const produtos = [
  {
    id: 1,
    nome: '🤖 Chatbot Profissional',
    descricao: 'Chatbot inteligente que vende 24 horas por dia, 7 dias por semana',
    preco: '497,00',
    parcelas: '12x de R$ 49,70',
    beneficios: [
      'Atende clientes automaticamente',
      'Qualifica leads',
      'Agenda reuniões',
      'Integra com WhatsApp',
      'Aumenta vendas em 300%'
    ]
  },
  {
    id: 2,
    nome: '💻 Site Profissional',
    descricao: 'Site moderno e otimizado para converter visitantes em clientes',
    preco: '997,00',
    parcelas: '12x de R$ 99,70',
    beneficios: [
      'Design responsivo',
      'Otimizado para Google',
      'Painel administrativo',
      'Blog integrado',
      'Formulário de contato'
    ]
  },
  {
    id: 3,
    nome: '📱 Aplicativo Mobile',
    descricao: 'App completo para Android e iOS do seu negócio',
    preco: '2.997,00',
    parcelas: '12x de R$ 299,70',
    beneficios: [
      'App para Android e iOS',
      'Notificações push',
      'Integração com pagamentos',
      'Dashboard administrativo',
      'Relatórios em tempo real'
    ]
  },
  {
    id: 4,
    nome: '⚡ Automação Empresarial',
    descricao: 'Automatize tarefas repetitivas e economize horas de trabalho',
    preco: '1.497,00',
    parcelas: '12x de R$ 149,70',
    beneficios: [
      'Automação de emails',
      'Integração de sistemas',
      'Fluxos de trabalho',
      'Relatórios automáticos',
      'Redução de erros'
    ]
  }
];

// Função principal da IA - analisa mensagem e responde como vendedor
function responderComoVendedor(mensagem, nomeUsuario = 'Cliente') {
  const msg = mensagem.toLowerCase();
  
  // Saudação inicial
  if (msg.includes('olá') || msg.includes('oi') || msg.includes('bom dia') || msg.includes('boa tarde') || msg.includes('boa noite')) {
    return {
      texto: `Olá ${nomeUsuario}! 😊 Que bom falar com você! Meu nome é Samuel, sou o assistente virtual da Samuel Tech IA. Como posso ajudar você hoje? Posso apresentar nossas soluções incríveis!`,
      acao: 'saudacao'
    };
  }
  
  // Interesse em produtos
  if (msg.includes('produto') || msg.includes('comprar') || msg.includes('quero') || msg.includes('preço') || msg.includes('valor')) {
    return {
      texto: `Que legal ${nomeUsuario}! Fico feliz pelo seu interesse! 🎯 Temos soluções incríveis que podem revolucionar seu negócio:\n\n` +
             `1️⃣ 🤖 Chatbot Profissional - R$ 497,00 (12x R$ 49,70)\n` +
             `2️⃣ 💻 Site Profissional - R$ 997,00 (12x R$ 99,70)\n` +
             `3️⃣ 📱 Aplicativo Mobile - R$ 2.997,00 (12x R$ 299,70)\n` +
             `4️⃣ ⚡ Automação Empresarial - R$ 1.497,00 (12x R$ 149,70)\n\n` +
             `Qual deles mais te interessou? Posso detalhar cada um! ✨`,
      acao: 'mostrar_produtos'
    };
  }
  
  // Interesse em Chatbot
  if (msg.includes('chatbot') || msg.includes('bot') || msg.includes('1')) {
    return {
      texto: `Excelente escolha ${nomeUsuario}! O 🤖 Chatbot Profissional é nosso produto mais vendido! 🚀\n\n` +
             `✨ BENEFÍCIOS EXCLUSIVOS:\n` +
             `✅ Atende clientes 24/7 automaticamente\n` +
             `✅ Qualifica leads e gera vendas enquanto você dorme\n` +
             `✅ Integração total com WhatsApp\n` +
             `✅ Agendamento automático de reuniões\n` +
             `✅ Aumento comprovado de 300% nas vendas\n\n` +
             `🔥 OFERTA ESPECIAL: R$ 497,00 em até 12x de R$ 49,70\n\n` +
             `Quer garantir essa solução incrível? Posso te ajudar com a compra! 💰`,
      acao: 'detalhar_chatbot'
    };
  }
  
  // Interesse em Site
  if (msg.includes('site') || msg.includes('2')) {
    return {
      texto: `Perfeito ${nomeUsuario}! O 💻 Site Profissional vai transformar sua presença online! 🌐\n\n` +
             `✨ O QUE VOCÊ LEVA:\n` +
             `✅ Design moderno e responsivo (funciona em celular, tablet e PC)\n` +
             `✅ Otimização para Google (SEO) - apareça nas primeiras buscas!\n` +
             `✅ Painel administrativo fácil de usar\n` +
             `✅ Blog para atrair mais clientes\n` +
             `✅ Formulários que convertem visitantes em leads\n\n` +
             `🔥 VALOR PROMOCIONAL: R$ 997,00 em 12x de R$ 99,70\n\n` +
             `Imagina só seu negócio online 24/7 atraindo clientes! Vamos nessa? 🚀`,
      acao: 'detalhar_site'
    };
  }
  
  // Interesse em App
  if (msg.includes('app') || msg.includes('aplicativo') || msg.includes('mobile') || msg.includes('3')) {
    return {
      texto: `Sensacional ${nomeUsuario}! O 📱 Aplicativo Mobile vai colocar seu negócio no bolso dos clientes! 📲\n\n` +
             `✨ BENEFÍCIOS INCRÍVEIS:\n` +
             `✅ Apps nativos para Android e iOS\n` +
             `✅ Notificações push - clientes sempre lembram de você!\n` +
             `✅ Pagamentos integrados\n` +
             `✅ Dashboard para gerenciar tudo\n` +
             `✅ Relatórios em tempo real\n\n` +
             `🔥 INVESTIMENTO: R$ 2.997,00 em 12x de R$ 299,70\n\n` +
             `Um app profissional como esse, pelo valor de uma consultoria! Quer garantir o seu? ⚡`,
      acao: 'detalhar_app'
    };
  }
  
  // Interesse em Automação
  if (msg.includes('automação') || msg.includes('automacao') || msg.includes('automatizar') || msg.includes('4')) {
    return {
      texto: `${nomeUsuario}, você está de parabéns! A ⚡ Automação Empresarial vai revolucionar sua produtividade! 🚀\n\n` +
             `✨ ECONOMIZE TEMPO E DINHEIRO:\n` +
             `✅ Automatize emails e respostas\n` +
             `✅ Integre sistemas que não conversam entre si\n` +
             `✅ Crie fluxos de trabalho automáticos\n` +
             `✅ Relatórios gerados automaticamente\n` +
             `✅ Reduza erros humanos em 95%\n\n` +
             `🔥 INVESTIMENTO INTELIGENTE: R$ 1.497,00 em 12x de R$ 149,70\n\n` +
             `Pensa só: enquanto a máquina trabalha, você foca no que realmente importa! Bora automatizar? ⚙️`,
      acao: 'detalhar_automacao'
    };
  }
  
  // Preços e formas de pagamento
  if (msg.includes('pagamento') || msg.includes('parcela') || msg.includes('cartão') || msg.includes('pix')) {
    return {
      texto: `${nomeUsuario}, temos condições especiais para você! 💳\n\n` +
             `✅ Cartão de crédito - parcelamos em até 12x sem juros!\n` +
             `✅ PIX - 5% de desconto à vista!\n` +
             `✅ Boleto bancário\n` +
             `✅ Transferência\n\n` +
             `Quer simular o valor das parcelas para o produto que você escolheu? 🎯`,
      acao: 'formas_pagamento'
    };
  }
  
  // Dúvidas sobre funcionamento
  if (msg.includes('como funciona') || msg.includes('funciona') || msg.includes('dúvida')
