function negrito()
{
    if(window.getSelection()!="")
    {
          document.execCommand("bold");
    }
}
function italico()
{
    if(window.getSelection()!="")
    {
          document.execCommand("italic");
    }
}
function mudarCor(cor )
{
    document.execCommand('foreColor', false, cor);
    
    
}function fontes(){
    document.execCommand('fontName',false,'sans-serif')
}