function login()
{
  let u = username.value
  let p = password.value
  if (u=="bao" && p=="123")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
