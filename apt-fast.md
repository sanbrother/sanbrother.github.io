```bash
apt-get -y install axel aria2 software-properties-common
proxychains apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A2166B8DE8BDC3367D1901C11EE2FF37CA8DA16B
proxychains add-apt-repository ppa:apt-fast/stable
apt-get -y update
apt-get -y install apt-fast
```
