
const son1=document.getElementById("son1")
const son2=document.getElementById("son2")
const amal=document.getElementById("amal")
const result=document.getElementById("result")
const a=+prompt("1-sonni kiriting");
const b=+prompt("2-sonni kiriting");
const c=prompt("Almani tanlang:\n1)+\n2)-\n3)*\n4)/")
son1.textContent=a;
son2.textContent=b;
if(c==1){
    amal.textContent="+";
    result.textContent=a+b;

}else if(c==2){
    amal.textContent="-";
    result.textContent=a-b;

}else if(c==3){
    amal.textContent="*";
    result.textContent=a*b;

}else if(c==4){
    result.textContent="/";
    result.textContent=a/b;
}