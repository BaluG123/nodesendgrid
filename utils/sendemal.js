require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = (to,from,subject,text)=>{
    const msg = {
        to,
        from,
        subject,
        html: text
    }

    sgMail.send(msg, function(err,info){
        if(err){
             console.log('email not sent !')
             console.log(JSON.stringify(err))
           }else{
             console.log('email sent successfully !')
           }
         })
};

module.exports = sendMail


