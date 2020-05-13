var select = document.getElementById("tamanhoFonte")
var option=[]
var cont=0;
for(let i= 1;i<8;i++)
  {
      option.push(document.createElement('option'));
    option[cont].text=i;
    select.appendChild(option[cont])
cont++;  
  }

select.onchange= function ()
{
    document.execCommand('fontSize',false,select.options[select.selectedIndex].text);
}
let campoTexto = document.getElementById('campoTexto');
document.addEventListener('keydown',
                         function(e)
                         {
                           if(e.keyCode==13)
                           {
                            document.execCommand('insertHTML', false, '<br><br>');
                            e.preventDefault();    
                           }
                        if(e.keyCode==9)
                        {
                          document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                          e.preventDefault();
                        }
        })