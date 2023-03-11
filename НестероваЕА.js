function show_prompt()
{
    var name=prompt("Пожалуйста, введите Ваше имя", "");

    document.getElementById("name").innerHTML="Здравствуйте,"+name+",как настроение?";
}