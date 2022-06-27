const artists = [
  {
    photo:
      '<img src="https://e-cdn-images.dzcdn.net/images/artist/28aeeda3e775f6e54781a2c40bc8efc8/264x264-000000-80-0-0.jpg" alt="Nyashinski photo" ',
    artistName: "Nyashinski",
    musicGenre: "pop, hiphop & R&B",
    aboutArtist:
      "He was one third of popular all-male Kenyan rap trio - Kleptomaniax - made up of Collins (Collo) and Robert (Roba), formed while still in high school. Kleptomaniax went on to release several singles including Haree to Tuendelee to their biggest hit Swing, and eventually their debut album titled “M4E” (Maniax 4Ever) in 2005.",
  },

  {
    photo:
      '<img src="https://i.scdn.co/image/ab6761610000e5ebe0eff68f48a55bbf1035c9fd" alt="Mejja photo" ',
    artistName: "Khaligraph Jones",
    musicGenre: "Rapper",
    aboutArtist:
      "Major Nameye Khadija popularly known with his stage name Mejja is a Kenyan Genge artist. He was signed to Calif Records where he released multiple collaborations. His single 'Jana Kuliendaje' won him an award at Kenya's Chaguo la Teeniz in 2008.",
  },

  {
    photo:
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Khaligraph_Jones.jpg/470px-Khaligraph_Jones.jpg" alt="Papa Jones photo" ',
    artistName: "Mejja",
    musicGenre: "Genge, afrobeats",
    aboutArtist:
      "Khaligraph started his musical career while still in elementary school. He officially began his career in 2008 at a function called 'Words And Pictures' He won Channel O Music Video Awards Emcee Africa in 2009, a highly visible competition that catapulted him to international acclaim almost instantly. In June 2018, he released his debut full-length studio album dubbed 'Testimony 1990'. He was crowned 'Best Rap Act of the Year' at the fifth Annual African Muzik Magazine Awards 2018 (Afrimma) held at House of Blues in Dallas, Texas in 2018.",
  },

  {
    photo:
      '<img src="https://ralingo.com/wp-content/uploads/2019/09/otile-brown.png" alt="Otile Brown photo" ',
    artistName: "Otile Brown",
    musicGenre: "R&B singer, songwriter, guitarist and actor.",
    aboutArtist:
      "Otile Brown is a Kenyan independent R&B singer, songwriter, guitarist and actor. He gained media attention after the release of his hit single 'Imaginary Love' which features Khaligraph Jones. He released his debut studio album, Best of Otile Brown, in April 2017.",
  },

  {
    photo:
      '<img src="https://netstorage-tuko.akamaized.net/images/211a152002f9e450.png" alt="Nadia Mukami photo" ',
    artistName: "Nadia Mukami",
    musicGenre: "singer and songwriter",
    aboutArtist:
      "Nadia Mukami is a Kenyan singer and songwriter known for her hit singles 'Si Rahisi', and 'Radio Love', featuring Arrow Bwoy. She released her debut EP, African Popstar, in October 2020.She is the founder of the Kenyan record label 'Sevens Creative Hub",
  },

  {
    photo:
      '<img src="https://i0.wp.com/www.natescrest.com/wp-content/uploads/2019/04/octopizzo.jpg?w=960&ssl=1" alt="Octopizzo photo"',
    artistName: "Octopizzo",
    musicGenre: "Hip-hop Artist, Entrepreneur & Philanthropist.",
    aboutArtist:
      "Henry Ohanga, commonly referred to by his stage name Octopizzo is an award winning, recording and perfoming artist, humanitarian and an entrepreneur. Born in the sprawling slums of Kibera, Nairobi (considered one of the largest slums in the world), he purposed to earnestly pursue his career in music.",
  },
];

artists.forEach((artist) => {
  const featuredAtists = document.getElementById("featured-artists");
  const artistImage = document.createElement("img");
  artistImage.className = "artist-img";
  artistImage.src = artist.photo;
  featuredAtists.appendChild(artistImage);

  const div = document.createElement("div");
  div.className = "artist-portfolio";
  featuredAtists.appendChild(div);

  const artistName = document.createElement("h2");
  artistImage.className = "artist-name";
  artistName.textContent = artist.artistName;
  div.appendChild(artistName);

  const musicGenre = document.createElement("p");
  musicGenre.className = "music-genre";
  musicGenre.textContent = artist.musicGenre;
  div.appendChild(musicGenre);

  const aboutArtist = document.createElement("p");
  aboutArtist.className = "about-artist";
  aboutArtist.textContent = artist.aboutArtist;
  div.appendChild(aboutArtist);
});
