/* ============================================================
 * 2027 NBA Draft Big Board — 新秀球员照片链接
 * 来源: https://fansided.com/nba/2027-nba-draft-big-board-top-60-prospects-for-the-new-cycle
 * 命名格式: <MD5(下载字节)>_w_<实际宽>_h_<实际高>_.png
 * 说明: 页面仅前 20 名有照片（#12 Bryson Howard 页面无图，#21-60 无图）。
 *       图片存放于 _scrape/prospects/ 目录（19 张，均为 1600x1067，3:2）。
 * ============================================================ */
const PROSPECT_PHOTOS = [
  { rank: 1,  name: 'Tyran Stokes',       url: 'https://activity-static.hoopchina.com.cn/files/8201cdafb0fa1912c913d911f530e5a6_w_1600_h_1067_.png' },
  { rank: 2,  name: 'Stefan Joksimovic',  url: 'https://activity-static.hoopchina.com.cn/files/e07d246e9ce912afa1166095d66c224b_w_1600_h_1067_.png' },
  { rank: 3,  name: 'Tyler Tanner',       url: 'https://activity-static.hoopchina.com.cn/files/3ed20dc51400ffb635ba7e9365d3a997_w_1600_h_1067_.png' },
  { rank: 4,  name: 'Jordan Smith Jr.',   url: 'https://activity-static.hoopchina.com.cn/files/8ecedef3a86946b6787170f3ffda6dfe_w_1600_h_1067_.png' },
  { rank: 5,  name: 'Caleb Holt',         url: 'https://activity-static.hoopchina.com.cn/files/a4867060085275901e9eb1ccf56db70f_w_1600_h_1067_.png' },
  { rank: 6,  name: 'Motiejus Krivas',    url: 'https://activity-static.hoopchina.com.cn/files/be137352f7340801aea9241bb8f9766e_w_1600_h_1067_.png' },
  { rank: 7,  name: 'Patrick Ngongba II', url: 'https://activity-static.hoopchina.com.cn/files/47e5d6e18f897d85307dcd8148e5633b_w_1600_h_1067_.png' },
  { rank: 8,  name: 'Quentin Coleman',    url: 'https://activity-static.hoopchina.com.cn/files/37a38162cb1f0b3b739d7d6821b521e0_w_1600_h_1067_.png' },
  { rank: 9,  name: 'Brandon McCoy Jr.',  url: 'https://activity-static.hoopchina.com.cn/files/45f24c124735abda465fd0736503a5f9_w_1600_h_1067_.png' },
  { rank: 10, name: 'Colben Landrew',     url: 'https://activity-static.hoopchina.com.cn/files/f3f35a5e5b424220cabc1e5777c19996_w_1600_h_1067_.png' },
  { rank: 11, name: 'Dylan Mingo',        url: 'https://activity-static.hoopchina.com.cn/files/476e7b0200230dfab86d19e35134e4dd_w_1600_h_1067_.png' },
  { rank: 13, name: 'Anthony Thompson',   url: 'https://activity-static.hoopchina.com.cn/files/71bb2a5eb76b20c68399fc3e84afcfe9_w_1600_h_1067_.png' },
  { rank: 14, name: 'Bruce Branch III',   url: 'https://activity-static.hoopchina.com.cn/files/addb4c13fe712095e4e557a9166a3a2c_w_1600_h_1067_.png' },
  { rank: 15, name: 'Ivan Kharchenkov',   url: 'https://activity-static.hoopchina.com.cn/files/7d3f5e1d66e54a19e910a68682bc7743_w_1600_h_1067_.png' },
  { rank: 16, name: 'Najai Hines',        url: 'https://activity-static.hoopchina.com.cn/files/11dbeccc8de0ae0dd66414b33f0f3856_w_1600_h_1067_.png' },
  { rank: 17, name: 'Malachi Moreno',     url: 'https://activity-static.hoopchina.com.cn/files/c9a4cc972fc34e808e55f4e13a6bd1cc_w_1600_h_1067_.png' },
  { rank: 18, name: 'JJ Andrews',         url: 'https://activity-static.hoopchina.com.cn/files/c17a068cb79f53c12207ffdfeeb3d7a4_w_1600_h_1067_.png' },
  { rank: 19, name: 'Abdou Toure',        url: 'https://activity-static.hoopchina.com.cn/files/0232e817a51867ad50679d8e4c65ebc6_w_1600_h_1067_.png' },
  { rank: 20, name: 'Amari Allen',        url: 'https://activity-static.hoopchina.com.cn/files/691be9224fb8380ad2a98624d029f207_w_1600_h_1067_.png' },
  /* —— 2027 首轮补充（draft-data.js 名单中首轮缺图的 19 人，图片来自网络公开搜索）—— */
  { rank: 6,  name: 'Braylon Mullins',    url: 'https://activity-static.hoopchina.com.cn/files/621945ab8b152494d41146a3d25f0a38_w_976_h_651_.png' },
  { rank: 7,  name: 'Thomas Haugh',       url: 'https://activity-static.hoopchina.com.cn/files/b42ed600f58d7b01e2ea1c6dfb31cae5_w_2560_h_1707_.png' },
  { rank: 8,  name: 'Luigi Suigo',        url: 'https://activity-static.hoopchina.com.cn/files/a15795fe7d6c1add3e3e43cf40371c2d_w_1200_h_900_.png' },
  { rank: 9,  name: 'Hugo Yimga Moukouri',url: 'https://activity-static.hoopchina.com.cn/files/6c113138da33118a978be4b66ea758d9_w_1280_h_853_.png' },
  { rank: 10, name: 'Cameron Williams',   url: 'https://activity-static.hoopchina.com.cn/files/b4749e4bd72ef3d769929839bb0954bc_w_1266_h_1582_.png' },
  { rank: 11, name: 'Alijah Arenas',      url: 'https://activity-static.hoopchina.com.cn/files/48bad8819e4b04234a63391b6d6bf90a_w_1569_h_1045_.png' },
  { rank: 13, name: 'Sayon Keita',        url: 'https://activity-static.hoopchina.com.cn/files/ae0fa4f81021439fa095ad843151fef1_w_543_h_680_.png' },
  { rank: 14, name: 'Cameron Houindo',    url: 'https://activity-static.hoopchina.com.cn/files/fd3c230e5334ef0944cbdb07cb1fd4c2_w_2048_h_1365_.png' },
  { rank: 16, name: 'Christian Collins',  url: 'https://activity-static.hoopchina.com.cn/files/b51fbe5e9caa72f1933936e047fb5a2e_w_1200_h_630_.png' },
  { rank: 18, name: 'Cheickh Niang',      url: 'https://activity-static.hoopchina.com.cn/files/edbe9fdc2155a09adb6d1f6a033f41d4_w_3840_h_2561_.png' },
  { rank: 21, name: 'Rueben Chinyelu',    url: 'https://activity-static.hoopchina.com.cn/files/01bfd4bc6faa888eeb317e72fc9d12a9_w_1200_h_675_.png' },
  { rank: 22, name: 'Pavle Backo',        url: 'https://activity-static.hoopchina.com.cn/files/358387cee29dade1d85eadb72b6be381_w_700_h_700_.png' },
  { rank: 24, name: 'Tounde Yessoufou',   url: 'https://activity-static.hoopchina.com.cn/files/05edadb60dfe99832ce18cd17a97fefb_w_1178_h_1631_.png' },
  { rank: 25, name: 'Dame Sarr',          url: 'https://activity-static.hoopchina.com.cn/files/237262094e4212b2b72003f62e3069e8_w_1200_h_675_.png' },
  { rank: 26, name: 'Moustapha Thiam',    url: 'https://activity-static.hoopchina.com.cn/files/674d300a626ebdc83e4d51c28190bad3_w_997_h_1396_.png' },
  { rank: 27, name: 'Baba Oladotun',      url: 'https://activity-static.hoopchina.com.cn/files/8dc9948ffbfb1a80a1cfc44befcbafa6.png' },
  { rank: 28, name: 'Mor Massamba Diop',  url: 'https://activity-static.hoopchina.com.cn/files/58c5743d146fa12d32d9b22536e7c52b_w_600_h_436_.png' },
  { rank: 29, name: 'Trey McKenney',      url: 'https://activity-static.hoopchina.com.cn/files/778f4e09d47f494537f9187f25491a96_w_1280_h_853_.png' },
  { rank: 30, name: 'Shelton Henderson',  url: 'https://activity-static.hoopchina.com.cn/files/ac9bcffed3f5f8da26bc3fd1d8531acf_w_1638_h_1133_.png' },
  /* —— 2027 次轮补充（24 人，图片为用户提供 27-XX 链接，按顺位一一对应；34 顺位为 jpg）—— */
  { rank: 31, name: 'Klark Riethauser',    url: 'https://activity-static.hoopchina.com.cn/files/c5dd587f4d8177740f50f04355ef0653_w_330_h_282_.png' },
  { rank: 32, name: 'Paul Mbiya',          url: 'https://activity-static.hoopchina.com.cn/files/224cfa475374ece09cc8e859ab9a3dd9_w_436_h_509_.png' },
  { rank: 34, name: 'Milon Momcilovic',    url: 'https://activity-static.hoopchina.com.cn/files/edcfb4d523bd3f1f3f14cfe55bc9d55a_w_1200_h_800_.png' },
  { rank: 36, name: 'Arafan Diane',        url: 'https://activity-static.hoopchina.com.cn/files/defbf994a846ad40e31313bbd2570024_w_570_h_497_.png' },
  { rank: 37, name: 'David Mirkovic',      url: 'https://activity-static.hoopchina.com.cn/files/34851b2719964aae6c19ad38e6aeccb7_w_270_h_266_.png' },
  { rank: 38, name: 'Matas Vokietaitis',   url: 'https://activity-static.hoopchina.com.cn/files/bce80f4c3cbd2b6f8df6226467a8b2ec_w_304_h_248_.png' },
  { rank: 39, name: 'Neoklis Avdalas',     url: 'https://activity-static.hoopchina.com.cn/files/be987c51b3acf122b32e4bbec722d8f4_w_368_h_229_.png' },
  { rank: 41, name: 'Alex Condon',         url: 'https://activity-static.hoopchina.com.cn/files/69370fdf98728ba2e83f7cce103718d1_w_352_h_219_.png' },
  { rank: 42, name: 'Miikka Muurinen',     url: 'https://activity-static.hoopchina.com.cn/files/2e48c82dd541caa1cf49896dc895f531_w_470_h_390_.png' },
  { rank: 43, name: 'Daniel Jacobsen',     url: 'https://activity-static.hoopchina.com.cn/files/dc71f695e20952d54d8722140b8d8ea5_w_368_h_256_.png' },
  { rank: 44, name: 'Billy Richmond',      url: 'https://activity-static.hoopchina.com.cn/files/b23ae3a1dac66f8ca1fb956ae600a43f_w_398_h_219_.png' },
  { rank: 45, name: 'Matt Able',           url: 'https://activity-static.hoopchina.com.cn/files/daa06496ce69e37bf52b082c08c0c9cf_w_460_h_391_.png' },
  { rank: 46, name: 'Coen Carr',           url: 'https://activity-static.hoopchina.com.cn/files/e65afb56de0c53c86a922a7e49c330a0_w_301_h_196_.png' },
  { rank: 47, name: 'John Blackwell',      url: 'https://activity-static.hoopchina.com.cn/files/d0b60eee000e543a16ec36d3ee2d9c03_w_465_h_333_.png' },
  { rank: 48, name: 'Adam Atamna',         url: 'https://activity-static.hoopchina.com.cn/files/65b5ee6c590e76e038c01ba8dfe60322_w_424_h_275_.png' },
  { rank: 49, name: 'Andrej Stojakovic',   url: 'https://activity-static.hoopchina.com.cn/files/480748af57cb5191fddc0d39527862e3_w_460_h_453_.png' },
  { rank: 50, name: 'Paul McNeil Jr.',     url: 'https://activity-static.hoopchina.com.cn/files/f12b81915a1be9e8d913f5cefb4a9d91_w_436_h_178_.png' },
  { rank: 51, name: 'Jacob Cofie',         url: 'https://activity-static.hoopchina.com.cn/files/416d60a36bf1c51685de0fc7f9846c94_w_328_h_254_.png' },
  { rank: 53, name: 'Juke Harris',         url: 'https://activity-static.hoopchina.com.cn/files/bf2aeae1510dfa4d0667f49b30a4dc10_w_358_h_204_.png' },
  { rank: 54, name: 'Flory Bidunga',       url: 'https://activity-static.hoopchina.com.cn/files/0a3e063554b2c5158f97f7dffd13bbad_w_454_h_527_.png' },
  { rank: 55, name: 'Cayden Boozer',       url: 'https://activity-static.hoopchina.com.cn/files/5cbdc018cd86c755ee4307c9eac5660f_w_427_h_253_.png' },
  { rank: 56, name: 'Matthys Mahop',       url: 'https://activity-static.hoopchina.com.cn/files/bec85193ca89206bc399e23b2d773852_w_394_h_317_.png' },
  { rank: 57, name: 'Oscar Wembanyama',    url: 'https://activity-static.hoopchina.com.cn/files/4d6ed7c83099bf58bc1975c3e0f51fc2_w_385_h_296_.png' },
  { rank: 59, name: 'Tomislav Ivisic',     url: 'https://activity-static.hoopchina.com.cn/files/1fea0bbb8589f3409fce0d9b7cc4448d_w_458_h_237_.png' }
];

/* 按排名索引：PROSPECT_PHOTO_BY_RANK[1] -> { name, url } */
const PROSPECT_PHOTO_BY_RANK = {};
PROSPECT_PHOTOS.forEach(function (p) { PROSPECT_PHOTO_BY_RANK[p.rank] = p; });
