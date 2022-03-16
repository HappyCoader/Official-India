function loadcomplete() {
  const load=document.querySelector('.loading');
  load.style.display='none';
  
}
function sendEmail(){
    const name=document.getElementById('name').value;
    const emailed=document.getElementById('email').value;
    const phone =document.getElementById('phone').value;
    const classs=document.getElementById('class').value;
    const select=document.getElementById('selectoption').value;
        Email.send({
          Host: "smtp.gmail.com",
          Username: "ranjansameer928@gmail.com",
          Password: "kowlronffpkuzlrh",
          To: `happyranjanparvat@gmail.com,${emailed}`,
          From: "ranjansameer928@gmail.com",
          Subject: "Booked Study Demo Classes",
          Body: `Thank you To booking Demo Classes <br> </br> Name: ${name} <br> email:${emailed} <br> phone Number: ${phone} <br> class: ${classs} <br> Timing : ${select} <br> 
          Your Meeting link <br> 
          Please join On time <br>
          Your Google meet Link https://meet.google.com/zdz-hikk-nkt
          `,
          message:alert('Your demo Classes is booked Check your Email Meeting link  in your Email Inbox')
        })
          .then(function (message) {
            alert("Your demo Classes is Booked")
          });
      }
      function codingEmail(){
        const Name=document.getElementById('Name').value;
        const Emailed=document.getElementById('Email').value;
        const Phone =document.getElementById('Phone').value;
        const programinglang=document.getElementById('programinglang').value;
        const select2=document.getElementById('selectoption2').value;
            Email.send({
              Host: "smtp.gmail.com",
              Username: "ranjansameer928@gmail.com",
              Password: "kowlronffpkuzlrh",
              To: `happyranjanparvat@gmail.com,${Emailed}`,
              From: "ranjansameer928@gmail.com",
              Subject: "Booked Coding  Demo Classes",
              Body: `Thank you To booking Demo Classes <br> </br> Name: ${Name} <br> email:${Emailed} <br> phone Number: ${Phone} <br> Programing language : ${programinglang} <br> Timing : ${select2} <br> 
              Your Meeting link <br> 
              Please join On time <br>
              Your Google meet Link https://meet.google.com/zdz-hikk-nkt
              `,
              
              message:alert('Your Demo Classes is booked Check your Email Meeting link  in your Email Inbox')
            })
              .then(function (message) {
                alert("Your demo Classes is Booked")
              });
          }
      const contact=document.getElementById('contact');
      const container=document.querySelector('.containercontactus');
      contact.addEventListener('click',()=>{
        container.style.left='0%'
      })
      const closecontactus=document.querySelector('.closecontactus')
      closecontactus.addEventListener('click',()=>{
        container.style.left='-100%'
      })

      const democlass=document.getElementById('democlass');
      const democlassdiv=document.querySelector('.democlassdiv');
      democlass.addEventListener('click',()=>{
        democlassdiv.style.left='0%'
      })

      const closedemo=document.querySelector('.closedemo')
      closedemo.addEventListener('click',()=>{
      democlassdiv.style.left='-100%'
      })

      const democlass2=document.getElementById('democlass2');
      const democlassdiv2=document.querySelector('.democlassdiv2');
      democlass2.addEventListener('click',()=>{
        democlassdiv2.style.left='0%'
      })

      const closecoding=document.querySelector('.closecoding')
      closecoding.addEventListener('click',()=>{
      democlassdiv2.style.left='-100%'
      })
      
      function contactus(){
        const NAME=document.getElementById('NAME').value;
        const oUREMAIL=document.getElementById('EMAIL').value;
        const PHONE =document.getElementById('PHONENUMBER').value;
        const msg=document.getElementById('Message').value;
      
            Email.send({
              Host: "smtp.gmail.com",
              Username: "ranjansameer928@gmail.com",
              Password: "kowlronffpkuzlrh",
              To: `happyranjanparvat@gmail.com`,
              From: "ranjansameer928@gmail.com",
              Subject: "CLINT CONTACT WITH US",
              Body: `Thank you to contact With us <br> </br> Name: ${NAME} <b email:${oUREMAIL} <br> phone Number: ${PHONE} <br> MESSAGE: ${ msg}`,
              message:alert('THANK YOU TO CONTACT WITH US RESPONSE GUARATED IN 1 DAYS ')
            })
              .then(function (message) {
                alert("Thank you for contact with us ")
              });
          }
// setTimeout(() => {
    
//     function showmsg() {
//         const msg=document.querySelector('.msg');
//        console.log('submited')
//     }
// }, 5000);

