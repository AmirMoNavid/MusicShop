const tracks = [
  {
    musicName: "Middle of the night",
    singer: " Elley Duhé ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmOZMIFcMTIzHFp4_r2MUPGnoEipP7up5LXebgf0zVA&s",
    genre: "English",
    url: "https://dl.behmelody.in/1399/Mehr/Elley%20Duh%C3%A9%20-%20MIDDLE%20OF%20THE%20NIGHT.mp3",
    state: "new",
    id: "1a981bfc193170c22060f222341ef625cc2",
  },
  {
    musicName: "Tamasha",
    singer: "Shadmehr",
    imageUrl:
      "https://i1.sndcdn.com/artworks-j7ga1JEs0Dpf2HNZ-5v561Q-t500x500.jpg",
    genre: "viral",
    url: "https://sv2.mybia2music.com/s2/Music/1401/12/29/Shadmehr%20Aghili/Shadmehr%20Aghili%20-%20Tamasha.mp3",
    state: "new",
    id: "1a981bfc193170c22060f341ef625cc2",
  },
  {
    musicName: "Dobareh",
    singer: "Masoud Sadeghloo",
    imageUrl:
      "https://sv2.mybia2music.com/s2/Music/1402/05/25/Masoud%20Sadeghloo/Masoud%20Sadeghloo%20-%20Dobareh.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/10eed5e2b5_1b077fe00885cd8df5f060730cb69215.mp3",
    state: "new",
    id: "3aeb56d3794ab8f6ea780b94722e24eb",
  },
  {
    musicName: "Jaddeh",
    singer: "Masih & Arash",
    imageUrl:
      "https://www.ganja2music.com/Image/Post/8.2023/Masih%20And%20Arash%20AP%20-%20Jaddeh.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/4d15b91225_808912982603643fa171f5a6033f30ff.mp3",
    state: "new",
    id: "dcfbd53590b548d581ae2100016f5fa1",
  },
  {
    musicName: "Aslan",
    singer: "Danoosh",
    genre: "motivation",
    imageUrl:
      "https://sv2.mybia2music.com/s2/Music/1400/12/25/Danoosh/Danoosh%20-%20Abadan%20Aslan.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/93061b3da7_6051e450a75946977a1a2ea56ba4d6c8.mp3",
    id: "5172ef238a1b1323e09abeef4613f559",
  },
  {
    musicName: "Almas",
    singer: "Naser Zeynali",
    genre: "pop",
    imageUrl:
      "https://www.ganja2music.com/Image/Post/8.2023/Naser%20Zeynali%20-%20Almas.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/cc2a5f958a_827a2bbb5c93a692281e8ad62096714a.mp3",
    state: "new",
    id: "f4eb21f74bfd48398c95f45fc9cbe7a8",
  },
  {
    musicName: "Dele Tanha",
    singer: "Mohsen Yeganeh",
    genre: "sad",
    imageUrl:
      "https://sv2.mybia2music.com/s2/Music/1402/04/27/Mohsen%20Yeganeh/Mohsen%20Yeganeh%20-%20Dele%20Tanha.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/ecf9d637eb_7af200fbb242af83fbdac72f63b01e00.mp3",
    state: "new",
    id: "29ebd755dfcbbd87ead7dbeaf9815882",
  },
  {
    musicName: "Vaghti Ke Bad Misham",
    singer: "Shadmehr",
    genre: "pop",
    imageUrl: "https://i1.sndcdn.com/artworks-000505750968-1qnu74-t500x500.jpg",
    url: "https://dl.melusic.ir/music/Shadmehr%20Aghili/shadmehr_aghili_vaghti_ke%20bad%20misham%20128.mp3",
    state: "new",
    id: "8ad4074255646f98aa30ed103fe192c9",
  },
  {
    musicName: "Mesle Gol",
    singer: "Masoud Sadeghloo",
    genre: "pop",
    imageUrl: "https://i1.sndcdn.com/artworks-Isp9YZZbTaYt-0-t500x500.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/761fdd66bb_a454decb7354aa1d2e3d8d0898f80cb5.mp3",
    state: "new",
    id: "2c28e2d39734d32f2d54b91fc5aaa94d",
  },
  {
    musicName: "Ba Mani",
    singer: "Amin Rostami",
    genre: "pop",
    imageUrl:
      "https://www.ganja2music.com/Image/Post/8.2023/Amin%20Rostami%20-%20Ba%20Mani.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/bda3567587_02bb288c1f31f80a848f0bcf4bb76be7.mp3",
    state: "new",
    id: "947c1e721451e0f49d796d06aca267da",
  },
  {
    musicName: "Dastan",
    singer: "Asef Aria",
    genre: "newArtist",
    imageUrl:
      "https://sv2.mybia2music.com/s2/Music/1402/05/17/Asef%20Aria/Asef%20Aria%20-%20Dastan.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/218222dca5_734cc26b47502274cdaa0c41684122c3.mp3",
    state: "new",
    id: "9e9f4b0aa5d3fde630e9bbecc38d402f",
  },
  {
    musicName: "Zare Zare",
    singer: "Ashvan",
    genre: "motivation",
    imageUrl:
      "https://i1.sndcdn.com/artworks-D4B4pnSnUZtUz1ay-cHLsag-t500x500.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/5d32036257_b557defd037a6ef168cd62b97262a4a7.mp3",
    state: "new",
    id: "44e79f74d3e9199abd1f42508e63b17e",
  },
  {
    musicName: "Ziba",
    singer: "Majid Razavi",
    genre: "romantic",
    imageUrl:
      "https://www.ganja2music.com/Image/Post/6.2023/Majid%20Razavi%20-%20Ziba.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a800c8fab1_32c506283bc330d2c262c3f3f6a2e000.mp3",
    id: "3509b90ce3a11a5ecf61bba38b5ec0ef",
  },
  {
    musicName: "Mara Bebakhsh",
    singer: "Alireza Ghorbani",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/da5574342d_f588dd3e863d2dad9501b261298561ec.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/da5574342d_be9fd276b01d22ff6c2bea95e4976af9.mp3",
    state: "top",
    id: "27fc93f7d97bb581d3339e3795810cad",
  },
  {
    musicName: "Novafen",
    singer: "Reza Sadeghi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/15b3873c33_84d40f1ac0e64e97a90435dfee5eb04f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/15b3873c33_40931194bc400bdc414f990315325bf4.mp3",
    state: "top",
    id: "9b200905c0db6cba976ebfb924ac7ebc",
  },
  {
    musicName: "Barg",
    singer: "Ahmad Solo",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/9238c2f043_61f2fb2fb0db4c3fac25bb59cf7973ae.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/9238c2f043_ae5b601448ba6407ffc64851169c60f2.mp3",
    state: "top",
    id: "eb8b56c23246a6c2dc5b6daf94e5b5da",
  },
  {
    musicName: "Man Zooram Nemirese",
    singer: "Reza Malekzadeh",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/28ed80a018_45c3783ac02964ed34d9be4dab29796a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/28ed80a018_b6567564059f11995c4c29c90e4c70f5.mp3",
    state: "top",
    id: "87e0ac38aa4fbb0f3b2a97d541db8f36",
  },
  {
    musicName: "Hagh Dare",
    singer: "Puzzle",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/c81139f7e9_979c78f73015e7f6e6f73f8f0f05736c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/c81139f7e9_a02ab0946e3dd5f4527ba90d8b5c97ce.mp3",
    state: "top",
    id: "ed6290db9c90040d3eeb92e328692b3e",
  },
  {
    musicName: "Maleka",
    singer: "Mohsen Chavoshi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/01e17eb456_84e73344337920be7f8c842372c63e66.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/01e17eb456_c33b229193cc0e4e28290bed4027bd6b.mp3",
    id: "eda2acf408ff1eea63d92d8ccca8993a",
  },
  {
    musicName: "Koja Boodi",
    singer: "Mohsen Chavoshi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/4101451064_2cb2cec17265b8a8f44de8cb7b915129.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/4101451064_68745b87f4fce213f112b64bfc99ec6a.mp3",
    id: "b7cd63a62c643072913c06bd040c96a3",
  },
  {
    musicName: "Rahayam Kon",
    singer: "Mohsen Chavoshi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/e58b0b5b90_ab2fef1f03d7b2955d937f3bc61a579f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/e58b0b5b90_75c5ff13bc2a407e1f042b6b053d74e8.mp3",
    id: "1cae02a42cfc0c16af16893b96e58187",
  },
  {
    musicName: "Joorchin",
    singer: "Mohsen Chavoshi",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/41ac8a0417_6650081143e6189b699348412999314e.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/41ac8a0417_8e0c46f53e7d2a77c221fe19a989feff.mp3",
    id: "226a27715725a245fdf1b985fbb5c4e0",
  },
  {
    musicName: "Shabi Ke Mah Kamel Shod",
    singer: "Mohsen Chavoshi",
    genre: "chill",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/8bb375cdce_36f288b1e1f7130f4168c79f58121b1a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/8bb375cdce_6c9fa885831ff954614af4785fd67ddc.mp3",
    id: "e922d79d30e8ae1746dd93fc4dc185aa",
  },
  {
    musicName: "Sale Bi Bahar",
    singer: "Mohsen Chavoshi",
    genre: "chill",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/85a4a0e946_3234386e2f9669726e763e1d4dde1939.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/85a4a0e946_4037568e7c66403234ad2e828bdc70d5.mp3",
    id: "74cb2e0c5cb1a1b69ea8139c142a05e8",
  },
  {
    musicName: "Navaak",
    singer: "Mohsen Chavoshi",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a3e0653d3d_0e9c0c4e99fdfaa89a13832be251b06e.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a3e0653d3d_12d2b53344dd746005a5b8af747ac35a.mp3",
    id: "b0175f4f1ae981b8a0448dec40085c21",
  },
  {
    musicName: "Dire",
    singer: "Mohsen Yeganeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/856cf30403_3573559f66c08a06870f35c45b43f070.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/856cf30403_f2cc9653b072af3f79d25a7e82e53ca8.mp3",
    id: "667c5ac82c38ba5f8f3f781e58cd54c9",
  },
  {
    musicName: "Moohat",
    singer: "Mohsen Yeganeh",
    genre: "viral",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/b573f35d99_1b67ab6eada2d07001498cbf0e77d2e5.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/b573f35d99_0eed718da1b66c9f0b9c597886725e4f.mp3",
    id: "8e8d3e6d78dac0970b19b547b3fca21b",
  },
  {
    musicName: "Khodkhah",
    singer: "Mohsen Yeganeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/e11be73142_20d27bd860559fdd0e5af82cfd4ff0b0.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/e11be73142_b52fed5c0f8fc760b9e83ebe65623516.mp3",
    id: "5961453a8add3926bfd3de3bfa9b5c21",
  },
  {
    musicName: "Nadaramet",
    singer: "Mohsen Yeganeh",
    genre: "chill",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/1fbc0ca780_5c28a1ce8e6106fe091a27c67057c135.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/1fbc0ca780_8022f79df8f8530371915ddd210fabff.mp3",
    id: "d2cc4daf082ee56b14e6b4fc4d806ca8",
  },
  {
    musicName: "Behet Ghol Midam",
    singer: "Mohsen Yeganeh",
    genre: "viral",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/5fe111aa7c_719bdf28269e3c86984c61a80f3e5c13.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/5fe111aa7c_81916c8261ade73ef49f8b7ad1114837.mp3",
    id: "54662bcc9b2503ed4bad20fa275508a5",
  },
  {
    musicName: "Darayabam",
    singer: "Mohsen Yeganeh",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a612c96dfb_58eea3dd333b37f37c15191842509568.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a612c96dfb_fd2311f2615718d0f57c4ee9b3dccbfd.mp3",
    id: "7c933f866304707118d19eef7e6f9974",
  },
  {
    musicName: "Yeki Yedooneh",
    singer: "Mohsen Ebrahimzadeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/064ca626b4_d70ce40202f9c36b872b1d77399002d8.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/064ca626b4_fef7913a24e94e196f56befb277b7ae9.mp3",
    id: "192fd2bfe231bf2a40fd7b0282d73a23",
  },
  {
    musicName: "Dooneh Dooneh",
    singer: "Mohsen Ebrahimzadeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/d82db34d6d_ce13a50d50e5d0c42b4dfbed957ff491.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/d82db34d6d_ec83d7bf2225e00324ff2dc134224568.mp3",
    id: "d07917ad805872c075dfc46d5ba6c675",
  },
  {
    musicName: "Mano To",
    singer: "Mohsen Ebrahimzadeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/86524835eb_9e71a3478d9c41baba297379cefee37f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/86524835eb_d254e35e7f054d5005702c76f726cda6.mp3",
    id: "5abbe6b0090d364ad08f6b3de4c874ef",
  },
  {
    musicName: "Vabastegi",
    singer: "Mohsen Ebrahimzadeh",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/133ffba071_7ffa98784fb1132f8e9aa8c8d2b1c0ef.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/133ffba071_c260acb134a21aef852c691a3dde0522.mp3",
    id: "cc524cd5141457d2b022c91904bb1933",
  },
  {
    musicName: "Gandomi",
    singer: "Mohsen Ebrahimzadeh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/d7c0e06d2e_02a74ad8d31c826d3208a15a24bd1fe3.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/d7c0e06d2e_f9a32694ceae7519a394449b765495b7.mp3",
    id: "1e92a39e5686771d637d4449b22411c0",
  },
  {
    musicName: "Pantomime",
    singer: "Mohsen Ebrahimzadeh",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/50255f2a8f_2d93e0883bcc231c7ba3be8a7792ba35.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/50255f2a8f_102261ee2e0e9f3462bd745078e98b13.mp3",
    id: "1b50a3ab874bc88347461f2ac13803fe",
  },
  {
    musicName: "Moroore Khaterat",
    singer: "Mohsen Ebrahimzadeh",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/0f2a6cc0e7_f9c0b3db8e85b8c07aa07795092ca459.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/0f2a6cc0e7_eb1194ef7be2e958960b3bf9e1da9c33.mp3",
    id: "49c3e48c99a67559753f50318b65437f",
  },
  {
    musicName: "Gole Eshgh",
    singer: "Reza Bahram",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/64e690c103_4742b23813f2e77cf40f6a8c0de5b541.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/64e690c103_f6c9614c1e898b87783e9531bdea0e2e.mp3",
    id: "4aac5c3e2187f165ed72cc8a309e79f7",
  },
  {
    musicName: "Kash",
    singer: "Reza Bahram",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/36815c638b_eebf9156f3976222e6b33c4ceaefc03a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/36815c638b_562b8fe031a18185ef6aa6c5c8d4306c.mp3",
    id: "b4a1e78c1c074708207829b3263aa02d",
  },
  {
    musicName: "Eshgho Gonah",
    singer: "Reza Bahram",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/9e8e44f2bf_75898c22e634d42f5dc9510c4fd91e06.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/9e8e44f2bf_7d83231427242d89151ba8c3c5310564.mp3",
    id: "5853d04880f227de9712f9ce7d4378f9",
  },
  {
    musicName: "Negar",
    singer: "Reza Bahram",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/92977d18b1_dcb623947dd1284ace5dda6288a8af4d.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/92977d18b1_1cffb8ecd0bede140dcf3f6f34653364.mp3",
    id: "5041000fef8693018748e1b2a6693b02",
  },
  {
    musicName: "Ahay Khabardar",
    singer: "Homayoun Shajarian",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/80e534d98d_f33a253281d8ba6d888d1703295c2081.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/80e534d98d_261ee7767f6c03984966b74a6a10d82e.mp3",
    id: "ef2d5760f398f225e42651046f9fed36",
  },
  {
    musicName: "Havaye Zemzemehayat",
    singer: "Homayoun Shajarian",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/c55f9072a9_1122f975c24db4fa3ce2917ced2b58ab.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/c55f9072a9_a3a49a3795fa5ca4349be3cd753f4f06.mp3",
    id: "0a5af7850b79885a5258061771172481",
  },
  {
    musicName: "Sarnevesht",
    singer: "Homayoun Shajarian",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/1e684896fb_13370f0be7d682495a2a41d421d08db8.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/1e684896fb_77b8bd5c39008c92b5b2c947b80b062e.mp3",
    id: "f73212ca67bfb0b5129d0f90a0b00a01",
  },
  {
    musicName: "Yek Nafas Arezooye To",
    singer: "Homayoun Shajarian",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/51d2e257e8_b3f2e55aef9712d022a2b31d610af6e0.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/51d2e257e8_23c0d3d6d10baaffa5ffc54f00ba452c.mp3",
    id: "a86e69810b3e61ad5f0de07ca7f91ac1",
  },
  {
    musicName: "Zendegi Edame Dare",
    singer: "Babak Jahanbakhsh",
    genre: "credit",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/355898caa8_6f7ae9968cc3efa3a9fd6323c81bc78a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/355898caa8_22d65a53e5f2d7a2274155e947e3d43a.mp3",
    id: "e2b88bab02df35a0bb896fbca0918172",
  },
  {
    musicName: "Zibaye Bitab",
    singer: "Babak Jahanbakhsh",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/661b533a1b_0bafed954cbf5e8c034a0ab5090b7a16.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/661b533a1b_d4af9e1060302ff36a4c226930f58494.mp3",
    id: "e5abdb643bcdf272013178b0a9198a3d",
  },
  {
    musicName: "Ba Man Bash",
    singer: "Babak Jahanbakhsh",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/28e9e3f788_9c53dda7125c629e23c52831639fddcf.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/28e9e3f788_9ab884a5c048348b035b1f8797a00825.mp3",
    id: "07db69fece72b8eafc9d7e9a5166650c",
  },
  {
    musicName: "Ye Chizi Mishe Dige",
    singer: "Reza Sadeghi",
    genre: "motivation",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/2889caab54_ed6ff34a3ad6f30efaf855d3760e614c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/2889caab54_6b004c04843cafc62cdc2bf13abda8dd.mp3",
    id: "5244a66c6ced2ea3caf79c16d031b107",
  },
  {
    musicName: "Bemoni Baram",
    singer: "Reza Sadeghi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/398d48e761_a1ef907f26b8e2b3ea9968720bad3046.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/398d48e761_10a8b71299df8df916d4f259a95b9f8e.mp3",
    id: "bb46433a50554315fca473979dc74e1c",
  },
  {
    musicName: "Shahr Ashoob",
    singer: "Reza Sadeghi",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/705341b175_7b87f1f2059bc4f6ba05f5d361ba43cf.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/705341b175_a8b8fa034a7fa14c80d99e2bf1f607fe.mp3",
    id: "267757ad9751d6a4b9ea7d5776cefbc8",
  },
  {
    musicName: "Tanha Tarin",
    singer: "Reza Sadeghi",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/9c66562725_65497b06445a50a0e85f96aac9b32016.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/9c66562725_5d07d5f8b4f4b2cdded91879f5cc27f3.mp3",
    id: "27f4d38c08cef59d100db1951a551d6e",
  },
  {
    musicName: "ManoTo",
    singer: "Mehdi Ahmadvand",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/d1a49283f8_422f070bc08efbf692964adfed7f1482.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/d1a49283f8_9fda9c6e33fe0bec1715c62ac3f11e16.mp3",
    id: "a7cece4b45da650108f6f0fbd174bc1e",
  },
  {
    musicName: "Farhad",
    singer: "Mehdi Ahmadvand",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/7791b4f8bc_71acad0f2d723c976eb8348ddf468231.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/7791b4f8bc_0c54ff6f38b21b6bbf16dd15a717cd3e.mp3",
    id: "bdf2daf85368ea4fbe00da10ee580df8",
  },
  {
    musicName: "Jadeye Ashk",
    singer: "Mehdi Ahmadvand",
    genre: "chill",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a74f3aa8b2_0f90c1ec2ce53096853896eaa6a95f34.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a74f3aa8b2_83f5eb3bf8324ef5349968dde4dfdf39.mp3",
    id: "f185082cbeb1f934e748718fa70b03d1",
  },
  {
    musicName: "Khalse",
    singer: "Mehdi Ahmadvand",
    genre: "chill",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/ede0120a70_0158035349f9074c583bff6b0ac2f1b2.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/ede0120a70_480cd27cf3c3daadd150f3dbbaabaa9f.mp3",
    id: "60cdb6d1c34910a5533c8bba13116de3",
  },
  {
    musicName: "Ghaf",
    singer: "Alireza Talischi",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f27deee04f_4dee6fc04f1199f822e63638493581d6.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f27deee04f_6ee1a9c9c9b9730643edd67c380407b1.mp3",
    id: "bd8e697e3a51e765aa81db2305e95e5f",
  },
  {
    musicName: "Zendegi Joonam",
    singer: "Alireza Talischi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/ba91b4eff6_fcedbdcec53429a975d03322a564cde4.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/ba91b4eff6_69cde148e8293dec045b808ea414288f.mp3",
    id: "4c5a9ea36896273cd1eac31afbe1dfca",
  },
  {
    musicName: "Bam Nabood Kasi",
    singer: "Alireza Talischi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/c30cda935b_d17c4dc40f39dddd5ee5acaf754d69d5.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/c30cda935b_7ad56b6d88bada4012c2ef6db7c81165.mp3",
    id: "73c722175a33f5aee84b357ba9d88fe3",
  },
  {
    musicName: "Tamoomesh Kon",
    singer: "Farzad Farzin",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/e96e57594d_d04d0bfe6070af65b43ecc9f72252925.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/e96e57594d_9442d8e519da8ec62d3c25a7ff574303.mp3",
    id: "8b81def0a5fe6b07480ff161cd870324",
  },
  {
    musicName: "Javaaher",
    singer: "Farzad Farzin",
    genre: "motivation",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/578d0946a1_90544c9d95fe9a505bcacca79baf823a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/578d0946a1_8595da52920a21d7cedd0814b20183b7.mp3",
    id: "336ed18de354db726b7a2a3c696a5ded",
  },
  {
    musicName: "Baghalam Kon",
    singer: "Farzad Farzin",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/1cf56f6e22_e19c80814c400703cd9c9e42710efad5.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/1cf56f6e22_97252aad38e49409ca2fd7399a6b5540.mp3",
    id: "1d0e43c68c62285f1ebc724ef3137328",
  },
  {
    musicName: "Jazzab",
    singer: "Hamid Hirad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/9f4af1e34b_b04d22b10fa750ef78824a98b938e47e.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/9f4af1e34b_90e92c57e19991e9e7f3b1d04cab9030.mp3",
    id: "d28bb88ca7d6712d7f39d13e05365705",
  },
  {
    musicName: "Shookhiye Mageh",
    singer: "Hamid Hirad",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/61cbd78926_08cd208d93ed15664eeb95a9b5b73741.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/61cbd78926_e3c5115c86c378ba4f64e7a6cad224c5.mp3",
    id: "91ba8c338caf870f77bf7f2a9b7bd6de",
  },
  {
    musicName: "Dir Kardi",
    singer: "Hamid Hirad",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/917c5cde0a_2c0b502b2da65a15f91f0e991edeceb7.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/917c5cde0a_f4b39f84d217d205943160059a225d71.mp3",
    id: "43eeda29d7daabf9b9ce07290be227e8",
  },
  {
    musicName: "Shayad Ye Shab Baroon",
    singer: "Hoorosh Band",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/51e93319e7_1650f8bd48cae6b7c925f1feeb108887.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/51e93319e7_a17febd830025405a46d284d30216ee0.mp3",
    id: "13fe19c2ab1bc165e96d620fdb7b754b",
  },
  {
    musicName: "Ahay",
    singer: "Hoorosh Band",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f6abe173d9_6bb136cc7b1c7088d5eecbf328e96165.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f6abe173d9_81f920bf8d257e7eeb4b07b6c29e4fc1.mp3",
    id: "450e618fa4f32bc93e8e81c0f943511e",
  },
  {
    musicName: "Che Hali Mishi",
    singer: "Hoorosh Band",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/47fd272e06_102951e421fe26fb42fd7810f1851162.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/47fd272e06_27d95b026ccc6fe5b3036802e7aee3c6.mp3",
    id: "24550386793e21ba9c3a54b99d093016",
  },
  {
    musicName: "Nabin Alan Khastam",
    singer: "Hoorosh Band",
    genre: "sad",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/762f77983d_ea8cdf151bdc2e56214949c7125c2512.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/762f77983d_d726a9c2d7562b7054c5685fbc50bbcc.mp3",
    id: "90a7da4e6389438889838045b8a6db15",
  },
  {
    musicName: "Baragard",
    singer: "Ali Yasini",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/0910f845fe_55b30a5961cec3b143b52bb9bf4ef23e.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/0910f845fe_4826ac16cffcb042c50870e881d28ff7.mp3",
    id: "ac6a9c5a0580e20c9c7694014501c063",
  },
  {
    musicName: "Mahe Ghashangam",
    singer: "Ali Yasini",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/c6d37b776d_3a6ad7d0ca469d50f80c8fc0b0e0686c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/c6d37b776d_9a1d6a32fa233e3ebbe49011e9afb3fb.mp3",
    id: "f6cf7cfa905640df4487a02428dd3771",
  },
  {
    musicName: "Tabar",
    singer: "Ali Yasini",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/7014a84307_4d03f0010dcf3dd5566c9ee74c8a9fc9.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/7014a84307_914eb87e5c129490e24baa1b54d516a2.mp3",
    id: "028e4afb0cb71543b58e43affc2f9e92",
  },
  {
    musicName: "Roshan Kon",
    singer: "Meysam Ebrahimi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/8f72f5eecf_e8e30bbfe927396531239b5d459c5f4c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/8f72f5eecf_949075260a92453a160f9fc4a0c0493f.mp3",
    id: "068c7e3f41b8bcf688438112c37d334a",
  },
  {
    musicName: "Ki Mese Mane",
    singer: "Meysam Ebrahimi",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/281788d4e9_522f44743e136eb9073d2fa1790d06f1.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/281788d4e9_5fc996043ae157f186a789ca4b6a96a2.mp3",
    id: "918c6e6b0971eae6472502ff4783cb10",
  },
  {
    musicName: "Mizane Bad",
    singer: "Meysam Ebrahimi",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/02dc207019_27a664311438bb23d7cd90c550153c6c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/02dc207019_e4bc18f0855a1d99d693c241f36c1c51.mp3",
    id: "a43ae4eb23bc156f7f04d4191455b8c3",
  },
  {
    musicName: "Raft",
    singer: "Macan Band",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/29d4f4acba_ff35df54af19fec0663fe4e739d52f81.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/29d4f4acba_f4e65f59d63f267701da7d13ed12e0db.mp3",
    id: "4e85ee0fb805b3b754ed513f077feaea",
  },
  {
    musicName: "Ki Boodi To",
    singer: "Macan Band",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/ab81650a8c_fd1ac1b46a039e69266bd4b215c145e4.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/ab81650a8c_a9492f7deb78b61691687a71811d7666.mp3",
    id: "a500a11aaf575fad7f4d616df0a16fda",
  },
  {
    musicName: "Man Bad To Khoob",
    singer: "Macan Band",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f2d8a57b01_29579f9eba80509fceacdf961d5b9847.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f2d8a57b01_09a470ac25c3d17c78765858ad9d7e9b.mp3",
    id: "e178eb78f1ddaddf53deb1f3a24b2157",
  },
  {
    musicName: "Sheyda",
    singer: "Ashvan",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/d9520b6090_5ed6cd6653a741a79166f24920b8a6d7.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/d9520b6090_d617b98dfff979d711ab790574adc1ab.mp3",
    state: "top",
    id: "c72cd199d72c25775e1e672589f1d178",
  },
  {
    musicName: "Ahange Shad",
    singer: "Ashvan",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a2f002cd17_728a8b5108e61cfe2cdea3902544442a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a2f002cd17_076b936be47e117729de5503862f542e.mp3",
    id: "da4bf178551f3ed3c155e3e165aa96a1",
  },
  {
    musicName: "Ghasedak",
    singer: "Ashvan",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/dc6f3e72cc_be40fd94c091a9c7fae07578e591bb8d.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/dc6f3e72cc_a61159e226e930c6ec21708b58476d3b.mp3",
    id: "6544d37d18b8cb062ee95a088a3012c0",
  },
  {
    musicName: "Maghrour",
    singer: "Ashvan",
    genre: "pop",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/188add831e_7d30efc12640513ce56cea97c56e525f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/188add831e_0d0421fd78875c64f6748f54c1d271a8.mp3",
    id: "278ad64892427987ea01cbc03ad28f5e",
  },
  {
    musicName: "Ghalbe Mani",
    singer: "Haamim",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/d80e80274b_fa824521e1c8c5308e432a9349c77de1.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/d80e80274b_6ecaa9ff05e7f310e1ff559ef8e7afd1.mp3",
    id: "45c07db1b32f1c7da93f782861be50c4",
  },
  {
    musicName: "Yekio Daram",
    singer: "Haamim",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/36e086ece7_d0b62e12b679da8a7c2920fe0e8a47b3.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/36e086ece7_fc515f759c788f13ecc7236e5c6d2d45.mp3",
    id: "30b84619584469fb6ff3b8d11f5e662f",
  },
  {
    musicName: "Negine Ghalbami",
    singer: "Majid Razavi",
    genre: "romantic",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a97e8b2e26_675db33bca916925f3506a3d97f7f9e1.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a97e8b2e26_e1519564e111f8175b927f59c0b09735.mp3",
    id: "ae3c4b6b734233f01bc7179cf7167f9b",
  },
  {
    musicName: "Manam",
    singer: "Majid Razavi",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/4f954fe7ad_b945df769bfb2c318092819a6798b215.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/4f954fe7ad_5313c6bccf277089fd1fc81bcdc5ac13.mp3",
    id: "d664058ea8ed75bb4429537b11b41853",
  },
  {
    musicName: "Par Mizane",
    singer: "Majid Razavi",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/ad23106c0e_c36558bef0621f72c1da7fc57079c2aa.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/ad23106c0e_ea140878a0d1e26b24b2b0181dd27db3.mp3",
    id: "e1f9101668ebba95177f4894b91e4860",
  },
  {
    musicName: "Shookhi Nadaram",
    singer: "Asef Aria",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/128ec2738d_7bdf6a81d3185a34e258d2d0513ca8ec.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/128ec2738d_543727c197fb862fb0e23f9d2e8d9445.mp3",
    id: "57eb0039dbf5c39282fab9126aefeda6",
  },
  {
    musicName: "His",
    singer: "Asef Aria",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/4b3e189df6_1bca135416e0d272c2712f18950ebbbd.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/4b3e189df6_6b0ed30d4d8f0d34cda9a53edd71c8ca.mp3",
    id: "de77a1e9582d4d0e3f6959e2de39f774",
  },
  {
    musicName: "Yare Moo Boland",
    singer: "Fardin Naji",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/31aea569b4_38066d5e9492888107d9150499159dba.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/31aea569b4_93832439fccdd05897ef08fe4042965c.mp3",
    id: "5fe31d7c728c02d75af0b42397eee6b1",
  },
  {
    musicName: "Bi Ghanoon",
    singer: "Fardin Naji",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f05db8cf08_0611725a42c8c4e3d78ae89aaf855a92.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f05db8cf08_539ed836b420269d240982266219cd13.mp3",
    id: "fcd6a83d78b3636d6b2eb0d90ba2f6f8",
  },
  {
    musicName: "To Ra Ke Daram",
    singer: "Ragheb",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/aea0c9b20a_b685e4b9d1441dd856068c6440c9c5a4.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/aea0c9b20a_76b47c29ffe976352a00ce1779ecc6e0.mp3",
    id: "c1a1a1678bd1854f9ce748a5dc834679",
  },
  {
    musicName: "Havaye Eshgh",
    singer: "Ragheb",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/363c544bf4_d6ef60bc98efd5100210ccb188771af4.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/363c544bf4_ec4ff0e8130ee768b5283aab3e7af27c.mp3",
    id: "cf164733fa48990a0d30a0e3bec67974",
  },
  {
    musicName: "Bia Pisham",
    singer: "Sina Derakhshandeh",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/2539197d19_183230264a03edb3724c9e3d6061a8ec.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/2539197d19_4bb1f1ab8a7e08f46fa34c9670b7d2d1.mp3",
    id: "4f2c4c29c9d5f02fd6209c656e0b0c0a",
  },
  {
    musicName: "Haft Asemoon",
    singer: "Sina Derakhshandeh",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/7c7a1020f0_e326f76a267d969a21c333d81e9ed66b.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/7c7a1020f0_86a9b9805c6dd6a01f447826ff398ca6.mp3",
    id: "b095a96f478bab387c7b39bc301ad3f1",
  },
  {
    musicName: "Sarsari",
    singer: "Sina Derakhshandeh",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/5e7ce36f39_f2df7e19e12043ffa3f5b09879e1d688.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/5e7ce36f39_9c3342677cec3b908b051cd460bb72fd.mp3",
    id: "504a6d24ae08ef1b1790cadd7bfe9a3a",
  },
  {
    musicName: "Shakhe Gol",
    singer: "Kasra Zahedi",
    genre: "newArtist",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/45f54cbbb9_c3cafc4038f3e35b7fe3b99dda006c52.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/45f54cbbb9_a6a92ba4975e1dcc9e19433bb4468646.mp3",
    id: "11d85cfff76759d3c555f2816e9a6a2c",
  },
  {
    musicName: "Rabbana",
    singer: "Mohammadreza Shajarian",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a82d836a56_e1594fec7e1e6ebc58fbd3b6fc57493d.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a82d836a56_cadd329db9040b56bd2de86691d00b5c.mp3",
    id: "55d64b962c4a7ca520d0a03a8a864c59",
  },
  {
    musicName: "Az Eshgh",
    singer: "Mohammadreza Shajarian",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/a5365e362a_bb1d751dab66627adb3f0c8e0fd62b3a.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/a5365e362a_2f13170f99bee1a6e2b8d8e5ca6c86d6.mp3",
    id: "ad7d965d10b135654edb62c550db7aa2",
  },
  {
    musicName: "Bi Gonah",
    singer: "Alireza Ghorbani",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/fab496591c_52820ae4e58cb770d11c55d1e6236f7c.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/fab496591c_29c2f2bcb4d461c1f1157a4e3d38b1e3.mp3",
    id: "8200b02486c55e2b4495c93ee9da4cef",
  },
  {
    musicName: "Khiale Khosh",
    singer: "Alireza Ghorbani",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/de11098901_a642a6184a533607fcc9b7d35c1f389f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/de11098901_674134d72b53f7b23a617cd033dc78d7.mp3",
    id: "f03c4f59b8e47803e8be307e41d4d728",
  },
  {
    musicName: "Sayyad",
    singer: "Alireza Eftekhari",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f69c0a45da_0e64eadf1bc5a76f4fa2024f88fada79.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f69c0a45da_5c88a0d5b82ea25e97189d5ad51dcdb6.mp3",
    id: "c7a3cd1d9d0f0e394ccb35e7e38ee718",
  },
  {
    musicName: "Avaz",
    singer: "Iraj Bastami",
    genre: "sonnati",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/0e8a4a5d98_1c8c20cc2e1f65ac416bdcc4e4a0c343.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/0e8a4a5d98_24fb9731e53f760f0aae3a1c151f3a53.mp3",
    id: "f7bc1c89ef46de5c3ec850aeae6e9d34",
  },
  {
    musicName: "Hezar",
    singer: "Mehrad Hidden",
    genre: "rap",
    imageUrl:
      "https://systemmusic.ir/wp-content/uploads/2022/04/album-mehrad-hidden-zoozanaghe.jpg",
    url: "https://dl3.behmusic.com/music/1401/01/Irani/Mehrad%20Hidden%20&%20Wilson%20-%20Hezar[128].mp3",
    state: "top",
    id: "1b62dd9f6f1dd6787da04a71788ba291",
  },
  {
    musicName: "Ghale",
    singer: "Mehrad Hidden",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-cK7QnTy1oeddEqIO-xWyVog-t500x500.jpg",
    url: "https://dl.my-ahangha.ir/up/2020/Mehrad%20Hidden%20Ft%20Shayea%20-%20Ghale%20128.mp3",
    id: "c7b7708a847eb25d26931d71ebdd1d76",
  },
  {
    musicName: "Noghteh Joosh",
    singer: "Mehrad Hidden",
    genre: "rap",
    imageUrl:
      "https://www.sabalanmusic.ir/wp-content/uploads/2021/09/Canis-Noghte-Joosh-Ft-Mehra.jpg",
    url: "http://dl.songlove.ir/Mehrad-Hidden/1.mp3",
    id: "92a3fe0bd104220bd1fbb15d1ae4c44b",
  },
  {
    musicName: "Oghdei",
    singer: "Shayea",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-RCqN1gg7tuOAsKmG-7PcQ0Q-t500x500.jpg",
    url: "https://xx.listen2music.ir/archive/S/Shayea/Shayea%20-%20Amade%20Bash/Shayea%20-%20Amade%20Bash%20128/10%20-%20Shayea%20-%20Oghdei%20(feat%20Tara%20Salahi)%20With%20BTS.mp3",
    id: "30ae88da805897385b769040f67a9803",
  },
  {
    musicName: "Mosser",
    singer: "Shayea",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-ICIlazDnDwEzSMvg-SaBhDA-t500x500.jpg",
    url: "http://dl.mokhtalefmusic.com/music/1399/03/11/Shayea%20-%20Mosser%20%28FT.%20Mehrad%20Hidden%29%20%28128%29.mp3",
    id: "af80d0f20005dd73f436eb72ffec0679",
  },
  {
    musicName: "Yeja Yeho Bar Mikhore Behet",
    singer: "Shayea",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-PSuYURy4Ka7I5QUv-rWCpBA-t500x500.jpg",
    url: "https://dl.forzamusic.ir//2023/04/28//shayea_yeja_yeho%20bar%20mikhore%20behet%20128.mp3",
    id: "a5edaca8c55544be1a46528af6794a42",
  },
  {
    musicName: "Injaneb",
    singer: "Shayea",
    genre: "rap",
    imageUrl:
      "https://nex1music.ir/upload/2019-08-21/shayea-injaneb-2019-08-21-21-04-14.jpg",
    url: "http://sv.musicset.ir/music/98/5/Shayea/Shayea%20-%20Injaneb-128.mp3",
    id: "f233050ce906470cf55b3e80fc5d1b14",
  },
  {
    musicName: "Lal",
    singer: "Yas",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-azX4RLa9yfd7pGBY-uGZJOw-t500x500.jpg",
    url: "https://dl3.behmusic.com/music/1399/03/Irani/Yas%20-%20Lal[128].mp3",
    state: "top",
    id: "9d485a945fc0c46a4c62866f0777e682",
  },
  {
    musicName: "Biim",
    singer: "Yas",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-cjSyVaK9z82h4ogD-fh5QyA-t500x500.jpg",
    url: "https://dl3.behmusic.com/music/1401/03/Irani/Yas%20-%20Beem%5B128%5D.mp3",
    id: "e779a156e3f3fef9d1f95a81e283535e",
  },
  {
    musicName: "Bande Naf",
    singer: "Yas",
    genre: "rap",
    imageUrl: "https://i1.sndcdn.com/artworks-96zKlyweXIIN-0-t500x500.png",
    url: "https://dl3.behmusic.com/music/1396/12/Irani/Yas%20-%20Bande%20Naaf%20Ta%20Khatte%20Saaf%20%28Ft%20Moer%29[128].mp3",
    id: "0b40efaf7a015ea1e62eed6897584632",
  },
  {
    musicName: "2Ja",
    singer: "Ho3ein",
    genre: "rap",
    imageUrl:
      "https://dibamusics.com/wp-content/uploads/2023/03/Ho3ein20Bi20Bal20-202Ja.jpg",
    url: "https://dl.my-ahangha.ir/up/2021/Ho3ein%20-%202Ja.mp3",
    id: "d90cf417f91c3f95dd6c8bb43df1dd25",
  },
  {
    musicName: "Didgah",
    singer: "Ho3ein",
    genre: "rap",
    imageUrl: "https://i1.sndcdn.com/artworks-GNW9eiHLZ2Cr-0-t500x500.jpg",
    url: "https://dl.mypmcmusic.com/Milad/1398/09/30/Ho3ein%20-%20Didgah%20(Ft%20Epicure%20Band)%20[128].mp3",
    id: "f80f555dc4256c8e031ea33017b98fe4",
  },
  {
    musicName: "Roya",
    singer: "Amir Khalvat",
    genre: "rap",
    imageUrl:
      "https://www.my-ahangha.ir/wp-content/uploads/2019/07/Amir-Khalvat-Roya.jpg",
    url: "https://dl.my-ahangha.ir/up/2019/Amir%20Khalvat%20-%20Roya%20128.mp3",
    id: "f25c7c3be053313009d4155e63c306cb",
  },
  {
    musicName: "Super Star",
    singer: "Amir Khalvat",
    genre: "rap",
    imageUrl:
      "https://musicspardis.org/wp-content/uploads/2017/07/Amir-Khalvat-Super-Star.jpg",
    url: "https://sv.jenabmusic.com/96/Tir/33/Amir%20Khalvat%20-%20Super%20Star-128.mp3",
    id: "755f0fe10f59bf1936f1a513173c0060",
  },
  {
    musicName: "Tir",
    singer: "Amir Khalvat",
    genre: "rap",
    imageUrl:
      "https://www.sabalanmusic.ir/wp-content/uploads/2020/07/Amir-Khalvat-Tir.jpg",
    url: "https://dawnload.sabalanmusic.ir/99/4/Amir%20Khalvat%20-%20Tir%20[128].mp3",
    id: "ba0e3a473aa2f82ac5f738afe8e1c572",
  },
  {
    musicName: "Qabil",
    singer: "Reza Pishro",
    genre: "rap",
    imageUrl:
      "https://i1.sndcdn.com/artworks-IMFvS65KKYETqFyM-MrqMJQ-t500x500.jpg",
    url: "https://s1.pr3m.ir/Music/1399/4/21/Reza%20Pishro%20-%20Qabil..mp3",
    id: "96935a4e9452bccee62ec2d6325b4526",
  },
  {
    musicName: "Siah Cheshmoon",
    singer: "Hayedeh",
    genre: "nostalgia",
    imageUrl: "https://i1.sndcdn.com/artworks-000053982780-izaei5-t500x500.jpg",
    url: "https://xx.music-doni.ir/archive/h/hayedeh/Hayedeh%20-%20Shabe%20Eshgh/01%20Siah%20Cheshmoon.mp3",
    id: "ea605ef2b6516d97308db3605db42fec",
  },
  {
    musicName: "Ey Zendegi Salam",
    singer: "Hayedeh",
    genre: "nostalgia",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/b2/d9/01/mzi.lmqwjxmh.jpg/600x600bf-60.jpg",
    url: "https://dl.oxir-music.com/1/hayedeh_%20_ey_zendegi%20salam%20%20128.mp3",
    id: "338e22190f03ae714c515d409293d9ee",
  },
  {
    musicName: "Shabe Eshgh",
    singer: "Hayedeh",
    genre: "nostalgia",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/500x500/20b74e9fed134c13ba89b36a5f74e05e.jpg",
    url: "https://dl.jelvehmusic.ir/jsv/1/Hayedeh-Shabeh-Eshgh.%20%5BJelvehMusic%5D.mp3",
    id: "1b1ed2c316e5caa9c17d365cdc93580b",
  },
  {
    musicName: "Shabe Por Setareh",
    singer: "Homeyra",
    genre: "nostalgia",
    imageUrl:
      "https://radioojavan.com/wp-content/uploads/2023/05/shabe-por-setareh.jpg",
    url: "https://xx.music-doni.ir/Archive/h/homayra/Homayra%20-%20Golbarg/01%20Shabe%20Por%20Setareh.mp3",
    id: "1089378552ea2184887ecc94d445bfa0",
  },
  {
    musicName: "Alame Eshgh",
    singer: "Homeyra",
    genre: "nostalgia",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1392/04/2750164730561714721647305617624916473056179814.jpg",
    url: "https://dl.forzamusic.ir/2023/07/25//homeyra_alame_eshgh%20128.mp3",
    id: "7ac10c61036cf64723879eaa2191a4a4",
  },
  {
    musicName: "Darya Kenar",
    singer: "Homeyra",
    genre: "nostalgia",
    imageUrl:
      "https://m.media-amazon.com/images/I/516TSimMfUL._UXNaN_FMjpg_QL85_.jpg",
    url: "https://xx.music-doni.ir/Archive/h/homayra/Homayra%20-%20Darya%20Kenar/04%20Darya%20Kenar.mp3",
    id: "abc9bd525d9161ec7f4a11ee34bf6b2f",
  },
  {
    musicName: "Baba",
    singer: "Moein",
    genre: "nostalgia",
    imageUrl:
      "https://musicsbaran.ir/wp-content/uploads/2019/12/Moein_Tavalode-Eshgh.jpg",
    url: "https://dl.musicsbaran.ir/music/2022-05/Moein%20-%20Halgheh%20Tala%20[Musicbaran]%20[128].mp3",
    id: "3a1554375ceab600fa4a4000a964240e",
  },
  {
    musicName: "Naneh",
    singer: "Moein",
    genre: "nostalgia",
    imageUrl: "https://uptrack.ir/wp-content/uploads/2023/03/jfg.jpg",
    url: "http://dl.uptrack.ir/Uptrack-ROOt/1401/12%20Esfand/24/Moein%20128.mp3",
    id: "a70d51885b70d3f19f565e0597647f64",
  },
  {
    musicName: "Zalem",
    singer: "Moein",
    genre: "nostalgia",
    imageUrl: "https://i1.sndcdn.com/artworks-000052602584-fonp2y-t500x500.jpg",
    url: "https://dl.msbmusic.ir/dl2/Album/02/Moein%20-%20Lahzeha%20%5B128%5D/Moein%20-%20Zalem%20%5B128%5D.mp3",
    id: "fc068b6a7c20da0291f1dc5297a0e629",
  },
  {
    musicName: "Zanjire Eshgh",
    singer: "Mahasti",
    genre: "nostalgia",
    imageUrl: "https://i1.sndcdn.com/artworks-000013358194-5nrv5d-t240x240.jpg",
    url: "https://cdn.zardis.net/webservice/2017/01/music/single/2021/320/Zanjir%20Eshgh%20(%20Mahasti%20).mp3",
    id: "9e3ac49858fc0f8fa501d0e1b3593ec3",
  },
  {
    musicName: "Ki Miyad",
    singer: "Mahasti",
    genre: "nostalgia",
    imageUrl:
      "https://i1.sndcdn.com/artworks-crcAyhgPTTW8yemH-Cm8IQw-t500x500.jpg",
    url: "https://xx.venusmusic.ir/archive/M/Mahasti/Mahasti%20-%20Gole%20Omid/07%20Ki%20Miad.mp3",
    id: "ec7089cf98576e63aee94c845c99dd11",
  },
  {
    musicName: "Bia Benevisim",
    singer: "Mahasti",
    genre: "nostalgia",
    imageUrl:
      "https://images.genius.com/93c9d010d19930f9169d1bf33243563d.585x585x1.jpg",
    url: "https://dl.pinkmusic1.ir/uploads/2023/02/BIA-BENEVISIM.mp3",
    id: "dcbdb8743b5498c07ab3ee6df48ee110",
  },
  {
    musicName: "Hafta Hsemoon",
    singer: "Javad Yassari",
    genre: "nostalgia",
    imageUrl:
      "https://xx.sahand-music.ir/Archive/J/Javad%20Yasari/Single/Javad%20Yasari.jpg",
    url: "http://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Javad%20Yasari%20%E2%80%93%20Haft%20Asemon%20128.mp3",
    id: "6280a03cc1096df621c2bc28147658a8",
  },
  {
    musicName: "Bache Ha",
    singer: "Javad Yassari",
    imageUrl: "https://saten.ir/wp-content/uploads/2014/04/276229_682.jpg",
    url: "https://bkalam.ir/wp-content/uploads/2022/10/Javad%20Yasari%20-%20Bacheha%20Ay%20Bacheha%20Shirini%20Zendegian%20[ORG].mp3",
    id: "078c5284f7185379dadc448a6c4aae30",
  },
  {
    musicName: "Man Amade Am",
    singer: "Googoosh",
    genre: "nostalgia",
    imageUrl:
      "https://ts5.tarafdari.com/contents/user6984/content-sound/gwgwsh_222.jpg",
    url: "https://s1.pr3m.ir/Music/1399/5/Googoosh%20-%20Man%20Amadeh-Am..mp3",
    id: "617debeb5cae71900441764d0174c598",
  },
  {
    musicName: "Bemoon Ta Bemoonam",
    singer: "Googoosh",
    genre: "nostalgia",
    imageUrl:
      "https://media.digimusic7.ir/uploads/2021/03/Googoosh-Bemoon-Ta-Bemoonam.jpg",
    url: "https://dl.digimusic7.ir/music/sd/1399/Archive/Googoosh/Googoosh-Bemoon-Ta-Bemoonam%20%5B128%5D.mp3",
    id: "8e88a79459b68567799a07c153cbee70",
  },
  {
    musicName: "Too Baroon Ke Rafti",
    singer: "Siavash Ghomeyshi",
    imageUrl:
      "https://musicguitars.ir/wp-content/uploads/2021/02/siavash-ghomayshi-to-baroon-keh-rafty.jpg",
    url: "https://dl.musiceto.com/Music/1400/6/Siavash%20Ghomeyshi%20-%20Too%20Baroon%20Ke%20Rafty%20(128).mp3",
    id: "fd0d2610b9e53fc138093ff0ef6a48a5",
  },
  {
    musicName: "Ghoroob",
    singer: "Siavash Ghomeyshi",
    genre: "nostalgia",
    imageUrl:
      "https://behmusic.com/wp-content/uploads/2023/02/Siavash-Ghomeyshi-Ghoroub-496x496.jpg.webp",
    url: "http://dl.musiceto.com/Music/1400/6/01%20Ghoroub.mp3  ",
    id: "c0be66eef7a301f5aed3489f1dadae5f",
  },
  {
    musicName: "Khaste Shodam",
    singer: "Siavash Ghomeyshi",
    genre: "nostalgia",
    imageUrl:
      "https://ts8.tarafdari.com/contents/user370585/content-sound/siavash-53325-e1560277882847.jpg",
    url: "https://dl.musickhooneh.com/music/1398/9/ghadimi/Siavash%20Ghomayshi%20-%20Khasteh%20Shodam[128].mp3",
    id: "140865b4d4a8d840a470f289ca1143da",
  },
  {
    musicName: "Chi Seda Konam Toro",
    singer: "Leila Forouhar",
    genre: "nostalgia",
    imageUrl: "https://beepsong.com/assets/media/2019/03/images-1-1.jpg",
    url: "https://dl.musicguitars.ir/Music/Leila%20Forouhar/128/Leila%20Forouhar%20-%20Chi%20Seda%20Konam%20Toro%20%5B128%5D.mp3?_=9",
    id: "4e75168b8e18947509a2c21ab0e212d4",
  },
  {
    musicName: "Delbar",
    singer: "Leila Forouhar",
    genre: "nostalgia",
    imageUrl: "https://bia2safa.net/goto/file/image/1643430?direct",
    url: "https://dl.musicguitars.ir/Music/Leila%20Forouhar/128/Leila%20Forouhar%20-%20Delbar%20%5B128%5D.mp3?_=11",
    id: "d8e6695ee2feaec9fecabe29d722fd00",
  },
  {
    musicName: "Medly",
    singer: "Shohreh Solati",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1398/06/8690164778853469941647788534935716477885349240.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1398/06/5528164778853448601647788534807016477885348229.mp3",
    id: "e5ae3ec66c7ad8751896b862174a6406",
  },
  {
    musicName: "Tolou",
    singer: "Shohreh Solati",
    genre: "nostalgia",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1392/01/6462164729598013401647295980979916472959803280.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1392/01/3305164729598063981647295980194416472959803575.mp3",
    id: "8382372a44de1fc51c63405cd99ac50f",
  },
  {
    musicName: "Dele Bigharar Daram Man",
    singer: "Shohreh Solati",
    genre: "nostalgia",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1402/03/7530168523033243281685230332431616852303324354.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1402/03/7888168523033233371685230332918316852303327113.mp3",
    id: "300a3f1c033fd013f53c75aa41fd41a1",
  },
  {
    musicName: "Yavashaki",
    singer: "Shohreh Solati",
    genre: "nostalgia",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1402/03/2071168523029181181685230291944916852302916141.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1402/03/3792168523029191001685230291587516852302916844.mp3",
    id: "e445e424d83bd6678288797219193a06",
  },
  {
    musicName: "Bia Bia",
    singer: "Shahram Solati",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1401/04/9729165808327624221658083276627416580832768931.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1401/04/9913165808327695641658083276956716580832768201.mp3",
    id: "e3373d3ba8d35aea8f72bd0d28c440e5",
  },
  {
    musicName: "Delam Raft",
    singer: "Shahram Solati",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1400/06/5651164783976099881647839760700216478397606264.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1400/06/9688164783976023261647839760172416478397604483.mp3",
    id: "f7899a3951eaa798181bef0ddab7a98b",
  },
  {
    musicName: "Begoo Begoo",
    singer: "Shahram Solati",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1400/03/4613164969231561661649692315329516496923155549.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1400/03/4636164969231577771649692315878916496923157373.mp3",
    id: "15eabafd7b4253eb96e69668ae8d7fcb",
  },
  {
    musicName: "Mitarsam Mitarsam",
    singer: "Shahram Solati",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1402/03/9828168523404657121685234046415716852340465355.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1402/03/9649168523404668661685234046862216852340463704.mp3",
    id: "7b929f6b50ad0340708512c6b2839b0c",
  },
  {
    musicName: "Tasmim",
    singer: "Hasan Shamaizadeh",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1393/04/1346164737348684171647373486136316473734867346.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1393/04/9843164737348683661647373486638316473734867629.mp3",
    id: "8251c3ca847e1c12425e3e4e70815d34",
  },
  {
    musicName: "Zargari",
    singer: "Hasan Shamaizadeh",
    genre: "nostalgia",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1402/03/4530168523403011971685234030295316852340308735.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1402/03/3266168523403046801685234030504316852340309029.mp3",
    id: "2dc68832887b0076fa4342306e42968d",
  },
  {
    musicName: "Fahmidam Doosam Dari",
    singer: "Hasan Shamaizadeh",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1398/10/2670164779662359111647796623215316477966238991.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1398/10/3802164779662377141647796623451216477966234420.mp3",
    id: "ba735b59bdb576415b344a8a213e6227",
  },
  {
    musicName: "Hobab",
    singer: "Hasan Shamaizadeh",
    imageUrl:
      "https://www.appahang1.com/cdn/tracks-cover/1398/08/3274164779341845831647793418153116477934183130.jpg",
    url: "https://www.appahang1.com/cdn/tracks-mp3/1398/08/3378164779341878071647793418971716477934181801.mp3",
    id: "944e7e3ed67e709aa1853fd6a67759e8",
  },
  {
    musicName: "To Mahshari",
    singer: "Omid",
    genre: "nostalgia",
    imageUrl: "https://i1.sndcdn.com/artworks-000036985834-6j5z41-t500x500.jpg",
    url: "https://dl.melusic.ir/music/Omid/omid_to_mahshari.mp3",
    id: "dbd5cd632ed8cef152951c644f283aa6",
  },
  {
    musicName: "Baran mibarad",
    singer: "Omid",
    genre: "nostalgia",
    imageUrl:
      "https://musicmehr.net/wp-content/uploads/2023/08/2628164728603372011647286033764516472860334929.jpg",
    url: "https://irsv.upmusics.com/AliBZ/Baran%20Mebarad%20Ehmshab%20(320).mp3",
    id: "eb894550e95sfdsddbb5f84e196300c33d664",
  },
  {
    musicName: "Yasamin",
    singer: "Omid",
    genre: "nostalgia",
    imageUrl: "https://melusic.ir/wp-content/uploads/omid_yasamin.jpg.webp",
    url: "https://dl.melusic.ir/music/Omid/omid_yasamin.mp3",
    id: "eb894550e95dbsddb5f84e196300c33d664",
  },
  {
    musicName: "Agar Mandeh Boodi ",
    singer: "Omid",
    genre: "nostalgia",
    imageUrl:
      "https://musiceto.com/wp-content/uploads/2023/02/1677524342219.jpg",
    url: "https://dl.melusic.ir/music/Omid/omid_agar_mandeh%20boodi.mp3",
    id: "eb894550e95dbb5fhh84e196300c33d664",
  },
  {
    musicName: "Faryad faryad",
    singer: "Omid",
    genre: "nostalgia",
    imageUrl:
      "https://musiceto.com/wp-content/uploads/2023/02/1677523866290.jpg",
    url: "https://dl.msbmusic.ir/dl4/1397/Album/07/Omid%20-%20Shabe%20Milad/Omid%20-%20Faryad%20Faryad.mp3",
    id: "eb894550e95dbb5fhh84e196300c33d664",
  },
  {
    musicName: "Begoo Kojaei (Live)",
    singer: "Armin Zarei",
    genre: "live",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f0b85f1739_4712f971ebb3f1dd7c574e026c63e64e.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f0b85f1739_3892166e3e26065529fdb5b987b99e31.mp3",
    id: "ebc58aca5968549ee4828c2fd4ba2e16",
  },
  {
    musicName: "Adame Sabegh (Live)",
    singer: "Reza Bahram",
    genre: "live",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/17409ec7ca_01ff9a9a39aa490a9a18fbc198bb8fdf.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/17409ec7ca_6c6f488748404152923ecf9724d30856.mp3",
    id: "b4accc6f098929888b84b60bd309e67f",
  },
  {
    musicName: "Doostet Daram (Live)",
    singer: "Hojjat Ashrafzadeh",
    genre: "live",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/f79a46248f_526d39d51da4a19db2ddf0c550b90a36.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/f79a46248f_43c3f170b1ba3247778bfcde085c3897.mp3",
    id: "15039b0a6c1f51af362b57580cdffa3a",
  },
  {
    musicName: "Ye Darya Narim (Live)",
    singer: "Alireza Talischi",
    genre: "live",
    imageUrl:
      "https://cdnmrtehran.ir/media/mp3s/01/af7470e036_04699557af7ab253d8b74dee36b58f2f.jpg",
    url: "https://cdnmrtehran.ir/media/mp3s/01/af7470e036_94fc3f42384c45d781e85ed6910e8fbd.mp3",
    id: "daf9bd38cca899d3181f6564155c7106",
  },
  {
    musicName: "Giderim",
    singer: "Ahmet kaya",
    genre: "turkish",
    imageUrl:
      "https://mokhtalefmusic.com/wp-content/uploads/2023/11/Ahmet-Kaya-Giderim-MokhtalefMusic.jpg",
    url: "https://dl.mokhtalefmusic.com/music/1402/08/21/Ahmet%20Kaya%20-%20Giderim.mp3",
    state: "top",
    id: "1b62dd9f6ffdfdssf1dd6787da04a71788ba291",
  },
  {
    musicName: "Yanlizim",
    singer: "Ibrahim Tatlises",
    genre: "rap",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlg5EL6nWyZHONYuHqX2Wz1t8ixJ7TVb1_2LEIiwk5g&s",
    url: "https://dl.musicdel.ir/tag/music/1402/01/06/Ibrahim%20Tatlises%20-%20yaln%C4%B1z%C4%B1m%20(320).mp3",
    id: "c7b7708a8ddfd47eb25d26931d71ebdd1d76",
  },
  {
    musicName: "Gel Gel Gümle Gel",
    singer: "Ibrahim Tatlises",
    genre: "rap",
    imageUrl:
      "https://magerta.ir/wp-content/uploads/2020/07/Ibrahim-tatlses-gel-gel-g%C3%BCmle-gel-lyrics-1-min.jpg",
    url: "https://dl.sakhamusic.ir/97/far/01/Tatlises%20-%20Gel%20Gel%20Gumlegel.mp3",
    id: "92a3fe0bd104220bsd1fbb15d1ae4c44b",
  },
  {
    musicName: "Ay aman",
    singer: "Mahsun",
    genre: "turkish",
    imageUrl:
      "https://delimusic.org/wp-content/uploads/2023/10/Ay-Aman-Aman.jpg",
    url: "https://dl.musicdel.ir/Music/98/10/Music/Mahsun%20-%20Ay%20aman%20aman%20aman%20geceler.mp3",
    id: "30ae88ssda805897385b769040f67a9803",
  },
  {
    musicName: "Belalim",
    singer: "Mahsun",
    genre: "turkish",
    imageUrl:
      "https://dibasmusic.com/wp-content/uploads/2023/03/tune-belalim-singer-mahsun.jpg",
    url: "https://dl.dibasmusic.com/dl/1401/12/Mahsun-Belalim-dibamusics-320.mp3",
    id: "af80d0f200ss05dd73f436eb72ffec0679",
  },
  {
    musicName: "Yikilmadim",
    singer: "Mahsun",
    genre: "rap",
    imageUrl:
      "https://mahanmusics.com/wp-content/uploads/2023/12/Mahsun20-20Yikilmadim.jpg",
    url: "https://dl.mahanmusics.com/ahang/02/10/Mahsun%20-%20Yikilmadim%20-%20320.mp3",
    id: "a5edaca8c55544be1ssa46528af6794a42",
  },
  {
    musicName: "Aramam",
    singer: "Ibrahim Tatlises",
    genre: "turkish",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseL8JjH7anMvSB_8yhChK3j_PvkJS64q7mZM3cVLrlA&s",
    url: "https://dls.music-fa.com/tagdl/downloads/Ibrahim%20Tatlises%20-%20Aramam%20(320).mp3",
    id: "f233050cse90ss6470cf55b3e80fc5d1b14",
  },
  {
    musicName: "ağlıyorum kahrımdan",
    singer: "Ibrahim Tatlises",
    genre: "turkish",
    imageUrl:
      "https://s3.cloud.ngn.com.tr/kitantik/images/2023-12-17/1br9qfwlq786f5i1sgz.jpg",
    url: "https://dl.musicdel.ir/Music/1401/10/ibrahim_tatlises_a%C4%9Fl%C4%B1yorum_kahr%C4%B1mdan%20128.mp3",
    state: "top",
    id: "9d485a945fcss0c46a4c62866f0777e682",
  },
  {
    musicName: "Ayrılığın hediyesi",
    singer: "Ahmet kaya",
    genre: "turkish",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwdfx0wyUOSf1ncyexjVduxmQvPwUyXgnnCHmcssUxQ&s",
    url: "https://dl.musicdel.ir/Music/1401/09/ahmet_kaya_ayr%C4%B1l%C4%B1%C4%9F%C4%B1n_hediyesi.mp3",
    id: "e779ass156e3f3fef9d1f95a81e283535e",
  },
  {
    musicName: "Hani Benim Gençliğim",
    singer: "Ahmet kaya",
    genre: "rap",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRq1qhcD5dzyPehMFmbxJh3bc75UFTwRqE0RcNkdB7higlLgH6F",
    url: "https://dl.musicdel.ir/Music/1400/04/ahmet_kaya_penceresiz_kaldim%20anne.mp3",
    id: "0b40efaf7a015ea1e62sseed6897584632",
  },
  {
    musicName: "Doruklara sevdalandım",
    singer: "Ahmet kaya",
    genre: "turkish",
    imageUrl:
      "https://melovy.ir/wp-content/uploads/2022/01/Doruklara-Sevdaland%C4%B1m.jpg",
    url: "https://dl.musicdel.ir/Music/1401/09/ahmet_kaya_doruklara_sevdaland%C4%B1m.mp3",
    id: "sd90cf417f91c3f95ddsss6c8bb43df1dd25",
  },
  {
    musicName: "Haydi Söyle",
    singer: "Ibrahim Tatlises",
    genre: "turkish",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxp62pxvxKOhYyHxwONgzpOjIGsevCoSn-BgBGLh7VdQ&s",
    url: "https://dl.musicdel.ir/Music/1400/04/ibrahim_tatlises_haydi_s%C3%B6yle.mp3",
    id: "f80f555dc4256c8e031dsfea33017b98fe4",
  },
  {
    musicName: " Unutma Ki Dunya Fani",
    singer: "Muazzez Ersoy",
    genre: "rap",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2RcrdIKVMbsMRQyqlvzMAsykJX0shNmu7xDNhV8qoQ&s",
    url: "https://ts12.tarafdari.com/contents/user196737/content-sound/unutma-ki-dunya-fani.mp3",
    id: "f25c7c3bessds053s313009d4155e63c306cb",
  },
  {
    musicName: " Sen aglama",
    singer: "Sezen aksu",
    genre: "rap",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/tr/5/51/Sezen_aksu-sen_aglama_almanya.jpg",
    url: "https://ts12.tarafdari.com/contents/user793112/content-sound/sezen_aksu_sen_aglama.mp3",
    id: "755f0fe10f59bf193ss6f1a513173c0060",
  },
  {
    musicName: "Geri don",
    singer: "Sezen aksu",
    genre: "turkish",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-hayih7V8iSkhk7siFCnNfK2jJhcmnGpu0rp4YEKWg&s",
    url: "https://ts4.tarafdari.com/contents/user678748/content-sound/sezen_aksu_-_geri_don.mp3",
    id: "ba0e3ssa473aa2f82ac5f738afe8e1c572",
  },
  {
    musicName: "Degmez",
    singer: "Muazzez Ersoy",
    genre: "turkish",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbl4a2BxYXDDrqyGqjLZrkaYoSdnttwe0uS9gSnBKYw&s",
    url: "https://dl.behmelody.in/1399/Aban/Muazzez%20Ersoy%20%2090%20Dan%20Pop/Muazzez%20Ersoy%20-%20De%C4%9Fmez%20%28320%29.mp3?_=2",
    id: "96935a4e9452bssccee62ec2d6325b4526",
  },
];
export { tracks };
