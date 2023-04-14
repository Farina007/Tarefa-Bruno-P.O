const entrada1 = require("readline-sync");

let v:number[] = [];
let ma:number=0;
let me:number=0;
for(let i=0; i<15; i++){
    v[i]=parseFloat(entrada1.question("digite a altura: "))
}  
for(let i=0;i<15;i++){
    if(v[i]> ma){
        ma=v[i];
    }
    if(v[i]<me){
        me=v[i];
    }
}
console.log(ma);
console.log(me);