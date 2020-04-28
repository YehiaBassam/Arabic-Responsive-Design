$(document).ready(function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 100) {
			$(".my_navbar").css("background", "#565555");
		}
		else {
			$(".my_navbar").css("background", "transparent");
		}
	})
})


let name = document.getElementById('name');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let password = document.getElementById('password');
let form = document.getElementById('myform_1');
let error = document.getElementById('error');


form.addEventListener('submit',(e) => 
{
    let message = [];
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let mobileformat = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    e.preventDefault()

    if (name.value == '' || name.value == null)
    {
        message.push('يجب عليك إدخال اسمك');
    }

    if (password.value.length <= 6)
    {
        message.push('كلمة المرور لابد ان تكون اكثر من 6 حروف');
	}
	
	if (mobile.value.match(mobileformat))
    {
        console.log('Valid mobile');
    }

    else
    {
        message.push('رقم هاتفك لابد ان يكون 11 رقم');
    }

    if (email.value.match(mailformat))
    {
        console.log('Valid email');
    }

    else
    {
        message.push('ادخل إيميل صحيح');
    }

    if ( message.length > 0)
    {
        e.preventDefault()
        error.innerHTML = message.join(', ')
    }
    
})


name.addEventListener('focus',() =>
{
    error.innerHTML = ""
})

password.addEventListener('focus',() =>
{
    error.innerHTML = ""
})

email.addEventListener('focus',() =>
{
    error.innerHTML = ""
})

mobile.addEventListener('focus',() =>
{
    error.innerHTML = ""
})



