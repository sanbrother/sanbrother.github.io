[https://www.linuxfromscratch.org/blfs/view/svn/multimedia/speex.html](https://www.linuxfromscratch.org/blfs/view/svn/multimedia/speex.html)

```bash
# 关键包，否则不编译speexenc/speexdec
apt-get install libogg-dev
./configure --enable-binaries --disable-static
```
