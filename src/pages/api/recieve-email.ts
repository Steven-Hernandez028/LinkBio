import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.API_KEY!);

async function recieveEmail(req :NextApiRequest,res:NextApiResponse){
    try{
        await sendgrid.send({
            to:process.env.FROM_EMAIL!,
            from:process.env.EMAIL!,
            subject: `${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
              <meta charset="utf-8">
            
              <title>The HTML5 Herald</title>
              <meta name="description" content="The HTML5 Herald">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
              <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3> The email is: ✉️${req.body.email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${req.body.message}</p>
                    <br>
                    </div>
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Steven Hernandez<br>Software Developer<br>+1 8493706644</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                     
                      <a href="https://github.com/Steven-Hernandez028" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                      <a href="https://www.instagram.com/stev_hernandez28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                      <a href="https://www.linkedin.com/in/steven-manuel-hernandez-gonzalez/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                      <a href="https://www.youtube.com/channel/UCFDZymHX92hQtwLS2Y8DooQ" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Youtube</a>
                      
                    </div>
                    </div>
            </body>
            </html>`,
        })
    }catch(error : any){
        return res.status(error.statusCode || 500).json({error:error.message})
    }

    return res.status(200).json({error:""});
}

export default recieveEmail;