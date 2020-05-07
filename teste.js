document.addEventListener("select",function (e)
{
    selecao=(e.target.value.substring(e.target.selectionStart,e.target.selectionEnd));
    alert(selecao);
})
const p = document.querySelector("textarea");
