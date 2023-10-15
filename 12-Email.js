const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'manjunathhosamani67@gmail.com',
        pass:'dqwh nmlf bfmx vzfw'
    }
})


const mailOptions = {
    from:'manjuanthhosamani67@gmail.com',
    to:'manjubit2019@gmail.com',
    subject:'Sending the message using Node.js',
    text:'This was simple'
};


transporter.sendMail(mailOptions,function(err,result){
    if(err){
        console.log(err)
    }else{
        console.log('Email sent: '+result.response);
    }
});