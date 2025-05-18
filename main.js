document.addEventListener('DOMContentLoaded', function(){
    let inputs = document.getElementsByClassName('form-container');
    let uploadContainer = document.getElementsByClassName('upload-container');
    let subUploadContainer = document.getElementsByClassName('sub-upload-container');
    let fileInput = document.getElementsByClassName('input-avatar');
    let previewContainer = document.getElementsByClassName('image-preview-container');
    let preview = document.getElementsByClassName('avatar-preview');
    let rmvBtn = document.getElementsByClassName('rmv-btn');
    let chnBtn = document.getElementsByClassName('chn-btn');
    let istate = document.getElementsByClassName('state-image');
    
    subUploadContainer[0].addEventListener('click', function(){fileInput[0].click();});
    
    fileInput[0].addEventListener('change', function(event){
        let file = event.target.files[0];
        let size = 500 * 1024;
        if(file){
            if(file.size > size){
              istate[0].innerHTML = `<img src = "icon-info-red.svg">File too large. Please upload a photo under 500KB.` ;
              istate[0].style.color = 'tomato';
              return;
            }
            istate[0].innerHTML = `<img src = "icon-info.svg">Upload your photo (JPG or PNG, max size: 500KB).` ;
            istate[0].style.color = 'hsl(245, 15%, 58%)';
            const reader = new FileReader();
    reader.onload = function(event) {
      preview[0].src = event.target.result;
            previewContainer[0].style.display = 'flex';
            subUploadContainer[0].style.display = 'none';
            }
            reader.readAsDataURL(file);            
        }
    });
    
    chnBtn[0].addEventListener('click', function(){fileInput[0].click();});
    
    rmvBtn[0].addEventListener('click', function(){
        previewContainer[0].style.display = 'none';
            subUploadContainer[0].style.display = 'flex';
            fileInput[0].value = '';
    });
    
    let genBtn = document.getElementsByClassName('generate-btn')
    let inputFname = document.getElementsByClassName('input-fname');
    let inputUserName = document.getElementsByClassName('input-username');
    let inputEmail = document.getElementsByClassName('input-email');
    let fnameState = document.getElementsByClassName('state-fname');
    let emailState = document.getElementsByClassName('state-email');
    let usernameState = document.getElementsByClassName('state-username');
    let attendeeGithub = document.getElementsByClassName('attendee-github');
    let attendeeName = document.getElementsByClassName('attendee-fname')
    let attendeeImg = document.getElementsByClassName('attendee-img');
    let ticketContainer = document.getElementsByClassName('ticket-container');
    let mainHeading = document.getElementsByClassName('main-heading');
    let mainParagraph = document.getElementsByClassName('main-paragraph');
    genBtn[0].addEventListener('click', () => {
          
        if(inputFname[0].value == ''){
            fnameState[0].innerHTML = `<img src = "icon-info-red.svg">Please enter your full name.`
            fnameState[0].style.display = 'flex';
            return;
        }
        
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailPattern.test(inputEmail[0].value)){
            emailState[0].innerHTML = `<img src = "icon-info-red.svg">Please enter a valid email address.`
            emailState[0].style.display = 'flex';
            return;
        }
        if(!inputUserName[0].value.startsWith('@')){
         usernameState[0].innerHTML = `<img src = "icon-info-red.svg">Please enter a valid username.`
            usernameState[0].style.display = 'flex';
            return;
        }
        
        attendeeGithub[0].innerHTML = `<img src = "icon-github.svg">${inputUserName[0].value}`
        attendeeName[0].innerHTML = `${inputFname[0].value}`
        attendeeImg[0].src = preview[0].src;
        mainHeading[0].innerHTML = ``;
        mainParagraph[0].innerHTML = `We've emailed your ticket to <span class="pary">${inputEmail[0].value}</span> and will send updates in the run up to the event.`;
        mainHeading[0].innerHTML = `Congrats, <span class="heady">${inputFname[0].value}</span>! Your ticket is ready.`;
        ticketContainer[0].style.display = 'flex';
        for(let input of inputs){
            input.style.display = 'none';
        }
        genBtn[0].style.display = 'none';
        document.getElementById('squiggly-top').style.top = '10px';
    });  
});
