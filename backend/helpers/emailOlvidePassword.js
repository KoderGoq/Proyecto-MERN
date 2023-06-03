import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { nombre, email, token } = datos;
    // Enviar Email
    const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: 'Restablece tu Password',
        text: 'Restablece tu Password',
        html: `<p>Hola ${nombre}, has solicitado restablecer tu password.</p>
            <p>Da click al siguiente enlace para restablecer tu password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
                
        `
    });

    console.log('Mensaje enviado: %s', info.messageId);

}

export default emailOlvidePassword;