let check = document.getElementById('check').addEventListener('click',function(){
    let input = document.getElementById('inp');
    if(input.type === "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }

});

