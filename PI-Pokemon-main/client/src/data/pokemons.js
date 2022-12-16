const pokemons =[
    {
        id: 1,
        name: "bulbasaur",
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        height: 7,
        weight: 69,
        types: [
            "grass",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        id: 2,
        name: "ivysaur",
        hp: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        height: 10,
        weight: 130,
        types: [
            "grass",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        id: 3,
        name: "venusaur",
        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        height: 20,
        weight: 1000,
        types: [
            "grass",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        id: 4,
        name: "charmander",
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        height: 6,
        weight: 85,
        types: [
            "fire"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        id: 5,
        name: "charmeleon",
        hp: 58,
        attack: 64,
        defense: 58,
        speed: 80,
        height: 11,
        weight: 190,
        types: [
            "fire"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        id: 6,
        name: "charizard",
        hp: 78,
        attack: 84,
        defense: 78,
        speed: 100,
        height: 17,
        weight: 905,
        types: [
            "fire",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        id: 7,
        name: "squirtle",
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        height: 5,
        weight: 90,
        types: [
            "water"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        id: 8,
        name: "wartortle",
        hp: 59,
        attack: 63,
        defense: 80,
        speed: 58,
        height: 10,
        weight: 225,
        types: [
            "water"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        id: 9,
        name: "blastoise",
        hp: 79,
        attack: 83,
        defense: 100,
        speed: 78,
        height: 16,
        weight: 855,
        types: [
            "water"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
        id: 10,
        name: "caterpie",
        hp: 45,
        attack: 30,
        defense: 35,
        speed: 45,
        height: 3,
        weight: 29,
        types: [
            "bug"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        id: 11,
        name: "metapod",
        hp: 50,
        attack: 20,
        defense: 55,
        speed: 30,
        height: 7,
        weight: 99,
        types: [
            "bug"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        id: 12,
        name: "butterfree",
        hp: 60,
        attack: 45,
        defense: 50,
        speed: 70,
        height: 11,
        weight: 320,
        types: [
            "bug",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
        id: 13,
        name: "weedle",
        hp: 40,
        attack: 35,
        defense: 30,
        speed: 50,
        height: 3,
        weight: 32,
        types: [
            "bug",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
        id: 14,
        name: "kakuna",
        hp: 45,
        attack: 25,
        defense: 50,
        speed: 35,
        height: 6,
        weight: 100,
        types: [
            "bug",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
        id: 15,
        name: "beedrill",
        hp: 65,
        attack: 90,
        defense: 40,
        speed: 75,
        height: 10,
        weight: 295,
        types: [
            "bug",
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
        id: 16,
        name: "pidgey",
        hp: 40,
        attack: 45,
        defense: 40,
        speed: 56,
        height: 3,
        weight: 18,
        types: [
            "normal",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
        id: 17,
        name: "pidgeotto",
        hp: 63,
        attack: 60,
        defense: 55,
        speed: 71,
        height: 11,
        weight: 300,
        types: [
            "normal",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
        id: 18,
        name: "pidgeot",
        hp: 83,
        attack: 80,
        defense: 75,
        speed: 101,
        height: 15,
        weight: 395,
        types: [
            "normal",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
        id: 19,
        name: "rattata",
        hp: 30,
        attack: 56,
        defense: 35,
        speed: 72,
        height: 3,
        weight: 35,
        types: [
            "normal"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
        id: 20,
        name: "raticate",
        hp: 55,
        attack: 81,
        defense: 60,
        speed: 97,
        height: 7,
        weight: 185,
        types: [
            "normal"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
        id: 21,
        name: "spearow",
        hp: 40,
        attack: 60,
        defense: 30,
        speed: 70,
        height: 3,
        weight: 20,
        types: [
            "normal",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
        id: 22,
        name: "fearow",
        hp: 65,
        attack: 90,
        defense: 65,
        speed: 100,
        height: 12,
        weight: 380,
        types: [
            "normal",
            "flying"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
        id: 23,
        name: "ekans",
        hp: 35,
        attack: 60,
        defense: 44,
        speed: 55,
        height: 20,
        weight: 69,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
        id: 24,
        name: "arbok",
        hp: 60,
        attack: 95,
        defense: 69,
        speed: 80,
        height: 35,
        weight: 650,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
        id: 25,
        name: "pikachu",
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
        height: 4,
        weight: 60,
        types: [
            "electric"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
        id: 26,
        name: "raichu",
        hp: 60,
        attack: 90,
        defense: 55,
        speed: 110,
        height: 8,
        weight: 300,
        types: [
            "electric"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
        id: 27,
        name: "sandshrew",
        hp: 50,
        attack: 75,
        defense: 85,
        speed: 40,
        height: 6,
        weight: 120,
        types: [
            "ground"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
        id: 28,
        name: "sandslash",
        hp: 75,
        attack: 100,
        defense: 110,
        speed: 65,
        height: 10,
        weight: 295,
        types: [
            "ground"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
        id: 29,
        name: "nidoran-f",
        hp: 55,
        attack: 47,
        defense: 52,
        speed: 41,
        height: 4,
        weight: 70,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
        id: 30,
        name: "nidorina",
        hp: 70,
        attack: 62,
        defense: 67,
        speed: 56,
        height: 8,
        weight: 200,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
        id: 31,
        name: "nidoqueen",
        hp: 90,
        attack: 92,
        defense: 87,
        speed: 76,
        height: 13,
        weight: 600,
        types: [
            "poison",
            "ground"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
        id: 32,
        name: "nidoran-m",
        hp: 46,
        attack: 57,
        defense: 40,
        speed: 50,
        height: 5,
        weight: 90,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
        id: 33,
        name: "nidorino",
        hp: 61,
        attack: 72,
        defense: 57,
        speed: 65,
        height: 9,
        weight: 195,
        types: [
            "poison"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
        id: 34,
        name: "nidoking",
        hp: 81,
        attack: 102,
        defense: 77,
        speed: 85,
        height: 14,
        weight: 620,
        types: [
            "poison",
            "ground"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
        id: 35,
        name: "clefairy",
        hp: 70,
        attack: 45,
        defense: 48,
        speed: 35,
        height: 6,
        weight: 75,
        types: [
            "fairy"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
        id: 36,
        name: "clefable",
        hp: 95,
        attack: 70,
        defense: 73,
        speed: 60,
        height: 13,
        weight: 400,
        types: [
            "fairy"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
        id: 37,
        name: "vulpix",
        hp: 38,
        attack: 41,
        defense: 40,
        speed: 65,
        height: 6,
        weight: 99,
        types: [
            "fire"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
        id: 38,
        name: "ninetales",
        hp: 73,
        attack: 76,
        defense: 75,
        speed: 100,
        height: 11,
        weight: 199,
        types: [
            "fire"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
        id: 39,
        name: "jigglypuff",
        hp: 115,
        attack: 45,
        defense: 20,
        speed: 20,
        height: 5,
        weight: 55,
        types: [
            "normal",
            "fairy"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
        id: 40,
        name: "wigglytuff",
        hp: 140,
        attack: 70,
        defense: 45,
        speed: 45,
        height: 10,
        weight: 120,
        types: [
            "normal",
            "fairy"
        ],
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
        id: "c98eb1d0-a963-42dc-8f2b-f9fcd44a64ba",
        name: "Marcial",
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        height: null,
        weight: null,
        img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/237867544_10222253140849970_2640445847450406931_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH2YKc_lkdqO-3btfZixjrnD6tGSwD1tfEPq0ZLAPW18WTk7Rl5MhASf6ZjhEwT3_U&_nc_ohc=eBOdd_Wym2AAX9bqp1c&_nc_ht=scontent-lim1-1.xx&oh=00_AfBtsR3ksgfiTxBWbdKwzhKRiq4O00fAD0p52owSG8CpXQ&oe=63A124FE",
        createdInDb: true,
        types: [
            
                "electric",
                "normal",
                "poison"
            
        ]
    }
]
export default pokemons;