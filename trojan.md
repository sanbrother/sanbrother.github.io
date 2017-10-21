### Build

```
apt-get install cmake libboost-system1.67-dev libboost-program-options1.67-dev default-libmysqlclient-dev

# Upgrade OpenSSL to 1.1.1d
cd ~/openssl
./config shared --prefix=/usr/local/ssl --openssldir=/usr/local/ssl
make && make install

cd ~/trojan
mkdir build && cd build
cmake ../ -DOPENSSL_ROOT_DIR=/usr/local/ssl -DOPENSSL_LIBRARIES=/usr/local/ssl/lib
make && make install

LD_LIBRARY_PATH=/usr/local/ssl/lib trojan
```



```
curl -O https://raw.githubusercontent.com/atrandys/trojan/master/trojan_install.sh && chmod +x trojan_install.sh && ./trojan_install.sh
```

```
{
    "run_type": "client",
    "local_addr": "127.0.0.1",
    "local_port": 1080,
    "remote_addr": "www.c0c0a.club",
    "remote_port": 443,
    "password": [
        "TrojanNoP@ssword"
    ],
    "append_payload": true,
    "log_level": 1,
    "ssl": {
        "verify": true,
        "verify_hostname": true,
        "cert": "",
        "cipher": "TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "sni": "",
        "alpn": [
            "h2",
            "http/1.1"
        ],
        "reuse_session": true,
        "session_ticket": false,
        "curves": ""
    },
    "tcp": {
        "no_delay": true,
        "keep_alive": true,
        "fast_open": false,
        "fast_open_qlen": 20
    }
}

```
