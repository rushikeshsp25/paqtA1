function go(id){
 var mascot=['oyster','whale','cat','elephant','fish','goose'];
 for( var i = 0; i < mascot.length; i++){ 
    if ( mascot[i] !== id) {
        document.getElementById(mascot[i]).classList.add("disable");      
    }
}
document.getElementById("rating_form").style.display = 'inline';
document.getElementById("dept").style.display = 'inline';
}

function checkform()
{
   var f = document.forms["rate_form"].elements;
   var cansubmit = true;

   for (var i = 0; i < f.length; i++) {
       if (f[i].value.length == 0) 
            cansubmit = false;
   }

   if (cansubmit) {
       document.getElementById('next_dept').classList.remove("disable_btn");
   }
}