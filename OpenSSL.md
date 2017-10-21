### 到底用的哪个openssl.cnf文件呢？

```
openssl version -a
OpenSSL 1.0.2r  26 Feb 2019
built on: reproducible build, date unspecified
platform: linux-elf
options:  bn(64,32) rc4(8x,mmx) des(ptr,risc1,16,long) idea(int) blowfish(idx)
compiler: gcc -I. -I.. -I../include  -fPIC -DOPENSSL_PIC -DOPENSSL_THREADS -D_REENTRANT -DDSO_DLFCN -DHAVE_DLFCN_H -Wa,--noexecstack -DL_ENDIAN -O3 -fomit-frame-pointer -Wall -DOPENSSL_BN_ASM_PART_WORDS -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_GF2m -DRC4_ASM -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DMD5_ASM -DRMD160_ASM -DAES_ASM -DVPAES_ASM -DWHIRLPOOL_ASM -DGHASH_ASM
OPENSSLDIR: "/usr/local/ssl"
```

-rw-r--r-- 1 root root   9377 Jan 31 07:18 **/etc/ssl/openssl.cnf**  
lrwxrwxrwx 1 root root     20 Jul 30  2014 /usr/lib/ssl/openssl.cnf -> **/etc/ssl/openssl.cnf**

 * [https://stackoverflow.com/questions/18390833/no-version-information-available](https://stackoverflow.com/questions/18390833/no-version-information-available)
