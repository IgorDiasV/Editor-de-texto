var r = ["00","33","66","99","CC","FF"];
var g = ["00","33","66","99","CC","FF"];
var b = ["00","33","66","99","CC","FF"];
var armazenaCor=[]
var cont = 0;
var div = document.getElementById("cores");
var btCores = document.getElementById('bt-cores')
for(var i=0 ;i<r.length;i++){
    for(var j=0 ;j<g.length;j++){
        for(var k=0 ;k<b.length;k++){
          //  console.log("#"+r[i]+g[j]+b[k]);
            armazenaCor[cont]=("#"+r[i]+g[j]+b[k]);
            cont++
           // console.log(cont)
        }
    }    
}
//console.log(armazenaCor)

function cor (cc,cor){
   cc.style.backgroundColor=cor;
}

/*for (var cc=0;cc<cont;cc++){
    var div = document.querySelector('select');
    var p=[];
    p[cc] = document.createElement("option");
    p[cc].innerHTML=armazenaCor[cc];
    div.appendChild(p[cc]);
    cor(p[cc],armazenaCor[cc]);
}*/
for (var cc=0;cc<cont;cc++){
    
    var d=[];
    d[cc] = document.createElement("button");
    
    //d[cc].innerHTML=armazenaCor[cc];
    div.appendChild(d[cc]);
    cor(d[cc],armazenaCor[cc]);
    d[cc].id="cor"
    let numeroDaCor = armazenaCor[cc];
    d[cc].onclick=function ()
    {
        div.style.display="none";
        btCores.style.display="inline";
        mudarCor(numeroDaCor);
    }
   
}

function cores()
{
        
      
        div.style.display="inline";
        btCores.style.display="none";
}
