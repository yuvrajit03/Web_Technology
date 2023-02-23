function submit(){
    const a = document.getElementById("id").value;
    const b = document.getElementById("pas").value;
    
    if(a=="")
    {
        document.getElementById("msg1").innerHTML='Envalid id';
    }
    if(b=="")
    {
        document.getElementById("msg2").innerHTML='Envalid password'; 
    }
    var d = document.querySelectorAll('input[type="checkbox"]:checked').length
    if(d<2)
    {
        document.getElementById("msg3").innerHTML='Envalid check';
    }
}