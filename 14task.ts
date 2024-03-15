//14
let cfrind   = ["Zeeshan","Rehan","Raees"]

for(let i=0;i<3;i++)
{
    //console.log("i invited to "+ cfrind[i]+" dinner"  );
}

//15
/*
for(let i=0;i<cfrind.length;i++)
{
    if (cfrind[i] == "Rehan") {
    console.log("i invited to "+ cfrind[i]+" dinner"  );
    cfrind.splice(3,0,"Nazir")
    
        }else {
            console.log( cfrind[i] +" not invited to dinner"  );
        }
}
console.log(cfrind);
*/
// 16

cfrind.splice(0,0,"nazir")
cfrind.splice(2,0,"rizwan")
cfrind.push("imran")


for(let i=0;i<cfrind.length;i++)
{
    console.log("i invited to "+ cfrind[i]+" dinner"  );
}

console.log("Biger Dinner Table total people \t"+cfrind.length)


//17

let show_new=true;
let index= cfrind.length;
console.log("you can invite only two people for dinner")

for(let i=0;i<cfrind.length;i++)
{
    if(index>2) 
  {
    console.log(" you’re sorry you can’t invite them to dinner."+ cfrind[0] );
    cfrind.splice(0,1);
   }
}

console.log(" you are invite them to dinner."+ cfrind);
console.log(cfrind);