const messages = {
    happy: [
      "Que maravilha, espalhe sua alegria!",
      "Parabéns, você é incrível!",
      "Continue assim e alcançará o que deseja!"
    ],
    sad: [
      "Não se preocupe, as as coisas vão melhorar.",
      "Não se coloque tanta pressão, você é humano!",
      "Imagina ser vascaíno!"
    ],
    angry: [
      "Transforme sua raiva em combustível!",
      "Respire fundo, a emoção nos faz tomar decisões erradas.",
      "Calma, a racionalidade prevalece."
    ],
    anxious: [
      "Não fique assim, nem tudo depende de você.",
      "Não dê espaço para situações fora do seu controle!",
      "Você já fez a sua parte, aguarde com paciência."
    ],
    excited: [
      "Show de bola, manda ver!",
      "Sua animação é empolgante!",
      "Vai pra cima!"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mood-btn').forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            const randomMessage = messages[mood][Math.floor(Math.random() * messages[mood].length)];
            document.getElementById('mood-message').textContent = randomMessage;
        });
    });
});
``


  
  
  