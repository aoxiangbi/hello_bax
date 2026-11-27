// ── 球队队标映射 ──
// 将中文队名映射到虎扑队标图片 URL
// guess.html 通过 getTeamLogo(name) 调用本文件
var TEAM_LOGOS = {
  // ── 现代球队（30支）──
  '老鹰': 'https://activity-static.hoopchina.com.cn/files/26612-t5b21erc-upload-1781237739326-44.png',   // ATL
  '篮网': 'https://activity-static.hoopchina.com.cn/files/26612-xptpjtrc-upload-1781237796378-12.png',   // BKN
  '凯尔特人': 'https://activity-static.hoopchina.com.cn/files/26612-ccjancrc-upload-1781237796378-15.png', // BOS
  '黄蜂': 'https://activity-static.hoopchina.com.cn/files/26612-4los1nrc-upload-1781237796378-18.png',   // CHA
  '公牛': 'https://activity-static.hoopchina.com.cn/files/26612-248zl7rc-upload-1781237796378-21.png',   // CHI
  '骑士': 'https://activity-static.hoopchina.com.cn/files/26612-9373nkrc-upload-1781237796378-24.png',   // CLE
  '独行侠': 'https://activity-static.hoopchina.com.cn/files/26612-ye2ck7rc-upload-1781237796378-27.png', // DAL
  '掘金': 'https://activity-static.hoopchina.com.cn/files/26612-v4su4prc-upload-1781237796378-30.png',   // DEN
  '活塞': 'https://activity-static.hoopchina.com.cn/files/26612-ce809crc-upload-1781237796378-33.png',   // DET
  '勇士': 'https://activity-static.hoopchina.com.cn/files/26612-jytyisrc-upload-1781237796378-36.png',   // GSW
  '火箭': 'https://activity-static.hoopchina.com.cn/files/26612-8x92ebrc-upload-1781237796378-39.png',   // HOU
  '步行者': 'https://activity-static.hoopchina.com.cn/files/26612-q4jolqrc-upload-1781237796378-42.png', // IND
  '快船': 'https://activity-static.hoopchina.com.cn/files/26612-y0fgwlrc-upload-1781237796378-45.png',   // LAC
  '湖人': 'https://activity-static.hoopchina.com.cn/files/26614-lqhvdqrc-upload-1781423262777-12.png',   // LAL
  '灰熊': 'https://activity-static.hoopchina.com.cn/files/26612-hkjdthrc-upload-1781237796378-51.png',   // MEM
  '热火': 'https://activity-static.hoopchina.com.cn/files/26612-wrdmc9rc-upload-1781237796378-54.png',   // MIA
  '雄鹿': 'https://activity-static.hoopchina.com.cn/files/26612-47m8grrc-upload-1781237796378-57.png',   // MIL
  '公鹿': 'https://activity-static.hoopchina.com.cn/files/26612-47m8grrc-upload-1781237796378-57.png',   // MIL（公鹿也用雄鹿队标）
  '森林狼': 'https://activity-static.hoopchina.com.cn/files/26612-6y471frc-upload-1781237796378-60.png', // MIN
  '鹈鹕': 'https://activity-static.hoopchina.com.cn/files/26612-q64i2mrc-upload-1781237796378-63.png',   // NOP
  '尼克斯': 'https://activity-static.hoopchina.com.cn/files/26612-ltjvjerc-upload-1781237796378-66.png', // NYK
  '雷霆': 'https://activity-static.hoopchina.com.cn/files/26612-103adgrc-upload-1781237796378-69.png',   // OKC
  '魔术': 'https://activity-static.hoopchina.com.cn/files/26612-0i4175rc-upload-1781237796378-72.png',   // ORL
  '76人': 'https://activity-static.hoopchina.com.cn/files/26612-s2kbz8rc-upload-1781237796378-75.png',   // PHI
  '太阳': 'https://activity-static.hoopchina.com.cn/files/26612-iffq4vrc-upload-1781237796378-78.png',   // PHX
  '开拓者': 'https://activity-static.hoopchina.com.cn/files/26612-v2vg2xrc-upload-1781237796378-81.png', // POR
  '国王': 'https://activity-static.hoopchina.com.cn/files/26612-9g4x3qrc-upload-1781237796378-84.png',   // SAC
  '马刺': 'https://activity-static.hoopchina.com.cn/files/26612-op4gosrc-upload-1781237796378-87.png',   // SAS
  '猛龙': 'https://activity-static.hoopchina.com.cn/files/26612-yowkavrc-upload-1781237796378-90.png',   // TOR
  '爵士': 'https://activity-static.hoopchina.com.cn/files/26612-rb5rxsrc-upload-1781237796378-93.png',   // UTA
  '奇才': 'https://activity-static.hoopchina.com.cn/files/26612-7t2yj4rc-upload-1781237796378-96.png',   // WAS

  // ── 复古球队 ──
  '超音速': 'https://i1.hoopchina.com.cn/newsPost/c63d1e68218ccb22846745c14b14b710_w_1536_h_1024_.png',   // 西雅图超音速
  '勇敢者': 'https://i1.hoopchina.com.cn/newsPost/0f1ee9e07759738568f0f481a1c3686b_w_456_h_438_.png',       // 布法罗勇敢者
  '包装工': 'https://i1.hoopchina.com.cn/newsPost/fa0f6bd3888326658121aac29799b642_w_519_h_718_.png',
  '反叛者': 'https://i1.hoopchina.com.cn/newsPost/e54419759263833f71e745f54be75aab_w_905_h_505_.png',
  '喷气机': 'https://i3.hoopchina.com.cn/newsPost/f510efde1cba57b3ff8ad6c316034a67_w_512_h_512_.png',
  '国会': 'https://i5.hoopchina.com.cn/newsPost/6432613c3fb8027210fb390f45f5d5e8_w_915_h_1077_.png',       // 华盛顿国会
  '子弹': 'https://i3.hoopchina.com.cn/newsPost/0f1d7ae6ffe3157156e82cffe254ffb3_w_348_h_249_.png',        // 巴尔的摩子弹
  '华盛顿子弹': 'https://i5.hoopchina.com.cn/newsPost/9bb2ac9a42dc72b825f0a1db466dafff_w_3840_h_2160_.png',
  '民族': 'https://i1.hoopchina.com.cn/newsPost/554827592e389f6dd68e9d90498b9568_w_200_h_221_.png',        // 锡拉丘兹民族
  '爱斯基摩犬': 'https://i5.hoopchina.com.cn/newsPost/42f9e1607f9c508bd5f7ba09324d79e5_w_296_h_207_.jpeg',
  '猎鹰': 'https://i1.hoopchina.com.cn/newsPost/110cc8bbf35c8bb0feddf46cc5efebda_w_576_h_347_.png',
  '皇家': 'https://i1.hoopchina.com.cn/newsPost/518ca9e67464e6d73e46c2dd378a8278_w_281_h_269_.png',        // 罗切斯特皇家
  '红皮': 'https://i3.hoopchina.com.cn/newsPost/cd97d999f14624a8c5b085393b6b3d49_w_554_h_554_.jpeg',
  '蒸汽压路机': 'https://i3.hoopchina.com.cn/newsPost/8ee7a58231b0d3f379f53abc35532709_w_223_h_225_.jpeg',
  '西风': 'https://i5.hoopchina.com.cn/newsPost/13f7e94f48ab53d2c2a1467348328313_w_307_h_284_.png',        // 芝加哥西风
  '轰炸机': 'https://i1.hoopchina.com.cn/newsPost/46e400f14381bdc72e35ff1442289d6a_w_264_h_191_.png',
  '铁人': 'https://i1.hoopchina.com.cn/newsPost/d310bccaa98e854f985b805f9f508552_w_225_h_225_.jpeg',
  '黑鹰': 'https://i3.hoopchina.com.cn/newsPost/b26d3f63a1f82ef7ad3d6aaf50b21f5f_w_1500_h_1131_.jpeg',
  '费城勇士': 'https://i3.hoopchina.com.cn/newsPost/20851d88108df11914d68228c8c1081b_w_250_h_250_.png'
};

// 供 guess.html 调用的队标查询函数
function getTeamLogo(name) {
  return TEAM_LOGOS[name] || null;
}
