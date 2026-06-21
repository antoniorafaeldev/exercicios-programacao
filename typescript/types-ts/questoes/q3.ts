/* 

Crie um tipo chamado Playlist. Ele deve ter:

name (string)

songs (um array de strings -> string[])

description (uma string opcional, lembra do ?)

Crie uma função chamada getPlaylistSummary que recebe uma Playlist e retorna uma string formatada.

Se a playlist tiver descrição, o retorno deve ser: "[name]: [description] ([quantidade_de_musicas] músicas)"

Se não tiver descrição, o retorno deve ser: "[name] ([quantidade_de_musicas] músicas)"
*/

type Playlist = {
  name: string;
  songs: string[];
  description?: string;
};

function getPlaylistSummary(playlist: Playlist): string {
  const { name, songs, description } = playlist;

  if (description) return `${name}: ${description} (${songs.length} músicas)`;

  return `${name} (${songs.length} músicas)`;
}

const myPlaylist: Playlist = {
  name: "Musicas Internacionais",
  songs: [
    "Hunting High and Low",
    "Take on Me",
    "Like a Fool",
    "Dont't Cry Tonight",
    "Stressed Out",
    "Words",
    "First Love",
  ],
  description: "Música internacionais dos anos 80/90",
};

const anotherPlaylist: Playlist = {
  name: "Undertale/Glitchtale",
  songs: ["Finale", "Megalovania", "True Love"],
};

console.log(getPlaylistSummary(myPlaylist));
console.log(getPlaylistSummary(anotherPlaylist));
