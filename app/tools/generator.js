//ОДИН РАЗ ДЛЯ ГЕНЕРАЦИИ КОМАНД
export const getTeams = ()=>{
  const nicknames = [
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

  const tournamentsList = {
    cs: [
      { title: "Locked and Loaded", info: "2v2" },
      { title: "Active duty Deployment", info: "5v5" },
      { title: "Battle Buddies", info: "2v2" },
      { title: "True Wingman", info: "2v2" }
    ],
    dota: [
      { title: "Trial of Heroes", info: "2v2" },
      { title: "The Aegis Defensive", info: "5v5" },
      { title: "Trial of Heroes", info: "2v2" },
      { title: "The Aegis Defensive", info: "5v5" }
    ],
    pubg: [
      { title: "Rogue", info: "2v2" },
      { title: "Bootcamp", info: "2v2" },
      { title: "Mad House", info: "5v5" },
      { title: "Mercenaries Solos", info: "2v2" }
    ],
    tf: [
      { title: "AsiaFortress - 6s Open", info: "5v5" },
      { title: "ATF2L - Platinum", info: "9v9" },
      { title: "Team Fortress 2 iSeries Open", info: "5v5" },
      { title: "AsiaFortress - 6s Open", info: "5v5" }
    ]
  };

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function createTournamentTeams(tournament) {
    let availableNicknames = [...nicknames];
    let teams = [];
    let numTeams = Math.floor(Math.random() * 4) + 7; // 7 to 10 teams

    for (let i = 0; i < numTeams; i++) {
      let teamSize = parseInt(tournament.info[0]) - (Math.random() < 0.3 ? 1 : 0);
      let players = [];

      while (players.length < teamSize && availableNicknames.length > 0) {
        let player = getRandomElement(availableNicknames);
        players.push(player);
        availableNicknames = availableNicknames.filter(n => n !== player);
      }

      let isLocked = Math.random() < 0.8;
      teams.push({
        title: `${players[0]}'s party`,
        players,
        isLocked
      });
    }

    // Ensure one team is unlocked and missing players
    let unlockedTeam = teams.find(team => !team.isLocked && team.players.length < parseInt(tournament.info[0]));
    if (!unlockedTeam) {
      let randomTeam = getRandomElement(teams);
      randomTeam.isLocked = false;
    }

    return teams;
  }

// Генерация команд для всех турниров
  const generatedTeams = {};
  for (let game in tournamentsList) {
    generatedTeams[game] = tournamentsList[game].map(tournament => ({
      tournament: tournament.title,
      teams: createTournamentTeams(tournament)
    }));
  }

  console.log(generatedTeams);
}

export function getTeamsByGame(generatedTeams, game) {
  return (generatedTeams[game] || []).flatMap(tournament => tournament.teams);
}

export const teams = {
  "cs": [
    {
      "tournament": "Locked and Loaded",
      "teams": [
        {
          "title": "Glyzorn's party",
          "players": [
            "Glyzorn"
          ],
          "isLocked": true
        },
        {
          "title": "Draklim's party",
          "players": [
            "Draklim",
            "Krizzak"
          ],
          "isLocked": true
        },
        {
          "title": "Str4xx's party",
          "players": [
            "Str4xx"
          ],
          "isLocked": false
        },
        {
          "title": "Kantrex's party",
          "players": [
            "Kantrex",
            "Flomix"
          ],
          "isLocked": true
        },
        {
          "title": "Drelthor's party",
          "players": [
            "Drelthor",
            "Drayzz"
          ],
          "isLocked": true
        },
        {
          "title": "Xylnov's party",
          "players": [
            "Xylnov",
            "Vornyx"
          ],
          "isLocked": true
        },
        {
          "title": "Nytros's party",
          "players": [
            "Nytros",
            "Q3ntark"
          ],
          "isLocked": false
        },
        {
          "title": "Kyzzl3's party",
          "players": [
            "Kyzzl3"
          ],
          "isLocked": true
        },
        {
          "title": "Fyzzik's party",
          "players": [
            "Fyzzik"
          ],
          "isLocked": true
        },
        {
          "title": "Quirnoz's party",
          "players": [
            "Quirnoz",
            "XenKr0z"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Active duty Deployment",
      "teams": [
        {
          "title": "Farolyn's party",
          "players": [
            "Farolyn",
            "Druxil",
            "V3ltross",
            "Tr4xite",
            "BlitzAxe"
          ],
          "isLocked": true
        },
        {
          "title": "Xyv3r's party",
          "players": [
            "Xyv3r",
            "Rendox",
            "Q3ntark",
            "Tornex",
            "Droxal"
          ],
          "isLocked": true
        },
        {
          "title": "Str4xx's party",
          "players": [
            "Str4xx",
            "Xyntor",
            "Phynzor",
            "Flomix",
            "Blynzar"
          ],
          "isLocked": true
        },
        {
          "title": "Flynzak's party",
          "players": [
            "Flynzak",
            "Prilzor",
            "Byltrex",
            "Praxul"
          ],
          "isLocked": true
        },
        {
          "title": "Brakzul's party",
          "players": [
            "Brakzul",
            "Trinloz",
            "Vyglix",
            "Wryznok"
          ],
          "isLocked": true
        },
        {
          "title": "Zenthir's party",
          "players": [
            "Zenthir",
            "Vandrex",
            "N8toX",
            "Nulzex",
          ],
          "isLocked": false
        },
        {
          "title": "Mornex's party",
          "players": [
            "Mornex",
            "Quonark",
            "Quirnoz",
            "D3ztral",
            "Drelthor"
          ],
          "isLocked": true
        },
        {
          "title": "Wazzok's party",
          "players": [
            "Wazzok",
            "Qurvex99",
            "Tazulon",
            "Kordex"
          ],
          "isLocked": true
        },
        {
          "title": "Jymfrost's party",
          "players": [
            "Jymfrost",
            "Trazel",
            "Gruxis",
            "Vornyx",
            "Zephyr_1x"
          ],
          "isLocked": true
        },
        {
          "title": "Kybrant's party",
          "players": [
            "Kybrant",
            "Glyzorn",
            "Xarvox",
            "Draklim",
            "Vytronic"
          ],
          "isLocked": false
        }
      ]
    },
    {
      "tournament": "Battle Buddies",
      "teams": [
        {
          "title": "Vorgrim's party",
          "players": [
            "Vorgrim",
            "Kyzzl3"
          ],
          "isLocked": true
        },
        {
          "title": "Jornex's party",
          "players": [
            "Jornex",
            "Tazulon"
          ],
          "isLocked": true
        },
        {
          "title": "BlitzAxe's party",
          "players": [
            "BlitzAxe",
            "Gremtok"
          ],
          "isLocked": true
        },
        {
          "title": "Farolyn's party",
          "players": [
            "Farolyn"
          ],
          "isLocked": false
        },
        {
          "title": "V3ltross's party",
          "players": [
            "V3ltross",
            "Xyntor"
          ],
          "isLocked": true
        },
        {
          "title": "Kronflint's party",
          "players": [
            "Kronflint",
            "Wryznok"
          ],
          "isLocked": true
        },
        {
          "title": "Zelph0r's party",
          "players": [
            "Zelph0r",
            "D3ztral"
          ],
          "isLocked": true
        },
        {
          "title": "D4rmox's party",
          "players": [
            "D4rmox"
          ],
          "isLocked": true
        },
        {
          "title": "Wazzok's party",
          "players": [
            "Wazzok",
            "Ozzex"
          ],
          "isLocked": true
        },
        {
          "title": "Tynkro's party",
          "players": [
            "Tynkro"
          ],
          "isLocked": false
        }
      ]
    },
    {
      "tournament": "True Wingman",
      "teams": [
        {
          "title": "T1Zyph's party",
          "players": [
            "T1Zyph",
            "Vandrez"
          ],
          "isLocked": true
        },
        {
          "title": "Tynkro's party",
          "players": [
            "Tynkro",
            "Gruxis"
          ],
          "isLocked": true
        },
        {
          "title": "Trazel's party",
          "players": [
            "Trazel",
            "Brivok"
          ],
          "isLocked": true
        },
        {
          "title": "Vytronic's party",
          "players": [
            "Vytronic",
            "Vyglix"
          ],
          "isLocked": true
        },
        {
          "title": "Gremtok's party",
          "players": [
            "Gremtok",
            "D4xxon"
          ],
          "isLocked": false
        },
        {
          "title": "H4xM0de's party",
          "players": [
            "H4xM0de",
            "Brakzul"
          ],
          "isLocked": true
        },
        {
          "title": "Daxxil's party",
          "players": [
            "Daxxil"
          ],
          "isLocked": false
        },
        {
          "title": "Flomix's party",
          "players": [
            "Flomix",
            "Xarvox"
          ],
          "isLocked": true
        }
      ]
    }
  ],
  "dota": [
    {
      "tournament": "Trial of Heroes",
      "teams": [
        {
          "title": "Flynzak's party",
          "players": [
            "Flynzak",
            "Nulzex"
          ],
          "isLocked": false
        },
        {
          "title": "Str4xx's party",
          "players": [
            "Str4xx"
          ],
          "isLocked": true
        },
        {
          "title": "Tr4xite's party",
          "players": [
            "Tr4xite"
          ],
          "isLocked": true
        },
        {
          "title": "Glynnar's party",
          "players": [
            "Glynnar",
            "W4rnok"
          ],
          "isLocked": false
        },
        {
          "title": "Droxal's party",
          "players": [
            "Droxal"
          ],
          "isLocked": true
        },
        {
          "title": "T1Zyph's party",
          "players": [
            "T1Zyph",
            "Flomix"
          ],
          "isLocked": true
        },
        {
          "title": "Quirnoz's party",
          "players": [
            "Quirnoz"
          ],
          "isLocked": false
        },
        {
          "title": "Krizzix's party",
          "players": [
            "Krizzix"
          ],
          "isLocked": true
        },
        {
          "title": "Zephyr_1x's party",
          "players": [
            "Zephyr_1x"
          ],
          "isLocked": true
        },
        {
          "title": "Phynzor's party",
          "players": [
            "Phynzor",
            "BlitzAxe"
          ],
          "isLocked": false
        }
      ]
    },
    {
      "tournament": "The Aegis Defensive",
      "teams": [
        {
          "title": "Mornex's party",
          "players": [
            "Mornex",
            "Glitzo",
            "Vandrex",
            "Zelph0r",
            "Vornyx"
          ],
          "isLocked": true
        },
        {
          "title": "Jorblix's party",
          "players": [
            "Jorblix",
            "Fylox",
            "Vyzzik",
            "Zoltvar",
            "Blytr0n"
          ],
          "isLocked": true
        },
        {
          "title": "Brakzul's party",
          "players": [
            "Brakzul",
            "Phynzor",
            "Mazztrik",
            "Xyberion"
          ],
          "isLocked": true
        },
        {
          "title": "Brivok's party",
          "players": [
            "Brivok",
            "Vorgrim",
            "Tornex",
            "Clyvox",
            "D3ztral"
          ],
          "isLocked": true
        },
        {
          "title": "Druxil's party",
          "players": [
            "Druxil",
            "Byltrex",
            "Gruxis",
            "Nytros"
          ],
          "isLocked": false
        },
        {
          "title": "D4rmox's party",
          "players": [
            "D4rmox",
            "H4xM0de",
            "Zenthir",
            "Tazulon",
            "J4zzron"
          ],
          "isLocked": true
        },
        {
          "title": "Quonark's party",
          "players": [
            "Quonark",
            "XenKr0z",
            "Xenthril",
            "Tr4xite"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Trial of Heroes 2",
      "teams": [
        {
          "title": "Kronflint's party",
          "players": [
            "Kronflint"
          ],
          "isLocked": true
        },
        {
          "title": "D3ztral's party",
          "players": [
            "D3ztral",
            "Vyzzik"
          ],
          "isLocked": true
        },
        {
          "title": "H4xM0de's party",
          "players": [
            "H4xM0de",
            "Trinloz"
          ],
          "isLocked": true
        },
        {
          "title": "Kordex's party",
          "players": [
            "Kordex",
            "Myrzex"
          ],
          "isLocked": true
        },
        {
          "title": "Xorlin's party",
          "players": [
            "Krizzak",
            "Xorlin"
          ],
          "isLocked": true
        },
        {
          "title": "Krizzix's party",
          "players": [
            "Krizzix",
          ],
          "isLocked": false
        },
        {
          "title": "Mazztrik's party",
          "players": [
            "Mazztrik",
            "Rendox"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "The Aegis Defensive 2",
      "teams": [
        {
          "title": "Flomix's party",
          "players": [
            "Flomix",
            "Byltrex",
            "Plyxion",
            "Zyndor",
            "Jorvik-X"
          ],
          "isLocked": false
        },
        {
          "title": "Vandrez's party",
          "players": [
            "Vandrez",
            "J4zzron",
            "Gremtok",
            "D4rmox"
          ],
          "isLocked": false
        },
        {
          "title": "Xarvox's party",
          "players": [
            "Xarvox",
            "Vandrex",
            "Xyv3r",
            "Mornex",
            "Trazel"
          ],
          "isLocked": false
        },
        {
          "title": "Phynzor's party",
          "players": [
            "Phynzor",
            "Kyzzl3",
            "Praxul",
            "Druxil",
            "H4xM0de"
          ],
          "isLocked": true
        },
        {
          "title": "Vornyx's party",
          "players": [
            "Vornyx",
            "Fyzzik",
            "Jornex",
            "Glitzo",
            "Quirnoz"
          ],
          "isLocked": true
        },
        {
          "title": "N8toX's party",
          "players": [
            "N8toX",
            "Jynthrox",
            "Tornex",
            "Kybrant",
            "Krizzak"
          ],
          "isLocked": true
        },
        {
          "title": "Zyglor's party",
          "players": [
            "Zyglor",
            "Gloxxar",
            "Mazztrik",
            "Quonark",
            "Daxxil"
          ],
          "isLocked": true
        },
        {
          "title": "V3ltross's party",
          "players": [
            "V3ltross",
            "Ozznark",
            "Wryznok",
            "Nytros"
          ],
          "isLocked": false
        },
        {
          "title": "Q3ntark's party",
          "players": [
            "Q3ntark",
            "Brakzul",
            "Tynkro",
            "Kantrex",
            "Prilzor"
          ],
          "isLocked": true
        },
        {
          "title": "Glynnar's party",
          "players": [
            "Glynnar",
            "Drelthor",
            "Tazulon",
            "D4xxon",
            "Brivok"
          ],
          "isLocked": true
        }
      ]
    }
  ],
  "pubg": [
    {
      "tournament": "Rogue",
      "teams": [
        {
          "title": "Glyzorn's party",
          "players": [
            "Glyzorn"
          ],
          "isLocked": true
        },
        {
          "title": "Jorblix's party",
          "players": [
            "Jorblix",
          ],
          "isLocked": false
        },
        {
          "title": "Trazel's party",
          "players": [
            "Trazel",
            "Gruxis"
          ],
          "isLocked": true
        },
        {
          "title": "Brakzul's party",
          "players": [
            "Brakzul",
            "Flomix"
          ],
          "isLocked": true
        },
        {
          "title": "Str4xx's party",
          "players": [
            "Str4xx",
            "Blytr0n"
          ],
          "isLocked": true
        },
        {
          "title": "Kordex's party",
          "players": [
            "Kordex"
          ],
          "isLocked": true
        },
        {
          "title": "D4xxon's party",
          "players": [
            "D4xxon",
            "Kybrant"
          ],
          "isLocked": true
        },
        {
          "title": "J4zzron's party",
          "players": [
            "J4zzron",
            "Zenthir"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Bootcamp",
      "teams": [
        {
          "title": "Vyrguzz's party",
          "players": [
            "Vyrguzz",
            "Clyvox"
          ],
          "isLocked": true
        },
        {
          "title": "Brivok's party",
          "players": [
            "Brivok",
            "Jynthrox"
          ],
          "isLocked": false
        },
        {
          "title": "T1Zyph's party",
          "players": [
            "T1Zyph",
            "Nulzex"
          ],
          "isLocked": false
        },
        {
          "title": "Byltrex's party",
          "players": [
            "Byltrex"
          ],
          "isLocked": true
        },
        {
          "title": "Drelthor's party",
          "players": [
            "Drelthor"
          ],
          "isLocked": false
        },
        {
          "title": "Krizzix's party",
          "players": [
            "Krizzix",
            "Gruxis"
          ],
          "isLocked": true
        },
        {
          "title": "Quonark's party",
          "players": [
            "Quonark"
          ],
          "isLocked": true
        },
        {
          "title": "Gremtok's party",
          "players": [
            "Gremtok",
            "Mazztrik"
          ],
          "isLocked": true
        },
        {
          "title": "W4rnok's party",
          "players": [
            "W4rnok",
            "Plyxion"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Mad House",
      "teams": [
        {
          "title": "Draklim's party",
          "players": [
            "Draklim",
            "Fyzzik",
            "Zyglor",
            "Xyntor",
            "Kybrant"
          ],
          "isLocked": true
        },
        {
          "title": "Byltrex's party",
          "players": [
            "Byltrex",
            "Zornak",
            "Plyxion",
            "Farolyn",
            "Phynzor"
          ],
          "isLocked": true
        },
        {
          "title": "J4zzron's party",
          "players": [
            "J4zzron",
            "Tazulon",
            "Cryzok",
            "Vyrguzz"
          ],
          "isLocked": true
        },
        {
          "title": "T1Zyph's party",
          "players": [
            "T1Zyph",
            "Trazel",
            "Praxul",
            "Ozznark",
            "Nytros"
          ],
          "isLocked": true
        },
        {
          "title": "Kantrex's party",
          "players": [
            "Kantrex",
            "Trinloz",
            "Vytronic",
            "Zelph0r"
          ],
          "isLocked": true
        },
        {
          "title": "Vyglix's party",
          "players": [
            "Vyglix",
            "Xyv3r",
            "Glynnar",
            "Gloxxar",
            "Kronflint"
          ],
          "isLocked": true
        },
        {
          "title": "Glyzorn's party",
          "players": [
            "Glyzorn",
            "Klymzaar",
            "BlitzAxe",
            "Xylnov",
            "Myrzex"
          ],
          "isLocked": false
        },
        {
          "title": "Jornex's party",
          "players": [
            "Jornex",
            "Jorblix",
            "Zenthir",
            "Glitzo"
          ],
          "isLocked": false
        },
        {
          "title": "Gruxis's party",
          "players": [
            "Gruxis",
            "Xorlin",
            "Kyzzl3",
            "Yzzorak",
            "Jorvik-X"
          ],
          "isLocked": true
        },
        {
          "title": "XenKr0z's party",
          "players": [
            "XenKr0z",
            "Blynzar",
            "D4rmox",
            "Flintik",
            "H4xM0de"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Mercenaries Solos",
      "teams": [
        {
          "title": "Q3ntark's party",
          "players": [
            "Q3ntark",
          ],
          "isLocked": false
        },
        {
          "title": "BlitzAxe's party",
          "players": [
            "BlitzAxe"
          ],
          "isLocked": true
        },
        {
          "title": "Draklim's party",
          "players": [
            "Draklim",
            "Kronflint"
          ],
          "isLocked": true
        },
        {
          "title": "Jorvik-X's party",
          "players": [
            "Jorvik-X",
            "Zyglor"
          ],
          "isLocked": true
        },
        {
          "title": "Xarvox's party",
          "players": [
            "Xarvox"
          ],
          "isLocked": true
        },
        {
          "title": "Gremtok's party",
          "players": [
            "Gremtok"
          ],
          "isLocked": true
        },
        {
          "title": "Fylox's party",
          "players": [
            "Fylox",
            "Myrzex"
          ],
          "isLocked": true
        },
        {
          "title": "Flomix's party",
          "players": [
            "Flomix",
            "Jymfrost"
          ],
          "isLocked": true
        },
        {
          "title": "Flynzak's party",
          "players": [
            "Flynzak",
            "Drelthor"
          ],
          "isLocked": true
        },
        {
          "title": "Blynzar's party",
          "players": [
            "Blynzar",
            "Vandrez"
          ],
          "isLocked": true
        }
      ]
    }
  ],
  "tf": [
    {
      "tournament": "AsiaFortress - 6s Open",
      "teams": [
        {
          "title": "Trazel's party",
          "players": [
            "Trazel",
            "M0ntrex",
            "Draklim",
            "Str4xx"
          ],
          "isLocked": true
        },
        {
          "title": "Kordex's party",
          "players": [
            "Kordex",
            "Tornex",
            "D4rmox",
            "Phynzor",
            "Xyberion"
          ],
          "isLocked": false
        },
        {
          "title": "Droxal's party",
          "players": [
            "Droxal",
            "Vytronic",
            "Jorblix",
            "Mornex"
          ],
          "isLocked": false
        },
        {
          "title": "XenKr0z's party",
          "players": [
            "XenKr0z",
            "Myrzex",
            "Xarvox",
            "Zyndor",
            "Byltrex"
          ],
          "isLocked": true
        },
        {
          "title": "Xylnov's party",
          "players": [
            "Xylnov",
            "Vorgrim",
            "Vyrguzz",
            "Nytros",
            "Vyglix"
          ],
          "isLocked": true
        },
        {
          "title": "Zoltvar's party",
          "players": [
            "Zoltvar",
            "Zephnok",
            "Wryznok",
            "T1Zyph",
            "Brivok"
          ],
          "isLocked": false
        },
        {
          "title": "Krizzak's party",
          "players": [
            "Krizzak",
            "Wazzok",
            "V3ltross",
            "Zephyr_1x",
            "Flynzak"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "ATF2L - Platinum",
      "teams": [
        {
          "title": "Vandrez's party",
          "players": [
            "Vandrez",
            "Glynnar",
            "Quirnoz",
            "Mazztrik",
            "Tazulon",
            "Vandrex",
            "Druxil",
            "Clyvox"
          ],
          "isLocked": true
        },
        {
          "title": "Tynkro's party",
          "players": [
            "Tynkro",
            "Vorgrim",
            "Gruxis",
            "XenKr0z",
            "Klymzaar",
            "Wazzok",
            "Glitzo",
            "Vornyx",
            "Vyzzik"
          ],
          "isLocked": true
        },
        {
          "title": "Xyv3r's party",
          "players": [
            "Xyv3r",
            "Xyntor",
            "Kyzzl3",
            "Zephnok",
            "Wryznok",
            "Trazel",
            "Quonark",
            "Vyrguzz",
            "Farolyn"
          ],
          "isLocked": true
        },
        {
          "title": "D3ztral's party",
          "players": [
            "D3ztral",
            "Zenthir",
            "Brakzul",
            "Praxul",
            "Droxal",
            "Q3ntark",
            "Draklim",
            "Krizzak",
            "Zoltvar"
          ],
          "isLocked": true
        },
        {
          "title": "Zyglor's party",
          "players": [
            "Zyglor",
            "Xenthril",
            "Gremtok",
            "Flynzak",
            "Plyxion",
            "Jorvik-X",
            "Zelph0r",
            "N8toX",
            "Flintik"
          ],
          "isLocked": false
        },
        {
          "title": "Kantrex's party",
          "players": [
            "Kantrex",
            "Cyntrek",
            "Blynzar",
            "Blytr0n",
            "Zephyr_1x",
            "Zyndor",
            "Yzzorak",
            "Trinloz"
          ],
          "isLocked": false
        },
        {
          "title": "W4rnok's party",
          "players": [
            "W4rnok",
            "Tr4xite",
            "Ozzex",
            "Vytronic",
            "H4xM0de",
            "Xarvox",
            "Brivok",
            "M0ntrex",
            "Xorlin"
          ],
          "isLocked": false
        },
        {
          "title": "Jymfrost's party",
          "players": [
            "Jymfrost",
            "Byltrex",
            "Jornex",
            "Mornex",
            "Cryzok",
            "Rendox",
            "Jorblix",
            "Xylnov",
            "Str4xx"
          ],
          "isLocked": false
        },
        {
          "title": "J4zzron's party",
          "players": [
            "J4zzron",
            "Nytros",
            "T1Zyph",
            "D4rmox",
            "Zornak",
            "Gloxxar",
            "Fyzzik",
            "Krizzix"
          ],
          "isLocked": false
        },
        {
          "title": "Prilzor's party",
          "players": [
            "Prilzor",
            "Vyglix",
            "Xyberion",
            "Kronflint",
            "Kybrant",
            "Glyzorn",
            "BlitzAxe",
            "V3ltross",
            "Drayzz"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "Team Fortress 2 iSeries Open",
      "teams": [
        {
          "title": "Krizzak's party",
          "players": [
            "Krizzak",
            "Xorlin",
            "Brakzul",
            "Jorvik-X",
            "Tornex"
          ],
          "isLocked": true
        },
        {
          "title": "Xyntor's party",
          "players": [
            "Xyntor",
            "Byltrex",
            "Wazzok",
            "Zephnok"
          ],
          "isLocked": true
        },
        {
          "title": "Zoltvar's party",
          "players": [
            "Zoltvar",
            "Vornyx",
            "Qurvex99",
            "Vyglix",
            "Glitzo"
          ],
          "isLocked": true
        },
        {
          "title": "Vandrex's party",
          "players": [
            "Vandrex",
            "Vorgrim",
            "J4zzron",
            "Drayzz"
          ],
          "isLocked": true
        },
        {
          "title": "Q3ntark's party",
          "players": [
            "Q3ntark",
            "Fylox",
            "Vyrguzz",
            "Gloxxar",
          ],
          "isLocked": false
        },
        {
          "title": "Krizzix's party",
          "players": [
            "Krizzix",
            "Zyndor",
            "Prilzor",
            "Jornex"
          ],
          "isLocked": true
        },
        {
          "title": "Vandrez's party",
          "players": [
            "Vandrez",
            "Trinloz",
            "Brivok",
            "Zelph0r",
            "D4xxon"
          ],
          "isLocked": true
        }
      ]
    },
    {
      "tournament": "AsiaFortress - 6s Open 2",
      "teams": [
        {
          "title": "Zelph0r's party",
          "players": [
            "Zelph0r",
            "Ozznark",
            "Wazzok",
            "Draklim",
            "J4zzron"
          ],
          "isLocked": true
        },
        {
          "title": "Nulzex's party",
          "players": [
            "Nulzex",
            "Jymfrost",
            "Praxul",
            "Flynzak",
            "Xyv3r"
          ],
          "isLocked": true
        },
        {
          "title": "Kronflint's party",
          "players": [
            "Kronflint",
            "Trinloz",
            "Zoltvar",
            "Trazel"
          ],
          "isLocked": false
        },
        {
          "title": "Vytronic's party",
          "players": [
            "Vytronic",
            "Mornex",
            "Gruxis",
            "Xylnov"
          ],
          "isLocked": true
        },
        {
          "title": "Myrzex's party",
          "players": [
            "Myrzex",
            "Vyrguzz",
            "V3ltross",
            "Tynkro",
            "Jornex"
          ],
          "isLocked": true
        },
        {
          "title": "Clyvox's party",
          "players": [
            "Clyvox",
            "Fyzzik",
            "Rendox",
            "Vandrez",
            "H4xM0de"
          ],
          "isLocked": true
        },
        {
          "title": "D4xxon's party",
          "players": [
            "D4xxon",
            "Plyxion",
            "Gloxxar",
            "Blytr0n",
            "Xyberion"
          ],
          "isLocked": true
        },
        {
          "title": "Kyzzl3's party",
          "players": [
            "Kyzzl3",
            "Daxxil",
            "Zenthir",
            "Blynzar"
          ],
          "isLocked": true
        }
      ]
    }
  ]
}
