let seuNome = prompt(" seu nome "). toLowerCase()
let suaIdade = parseInt(prompt(" sua idade "))
if (suaIdade >= 18) {
    alert (`Olá, ${seuNome} Você tem acesso completo. Boas-vindas à plataforma`)
} 
else if (seuNome === "admin") {
    alert(`Bem-vindo, Admin Acesso total liberado.`)
} 
else if (seuNome === "moderador" && suaIdade >= 16) {
    alert(`Olá, Moderador Acesso liberado para a área de moderação.`)
} 
else if (suaIdade >= 13 && suaIdade <= 17) {
    alert(`Acesso negado. Você pode participar do nosso programa Jovem Aprendiz`)
} 
else {
    alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")
}