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
    document.execCommand('foreColor', false, "#483D8B");
    alert(cor)
    
    
}