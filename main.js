/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/

/*=============== HOME TYPED JS ===============*/
const typed = new Typed('#hometitle', {
  strings: ['', ''],
  typeSpeed: 60,
  loop:true,
});

/*=============== CHANGE HEADER STYLES ===============*/


/*=============== SWIPER WORK ===============*/ 

/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm=document.getElementById('contact-form')
   const contactMessage=document.getElementById('contact-message')

    const sendemail =async (e) =>{
      //Prevent page from reloading
    e.preventDefault()

    try{
      //serviceId-templateId-#formID-#publickey
      await emailjs.sendForm('service_9a1n555','template_dlfny5g','#contact-form','Wpfx5BZ1gCH3WsjJH')
     //show sent message
      contactMessage.textContent ='Message sent successfully ✅'

      //Clear input fields
      contactForm.reset()
    }catch(error){   
      //Show error message
      contactMessage.textContent='Message not sent(service error) ❌'
   }finally{
      //Remove message after five seconds
      setTimeout(() => contactMessage.textContent='',5000)
   }
    }
    contactForm.addEventListener('submit',sendemail) 

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/