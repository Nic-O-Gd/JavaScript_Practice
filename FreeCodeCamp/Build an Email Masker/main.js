function maskEmail(email) {
  const [mailName, domain] = email.split('@');
  if (mailName.length > 2) {
        const maskedMail = mailName[0] + '*'.repeat(mailName.length - 2) + mailName[mailName.length - 1];
    return `${maskedMail}@${domain}`
  } else {
    return email;
  } 
}

let email = "examplemail@domain.com"
console.log(maskEmail(email));