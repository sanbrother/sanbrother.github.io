---
title : Joomla
---

 * [Debian 9 LAMP Server Tutorial with Apache, PHP 7 and MariaDB
](https://www.howtoforge.com/tutorial/install-apache-with-php-and-mysql-lamp-on-debian-stretch/)

### Installing MariaDB as MySQL replacement
```
apt-get -y install mariadb-server mariadb-client
mysql_secure_installation
```

### Installing Apache web server
```
apt-get -y install apache2
```

### Installing PHP 7.1
```
apt-get -y install php7.0 libapache2-mod-php7.0
service apache2 restart
```

### Getting MySQL and MariaDB Support in PHP
```
apt-get -y install php7.0-mysql php7.0-curl php7.0-gd php7.0-intl php-pear php-imagick php7.0-imap php7.0-mcrypt php-memcache php7.0-pspell php7.0-recode php7.0-sqlite3 php7.0-tidy php7.0-xmlrpc php7.0-xsl
service apache2 restart
```

### PHP Cache to improve the PHP speed
```
php --version
apt-get -y install php7.0-opcache
apt-get -y install php-apcu
service apache2 restart
```

### phpMyAdmin
```
apt-get -y install phpmyadmin
```

### Enable MySQL root Login for phpMyAdmin
```
echo "UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE user = 'root' AND plugin = 'unix_socket';FLUSH PRIVILEGES;" | mysql -u root -p
```

### Set ownerships and permissions
```
chown -LR www-data:www-data /var/www/joomla
find -L /var/www/joomla -type f -exec chmod 0644 {} \;
find -L /var/www/joomla -type d -exec chmod 0755 {} \;
```
