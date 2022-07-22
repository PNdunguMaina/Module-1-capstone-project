const artists = [
  {
    photo: "./images/nyash.png",
    artistName: "Nyashinski",
    musicGenre: "Pop, hiphop & R&B",
    aboutArtist:
      "He was one third of popular all-male Kenyan rap trio - Kleptomaniax - made up of Collins (Collo) and Robert (Roba), formed while still in high school. Kleptomaniax went on to release several singles including Haree to Tuendelee to their biggest hit Swing, and eventually their debut album titled “M4E” (Maniax 4Ever) in 2005.",
  },

  {
    photo: "./images/khali.png",
    artistName: "Khaligraph Jones",
    musicGenre: "Rapper",
    aboutArtist:
      "Major Nameye Khadija popularly known with his stage name Mejja is a Kenyan Genge artist. He was signed to Calif Records where he released multiple collaborations. His single 'Jana Kuliendaje' won him an award at Kenya's Chaguo la Teeniz in 2008.",
  },

  {
    photo: "./images/mejja.png",
    artistName: "Mejja",
    musicGenre: "Genge, afrobeats",
    aboutArtist:
      "Khaligraph started his musical career while still in elementary school. He officially began his career in 2008 at a function called 'Words And Pictures' He won Channel O Music Video Awards Emcee Africa in 2009, a highly visible competition that catapulted him to international acclaim almost instantly. In June 2018, he released his debut full-length studio album dubbed 'Testimony 1990'. He was crowned 'Best Rap Act of the Year' at the fifth Annual African Muzik Magazine Awards 2018 (Afrimma) held at House of Blues in Dallas, Texas in 2018.",
  },

  {
    photo: "./images/otile.png",
    artistName: "Otile Brown",
    musicGenre: "R&B singer, songwriter, guitarist and actor.",
    aboutArtist:
      "Otile Brown is a Kenyan independent R&B singer, songwriter, guitarist and actor. He gained media attention after the release of his hit single 'Imaginary Love' which features Khaligraph Jones. He released his debut studio album, Best of Otile Brown, in April 2017.",
  },

  {
    photo: "./images/nadia.png",
    artistName: "Nadia Mukami",
    musicGenre: "singer and songwriter",
    aboutArtist:
      "Nadia Mukami is a Kenyan singer and songwriter known for her hit singles 'Si Rahisi', and 'Radio Love', featuring Arrow Bwoy. She released her debut EP, African Popstar, in October 2020.She is the founder of the Kenyan record label 'Sevens Creative Hub",
  },

  {
    photo: "./images/octo.png",
    artistName: "Octopizzo",
    musicGenre: "Hip-hop Artist, Entrepreneur & Philanthropist.",
    aboutArtist:
      "Henry Ohanga, commonly referred to by his stage name Octopizzo is an award winning, recording and perfoming artist, humanitarian and an entrepreneur. Born in the sprawling slums of Kibera, Nairobi (considered one of the largest slums in the world), he purposed to earnestly pursue his career in music.",
  },
];

artists.forEach((artist) => {
  const featuredArtists = document.getElementById("featured-artists");

  const mainDiv = document.createElement("div");
  mainDiv.className = "featured-artist";
  featuredArtists.appendChild(mainDiv);

  const divImg = document.createElement("div");
  divImg.className = "featured-image";
  mainDiv.appendChild(divImg);

  const artistImage = document.createElement("img");
  artistImage.className = "artist-img";
  artistImage.src = artist.photo;
  artistImage.alt = "Featured artist";
  divImg.appendChild(artistImage);

  const div = document.createElement("div");
  div.className = "artist-portfolio";
  mainDiv.appendChild(div);

  const artistName = document.createElement("h6");
  artistName.className = "artist-name";
  artistName.textContent = artist.artistName;
  div.appendChild(artistName);

  const musicGenre = document.createElement("p");
  musicGenre.className = "music-genre";
  div.appendChild(musicGenre);

  const italic = document.createElement("em");
  italic.className = "music-genre";
  italic.textContent = artist.musicGenre;
  musicGenre.appendChild(italic);

  const aboutArtist = document.createElement("p");
  aboutArtist.className = "about-artist";
  aboutArtist.textContent = artist.aboutArtist;
  div.appendChild(aboutArtist);
});
