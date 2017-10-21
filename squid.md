---
title: Squid
---

## squid.conf
```
acl SSL_ports port 443
acl Safe_ports port 80		# http
acl Safe_ports port 21		# ftp
acl Safe_ports port 443		# https
acl Safe_ports port 70		# gopher
acl Safe_ports port 210		# wais
acl Safe_ports port 1025-65535	# unregistered ports
acl Safe_ports port 280		# http-mgmt
acl Safe_ports port 488		# gss-http
acl Safe_ports port 591		# filemaker
acl Safe_ports port 777		# multiling http
acl CONNECT method CONNECT

# added
acl mynetworks src "/etc/squid/acl/mynetworks.acl"
acl bad_sites dstdomain "/etc/squid/acl/bad-sites.acl"
acl bypass_address dst "/etc/squid/acl/bypass-sites.acl"
```
```
# Example rule allowing access from your local networks.
# Adapt localnet in the ACL section to list your (internal) IP networks
# from where browsing should be allowed
http_access allow localhost

# added
http_access allow mynetworks
http_access deny bad_sites

# bypass LAN address
always_direct allow bypass_address
cache deny bypass_sites

# And finally deny all other access to this proxy
http_access deny all
```
```
# added
cache_peer 172.30.50.10 parent 8080 0 no-query no-digest

# added
never_direct deny bad_sites
never_direct allow all

# OPTIONS WHICH AFFECT THE NEIGHBOR SELECTION ALGORITHM
# -----------------------------------------------------------------------------
```

## ShadowSocksR
 * [SSR Install](https://dcamero.azurewebsites.net/shadowsocksr.html#linux)
 * [Run as Daemon](https://www.linuxbabe.com/desktop-linux/how-to-install-and-use-shadowsocks-command-line-client)
 
## /etc/rc.local
```
iptables -t nat -A PREROUTING -d 192.168.0.0/16 -j RETURN
iptables -t nat -A PREROUTING -p tcp -s 192.168.31.0/24 -j REDIRECT --to-ports 1080

ss-redir -c /etc/shadowsocks.json &

exit 0
```
