const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function enviarEmail({ para, assunto, html }) {
  try {
    const info = await transporter.sendMail({
      from: '"Samuel Tech IA" <contato@samueltechia.com.br>',
      to: para,
      subject: assunto,
      html: html
    });
    
    console.log('✅ Email enviado:', info.messageId);
    return { sucesso: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    return { sucesso: false, erro: error.message };
  }
}

async function enviarEmailBoasVindas(email, nome) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Bem-vindo à Samuel Tech IA!</h1>
        </div>
        <div class="content">
          <h2>Olá ${nome}!</h2>
          <p>É com grande alegria que recebemos você em nossa plataforma. Estamos aqui para revolucionar seu negócio com tecnologia de ponta!</p>
          
          <h3>🎯 O que oferecemos:</h3>
          <ul>
            <li>🤖 Chatbots inteligentes que vendem 24/7</li>
            <li>💻 Sites profissionais com alta conversão</li>
            <li>📱 Aplicativos personalizados</li>
            <li>⚡ Automações que economizam seu tempo</li>
          </ul>
          
          <p>Quer saber como podemos ajudar especificamente seu negócio?</p>
          
          <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Olá! Acabei de me cadastrar e quero saber mais sobre os produtos" class="button">
            📱 FALAR COM ESPECIALISTA
          </a>
          
          <p style="margin-top: 30px;">Enquanto isso, explore nosso dashboard e conheça todas as soluções!</p>
        </div>
        <div class="footer">
          <p>📞 WhatsApp: (11) 91303-1275</p>
          <p>📧 contato@samueltechia.com.br</p>
          <p>© 2025 Samuel Tech IA - Todos os direitos reservados</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return enviarEmail({
    para: email,
    assunto: '🚀 Bem-vindo à Samuel Tech IA!',
    html
  });
}

async function enviarEmailOferta(email, nome, produto) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ff6b6b, #ff4757); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .produto { background: white; border-left: 4px solid #ff4757; padding: 15px; margin: 20px 0; }
        .preco { font-size: 24px; color: #ff4757; font-weight: bold; }
        .button { display: inline-block; background: #25d366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; }
        .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔥 OFERTA ESPECIAL PARA VOCÊ!</h1>
        </div>
        <div class="content">
          <h2>Olá ${nome}!</h2>
          <p>Identificamos que você tem interesse em soluções tecnológicas e preparamos uma oferta exclusiva:</p>
          
          <div class="produto">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco}</p>
            <p>✅ Parcelamento em até 12x</p>
            <p>✅ Suporte 24/7 incluso</p>
            <p>✅ Atualizações vitalícias</p>
          </div>
          
          <p><strong>🎁 BÔNUS ESPECIAL:</strong> Contratando hoje, você ganha uma consultoria gratuita de 1 hora com nossos especialistas!</p>
          
          <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Quero%20aproveitar%20a%20oferta%20do%20${encodeURIComponent(produto.nome)}" class="button">
            📱 QUERO APROVEITAR ESTA OFERTA
          </a>
          
          <p style="margin-top: 20px; color: #999; font-size: 14px;">*Oferta por tempo limitado. Garanta já a sua!</p>
        </div>
        <div class="footer">
          <p>📞 WhatsApp: (11) 91303-1275</p>
          <p>© 2025 Samuel Tech IA</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return enviarEmail({
    para: email,
    assunto: '🔥 Oferta Especial Samuel Tech IA!',
    html
  });
}

module.exports = { enviarEmail, enviarEmailBoasVindas, enviarEmailOferta };
