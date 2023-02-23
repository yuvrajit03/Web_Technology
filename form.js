function validation(){
    let valid=true;
    let name=document.studentfrm.name.value;
    let Id=document.studentfrm.Id.value;
    let Sem=document.studentfrm.Sem.value;
    let subject=document.getElementsByName("subject[]");
    let count=0;

    if(name.length==0)
    {
        document.getElementById("nameerr").textContent="plz enter name"
        valid=false;
    }
    else
    {
        document.getElementById("nameerr").textContent=""
    }
    if(Id.length==0)
    {
        document.getElementById("Iderr").textContent="plz enter id"
        valid=false;
    }
    else
    {
        document.getElementById("Iderr").textContent=""
    }
    if(Sem.length==0)
    {
        document.getElementById("Semerr").textContent="plz enter Sem"
        valid=false;
    }
    else
    {
        document.getElementById("Semerr").textContent=""
    }
    subject.forEach((chkbx)=> {
        if(chkbx.checked){
            count++;
        }
    })
    if(count<2)
    {
        valid=false;
        document.getElementById("suberr").textContent="plz select at least 2 sub"
    }
    else
    {
        document.getElementById("suberr").textContent=""
    }
    if(valid)
    {
        document.studentfrm.submit();
    }
}
