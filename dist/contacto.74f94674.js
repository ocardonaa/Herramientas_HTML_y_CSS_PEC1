let form=document.getElementById("form"),username=document.getElementById("username"),email=document.getElementById("email"),message=document.getElementById("message"),confirmedMessage=document.getElementById("confirmed-feedback");function showError(e,r){e.style.borderColor="red",e.nextElementSibling.innerText=r}function showSuccess(e){e.style.borderColor="green",e.nextElementSibling.innerText=""}function getFieldName(e){return e.name.charAt(0).toUpperCase()+e.name.slice(1)}function checkEmail(e){/^.+@.+$/.test(e.value.trim())?showSuccess(e):showError(e,`${getFieldName(e)} es obligatorio`)}function checkRequired(e){e.forEach(e=>{""===e.value.trim()?showError(e,`${getFieldName(e)} es obligatorio`):showSuccess(e)})}function checkAllGreen(e){let r=!0;return e.forEach(e=>{"green"!==e.style.borderColor&&(r=!1)}),r}function sendConfirmation(){let e=form.querySelectorAll("input"),r=form.querySelectorAll("textarea");checkAllGreen(e)&&checkAllGreen(r)&&(e.forEach(e=>{e.style.borderColor="white"}),r.forEach(e=>{e.style.borderColor="white"}),confirmedMessage.innerText="Se ha enviado la sugerencia, gracias",confirmedMessage.innerText.color="black",setTimeout(function(){confirmedMessage.innerText=""},2e3))}form.addEventListener("submit",function(e){e.preventDefault(),checkRequired([username,message]),checkEmail(email),sendConfirmation()});
//# sourceMappingURL=contacto.74f94674.js.map
