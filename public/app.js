document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('bookingForm')

    form.addEventListener('submit',async (event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        const name  = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        console.log(name,phone,email)
        try{
            const response =await axios.post('/bookings',{name,phone,email});

        }catch(error){
            console.log(error);
        }
    })
})