function passvalue()
{

{
let ua=document.getElementById("mail").value;
         localStorage.setItem("mailvalue",ua);
 
         let un=document.getElementById("uname").value;
         localStorage.setItem("textvalue",un);


         let ur=document.getElementById("age").value;
         localStorage.setItem("numbervalue",ur);

        let rl=document.getElementById("role1").value;
         localStorage.setItem("role1value",rl);
         
         let dd1=document.getElementById("d1");
         let dd2=document.getElementById("d2");
         let dd3=document.getElementById("d3");

                if( d1.checked==true)
                {
                        localStorage.setItem("pass",d1.value);
                }
               else if(d2.checked==true)
                {
                         localStorage.setItem("pass",d2.value);
                }
                else if(d3.checked==true)
                {
                         localStorage.setItem("pass",d3.value);

                }
                else
                {
                        alert("enter the value");
                }

        
         
         let r3=document.getElementById("role2").value;
         localStorage.setItem("role2value",r3);

         document.getElementById("a1");
          dd2=document.getElementById("a2");
          dd3=document.getElementById("a3");

                if( a1.checked==true)
                {
                        localStorage.setItem("pass1",a1.value);
                }
               else if(a2.checked==true)
                {
                         localStorage.setItem("pass1",a2.value);
                }
                else if(a3.checked==true)
                {
                         localStorage.setItem("pass1",a3.value);

                }
                else
                {
                        alert("enter the value");
                }
                  return false;
 }

 
}