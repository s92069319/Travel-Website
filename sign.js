function validate()
{
    var username =document.getElementById("username").value ;
    var password =document.getElementById("password").value ;

if(username=="" )    
{
    alert("please provide the  username");
    return false;
}
if( username.length<8)
{
    alert("It must be more than 8 characters");
    return false;
}
if(password=="")
{
    alert("please provide the correct Email Address");
    return false;
}
if( password.length<8)
{
    alert("It must be more than 8 characters");
    return false;
}
}   