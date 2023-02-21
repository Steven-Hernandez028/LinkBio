import type { NextApiRequest, NextApiResponse} from 'next'
import sgMail from '@sendgrid/mail'

export default async function sendEmail( req: NextApiRequest, res: NextApiResponse) {

  sgMail.setApiKey(process.env.API_KEY!)

    if(req.method == 'POST'){
      const { Mail } = req.body;
      const msg = {

        to: Mail,
        from: process.env.FROM_EMAIL!,
        subject: "Gracias por tu donacion",
        html: '<p>Gracias por donar a nuestra causa. Su generosidad hace una diferencia .</p>',
      }
      try{
        await sgMail.send(msg)
        console.log(Mail)

        res.status(200).json({ message: 'Correo electronico enviado.'})

      }catch (error){
        console.error(error)
        res.status(500).json({ message: 'error al enviar correo electronico.'}
        )
      }
    }else{
      res.status(404).send('No se encontro la pagina')
    }
    
    

    
    }

