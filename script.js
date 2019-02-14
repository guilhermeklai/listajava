let filmes = [
  { titulo: 'Como treinar o seu dragão 3', classificacao: '0' },
  { titulo: 'Star Wars - O império Contra-ataca', classificacao: '12' },
  { titulo: 'Batman O cavaleiro das trevas', classificacao: '14' },
  { titulo: 'Dead Pool', classificacao: '16' },
  { titulo: 'The purge', classificacao: '18' }
];

let idade = Number(prompt('Por favor digite sua idade: '));

if (idade >= 18) {
  alert(`Você pode assistir aos filmes
  - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}
  - ${filmes[1].titulo} - classificação ${filmes[1].classificacao}
  - ${filmes[2].titulo} - classificação ${filmes[2].classificacao}
  - ${filmes[3].titulo} - classificação ${filmes[3].classificacao}
  - ${filmes[4].titulo} - classificação ${filmes[4].classificacao}`);
} else if (idade >= 16) {
  alert(`Você pode assistir aos filmes
  - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}
  - ${filmes[1].titulo} - classificação ${filmes[1].classificacao}
  - ${filmes[2].titulo} - classificação ${filmes[2].classificacao}
  - ${filmes[3].titulo} - classificação ${filmes[3].classificacao}`);
} else if (idade >= 14) {
  alert(`Você pode assistir aos filmes
  - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}
  - ${filmes[1].titulo} - classificação ${filmes[1].classificacao}
  - ${filmes[2].titulo} - classificação ${filmes[2].classificacao}`);
} else if (idade >= 12) {
  alert(`Você pode assistir aos filmes
  - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}
  - ${filmes[1].titulo} - classificação ${filmes[1].classificacao}`);
} else {
  alert(`Você pode assistir aos filmes
  - ${filmes[0].titulo} - classificação ${filmes[0].classificacao}`);
}