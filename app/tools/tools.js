export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const getNormalizedPathname = (pathname)=>{
  const pathSegments = pathname.split('/').filter(Boolean); // Разбиваем path на части и убираем пустые строки
  return pathSegments.length > 1 ? (pathSegments.length > 2 ? "none" : `/${pathSegments[1]}`) : pathname;
}

export const cardsData = [
  {
    title: 'Counter-Strike 2',
    img: '/cs-card.webp',
    href: 'cs'
  },
  {
    title: 'Dota 2',
    img: '/dota-card.webp',
    href: 'dota'
  },
  {
    title: 'PUBG: Battlegrounds',
    img: '/pubg-card.webp',
    href: 'pubg'
  },
  {
    title: 'Team Fortress 2',
    img: '/tf-card.webp',
    href: 'tf'
  },
];

export const nicknames = [
  "XenKr0z", "T1Zyph", "BlitzAxe", "Qurvex99", "Mornex", "Drayzz",
  "Vytronic", "Zelph0r", "N8toX", "Brakzul", "Jorvik-X", "Kyzzl3",
  "Tr4xite", "Farolyn", "Gloxxar", "D3ztral", "Phynzor", "Vyrguzz",
  "Jymfrost", "Krizzak", "Nulzex", "Ozznark", "Tynkro", "Zenthir",
  "Blytr0n", "Vandrez", "Daxxil", "Quirnoz", "Flomix", "Gruxis",
  "Rendox", "Mazztrik", "Xylnov", "Klymzaar", "Tornex", "Plyxion",
  "Xyv3r", "Druxil", "Kronflint", "Zephyr_1x", "Clyvox", "Vornyx",
  "Tazulon", "Wryznok", "Q3ntark", "Ozzex", "Draklim", "Vyzzik",
  "Gremtok", "J4zzron", "Xyberion", "H4xM0de", "Brivok", "Nytros",
  "Zyglor", "Kantrex", "Fyzzik", "Droxal", "Quonark", "Blynzar",
  "M0ntrex", "Praxul", "Kordex", "V3ltross", "Glynnar", "Wazzok",
  "Xyntor", "Flintik", "Zornak", "Byltrex", "Cryzok", "Trinloz",
  "Zephnok", "Vorgrim", "Fylox", "Str4xx", "Jornex", "Glitzo",
  "Vandrex", "Krizzix", "Xarvox", "Drelthor", "Kybrant", "Zyndor",
  "Jorblix", "W4rnok", "Vyglix", "Myrzex", "D4xxon", "Flynzak",
  "Glyzorn", "Cyntrek", "Trazel", "Xorlin", "D4rmox", "Prilzor",
  "Xenthril", "Yzzorak", "Zoltvar", "Jynthrox"
];

export const getTournamentTime = ()=>{
  const now = new Date();
  const minutes = now.getMinutes();
  return 30 - (minutes % 30);
}

export function getTimeForTournament() {
  const now = new Date();
  now.setMinutes(now.getMinutes() + getTournamentTime());
  now.setSeconds(0);
  return now.toTimeString().slice(0, 5);
}

export const tournamentsList = {
  cs: [
    {
      title: "Locked and Loaded",
      img: "cs-1.webp",
      time: "in 27 minutes, 20:00",
      info: "Hosted by CS 2 Allstars • Europe • 2v2 • €4.00 • 32 slots",
    },
    {
      title: "Active duty Deployment",
      img: "cs-2.webp",
      time: "In 33 minutes, 20:30 ",
      info: "Hosted by CS 2 Allstars • Europe • 5v5 • €10.00 • 32 slots"
    },
    {
      title: "Battle Buddies",
      img: "cs-3.webp",
      time: "Tomorrow, 21:00",
      info: "Hosted by CS 2 Allstars • Europe • 2v2 • €8.00 • 32 slots"
    },
    {
      title: "True Wingman",
      img: "cs-4.webp",
      time: "Tomorrow, 18:00",
      info: "Hosted by Student_Lyge • Europe • 2v2 • 16 slots"
    },
  ],
  dota: [
    {
      title: "Trial of Heroes",
      img: 'dota-1.webp',
      time: 'Today, 18:00',
      info: "Hosted by Secret Shop • Europe • 2v2 • €1.00 • 16 slots"
    },
    {
      title: "The Aegis Defensive",
      img: 'dota-2.webp',
      time: 'Today, 19:30',
      info: "Hosted by Secret Shop • Europe • 5v5 • €10.00 • 32 slots"
    },
    {
      title: "Trial of Heroes 2",
      img: 'dota-3.webp',
      time: 'Tomorrow, 18:00',
      info: "Hosted by Secret Shop • Europe • 2v2 • €1.00 • 16 slots"
    },
    {
      title: "The Aegis Defensive 2",
      img: 'dota-4.webp',
      time: 'Tomorrow, 19:30',
      info: "Hosted by Secret Shop • Europe • 5v5 • €10.00 • 32 slots"
    },
  ],
  pubg: [
    {
      title: "Rogue",
      img: 'pubg-1.webp',
      time: 'Today, 19:00',
      info: "Hosted by Mercenaries • Europe • 2v2 • €10.00 • 80 slots"
    },
    {
      title: "Mad House",
      img: 'pubg-3.webp',
      time: 'Today, 22:00',
      info: "Hosted by Mercenaries • Europe • 5v5 • €8.00 • 32 slots"
    },
    {
      title: "Bootcamp",
      img: 'pubg-2.webp',
      time: 'Tomorrow, 20:00',
      info: "Hosted by Mercenaries • Europe • 2v2 • €10.00 • 80 slots"
    },
    {
      title: "Mercenaries Solos",
      img: 'pubg-4.webp',
      time: 'Tomorrow, 22:00',
      info: "Hosted by Mercenaries • Europe • 2v2 • €1.00 • 80 slots"
    },
  ],
  tf: [
    {
      title: "AsiaFortress - 6s Open",
      img: 'tf-1.webp',
      time: 'Today, 20:00',
      info: "Hosted by AsiaFortress • Europe • 5v5 • 16 slots"
    },
    {
      title: "ATF2L - Platinum",
      img: 'tf-2.webp',
      time: 'Today, 22:00',
      info: "Hosted by TF2 League • Europe • 9v9 • 16 slots"
    },
    {
      title: "Team Fortress 2 iSeries Open",
      img: 'tf-3.webp',
      time: 'In 2 days, 18:00',
      info: "Hosted by Insomnia Sports • Europe • 5v5 • 16 slots"
    },
    {
      title: "AsiaFortress - 6s Open 2",
      img: 'tf-4.webp',
      time: 'In 4 Days, 16:00',
      info: "Hosted by AsiaFortress • Europe • 5v5 • 16 slots"
    },
  ]
}

export const ratingList = {
  cs: [
    {
      username: 'RavIE',
      played: 52,
      winrate: 90,
      rating: '1,919'
    },
    {
      username: 'peterrr',
      played: 49,
      winrate: 88,
      rating: '1,872'
    },
    {
      username: 'PANDAZ',
      played: 60,
      winrate: 87,
      rating: '1,871'
    },
    {
      username: 'Al(y)ex#',
      played: 58,
      winrate: 84,
      rating: '1,800'
    },
    {
      username: 'tonysalva',
      played: 60,
      winrate: 81,
      rating: '1,793'
    },
    {
      username: "Bes\'e\'nOK#8895",
      played: 16,
      winrate: 100,
      rating: '1,790'
    },
    {
      username: 'kraKen__',
      played: 38,
      winrate: 95,
      rating: '1,779'
    },
    {
      username: 'ZeRqwOo',
      played: 39,
      winrate: 92,
      rating: '1,778'
    },
    {
      username: 'Mellt0n',
      played: 42,
      winrate: 88,
      rating: '1,769'
    },
    {
      username: 'maniac2891',
      played: 20,
      winrate: 95,
      rating: '1,769'
    },
  ],
  dota: [
    {
      username: 'argius',
      played: 27,
      winrate: 81,
      rating: '1,829'
    },
    {
      username: 'kmcdc',
      played: 129,
      winrate: 75,
      rating: '1,816'
    },
    {
      username: '55gh123',
      played: 117,
      winrate: 74,
      rating: '1,803'
    },
    {
      username: 'scrvex',
      played: 5,
      winrate: 80,
      rating: '1,797'
    },
    {
      username: 'icechill',
      played: 21,
      winrate: 81,
      rating: '1,792'
    },
    {
      username: '.zakra#',
      played: 8,
      winrate: 100,
      rating: '1,791'
    },
    {
      username: 'Kiaeser',
      played: 14,
      winrate: 86,
      rating: '1,789'
    },
    {
      username: 'hikki_sad',
      played: 9,
      winrate: 100,
      rating: '1,789'
    },
    {
      username: 'upsetnot',
      played: 9,
      winrate: 100,
      rating: '1,787'
    },
    {
      username: '-Fate-',
      played: 31,
      winrate: 81,
      rating: '1,783'
    },
  ],
  pubg: [
    {
      username: 'z1loy',
      played: 52,
      winrate: 90,
      rating: '1,919'
    },
    {
      username: 'ext4nz',
      played: 49,
      winrate: 88,
      rating: '1,872'
    },
    {
      username: 'r0xxx',
      played: 60,
      winrate: 87,
      rating: '1,871'
    },
    {
      username: 'anyjezz',
      played: 58,
      winrate: 84,
      rating: '1,800'
    },
    {
      username: 'Prezxenti',
      played: 60,
      winrate: 81,
      rating: '1,793'
    },
    {
      username: "Gedrox",
      played: 16,
      winrate: 100,
      rating: '1,790'
    },
    {
      username: 'BOP_B_3AKOHE',
      played: 38,
      winrate: 95,
      rating: '1,779'
    },
    {
      username: 'Xerphy',
      played: 39,
      winrate: 92,
      rating: '1,778'
    },
    {
      username: 'Recup',
      played: 42,
      winrate: 88,
      rating: '1,769'
    },
    {
      username: 'K1m',
      played: 20,
      winrate: 95,
      rating: '1,769'
    },
  ],
  tf: [
    {
      username: 'Zamberg',
      played: 27,
      winrate: 81,
      rating: '1,829'
    },
    {
      username: 'Prysm',
      played: 129,
      winrate: 75,
      rating: '1,816'
    },
    {
      username: 'Darxgetn',
      played: 117,
      winrate: 74,
      rating: '1,803'
    },
    {
      username: 'inzigm',
      played: 5,
      winrate: 80,
      rating: '1,797'
    },
    {
      username: 'Pander1045',
      played: 21,
      winrate: 81,
      rating: '1,792'
    },
    {
      username: 'Q U U E N',
      played: 8,
      winrate: 100,
      rating: '1,791'
    },
    {
      username: 'nick._rl',
      played: 14,
      winrate: 86,
      rating: '1,789'
    },
    {
      username: 'Parcker',
      played: 9,
      winrate: 100,
      rating: '1,789'
    },
    {
      username: 'Tomio',
      played: 9,
      winrate: 100,
      rating: '1,787'
    },
    {
      username: 'Lepzycho',
      played: 31,
      winrate: 81,
      rating: '1,783'
    },
  ],
};

export const topPlayers = [
  {
    username: 'argius',
    rating: '2,229',
    img: '/cs/1.webp'
  },
  {
    username: 'kmcdc',
    rating: '2,201',
    img: '/cs/3.webp'
  },
  {
    username: 'Q U U E N',
    rating: '2,190',
    img: '/cs/2.webp'
  },
  {
    username: 'nick._rl',
    rating: '2,174',
    img: '/cs/8.webp'
  },
  {
    username: 'Kiaeser',
    rating: '2,151',
    img: '/dota/5.webp'
  },
  {
    username: 'hikki_sad',
    rating: '2,149',
    img: '/dota/6.webp'
  },
  {
    username: 'RavIE',
    rating: '2,127',
    img: '/dota/3.webp'
  },
  {
    username: 'peterrr',
    rating: '2,109',
    img: '/dota/4.webp'
  },
  {
    username: 'PANDAZ',
    rating: '2,101',
    img: '/dota/9.webp'
  },
  {
    username: 'Al(y)ex#',
    rating: '2,086',
    img: '/cs/9.webp'
  },
];

export const favTournaments = [
  {
    title: "Locked and Loaded",
    img: "cs-1.webp",
    time: "in 27 minutes, 20:00",
    info: "Hosted by CS 2 Allstars • Europe • 2v2 • €4.00 • 32 slots"
  },
  {
    title: "The Aegis Defensive",
    img: 'dota-2.webp',
    time: 'Today, 19:30',
    info: "Hosted by Secret Shop • Europe • 5v5 • €10.00 • 32 slots"
  },
  {
    title: "Bootcamp",
    img: 'pubg-2.webp',
    time: 'Today, 20:00',
    info: "Hosted by Mercenaries • Europe • 2v2 • €10.00 • 80 slots"
  },
]

export const spaces = {
  main: [
    {
      title: "Top Agents",
      members: "134K",
      img: 'ta.png'
    },
    {
      title: "CS 2 Allstars",
      members: "56K",
      img: 'allstar.webp'
    },
    {
      title: "CORSAIR",
      members: "16K",
      img: 'corsair.webp'
    },
  ],
  popular: [
    {
      title: "ExitLag",
      members: "522",
      img: 'exitlag.webp'
    },
    {
      title: "PUBG Players Tour",
      members: "627",
      img: 'pubg.webp'
    },
    {
      title: "Top Agents",
      members: "134K",
      img: 'ta.png'
    },
    {
      title: "ODISHA State Cup",
      members: "13K",
      img: 'odisha.jfif'
    },
    {
      title: "Forja do e-Sport - BR",
      members: "11K",
      img: 'br.webp'
    },
    {
      title: "Drip Esports",
      members: "1.7K",
      img: 'drip.webp'
    },
    {
      title: "CS 2 Allstars",
      members: "56K",
      img: 'allstar.webp'
    },
    {
      title: "Somos Trufas",
      members: "1K",
      img: 'somos.webp'
    },
    {
      title: "Secret Shop",
      members: "17K",
      img: 'secret.webp'
    },
    {
      title: "Duelist",
      members: "11K",
      img: 'duelist.webp'
    },
    {
      title: "CORSAIR",
      members: "16K",
      img: 'corsair.webp'
    },
    {
      title: "CAMPS COINS",
      members: "1.7K",
      img: 'coins.webp'
    },
  ]
}