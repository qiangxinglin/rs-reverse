const gv = require('../globalVarible');
const parser = require('../parser/');

const {
  fixedValue20,
  numToNumarr2,
  numToNumarr4,
  numToNumarr8,
  uuid,
  string2ascii,
  execRandomByNumber,
  ascii2string,
  numarrAddTime,
  decode,
  decrypt,
  encryptMode2,
  numarrJoin,
} = parser;

function getBasearr(hostname, config) {
  const isLongCookie = config.pcookieMode === 'len202';
  gv.config.adapt.hasDebug = isLongCookie;

  return numarrJoin(
    3,
    numarrJoin(
      1,
      config['window.navigator.maxTouchPoints'] ?? 0,
      config['window.eval.toString().length'] ?? 33,
      128,
      ...numToNumarr4(uuid(config['window.navigator.userAgent'])),
      string2ascii(config['window.navigator.platform'] || 'Linux x86_64'),
      ...numToNumarr4(config.execNumberByTime ?? 0),
      ...execRandomByNumber(98, config.random),
      0,
      0,
    ),
    10,
    [
      0,
      isLongCookie ? 2 : 1,
      ...numToNumarr4(config.r2mkaTime + config.runTime - config.startTime),
      ...numToNumarr4(+ascii2string(gv.keys[19])),
      ...numToNumarr8(
        Math.floor((config.random || Math.random()) * 1048575) * 4294967296 +
          ((config.currentTime & 4294967295) >>> 0),
      ),
    ],
    7,
    [
      ...numToNumarr4(isLongCookie ? 0x01010000 : 0x01000000),
      ...numToNumarr4(0),
      ...numToNumarr2(3856),
      ...numToNumarr2(config.codeUid),
    ],
    0,
    [0],
    6,
    [
      1,
      ...numToNumarr2(0),
      ...numToNumarr2(0),
      config['window.document.hidden'] ? 0 : 1,
      ...encryptMode2(
        decrypt(ascii2string(gv.keys[22])),
        numarrAddTime(gv.keys[16])[0],
      ),
      ...numToNumarr2(+decode(decrypt(ascii2string(gv.keys[22])))),
    ],
    2,
    fixedValue20(),
    9,
    isLongCookie ? [11, 100, 0, 0, 0] : [8, 0],
    13,
    [0],
  );
}

Object.assign(getBasearr, {
  adapt: ['Q0FeUhdaVkxLTRdeVk8XWlc='],
  lastWord: 'P',
  noPrefix: true,
  timeTail: [0],
});

module.exports = getBasearr;
