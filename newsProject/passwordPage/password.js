const login = () => {
    const validUsername= "swaque"
    const validPassword= "1234" 

 
        const username = document.getElementById("usermaneInput").value;
        const password = document.getElementById("passwordInput").value;
        const model = {
            username,
            password
        }

        

        const response = validUsername==username;
         
        

    if(response){
        document.getElementById("response").innerHTML =  `${model.username} Tebrikler Giriş Yaptınız.`;
    }
    else{
        document.getElementById("response").innerHTML = `${model.username} Giriş Yapamadınız.`;
    }



    }