### build libnfc
```
apt-get install build-essential autoconf libtool libusb-dev pkg-config
git clone https://github.com/nfc-tools/libnfc.git
autoreconf -is
# ./configure
# PN532 Only
./configure --with-drivers=pn53x_usb --prefix=/usr --sysconfdir=/etc
make && sudo make install
sudo mkdir /etc/nfc
sudo cp libnfc.conf.sample /etc/nfc/libnfc.conf
```

### build mfcuk
```
git clone https://github.com/nfc-tools/mfcuk.git
autoreconf -is
./configure
make
```

### PN532

https://github.com/zhovner/mfdread  
https://github.com/asdil12/mifare-view-dump

```
# clone a card : see https://blandais.github.io/mifare/en
./nfc-mfclassic W a u genuine.dmp
```

```
1. 取得加密卡密钥

放上加密卡、执行命令：

nohup mfcuk -C -R 0:A -s 250 -S 250 -v 3 > ~/progress.txt 2>& 1 &
# nohup mfcuk -C -R 3 -S 250 -s 250 -v 3 &
# mfcuk -C -R 0:A -s 250 -S 250
# (touch ~/begin_time && ./mfcuk -C -R 0:A -s 250 -S 250 -v 3 | tee ~/progress.txt && touch ~/end_time) &

有些卡耗时一天也不出结果、增加了Delay（-S -s）、好用了
# nohup ./mfcuk -C -R 3 -s 500 -S 500 -v 3 > ~/progress.txt 2>& 1 &

这一步时间非常长、最终会得到一个密钥、格式如123456789ABC



2. 备份加密卡

放上加密卡、执行命令：

mfoc -k 0x123456789ABC -O target.dmp



3. 记录加密卡的UID

放上加密卡、执行命令：

nfc-list

输出：

NFC device: pn532_uart:/dev/ttyUSB0 opened

1 ISO14443A passive target(s) found:

ISO/IEC 14443A (106 kbps) target:

    ATQA (SENS_RES): 00  04

       UID (NFCID1): aa  bb  cc  dd

      SAK (SEL_RES): 08

红色的就是UID



4. 备份空白卡

某宝上买的卡、是未加密的空白卡（有唯一的ID）、备份留用

放上空白卡、执行命令：

mfoc -O blank.dmp



5. 修改空白卡的UID（为了让手环能成功识别未加密的卡）

放上空白卡、执行命令：

nfc-mfsetuid aabbccdd    （就是步骤3取得的UID）



6. 用手环模拟步骤5修改过UID的空白卡

此时、模拟肯定是成功的、具体步骤参照手环的向导



7. 使用十六进制编辑工具、对target.dmp文件的Block0进行修改

Block0、是数据的前64个字节

原数据（红色是UID、蓝色是密钥A和B）：

00000000  aa bb cc dd 18 88 04 00  c0 8e 1e 55 4d 20 37 12

00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00

00000020  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00

00000030  4f 36 23 17 e0 46 08 77  8f 69 d5 73 d5 ba ae 8d

修改后的数据：

00000000  aa bb cc dd 18 88 04 00  c0 8e 1e 55 4d 20 37 12

00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00

00000020  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00

00000030  ff ff ff ff ff ff 08 77  8f 69 ff ff ff ff ff ff



8. 将修改过的target.dmp文件写入手环

把手环靠近PN532、执行命令：

nfc-mfclassic w a target.dmp (如果是写入UID卡、用W参数)

第一次好像提示了点什么错误信息、可以再写几次、就没有错误了
```

```
# Write new data and/or keys to previously written card, using key A:
nfc-mfclassic w A newdata.mfd mycard.mfd
nfc-mfclassic w B newdata.mfd mycard.mfd
nfc-mfclassic w a newdata.mfd mycard.mfd
nfc-mfclassic w b newdata.mfd mycard.mfd
```
