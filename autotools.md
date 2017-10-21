---
title: Autotools
---

 * [The magic behind configure, make, make install](https://robots.thoughtbot.com/the-magic-behind-configure-make-make-install)
 * [autoconf和automake的使用](https://yuchen112358.github.io/2016/04/25/auto-tool/)
 * [Tutorial for Autoconf, Automake and Libtool](https://sourceware.org/autobook/)

## 目录结构
 * sources in src/
 * documentation in doc/
 * man pages in man/
 * some scripts in scripts/ (in general, stuff to be installed but not compiled)
 * examples in examples/

## Steps
```
autoscan
mv configure.scan configure.ac
vim configure.ac # 变更一些设定
autoreconf -fi
```

## Full Steps
### 1. 安装 autoconf和automake
```
sudo apt-get install autoconf
```

### 2. 创建一个源程序，命名为helloworld.c
```
#include <stdio.h>

int main(int argc, char** argv)
{
        printf("%s", "Hello, Linux World!\n");
        return 0;
}
```

### 3. 使用autoscan工具生成configure.scan（和似乎没有用的autoscan.log）
```
autoscan
```

### 4. 将configure.scan重新命名为configure.ac,并修改相关内容
```
mv configure.scan configure.ac
```
```
####################### 原文件 #####################################
#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT([FULL-PACKAGE-NAME], [VERSION], [BUG-REPORT-ADDRESS])
AC_CONFIG_SRCDIR([helloworld.c])
AC_CONFIG_HEADERS([config.h])

# Checks for programs.
AC_PROG_CC

# Checks for libraries.

# Checks for header files.

# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.

AC_OUTPUT
```
```
####################### 变更后 #####################################
#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.69])
AC_INIT([FULL-PACKAGE-NAME], [1.0], [sanbrother@hotmail.com])

# manually added
AM_INIT_AUTOMAKE

AC_CONFIG_SRCDIR([helloworld.c])
AC_CONFIG_HEADERS([config.h])

# Checks for programs.
AC_PROG_CC

# Checks for libraries.

# Checks for header files.

# Checks for typedefs, structures, and compiler characteristics.

# Checks for library functions.

# AC_OUTPUT
AC_OUTPUT(Makefile)
```

### 5. 使用aclocal工具生成aclocal.m4（和autom4te.cache/）
```
aclocal
```
