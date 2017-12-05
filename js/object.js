const category = [
  {
    'title': ['Sepakbola', 'Bulutangkis', 'Basket', 'Volly', 'Futsal', 'Beladiri', 'Takraw', 'Catur', 'ESport'],
    'category': 'Olahraga',
    'img-url': 'assets/img/background1.jpg'
  },
  {
    'category': 'Musik',
    'title': ['Vokal', 'Gitar', 'Biola', 'Piano', 'Musik Tradisional'],
    'img-url': 'assets/img/background1.jpg'
  },
  {
    'category': 'Seni',
    'title': ['3 Dimensi', '2 Dimensi', 'Sinematografi'],
    'img-url': 'assets/img/background1.jpg'
  },
  {
    'category': 'Akademik',
    'title': ['Sains', 'Sosial', 'Komputer', 'Robotik'],
    'img-url': 'assets/img/background1.jpg'
  },
  {
    'category': 'Khusus',
    'title': ['Memasak', 'Wirausaha'],
    'img-url': 'assets/img/background1.jpg'
  },
  {
    'category': 'Ilmiah',
    'title': ['Riset/Penelitian', 'Public Speaking', 'Jurnalis'],
    'img-url': 'assets/img/background1.jpg'
  }
];

const categoryIndexPop = [
  [1,1,'../assets/img/Guitar_96px.png',20],
  [1,3,'../assets/img/Piano_96px.png',18],
  [0,0,'../assets/img/Soccer_96px.png',13],
  [2,2,'../assets/img/Clapperboard_96px.png',13],
  [0,1,'../assets/img/Badminton_96px.png',12]
];

const user = [
  {
    'role': 'Pelatih',
    'name': 'Mohammad Khaufillah',
    'talent': 'ESport',
    'img-url': '../assets/img/man.png',
    'email': 'test0@mail.com',
    'password': '12345678',
    'country': 'Indonesia',
    'province': 'Jawa Timur',
    'city': 'Gresik',
    'district': 'Ujungpangkah',
    'village': 'Pangkah Wetan',
    'address': 'Jl. Berdua bersama',
    'birth': '09 Juni 1998',
    'register': '04 Desember 2017',
    'comunity': ['2'],
    'relation': ['2', '4'],
    'notif': [
      {
        'type': 'contract',
        'title': 'Kontrak',
        'desc': 'Prio agustian mengontrak kamu',
        'action': '#!',
        'read': false
      },
      {
        'type': 'fund',
        'title': 'Pembayaran sukses',
        'desc': 'Pembayaran kontrak kamu dengan id 5794 sukses',
        'action': '#!',
        'read': true
      },
      {
        'type': 'message',
        'title': 'Pesan masuk',
        'desc': 'Pesan masuk dari preyta',
        'action': '#!',
        'read': true
      },
      {
        'type': 'Fund',
        'title': 'Pembayaran sukses',
        'desc': 'Pembayaran kontrak kamu dengan id 8865 sukses',
        'action': '#!',
        'read': true
      }
    ]
  },
  {
    'role': 'Pelatih',
    'name': 'Iqbal Tawakal',
    'talent': 'Gitar',
    'img-url': '../assets/img/man.png',
    'email': 'test1@mail.com',
    'password': '12345678',
    'country': 'Indonesia',
    'province': 'Jawa Timur',
    'city': 'Gresik',
    'district': 'Ujungpangkah',
    'village': 'Pangkah Wetan',
    'address': 'Jl. Berdua bersama',
    'birth': '09 Juni 1998',
    'register': '04 Desember 2017',
    'comunity': ['0'],
    'relation': ['3'],
    'notif': [
      {
        'type': 'contract',
        'title': 'Kontrak',
        'desc': 'Preyta bin Tara memintamu menjadi pelatih',
        'action': '#!',
        'read': false
      }
    ]
  },
  {
    'role': 'Pebakat',
    'name': 'Prio agustian',
    'talent': 'ESport',
    'img-url': '../assets/img/man.png',
    'email': 'test2@mail.com',
    'password': '12345678',
    'country': 'Indonesia',
    'province': 'Jawa Timur',
    'city': 'Gresik',
    'district': 'Ujungpangkah',
    'village': 'Pangkah Wetan',
    'address': 'Jl. Berdua bersama',
    'birth': '09 Juni 1998',
    'register': '04 Desember 2017',
    'comunity': ['2'],
    'relation': ['0']
  },
  {
    'role': 'Pebakat',
    'name': 'Preyta bin Tara',
    'talent': 'Gitar',
    'img-url': '../assets/img/man.png',
    'email': 'test3@mail.com',
    'password': '12345678',
    'country': 'Indonesia',
    'province': 'Jawa Timur',
    'city': 'Gresik',
    'district': 'Ujungpangkah',
    'village': 'Pangkah Wetan',
    'address': 'Jl. Berdua bersama',
    'birth': '09 Juni 1998',
    'register': '04 Desember 2017',
    'comunity': ['0'],
    'relation': ['1']
  },
  {
    'role': 'Pebakat',
    'name': 'Dul Manusia Sapi',
    'talent': 'ESport',
    'img-url': '../assets/img/man.png',
    'email': 'test4@mail.com',
    'password': '12345678',
    'country': 'Indonesia',
    'province': 'Jawa Timur',
    'city': 'Gresik',
    'district': 'Ujungpangkah',
    'village': 'Pangkah Wetan',
    'address': 'Jl. Berdua bersama',
    'birth': '09 Juni 1998',
    'register': '04 Desember 2017',
    'comunity': ['2'],
    'relation': ['0']
  },
];

const comunity = [
  {
    'talent': 'Gitar',
    'name': 'Musikalis Pro Guitar',
    'img-url': '../assets/img/gonedrock.jpg',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'talent': 'ESport',
    'name': 'ProGamer Comunity',
    'img-url': '../assets/img/mushroomiac.jpg',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'talent': 'ESport',
    'name': 'AOV Clubing',
    'img-url': '../assets/img/foxigami.jpg',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'talent': 'Gitar',
    'name': 'AyoGuyu Comunity',
    'img-url': '../assets/img/orcha.jpg',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
];

const progress = [
  {
    'data': [
      {
        'idPebakat': '2',
        'data': [6, 7, 7, 8, 9, 5, 6, 6, 3, 5, 6, 7]
      },
      {
        'idPebakat': '4',
        'data': [6, 5, 6, 3, 4, 5, 6, 6, 5, 7, 8, 9]
      }
    ]
  },
  {
    'data': [
      {
        'idPebakat': '3',
        'data': [4, 5, 7, 4, 6, 3, 3, 4, 5, 6, 8, 6]
      }
    ]
  }
];
