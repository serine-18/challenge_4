var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function is_valid(email){
if(email.value.match(mailformat))
{
   return true;
}
else
{
   return false;
}}
