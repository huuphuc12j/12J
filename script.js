function login()
{
  let u = username.value
  let p = password.value
  if (u=="phuc" && p=="9999")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
