const film = [
    {
      titolo: 'Il Re Leone',
      immagine: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_18276_ada305ce.jpeg?region=0,0,2048,879',
      creator: 'Disney',
      descrizione: 'Descrizione...'
    },
    {
        titolo: 'Soul',
        immagine: 'https://www.nerdpool.it/wp-content/uploads/2021/03/soul-cover-disney-pixar-np.jpeg',
        creator: 'Disney',
        descrizione: 'Descrizione...'
    },
    {
        titolo: 'Collateral Beauty',
        immagine: 'https://www.latestatamagazine.it/wp-content/uploads/2021/01/Collateral-Beauty.jpg',
        creator: 'Warner Bros. Pictures',
        descrizione: 'Descrizione...'
    }]
const musica = [
    {
        titolo: 'Voce',
        immagine: 'https://www.oaplus.it/wp-content/uploads/2021/03/Madame-Cover-Voce-Singolo-Sanremo-2021.jpg',
        creator: 'Madame',
        descrizione: 'Descrizione...'
    },
    {
          titolo: 'Never Gonna Give You Up',
          immagine: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          creator: 'Rick Astley',
          descrizione: 'Descrizione...'
    },
    {
          titolo: 'Twisted Transistor',
          immagine: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Twisted_Transistor.jpg/220px-Twisted_Transistor.jpg',
          creator: 'Korn',
          descrizione: 'Descrizione...'
    }]
const gameplay = [
    {
        titolo: 'League of Legends',
        immagine: 'https://www.outplayed.it/wp-content/uploads/2019/09/league-of-legends.jpg',
        creator: 'Riot',
        descrizione: 'Descrizione...'
    },
    {
        titolo: 'Minecraft',
        immagine: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/blog/csm-blog/parentsultimateguide-minecraft-blog.jpg?itok=2beDaNo7',
        creator: 'Mojang',
        descrizione: 'Descrizione...'
    },
    {
        titolo: 'Cyberpunk 2077',
        immagine: 'https://www.gamelegends.it/wp-content/uploads/2021/01/cyberpunk-2077-Main-Theme.jpg',
        creator: 'CD Projekt RED',
        descrizione: 'Descrizione...'
    }]

    for(let elemento of film){
        const sezione_film = document.querySelector("section#film div.show-case");
        const carta = document.createElement("div");
        carta.classList.add("card");
        const immagine = document.createElement("img");
        immagine.src = elemento.immagine;
        immagine.classList.add("image");
        const about = document.createElement("div");
        const titolo = document.createElement("h5");
        titolo.textContent=elemento.titolo;
        const creator = document.createElement("p");
        creator.textContent=elemento.creator;
        const plus = document.createElement("img");
        const info = document.createElement("img");
        plus.src="img/heart-plus.svg";
        info.src="img/information.svg";
        about.appendChild(titolo);
        about.appendChild(creator);
        about.appendChild(plus);
        about.appendChild(info);
        carta.appendChild(immagine);
        carta.appendChild(about);
        sezione_film.appendChild(carta);
    }

    for(let elemento of musica){
        const sezione_musica = document.querySelector("section#musica div.show-case");
        const carta = document.createElement("div");
        carta.classList.add("card");
        const immagine = document.createElement("img");
        immagine.src = elemento.immagine;
        immagine.classList.add("image");
        const about = document.createElement("div");
        const titolo = document.createElement("h5");
        titolo.textContent=elemento.titolo;
        const creator = document.createElement("p");
        creator.textContent=elemento.creator;
        const plus = document.createElement("img");
        const info = document.createElement("img");
        plus.src="img/heart-plus.svg";
        info.src="img/information.svg";
        about.appendChild(titolo);
        about.appendChild(creator);
        about.appendChild(plus);
        about.appendChild(info);
        carta.appendChild(immagine);
        carta.appendChild(about);
        sezione_musica.appendChild(carta);
    }

    for(let elemento of gameplay){
        const sezione_gameplay = document.querySelector("section#gameplay div.show-case");
        const carta = document.createElement("div");
        carta.classList.add("card");
        const immagine = document.createElement("img");
        immagine.src = elemento.immagine;
        immagine.classList.add("image");
        const about = document.createElement("div");
        const titolo = document.createElement("h5");
        titolo.textContent=elemento.titolo;
        const creator = document.createElement("p");
        creator.textContent=elemento.creator;
        const plus = document.createElement("img");
        const info = document.createElement("img");
        plus.src="img/heart-plus.svg";
        info.src="img/information.svg";
        about.appendChild(titolo);
        about.appendChild(creator);
        about.appendChild(plus);
        about.appendChild(info);
        carta.appendChild(immagine);
        carta.appendChild(about);
        sezione_gameplay.appendChild(carta);
    }