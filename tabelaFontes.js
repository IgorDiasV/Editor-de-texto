var fontes = ['Arial','Arial Narrow','Helvetica','Franklin Gothic Medium', 'sans-serif', 'Segoe UI','Times New Roman','monospace']
var sele = document.getElementById("fontes")
var d = [];
for( var i=0 ; i<fontes.length;i++){
   d[i] = document.createElement("option");
   d[i].innerHTML=fontes[i];
   sele.appendChild(d[i]);
  function recebefonte(valor){
      alert(valor)
    document.execCommand('fontName',false,valor)
  }
}