---
title: Jenkins
---

## SMTP
```
openssl x509 -in <(openssl s_client -connect smtp.neusoft.com:587 -starttls smtp -prexit 2>/dev/null) -out ~/ca.pem
openssl x509 -in ~/ca.pem -inform pem -out ~/ca.der -outform der
# validate
keytool -v -printcert -file ~/ca.der

# import
keytool -importcert -alias startssl -keystore /var/lib/jenkins/cacerts -storepass password -file ~/ca.der
```

## Install
```
apt-key adv --keyserver keyserver.ubuntu.com --keyserver-option http-proxy=http://10.1.43.235:3128 --recv-keys 9B7D32F2D50582E6
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-get update && apt-get install jenkins
```

## Jenkins Speedup
```
# See https://www.cnblogs.com/kazihuo/p/12598940.html
# default.json
sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json && sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' default.json
```

```
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-get update
apt-get install jenkins
```

## 添加Jenkins用户
```
useradd jenkins --create-home --home /custom/jenkins --user-group --shell /bin/bash
```

## 拷贝依赖的Lib的脚本
```
#!/bin/bash

TARGET_ROOT=chroot
list="$(ldd $1 | egrep -o '/lib.*\.[0-9]')"

DIR="$( dirname "${TARGET_ROOT}$1" )"
mkdir -p $DIR
cp  -v "$1" "${TARGET_ROOT}$1";

for i in $list
do
        DIR="$( dirname "${TARGET_ROOT}${i}" )"
        mkdir -p $DIR

        cp  -v "$i" "${TARGET_ROOT}${i}";
done
```

## mount /dev
```
mount -o bind /dev /chroot/dev
```

 * [chroot環境を作る](http://d.hatena.ne.jp/kdaiba/20101229/p3)
