export const config = { runtime: "edge" };

const _0x4f2a = [
  "x-forwarded-port", "x-forwarded-proto", "x-forwarded-host", "forwarded", 
  "upgrade", "transfer-encoding", "trailer", "te", "proxy-authorization", 
  "proxy-authenticate", "keep-alive", "connection", "host", "x-real-ip", 
  "x-forwarded-for", "x-vercel-", "half", "manual", "GET", "HEAD", "status",
  "Misconfigured: TARGET_DOMAIN is not set", "Bad Gateway: Tunnel Failed", "relay error:"
];

const _0x1b9d = (index) => _0x4f2a[index];

const _0x51c2a1 = (process.env.TARGET_DOMAIN || "")["replace"](/\/$/, "");
const _0x33e1f2 = new Set([
  _0x1b9d(0), _0x1b9d(1), _0x1b9d(2), _0x1b9d(3), _0x1b9d(4), _0x1b9d(5),
  _0x1b9d(6), _0x1b9d(7), _0x1b9d(8), _0x1b9d(9), _0x1b9d(10), _0x1b9d(11), _0x1b9d(12)
]);

export default async function (_0x4829a1) {
  if (!_0x51c2a1) {
    return new Response(_0x1b9d(21), { [_0x1b9d(20)]: 500 });
  }

  try {
    const _0x228f1a = _0x4829a1["url"]["indexOf"]("/", 8);
    const _0x59ba21 = _0x228f1a === -1 ? _0x51c2a1 + "/" : _0x51c2a1 + _0x4829a1["url"]["slice"](_0x228f1a);

    const _0x11c2b5 = new Headers();
    let _0x3da2c1 = null;

    for (const [_0x99a1b2, _0x55c2e1] of _0x4829a1["headers"]) {
      const _0x77f2d1 = _0x99a1b2["toLowerCase"]();
      if (_0x33e1f2["has"](_0x77f2d1) || _0x77f2d1["startsWith"](_0x1b9d(15))) continue;
      
      if (_0x77f2d1 === _0x1b9d(13)) {
        _0x3da2c1 = _0x55c2e1;
        continue;
      }
      if (_0x77f2d1 === _0x1b9d(14)) {
        if (!_0x3da2c1) _0x3da2c1 = _0x55c2e1;
        continue;
      }
      _0x11c2b5["set"](_0x99a1b2, _0x55c2e1);
    }

    if (_0x3da2c1) _0x11c2b5["set"](_0x1b9d(14), _0x3da2c1);

    const _0xbc221a = _0x4829a1["method"];
    const _0x44d21e = _0xbc221a !== _0x1b9d(18) && _0xbc221a !== _0x1b9d(19);

    const _0x5d2e11 = {
      method: _0xbc221a,
      headers: _0x11c2b5,
      body: _0x44d21e ? _0x4829a1["body"] : undefined,
      duplex: _0x1b9d(16),
      redirect: _0x1b9d(17)
    };

    return await fetch(_0x59ba21, _0x5d2e11);
  } catch (_0x3c2b1a) {
    console["error"](_0x1b9d(23), _0x3c2b1a);
    return new Response(_0x1b9d(22), { [_0x1b9d(20)]: 502 });
  }
}
