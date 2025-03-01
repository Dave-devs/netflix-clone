import { Movie } from "@/app/types";

const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEh-fjfpo0iI5uTHew3KpNG62gv2yMSkpBhqZIMC5Oi0_r2heylhIxoY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    duration: 148,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 101,
        rating: 9,
        comment: "Mind-blowing concept and execution!",
        user: "MovieBuff42",
      },
      {
        id: 102,
        rating: 8,
        comment: "Incredible visual effects and storyline.",
        user: "CinemaFan",
      },
    ],
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aTPKaVIya_XsTkVYc2pVlQGkVXRBTn9l7JH59II1ZczMXl3rkw3ms6s&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    duration: 142,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 103,
        rating: 10,
        comment: "One of the greatest films ever made.",
        user: "FilmCritic99",
      },
      {
        id: 104,
        rating: 9,
        comment: "Powerful storytelling and performances.",
        user: "MovieLover23",
      },
    ],
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    duration: 175,
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 105,
        rating: 10,
        comment: "A masterpiece of cinema.",
        user: "ClassicFilmBuff",
      },
      {
        id: 106,
        rating: 9,
        comment: "Powerful performances and direction.",
        user: "CinephileMax",
      },
    ],
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFc_YxWkWCA4DdwW-RdFsBcqSu23nP2Lsefdp5FkkvmYUyG0pIm02-up0&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    duration: 152,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
    ],
    category: "Action Movies",
    reviews: [
      {
        id: 107,
        rating: 9,
        comment: "Heath Ledger's Joker is unforgettable.",
        user: "DCFanatic",
      },
      {
        id: 108,
        rating: 10,
        comment: "Redefines the superhero genre.",
        user: "ActionMovieLover",
      },
    ],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLMMKHxTb0MVkAxbwEZR2XlTtQiZASpOFCsxiB1RswG-XZGeNs7oR-MY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    duration: 154,
    director: "Quentin Tarantino",
    actors: [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Bruce Willis",
    ],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 109,
        rating: 9,
        comment: "Revolutionary storytelling.",
        user: "FilmEnthusiast",
      },
      {
        id: 110,
        rating: 8,
        comment: "Iconic scenes and dialogues.",
        user: "MovieGoer42",
      },
    ],
  },
  {
    id: 6,
    title: "The Notebook",
    year: 2004,
    genre: "Romance",
    rating: 7.8,
    description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0w52AcL5rO6YaBlmulyLCzR2XSHVWakjHpn4v_L4iqCI-kBpQ_AaD5Lc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw",
    duration: 123,
    director: "Nick Cassavetes",
    actors: ["Ryan Gosling", "Rachel McAdams", "James Garner", "Gena Rowlands"],
    category: "Romantic Movies",
    reviews: [
      {
        id: 111,
        rating: 8,
        comment: "The most beautiful love story ever told.",
        user: "RomanceFan1",
      },
      {
        id: 112,
        rating: 7,
        comment: "Touching and emotional.",
        user: "SoftHearted",
      },
    ],
  },
  {
    id: 7,
    title: "The Avengers",
    year: 2012,
    genre: "Action",
    rating: 8.0,
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuIfPH4wCLoZj8EeMsWsPWZG8IiAGTILpPaX7cjvB4K4HIZ268wvaP_U&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    duration: 143,
    director: "Joss Whedon",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Scarlett Johansson",
      "Jeremy Renner",
    ],
    category: "Action Movies",
    reviews: [
      {
        id: 113,
        rating: 8,
        comment: "Epic superhero team-up.",
        user: "MarvelFan616",
      },
      {
        id: 114,
        rating: 7,
        comment: "Fun, action-packed adventure.",
        user: "ComicBookGuy",
      },
    ],
  },
  {
    id: 8,
    title: "Toy Story",
    year: 1995,
    genre: "Animation",
    rating: 8.3,
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtIGFNo4kiENE0VWg-jXqTN5gduYAVZvh8IOo79Y1&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=v-PjgYDrg70",
    duration: 81,
    director: "John Lasseter",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"],
    category: "Family Movies",
    reviews: [
      {
        id: 115,
        rating: 9,
        comment: "A groundbreaking animated film.",
        user: "AnimationLover",
      },
      {
        id: 116,
        rating: 8,
        comment: "Heartwarming and innovative.",
        user: "PixarFan",
      },
    ],
  },
  {
    id: 9,
    title: "The Social Network",
    year: 2010,
    genre: "Drama",
    rating: 7.7,
    description:
      "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyfnKoZqiU05wKKgLDrOKhfzIFIlpD6wZHYOWvCnd61RHmUCjRDG1bJc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=lB95KLmpLR4",
    duration: 120,
    director: "David Fincher",
    actors: [
      "Jesse Eisenberg",
      "Andrew Garfield",
      "Justin Timberlake",
      "Rooney Mara",
    ],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 117,
        rating: 8,
        comment: "Brilliantly written and directed.",
        user: "TechEnthusiast",
      },
      {
        id: 118,
        rating: 7,
        comment: "Fascinating character study.",
        user: "FilmStudent",
      },
    ],
  },
  {
    id: 10,
    title: "When Harry Met Sally",
    year: 1989,
    genre: "Romance",
    rating: 7.6,
    description:
      "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGtYzbgbeiGNTJMChnUBa3b5tKASrxdNcI-q4VOW5fbzcepq7PEglmAc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=V8DgDmUHVto",
    duration: 96,
    director: "Rob Reiner",
    actors: ["Billy Crystal", "Meg Ryan", "Carrie Fisher", "Bruno Kirby"],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 119,
        rating: 8,
        comment: "The ultimate rom-com.",
        user: "RomComFan",
      },
      {
        id: 120,
        rating: 7,
        comment: "Witty and endearing.",
        user: "ComedyLover",
      },
    ],
  },
  {
    id: 11,
    title: "Stranger Things: The Movie",
    year: 2023,
    genre: "Sci-Fi",
    rating: 8.5,
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_OWZEF-dl8Sgdq-IYVBtR6-VIZ7KmDl4jJSH7-u_AegfrH-qbVn42p8&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    duration: 135,
    director: "The Duffer Brothers",
    actors: [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "David Harbour",
      "Winona Ryder",
    ],
    category: "New on Netflix",
    reviews: [
      {
        id: 121,
        rating: 9,
        comment: "Captures the nostalgia and terror of the series perfectly.",
        user: "EightiesKid",
      },
      {
        id: 122,
        rating: 8,
        comment: "A thrilling cinematic expansion of the show.",
        user: "NetflixAddict",
      },
    ],
  },
  {
    id: 12,
    title: "The Queen's Gambit: Endgame",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    description:
      "Chess prodigy Beth Harmon faces her greatest challenge yet in the world championship, while battling her inner demons.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CKw_UigkiodpyL1ugVYaasG0FHbqpxoYZTBpvZHCVAmTdDW0CagSGvk&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=CDrieqwSdgI",
    duration: 128,
    director: "Scott Frank",
    actors: [
      "Anya Taylor-Joy",
      "Thomas Brodie-Sangster",
      "Harry Melling",
      "Moses Ingram",
    ],
    category: "New on Netflix",
    reviews: [
      {
        id: 123,
        rating: 9,
        comment: "A stunning conclusion to Beth's story.",
        user: "ChessMaster",
      },
      {
        id: 124,
        rating: 8,
        comment: "Visually stunning with remarkable performances.",
        user: "DramaQueen",
      },
    ],
  },
  {
    id: 13,
    title: "Bridgerton: The Duke's Return",
    year: 2023,
    genre: "Romance",
    rating: 7.9,
    description:
      "The high society of Regency London is thrown into chaos when the Duke of Hastings makes an unexpected return to the ton.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysXKxG9OX5EJ3h6zV1z1jsDI1dVeULGF32eNbht_a7NowRPA64GtaPss&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=gpv7ayf_tyE",
    duration: 122,
    director: "Julie Anne Robinson",
    actors: [
      "Regé-Jean Page",
      "Phoebe Dynevor",
      "Jonathan Bailey",
      "Nicola Coughlan",
    ],
    category: "Romantic Movies",
    reviews: [
      {
        id: 125,
        rating: 8,
        comment: "Scandalously good period drama.",
        user: "RegencyFan",
      },
      {
        id: 126,
        rating: 7,
        comment: "Lavish costumes and steamy romance.",
        user: "PeriodDramaLover",
      },
    ],
  },
  {
    id: 14,
    title: "Squid Game: Round Two",
    year: 2023,
    genre: "Thriller",
    rating: 8.7,
    description:
      "Contestants from around the world compete in a new series of deadly children's games for an even bigger prize.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WIbS9AVG6oRn6gcjWlmmyqTkQPYu2DkV6w59GoWQMrm0uN0Sc8RWlwo&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=oqxAJKy0ii4",
    duration: 142,
    director: "Hwang Dong-hyuk",
    actors: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 127,
        rating: 9,
        comment: "Even more intense than the first.",
        user: "ThrillerFanatic",
      },
      {
        id: 128,
        rating: 8,
        comment: "Shocking twists and social commentary.",
        user: "BingeWatcher",
      },
    ],
  },
  {
    id: 15,
    title: "Wednesday: Senior Year",
    year: 2023,
    genre: "Comedy Horror",
    rating: 8.2,
    description:
      "Wednesday Addams navigates her final year at Nevermore Academy, uncovering darker secrets than ever before.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/SeniorYearNetflixTeaser.jpg",
    trailer: "https://www.youtube.com/watch?v=Di310WS8zLk",
    duration: 118,
    director: "Tim Burton",
    actors: [
      "Jenna Ortega",
      "Catherine Zeta-Jones",
      "Luis Guzmán",
      "Emma Myers",
    ],
    category: "Your Next Watch",
    reviews: [
      {
        id: 129,
        rating: 8,
        comment: "Delightfully macabre and witty.",
        user: "GothicFan",
      },
      {
        id: 130,
        rating: 8,
        comment: "Jenna Ortega continues to shine as Wednesday.",
        user: "BurtonAddict",
      },
    ],
  },
  {
    id: 16,
    title: "Avatar: The Last Airbender",
    year: 2023,
    genre: "Fantasy",
    rating: 7.8,
    description:
      "A young boy known as the Avatar must master the four elemental powers to save a world at war and fight against an enemy bent on stopping him.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3J9anmsvyqGB7WrLiCS6SXJ2z3TjU11vXrblCo3nkv_3l_xHaz47UY04&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=d1EnW4kn1kg",
    duration: 138,
    director: "Albert Kim",
    actors: ["Gordon Cormier", "Kiawentiio", "Ian Ousley", "Dallas Liu"],
    category: "Family Movie Night",
    reviews: [
      {
        id: 131,
        rating: 8,
        comment: "A faithful and exciting adaptation.",
        user: "AvatarStan",
      },
      {
        id: 132,
        rating: 7,
        comment: "Beautiful world-building and action.",
        user: "FantasyFan",
      },
    ],
  },
  {
    id: 17,
    title: "The Witcher: Blood Origin",
    year: 2023,
    genre: "Fantasy",
    rating: 7.5,
    description:
      "Set in an elven world 1200 years before the time of Geralt, the series tells a story lost to time - the creation of the first prototype Witcher.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TGNI09mjFu1QbJcs_mwy5G0mnHV51g2bLyTixPQkJ3QkqMUkAn4m068&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=pJK-L1YNJps",
    duration: 132,
    director: "Declan de Barra",
    actors: [
      "Sophia Brown",
      "Laurence O'Fuarain",
      "Michelle Yeoh",
      "Lenny Henry",
    ],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 133,
        rating: 7,
        comment: "Expands the Witcher universe beautifully.",
        user: "FantasyReader",
      },
      {
        id: 134,
        rating: 8,
        comment: "Epic battles and complex characters.",
        user: "WitcherFan",
      },
    ],
  },
  {
    id: 18,
    title: "Money Heist: Tokyo Returns",
    year: 2023,
    genre: "Crime",
    rating: 8.4,
    description:
      "A new heist brings back familiar faces along with new recruits to pull off the most ambitious robbery yet.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIMs76wDJbbzR0WfXRy-FcERGY31Cn85wAWip2hrKJi9BlbSVMu67O40&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=htqXL94Rza4",
    duration: 145,
    director: "Álex Pina",
    actors: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso"],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 135,
        rating: 9,
        comment: "As thrilling as ever!",
        user: "BellaCiao",
      },
      {
        id: 136,
        rating: 8,
        comment: "A perfect blend of action and emotion.",
        user: "HeistFan",
      },
    ],
  },
  {
    id: 19,
    title: "Enola Holmes 3",
    year: 2023,
    genre: "Mystery",
    rating: 7.7,
    description:
      "Enola Holmes takes on her most personal case yet when her friend goes missing in the dangerous underbelly of Victorian London.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6t2ICZoXnrjvSy7iwv7Hc_PpE4IRGqLfFrQ&s",
    trailer: "https://www.youtube.com/watch?v=1d0Zf9sXlHk",
    duration: 124,
    director: "Harry Bradbeer",
    actors: [
      "Millie Bobby Brown",
      "Henry Cavill",
      "Sam Claflin",
      "Helena Bonham Carter",
    ],
    category: "Your Next Watch",
    reviews: [
      {
        id: 137,
        rating: 8,
        comment: "Millie Bobby Brown shines again as Enola.",
        user: "MysterySolver",
      },
      {
        id: 138,
        rating: 7,
        comment: "Charming and clever mystery.",
        user: "VictorianBuff",
      },
    ],
  },
  {
    id: 20,
    title: "The Gray Man: Extraction",
    year: 2023,
    genre: "Action",
    rating: 7.6,
    description:
      "The CIA's most skilled operative must rescue a high-value asset while evading a global manhunt led by his former colleagues.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsDY0l_Vy5tvJ0KQu7_MhafdRP1xknz45NoaY7pGvPi4LpxTlRcmYu5E&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=BmllggGO4pM",
    duration: 129,
    director: "Russo Brothers",
    actors: ["Ryan Gosling", "Chris Evans", "Ana de Armas", "Regé-Jean Page"],
    category: "Action Movies",
    reviews: [
      {
        id: 139,
        rating: 8,
        comment: "Non-stop action and witty banter.",
        user: "ActionJunkie",
      },
      {
        id: 140,
        rating: 7,
        comment: "High-octane thrills with great chemistry.",
        user: "MovieBuff",
      },
    ],
  },
  {
    id: 21,
    title: "The King's Speech",
    year: 2010,
    genre: "Historical Drama",
    rating: 8.0,
    description:
      "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5KOH11Mt7oCxnr4daFgYsrpyEiYVrpjAY3_dIZlarFXGspIXTlc9jpQ&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=EcxBrTvLbBM",
    duration: 118,
    director: "Tom Hooper",
    actors: [
      "Colin Firth",
      "Geoffrey Rush",
      "Helena Bonham Carter",
      "Guy Pearce",
    ],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 141,
        rating: 8,
        comment: "Colin Firth's performance is magnificent.",
        user: "HistoryBuff",
      },
      {
        id: 142,
        rating: 9,
        comment: "A touching and inspiring historical drama.",
        user: "OscarFan",
      },
    ],
  },
  {
    id: 22,
    title: "A Beautiful Mind",
    year: 2001,
    genre: "Biography",
    rating: 8.2,
    description:
      "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgn1srjOFM7s_j1jcy6d9dsKQEOzF5E6EBUhixGSjNxCWSH54PTyLYf8&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=WFJgUm7iOKw",
    duration: 135,
    director: "Ron Howard",
    actors: [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly",
      "Christopher Plummer",
    ],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 143,
        rating: 9,
        comment: "A profound look at genius and mental illness.",
        user: "MathLover",
      },
      {
        id: 144,
        rating: 8,
        comment: "Russell Crowe gives an unforgettable performance.",
        user: "DramaEnthusiast",
      },
    ],
  },
  {
    id: 23,
    title: "The Imitation Game",
    year: 2014,
    genre: "Biography",
    rating: 8.0,
    description:
      "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZh6YTzhwYWvHYL3hp7rC2Dxp6NmI-XbsmwLpuEwZ-2QFgtMHPJAwQhY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=nuPZUUED5uk",
    duration: 114,
    director: "Morten Tyldum",
    actors: [
      "Benedict Cumberbatch",
      "Keira Knightley",
      "Matthew Goode",
      "Rory Kinnear",
    ],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 145,
        rating: 8,
        comment: "A powerful tribute to an unsung hero.",
        user: "HistoryNerd",
      },
      {
        id: 146,
        rating: 9,
        comment: "Cumberbatch is brilliant as Turing.",
        user: "WW2Buff",
      },
    ],
  },
  {
    id: 24,
    title: "The Theory of Everything",
    year: 2014,
    genre: "Biography",
    rating: 7.7,
    description:
      "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0kRct4E3-5HXsDHOr7S6M0NC-7yOii7dnpaxJU0wowrj_2xmR6-6jxY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=Salz7uGp72c",
    duration: 123,
    director: "James Marsh",
    actors: ["Eddie Redmayne", "Felicity Jones", "Tom Prior", "Sophie Perry"],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 147,
        rating: 8,
        comment: "Eddie Redmayne's transformation is remarkable.",
        user: "ScienceFan",
      },
      {
        id: 148,
        rating: 7,
        comment: "A moving love story against all odds.",
        user: "BiographyLover",
      },
    ],
  },
  {
    id: 25,
    title: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    rating: 8.2,
    description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yrhAvTKvO9G0mOVWnAg0rH6G8zo7gy7nryaMphfq5Ci2LzJut2QDFog&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=wZdpNglLbt8",
    duration: 100,
    director: "Andrew Stanton",
    actors: [
      "Albert Brooks",
      "Ellen DeGeneres",
      "Alexander Gould",
      "Willem Dafoe",
    ],
    category: "Family Movies",
    reviews: [
      {
        id: 149,
        rating: 9,
        comment: "A perfect family adventure.",
        user: "DisneyFan",
      },
      {
        id: 150,
        rating: 8,
        comment: "Beautiful animation and heartwarming story.",
        user: "KidAtHeart",
      },
    ],
  },
  {
    id: 26,
    title: "Inside Out",
    year: 2015,
    genre: "Animation",
    rating: 8.2,
    description:
      "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLW63Er7XVUabhkQUeB2FEDR_EO1iJPzm5Ebk88ZAzXs293jT1qxUZUYY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=seMwpP0yeu4",
    duration: 95,
    director: "Pete Docter",
    actors: ["Amy Poehler", "Phyllis Smith", "Richard Kind", "Bill Hader"],
    category: "Family Movies",
    reviews: [
      {
        id: 151,
        rating: 9,
        comment: "Brilliantly visualizes emotions and memories.",
        user: "PixarLover",
      },
      {
        id: 152,
        rating: 8,
        comment: "Emotionally intelligent and visually stunning.",
        user: "AnimationFan",
      },
    ],
  },
  {
    id: 27,
    title: "The Lion King",
    year: 1994,
    genre: "Animation",
    rating: 8.5,
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_lpQvTmQyg_GfO5BkxdyTYJ0eBIAymeLK30F58Ry&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    duration: 88,
    director: "Roger Allers, Rob Minkoff",
    actors: [
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones",
      "Whoopi Goldberg",
    ],
    category: "Family Movies",
    reviews: [
      {
        id: 153,
        rating: 10,
        comment: "A timeless Disney masterpiece.",
        user: "CircleOfLife",
      },
      {
        id: 154,
        rating: 9,
        comment: "The perfect blend of humor, drama, and music.",
        user: "AnimationClassics",
      },
    ],
  },
  {
    id: 28,
    title: "Moana",
    year: 2016,
    genre: "Animation",
    rating: 7.7,
    description:
      "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8WdrxRlvt5vyUbEgm6QSt0mu96azB0Inp5HT2yDJ72YD10QaLE2kEik&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
    duration: 107,
    director: "Ron Clements, John Musker",
    actors: [
      "Auli'i Cravalho",
      "Dwayne Johnson",
      "Rachel House",
      "Temuera Morrison",
    ],
    category: "Family Movies",
    reviews: [
      {
        id: 155,
        rating: 8,
        comment: "Stunning visuals and catchy songs.",
        user: "DisneyPrincess",
      },
      {
        id: 156,
        rating: 7,
        comment: "A refreshing adventure with a strong female lead.",
        user: "OceanLover",
      },
    ],
  },
  {
    id: 29,
    title: "You've Got Mail",
    year: 1998,
    genre: "Romance",
    rating: 6.7,
    description:
      "Two business rivals who despise each other in real life unwittingly fall in love over the Internet.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/You%27ve_Got_Mail.jpg",
    trailer: "https://www.youtube.com/watch?v=znESQTt3L80",
    duration: 119,
    director: "Nora Ephron",
    actors: ["Tom Hanks", "Meg Ryan", "Greg Kinnear", "Parker Posey"],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 157,
        rating: 7,
        comment: "Hanks and Ryan's chemistry is undeniable.",
        user: "RomComFanatic",
      },
      {
        id: 158,
        rating: 6,
        comment: "A charming time capsule of 90s internet culture.",
        user: "NostalgiaSeeker",
      },
    ],
  },
  {
    id: 30,
    title: "Pretty Woman",
    year: 1990,
    genre: "Romance",
    rating: 7.0,
    description:
      "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Pretty_woman_movie.jpg",
    trailer: "https://www.youtube.com/watch?v=Wzii8IuL8lk",
    duration: 119,
    director: "Garry Marshall",
    actors: [
      "Richard Gere",
      "Julia Roberts",
      "Jason Alexander",
      "Laura San Giacomo",
    ],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 159,
        rating: 7,
        comment: "The role that made Julia Roberts a star.",
        user: "90sMovieBuff",
      },
      {
        id: 160,
        rating: 6,
        comment: "A classic fairy tale with a modern twist.",
        user: "RomanceReader",
      },
    ],
  },
  {
    id: 31,
    title: "Bridget Jones's Diary",
    year: 2001,
    genre: "Romance",
    rating: 6.7,
    description:
      "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2AsAkLGPkGDgrl3JBPNFmak1HKQ1DW0STt6bZhPEIC_zvPt41JpQAQA&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=EYb9jnt2cv4",
    duration: 97,
    director: "Sharon Maguire",
    actors: ["Renée Zellweger", "Colin Firth", "Hugh Grant", "Gemma Jones"],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 161,
        rating: 7,
        comment: "Zellweger is perfectly imperfect as Bridget.",
        user: "ChickLitFan",
      },
      {
        id: 162,
        rating: 6,
        comment: "Hilarious and relatable romantic comedy.",
        user: "BritishHumour",
      },
    ],
  },
  {
    id: 32,
    title: "Crazy Rich Asians",
    year: 2018,
    genre: "Romance",
    rating: 6.9,
    description:
      "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Fn6iSNxNaLatABhlxiNUOgj6US7WN-ZqUXGXJPy7Dso1QN7o1usItoI&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
    duration: 120,
    director: "Jon M. Chu",
    actors: ["Constance Wu", "Henry Golding", "Michelle Yeoh", "Gemma Chan"],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 163,
        rating: 7,
        comment: "Visually stunning with a charming cast.",
        user: "AsianCinemaFan",
      },
      {
        id: 164,
        rating: 6,
        comment: "A refreshing take on the romantic comedy genre.",
        user: "MovieGoer",
      },
    ],
  },
  {
    id: 33,
    title: "The Wedding Planner",
    year: 2001,
    genre: "Romance",
    rating: 5.3,
    description:
      "Mary Fiore is San Francisco's most successful supplier of romance and glamour. She knows all the tricks. She knows all the rules. But then she breaks the most important rule of all: she falls in love with the groom.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9c1pbKlBXs69tAxVhv2kxTSsSQhefsNNtubdTbRnu3EjOpAcM__sPG28&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=TVIi2RiR0Ew",
    duration: 103,
    director: "Adam Shankman",
    actors: [
      "Jennifer Lopez",
      "Matthew McConaughey",
      "Bridgette Wilson-Sampras",
      "Justin Chambers",
    ],
    category: "Romantic Comedy Movies",
    reviews: [
      {
        id: 165,
        rating: 5,
        comment: "Light and predictable but enjoyable.",
        user: "RomComLover",
      },
      {
        id: 166,
        rating: 6,
        comment: "Lopez and McConaughey have decent chemistry.",
        user: "EasyWatchFan",
      },
    ],
  },
  {
    id: 34,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvTCuDIg_0UpxdkCTiBH4cVhGomiEK_90OdSf2m-fMdfV_BN3TBjN5QI&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    duration: 136,
    director: "Lana Wachowski, Lilly Wachowski",
    actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 167,
        rating: 9,
        comment: "Revolutionary visual effects and philosophical themes.",
        user: "RedPillTaker",
      },
      {
        id: 168,
        rating: 9,
        comment: "Changed cinema forever.",
        user: "SciFiMaster",
      },
    ],
  },
  {
    id: 35,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjUFf3blVDaf5NRmTBewKpWV9JUjIZHXSGSuyuv9rXpCP-XTkUfVcMDI&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    duration: 169,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
    ],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 169,
        rating: 9,
        comment: "A mind-bending space epic with emotional depth.",
        user: "SpaceExplorer",
      },
      {
        id: 170,
        rating: 8,
        comment: "Visually stunning with a haunting score.",
        user: "NolanFanatic",
      },
    ],
  },
  {
    id: 36,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    rating: 7.9,
    description:
      "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUac0UXTHtcxt2TbFjUpghG_1ugmy8btPpN0-GxFKxDol0xPrmh34y1sc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    duration: 116,
    director: "Denis Villeneuve",
    actors: [
      "Amy Adams",
      "Jeremy Renner",
      "Forest Whitaker",
      "Michael Stuhlbarg",
    ],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 171,
        rating: 8,
        comment: "A thoughtful and beautiful take on first contact.",
        user: "LinguisticsBuff",
      },
      {
        id: 172,
        rating: 8,
        comment: "Amy Adams delivers a powerful performance.",
        user: "ThoughtfulViewer",
      },
    ],
  },
  {
    id: 37,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: "Fantasy",
    rating: 8.8,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9JdopHvKjP8ItO_ByjIFXlaqNKewpXijX3mCkwkbCKPyEYBy4Y86i2M&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    duration: 178,
    director: "Peter Jackson",
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Sean Bean"],
    category: "Sci-Fi & Fantasy Movies",
    reviews: [
      {
        id: 173,
        rating: 9,
        comment: "The perfect fantasy adaptation.",
        user: "TolkienFan",
      },
      {
        id: 174,
        rating: 9,
        comment: "Epic scale with intimate character moments.",
        user: "MiddleEarthExplorer",
      },
    ],
  },
  {
    id: 38,
    title: "Harry Potter and the Philosopher's Stone",
    year: 2001,
    genre: "Fantasy",
    rating: 7.6,
    description:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLxm9MLotPkrC5dkTPLxNDRz2tHvg7P46NZsXGxjXkZ9po1Bmt6vdbjo&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
    duration: 152,
    director: "Chris Columbus",
    actors: [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Richard Harris",
    ],
    category: "Family Movie Night",
    reviews: [
      {
        id: 175,
        rating: 8,
        comment: "The magical beginning of an epic series.",
        user: "Potterhead",
      },
      {
        id: 176,
        rating: 7,
        comment: "Captures the wonder of the wizarding world.",
        user: "MagicLover",
      },
    ],
  },
  {
    id: 39,
    title: "The Hangover",
    year: 2009,
    genre: "Comedy",
    rating: 7.7,
    description:
      "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki5wZAZ935wNKN5TQkDm2oDvbphOCbky_2t9Kq5TQfUdz2SW5-GPKW_I&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
    duration: 100,
    director: "Todd Phillips",
    actors: [
      "Bradley Cooper",
      "Ed Helms",
      "Zach Galifianakis",
      "Justin Bartha",
    ],
    category: "Comedy Movies",
    reviews: [
      {
        id: 177,
        rating: 8,
        comment: "Hilarious from start to finish.",
        user: "ComedyFan",
      },
      {
        id: 178,
        rating: 7,
        comment: "A wild ride with memorable characters.",
        user: "PartyAnimal",
      },
    ],
  },
  {
    id: 40,
    title: "Superbad",
    year: 2007,
    genre: "Comedy",
    rating: 7.6,
    description:
      "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHyeQQVQzWcvOBNemW-M5q6MSfOzgcZDB1jX0IoXWksqwOCO0Q57SDhk&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
    duration: 113,
    director: "Greg Mottola",
    actors: [
      "Michael Cera",
      "Jonah Hill",
      "Christopher Mintz-Plasse",
      "Bill Hader",
    ],
    category: "Comedy Movies",
    reviews: [
      {
        id: 179,
        rating: 8,
        comment: "Authentic and hilarious coming-of-age comedy.",
        user: "TeenComedyFan",
      },
      {
        id: 180,
        rating: 7,
        comment: "Raunchy but with heart.",
        user: "LaughOutLoud",
      },
    ],
  },
  {
    id: 41,
    title: "Bridesmaids",
    year: 2011,
    genre: "Comedy",
    rating: 6.8,
    description:
      "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXGwf7wlAp2Hc4zhcMOd13NZipgGkKHi3Z6OvXM8XwOG1g9xcVQEiB6s&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=FNppLrmdyug",
    duration: 125,
    director: "Paul Feig",
    actors: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne", "Melissa McCarthy"],
    category: "Comedy Movies",
    reviews: [
      {
        id: 181,
        rating: 7,
        comment: "Hilarious female-led comedy with great performances.",
        user: "ComedyLover",
      },
      {
        id: 182,
        rating: 7,
        comment: "Crude but genuinely funny.",
        user: "MovieNight",
      },
    ],
  },
  {
    id: 42,
    title: "Step Brothers",
    year: 2008,
    genre: "Comedy",
    rating: 6.9,
    description:
      "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLV_laSsjghB3gh4bZBwOqHyiquKaDg1MBMSwtufSjSEeLZc5ehcrVV-8&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=CewglxElBK0",
    duration: 98,
    director: "Adam McKay",
    actors: [
      "Will Ferrell",
      "John C. Reilly",
      "Mary Steenburgen",
      "Richard Jenkins",
    ],
    category: "Comedy Movies",
    reviews: [
      {
        id: 183,
        rating: 7,
        comment: "Ferrell and Reilly's chemistry is comedic gold.",
        user: "SlapstickFan",
      },
      {
        id: 184,
        rating: 6,
        comment: "Absurd but quotable comedy.",
        user: "FunnyScenesLover",
      },
    ],
  },
  {
    id: 43,
    title: "Anchorman: The Legend of Ron Burgundy",
    year: 2004,
    genre: "Comedy",
    rating: 7.2,
    description:
      "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change when ambitious reporter Veronica Corningstone arrives as a new employee at his station.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxF3t63TgOPk21NwCn3Nz1ZbfyIOTt930br60TyS4JoRatBv1G2t2-YA&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=NJQ4qEWm9lU",
    duration: 94,
    director: "Adam McKay",
    actors: [
      "Will Ferrell",
      "Christina Applegate",
      "Paul Rudd",
      "Steve Carell",
    ],
    category: "Comedy Movies",
    reviews: [
      {
        id: 185,
        rating: 7,
        comment: "Endlessly quotable comedy classic.",
        user: "NewsTeamAssemble",
      },
      {
        id: 186,
        rating: 7,
        comment: "Will Ferrell at his comedic best.",
        user: "ComedyClassics",
      },
    ],
  },
  {
    id: 44,
    title: "Die Hard",
    year: 1988,
    genre: "Action",
    rating: 8.2,
    description:
      "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=jaJuwKCmJbY",
    duration: 132,
    director: "John McTiernan",
    actors: [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia",
      "Reginald VelJohnson",
    ],
    category: "Action Movies",
    reviews: [
      {
        id: 187,
        rating: 9,
        comment: "The definitive action movie.",
        user: "YippeeKiYay",
      },
      {
        id: 188,
        rating: 8,
        comment: "Willis and Rickman create movie magic.",
        user: "ActionClassics",
      },
    ],
  },
  {
    id: 45,
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    description:
      "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
    trailer: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
    duration: 101,
    director: "Chad Stahelski",
    actors: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
    category: "Action Movies",
    reviews: [
      {
        id: 189,
        rating: 8,
        comment: "Stylish action with incredible choreography.",
        user: "GunFuFan",
      },
      {
        id: 190,
        rating: 7,
        comment: "Reeves is perfect as the stoic, lethal protagonist.",
        user: "ActionJunkie",
      },
    ],
  },
  {
    id: 46,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXgqRywZ00QlPShRhuZIIYRevsF1ObMFefGvQLxLd&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    duration: 120,
    director: "George Miller",
    actors: [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays-Byrne",
    ],
    category: "Action Movies",
    reviews: [
      {
        id: 191,
        rating: 9,
        comment: "A masterclass in action filmmaking.",
        user: "ApocalypseNow",
      },
      {
        id: 192,
        rating: 8,
        comment: "Breathtaking stunts and visuals.",
        user: "DesertRacer",
      },
    ],
  },
  {
    id: 47,
    title: "Mission: Impossible - Fallout",
    year: 2018,
    genre: "Action",
    rating: 7.7,
    description:
      "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7imYxvxZr8Jidb2PThFOmBn8t-FzMuB2jFEVYmWfp3ctAQRPZOSCQU0&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=wb49-oV0F78",
    duration: 147,
    director: "Christopher McQuarrie",
    actors: ["Tom Cruise", "Henry Cavill", "Ving Rhames", "Simon Pegg"],
    category: "Action Movies",
    reviews: [
      {
        id: 193,
        rating: 8,
        comment: "The stunts are absolutely incredible.",
        user: "ActionSeeker",
      },
      {
        id: 194,
        rating: 7,
        comment: "Tom Cruise continues to push the boundaries.",
        user: "ThrillerFan",
      },
    ],
  },
  {
    id: 48,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller",
    rating: 8.6,
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9K4cDmKIsrZbDW_fRaSZkDisHODqQquNKCjk9Pj7v9tVrIaEPwlAphO0&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    duration: 118,
    director: "Jonathan Demme",
    actors: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 195,
        rating: 9,
        comment: "Hopkins creates one of cinema's greatest villains.",
        user: "PsychoThriller",
      },
      {
        id: 196,
        rating: 9,
        comment: "Tense, intelligent, and perfectly acted.",
        user: "SuspenseLover",
      },
    ],
  },
  {
    id: 49,
    title: "Gone Girl",
    year: 2014,
    genre: "Thriller",
    rating: 8.1,
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3C9r0r4P_RjgcYiPwtkt6Ia-U1OxThb7Jtua3rZowwheeBBJYvGxqwA&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
    duration: 149,
    director: "David Fincher",
    actors: [
      "Ben Affleck",
      "Rosamund Pike",
      "Neil Patrick Harris",
      "Tyler Perry",
    ],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 197,
        rating: 8,
        comment: "A twisted, dark view of marriage.",
        user: "ThrillerReader",
      },
      {
        id: 198,
        rating: 8,
        comment: "Pike delivers an unforgettable performance.",
        user: "BookAdaptationLover",
      },
    ],
  },
  {
    id: 50,
    title: "Seven",
    year: 1995,
    genre: "Thriller",
    rating: 8.6,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaegaqcdfn8uC7Jab0_2tdbrNEy7Yn8Y1_vGkKqnCdDGeyHwl3O4O1SAM&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI",
    duration: 127,
    director: "David Fincher",
    actors: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow", "Kevin Spacey"],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 199,
        rating: 9,
        comment: "Dark, disturbing, and unforgettable.",
        user: "DarkThrillerFan",
      },
      {
        id: 200,
        rating: 8,
        comment: "Fincher's masterful direction creates unbearable tension.",
        user: "CrimeDramaBuff",
      },
    ],
  },
  {
    id: 51,
    title: "Get Out",
    year: 2017,
    genre: "Horror",
    rating: 7.7,
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlS1N75nIhBqKBRnm2UFmfS5yMZv1rUiWEnqklEsNkMrGIGHVT2F7XrY&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    duration: 104,
    director: "Jordan Peele",
    actors: [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford",
      "Catherine Keener",
    ],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 201,
        rating: 8,
        comment: "A brilliant social thriller with layers of meaning.",
        user: "HorrorBuff",
      },
      {
        id: 202,
        rating: 8,
        comment: "Peele's directorial debut is a masterpiece.",
        user: "SocialCommentary",
      },
    ],
  },
  {
    id: 52,
    title: "The Godfather: Part II",
    year: 1974,
    genre: "Crime",
    rating: 9.0,
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdBf23MEiVRl_QcXdzYwTEHtvQlfPYx6nKKGogH_94FsE6KsUlJnpExg&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=9O1Iy9od7-A",
    duration: 202,
    director: "Francis Ford Coppola",
    actors: ["Al Pacino", "Robert De Niro", "Robert Duvall", "Diane Keaton"],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 203,
        rating: 10,
        comment: "Perhaps the greatest sequel ever made.",
        user: "FilmHistorian",
      },
      {
        id: 204,
        rating: 9,
        comment: "A complex, multi-layered masterpiece.",
        user: "CinematicGenius",
      },
    ],
  },
  {
    id: 53,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    rating: 8.7,
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCASb-iL7jmd2d8fs5-GK2bKWEOvIMIpJVUJ-APeJao2DBa0LFA5smxW4&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=qo5jJpHtI1Y",
    duration: 146,
    director: "Martin Scorsese",
    actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 205,
        rating: 9,
        comment: "Scorsese's gangster masterpiece.",
        user: "MafiaMovieFan",
      },
      {
        id: 206,
        rating: 9,
        comment: "Endlessly watchable and quotable.",
        user: "FilmAfficionado",
      },
    ],
  },
  {
    id: 54,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wdAPYxY_dewOWLN5MLEsxo8X84cYDCU0d8yzCYw7aw73yHG4aMeO7yg&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    duration: 142,
    director: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 207,
        rating: 9,
        comment: "Hanks delivers one of his most iconic performances.",
        user: "ClassicMovieBuff",
      },
      {
        id: 208,
        rating: 9,
        comment: "A heartwarming journey through American history.",
        user: "HanksSupporter",
      },
    ],
  },
  {
    id: 55,
    title: "The Departed",
    year: 2006,
    genre: "Crime",
    rating: 8.5,
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a2y-RLrdbJcEYW7uwNmnlKZqtQH35NMEJk0L2XPgyluPn6ZG-Lwrbpk&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=iojhqm0JTW4",
    duration: 151,
    director: "Martin Scorsese",
    actors: [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson",
      "Mark Wahlberg",
    ],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 209,
        rating: 9,
        comment: "Tense, violent, and brilliantly crafted.",
        user: "ScorseseFan",
      },
      {
        id: 210,
        rating: 8,
        comment: "A stellar cast at the top of their game.",
        user: "CrimeDramaLover",
      },
    ],
  },
  {
    id: 56,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUe2NIdGQKK2XLYXOwArWFUw9TZSQ3U42WSiH_wwzf-UN2yOHmxf30s6M&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
    duration: 155,
    director: "Ridley Scott",
    actors: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
    ],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 211,
        rating: 9,
        comment: "Epic storytelling with memorable performances.",
        user: "HistoricalEpicFan",
      },
      {
        id: 212,
        rating: 8,
        comment: "Crowe is magnificent as Maximus.",
        user: "ActionHistoryBuff",
      },
    ],
  },
  {
    id: 57,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 7.9,
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZNLbQgfnOKfEyqHVJ6kV4QOS0WmXxwfxexBdlcGCxQorWCZEjKNexsI&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    duration: 194,
    director: "James Cameron",
    actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 213,
        rating: 8,
        comment: "A timeless romantic epic.",
        user: "RomanceHistoryFan",
      },
      {
        id: 214,
        rating: 8,
        comment: "The sinking sequences remain unmatched.",
        user: "DisasterMovieBuff",
      },
    ],
  },
  {
    id: 58,
    title: "Avatar",
    year: 2009,
    genre: "Sci-Fi",
    rating: 7.8,
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGdXwKu0GBWCXTgB_s6WDtXXX5XdEBXxSobY_jm_Br85qjPCyvaYoMJk&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    duration: 162,
    director: "James Cameron",
    actors: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Michelle Rodriguez",
    ],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 215,
        rating: 8,
        comment: "Visually revolutionary and immersive.",
        user: "VisualEffectsFan",
      },
      {
        id: 216,
        rating: 7,
        comment: "Created a new standard for 3D filmmaking.",
        user: "SciFiEnthusiast",
      },
    ],
  },
  {
    id: 59,
    title: "Jurassic Park",
    year: 1993,
    genre: "Sci-Fi",
    rating: 8.1,
    description:
      "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8gLjYo6rMadtHP9ujefs61u3bc5gVbi3GskN9QIW_g&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=QWBKEmWWL38",
    duration: 127,
    director: "Steven Spielberg",
    actors: [
      "Sam Neill",
      "Laura Dern",
      "Jeff Goldblum",
      "Richard Attenborough",
    ],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 217,
        rating: 8,
        comment: "Revolutionary special effects that still hold up.",
        user: "DinoFan",
      },
      {
        id: 218,
        rating: 8,
        comment: "Spielberg at his blockbuster best.",
        user: "90sMovieLover",
      },
    ],
  },
  {
    id: 60,
    title: "The Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2Fmz5mr-ck5IenAE_TSNnllUxZrZFqZre1ExIjoYdt6GpSCa_FET258&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    duration: 181,
    director: "Anthony Russo, Joe Russo",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
    ],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 219,
        rating: 9,
        comment: "An emotional and satisfying conclusion.",
        user: "MarvelFanatic",
      },
      {
        id: 220,
        rating: 8,
        comment: "Epic in scale and heartfelt in execution.",
        user: "ComicBookMovieFan",
      },
    ],
  },
  {
    id: 61,
    title: "Pride & Prejudice",
    year: 2005,
    genre: "Romance",
    rating: 7.8,
    description:
      "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDSv3ZO0Hy3yoPyvxiblVW7MSgOurcFJW_pX2X7L5Jkx5qzuPTL8F3Ys&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=1dYv5u6v55Y",
    duration: 129,
    director: "Joe Wright",
    actors: [
      "Keira Knightley",
      "Matthew Macfadyen",
      "Brenda Blethyn",
      "Donald Sutherland",
    ],
    category: "Romantic Favourites",
    reviews: [
      {
        id: 221,
        rating: 8,
        comment: "A beautiful adaptation of the classic novel.",
        user: "PeriodDramaLover",
      },
      {
        id: 222,
        rating: 8,
        comment: "The chemistry between Knightley and Macfadyen is perfect.",
        user: "AustenFan",
      },
    ],
  },
  {
    id: 62,
    title: "Casablanca",
    year: 1942,
    genre: "Romance",
    rating: 8.5,
    description:
      "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cLpNrTZb71mKbeDSuJlavLnVxgbf5tahWr-xJmmq3x5qHFJ3rDuijnA&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=BkL9l7qovsE",
    duration: 102,
    director: "Michael Curtiz",
    actors: [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Paul Henreid",
      "Claude Rains",
    ],
    category: "Romantic Favourites",
    reviews: [
      {
        id: 223,
        rating: 9,
        comment: "One of the greatest films ever made.",
        user: "ClassicCinemaLover",
      },
      {
        id: 224,
        rating: 9,
        comment: "Timeless romance and unforgettable dialogue.",
        user: "OldHollywoodFan",
      },
    ],
  },
  {
    id: 63,
    title: "Gone with the Wind",
    year: 1939,
    genre: "Romance",
    rating: 8.1,
    description:
      "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_2of0PEMZ3T73S6r4Ud5sCZNau_Kw2vBk2AbCbb4lU8Hwo0Wa8rjy0A&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=0X94oZgJis4",
    duration: 238,
    director: "Victor Fleming",
    actors: [
      "Clark Gable",
      "Vivien Leigh",
      "Thomas Mitchell",
      "Barbara O'Neil",
    ],
    category: "Romantic Favourites",
    reviews: [
      {
        id: 225,
        rating: 8,
        comment: "Epic in scope and ambition.",
        user: "ClassicFilmBuff",
      },
      {
        id: 226,
        rating: 8,
        comment: "Leigh's Scarlett O'Hara is unforgettable.",
        user: "HistoricalRomanceFan",
      },
    ],
  },
  {
    id: 64,
    title: "Roman Holiday",
    year: 1953,
    genre: "Romance",
    rating: 8.0,
    description:
      "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JYulE9Il5E_Gkk5ozkQkMMm3bgHkRzlDh77lHKKo3LCwasAoQjNjUFs&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=9_UMVzVjWWI",
    duration: 118,
    director: "William Wyler",
    actors: ["Gregory Peck", "Audrey Hepburn", "Eddie Albert", "Hartley Power"],
    category: "Romantic Favourites",
    reviews: [
      {
        id: 227,
        rating: 8,
        comment: "Hepburn is luminous in her Oscar-winning role.",
        user: "RomanceClassics",
      },
      {
        id: 228,
        rating: 8,
        comment: "Charming and elegant romance.",
        user: "HepburnFanatic",
      },
    ],
  },
  {
    id: 65,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "Romance",
    rating: 8.3,
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJaS8Hcp5EJIkqjijKmO65Ug27HtLhLaMia1AjyS0PW4ipAN5_Go9pEQ&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=07-QBnEkgXU",
    duration: 108,
    director: "Michel Gondry",
    actors: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst", "Mark Ruffalo"],
    category: "Romantic Favourites",
    reviews: [
      {
        id: 229,
        rating: 9,
        comment: "A uniquely imaginative take on love and memory.",
        user: "IndieFilmBuff",
      },
      {
        id: 230,
        rating: 8,
        comment: "Carrey and Winslet give career-best performances.",
        user: "ThoughtfulViewer",
      },
    ],
  },
  {
    id: 66,
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    rating: 8.0,
    description:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCibwlIsZnp7ZOUgd0vmRUZfktpufsDKr3dHKoDsKbzVDLaSNrL7lk6YM&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    duration: 128,
    director: "Damien Chazelle",
    actors: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt", "J.K. Simmons"],
    category: "Romantic Movies",
    reviews: [
      {
        id: 231,
        rating: 8,
        comment: "A beautiful homage to classic Hollywood musicals.",
        user: "MusicalFan",
      },
      {
        id: 232,
        rating: 8,
        comment: "Visually stunning with memorable music.",
        user: "ModernRomantic",
      },
    ],
  },
  {
    id: 67,
    title: "The Prestige",
    year: 2006,
    genre: "Mystery",
    rating: 8.5,
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ7gfiv1BZsYmKzL2Nu5RBV6yvfhM1GhZdQPhKqFYOpi23fXtdVmB3oc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=o4gHCmTQDVI",
    duration: 130,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson",
      "Michael Caine",
    ],
    category: "Suspensful Movies",
    reviews: [
      {
        id: 233,
        rating: 9,
        comment: "Intricate plotting with a mind-blowing twist.",
        user: "NolanFan",
      },
      {
        id: 234,
        rating: 8,
        comment: "Rewards multiple viewings.",
        user: "MysteryLover",
      },
    ],
  },
  {
    id: 68,
    title: "Memento",
    year: 2000,
    genre: "Thriller",
    rating: 8.4,
    description:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaPmGIMgaki9aPiU_6e-Yd-zkEyvKly4yowkkVC5gC_zCB7unz5JrHyQ&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=4CV41hoyS8A",
    duration: 113,
    director: "Christopher Nolan",
    actors: [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano",
      "Mark Boone Junior",
    ],
    category: "Your Next Watch",
    reviews: [
      {
        id: 235,
        rating: 9,
        comment: "Brilliant narrative structure and concept.",
        user: "MindBender",
      },
      {
        id: 236,
        rating: 8,
        comment: "Pearce delivers a captivating performance.",
        user: "ThrillerAddict",
      },
    ],
  },
  {
    id: 69,
    title: "Up",
    year: 2009,
    genre: "Animation",
    rating: 8.3,
    description:
      "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTima0h562sT0teNU7mwmKt5HEMIlcX-hVE3PuvL1_UDkIMCALUICRxOLk&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=ORFWdXl_zJ4",
    duration: 96,
    director: "Pete Docter",
    actors: [
      "Edward Asner",
      "Jordan Nagai",
      "John Ratzenberger",
      "Christopher Plummer",
    ],
    category: "Family Movie Night",
    reviews: [
      {
        id: 237,
        rating: 9,
        comment: "The opening sequence alone is a masterpiece.",
        user: "PixarLover",
      },
      {
        id: 238,
        rating: 8,
        comment: "A touching adventure for all ages.",
        user: "FamilyMovieFan",
      },
    ],
  },
  {
    id: 70,
    title: "The Incredibles",
    year: 2004,
    genre: "Animation",
    rating: 8.0,
    description:
      "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalnCT2lhAs4bCKTIKrrtBwDdwU_ZyEPUAJHC4Ch_V&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=eZbzbC9285I",
    duration: 115,
    director: "Brad Bird",
    actors: [
      "Craig T. Nelson",
      "Holly Hunter",
      "Samuel L. Jackson",
      "Jason Lee",
    ],
    category: "Family Movie Night",
    reviews: [
      {
        id: 239,
        rating: 8,
        comment: "A perfect blend of family drama and superhero action.",
        user: "AnimationEnthusiast",
      },
      {
        id: 240,
        rating: 8,
        comment: "One of Pixar's most exhilarating films.",
        user: "SuperheroFan",
      },
    ],
  },
  {
    id: 71,
    title: "Coco",
    year: 2017,
    genre: "Animation",
    rating: 8.4,
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAqWcg3yvKOOP6e7wdQm6fO6Rt6azHh54buxxdmXv80PB_DZEwFdds9Y&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=xlnPHQ3TLX8",
    duration: 105,
    director: "Lee Unkrich",
    actors: [
      "Anthony Gonzalez",
      "Gael García Bernal",
      "Benjamin Bratt",
      "Alanna Ubach",
    ],
    category: "Family Movie Night",
    reviews: [
      {
        id: 241,
        rating: 9,
        comment: "A visually stunning celebration of family and culture.",
        user: "CulturalAnimation",
      },
      {
        id: 242,
        rating: 8,
        comment: "Emotionally resonant with gorgeous animation.",
        user: "MusicLover",
      },
    ],
  },
  {
    id: 72,
    title: "Black Panther",
    year: 2018,
    genre: "Action",
    rating: 7.3,
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNDBRtHaPXdgCzG4AkD05G8e3hIOsbGk326QXomu2T9EwQOO8S2S3Y7w&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    duration: 134,
    director: "Ryan Coogler",
    actors: [
      "Chadwick Boseman",
      "Michael B. Jordan",
      "Lupita Nyong'o",
      "Danai Gurira",
    ],
    category: "Blockbuster Movies",
    reviews: [
      {
        id: 243,
        rating: 8,
        comment: "A culturally significant superhero film.",
        user: "ComicBookMovie",
      },
      {
        id: 244,
        rating: 7,
        comment: "Boseman's royal performance elevates the material.",
        user: "ActionFanatic",
      },
    ],
  },
  {
    id: 73,
    title: "The Truman Show",
    year: 1998,
    genre: "Drama",
    rating: 8.1,
    description:
      "An insurance salesman discovers his whole life is actually a reality TV show.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWBJymZIe8tXKq0r0g7KrA7BvlrmDblA_gZtGMl3FuJdsUt2vVbpxGNc&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    duration: 103,
    director: "Peter Weir",
    actors: [
      "Jim Carrey",
      "Laura Linney",
      "Noah Emmerich",
      "Natascha McElhone",
    ],
    category: "Your Next Watch",
    reviews: [
      {
        id: 245,
        rating: 8,
        comment: "Carrey shows his dramatic range in this prescient film.",
        user: "ThoughtfulCinema",
      },
      {
        id: 246,
        rating: 8,
        comment: "A brilliant concept brilliantly executed.",
        user: "ConceptualDrama",
      },
    ],
  },
  {
    id: 74,
    title: "Schindler's List",
    year: 1993,
    genre: "Biography",
    rating: 8.9,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowemHqkrkR9ri-t8UFz6cLeR8WOsQYB0ySsuvsOUaYSICk7bzjyr8nvE&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=gG22XNhtnoY",
    duration: 195,
    director: "Steven Spielberg",
    actors: [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley",
      "Caroline Goodall",
    ],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 247,
        rating: 10,
        comment: "A devastating masterpiece of historical importance.",
        user: "HistoricalFilmBuff",
      },
      {
        id: 248,
        rating: 9,
        comment: "Spielberg's most powerful work.",
        user: "SeriousCinephile",
      },
    ],
  },
  {
    id: 75,
    title: "The Pursuit of Happyness",
    year: 2006,
    genre: "Biography",
    rating: 8.0,
    description:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST78yx85q1zpIIFn3Cnm-RJyIvtpQBLimOtkLADZg__F3jP7aIxoyw1H4&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8",
    duration: 117,
    director: "Gabriele Muccino",
    actors: ["Will Smith", "Jaden Smith", "Thandie Newton", "Brian Howe"],
    category: "Biographical Drama Movies",
    reviews: [
      {
        id: 249,
        rating: 8,
        comment: "Will Smith gives a moving, heartfelt performance.",
        user: "InspirationalStories",
      },
      {
        id: 250,
        rating: 8,
        comment: "A powerful tale of perseverance.",
        user: "TrueStoryLover",
      },
    ],
  },
  {
    id: 76,
    title: "The Breakfast Club",
    year: 1985,
    genre: "Comedy",
    rating: 7.9,
    description:
      "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah76u9HsXSda1OK3X-nQh_zy-UnLnw9L6pODK_6gaKnXpDoIfm0bMETE&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=BSXBvor47Zs",
    duration: 97,
    director: "John Hughes",
    actors: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald", "Ally Sheedy"],
    category: "Your Next Watch",
    reviews: [
      {
        id: 251,
        rating: 8,
        comment: "The definitive teen movie that still resonates.",
        user: "80sMovieFan",
      },
      {
        id: 252,
        rating: 8,
        comment: "Captures the essence of teenage angst perfectly.",
        user: "ComingOfAgeDrama",
      },
    ],
  },
  {
    id: 77,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    rating: 8.4,
    description:
      "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO7m1EZhjvNNiC3vwhqqfOa732Xg7Kw0nlDU0eux6xYyEZCH2_wR1E4U&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
    duration: 117,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    actors: [
      "Shameik Moore",
      "Jake Johnson",
      "Hailee Steinfeld",
      "Mahershala Ali",
    ],
    category: "Family Movies",
    reviews: [
      {
        id: 253,
        rating: 9,
        comment: "Revolutionizes animation while telling a great story.",
        user: "ComicBookFan",
      },
      {
        id: 254,
        rating: 8,
        comment: "Visually innovative and emotionally resonant.",
        user: "AnimationInnovator",
      },
    ],
  },
  {
    id: 78,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    rating: 8.1,
    description:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXq-8VyZFpIb4v1LQDq_ioEm--dhcp5I8jSpiWWlSCDrYen3qoPWMjzsE&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    duration: 99,
    director: "Wes Anderson",
    actors: [
      "Ralph Fiennes",
      "F. Murray Abraham",
      "Mathieu Amalric",
      "Adrien Brody",
    ],
    category: "Your Next Watch",
    reviews: [
      {
        id: 255,
        rating: 8,
        comment: "Anderson's visual style at its most delightful.",
        user: "StyleOverSubstance",
      },
      {
        id: 256,
        rating: 8,
        comment: "Fiennes is brilliant in this quirky adventure.",
        user: "VisuallyStunning",
      },
    ],
  },
  {
    id: 79,
    title: "The Social Dilemma",
    year: 2020,
    genre: "Documentary",
    rating: 7.6,
    description:
      "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4oyExEG2ukbTqRG-cez5Zek-AfjjS7OrJDpdrbh3bsRKrER6l6sTH48&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=uaaC57tcci0",
    duration: 94,
    director: "Jeff Orlowski",
    actors: [
      "Tristan Harris",
      "Jeff Seibert",
      "Bailey Richardson",
      "Joe Toscano",
    ],
    category: "New on Netflix",
    reviews: [
      {
        id: 257,
        rating: 8,
        comment: "A necessary warning about technology addiction.",
        user: "TechCritique",
      },
      {
        id: 258,
        rating: 7,
        comment: "Eye-opening look at social media manipulation.",
        user: "DigitalDetox",
      },
    ],
  },
  {
    id: 80,
    title: "The Irishman",
    year: 2019,
    genre: "Crime",
    rating: 7.8,
    description:
      "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAzd2we0jz7YWIV84O4ajYWDFgtaECqde2nd7dIP57MD_HudK2hfPNFg&usqp=CAE&s",
    trailer: "https://www.youtube.com/watch?v=WHXxVmeGQUc",
    duration: 209,
    director: "Martin Scorsese",
    actors: ["Robert De Niro", "Al Pacino", "Joe Pesci", "Harvey Keitel"],
    category: "Hollywood Movies",
    reviews: [
      {
        id: 259,
        rating: 8,
        comment:
          "Scorsese reunites gangster film legends for a reflective epic.",
        user: "MafiaMovieFan",
      },
      {
        id: 260,
        rating: 8,
        comment: "A melancholic look at crime, friendship, and mortality.",
        user: "ScorseseFanatic",
      },
    ],
  },
];
