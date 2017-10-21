---
title: libharu
---

## How to use artificial italic font?
```
/* C# snippet */
float angleSkewX = 30;
float angleSkewY = 0;
float radianSkewX = (float)(angleSkewX / 180 * Math.PI);
float radianSkewY = (float)(angleSkewY / 180 * Math.PI);

page.SetFontAndSize(font, 20);

page.BeginText();
	page.SetTextMatrix(1, (float)Math.Tan(radianSkewY), (float)Math.Tan(radianSkewX), 1, 60, height - 205);
	page.ShowText(samp_text);
page.EndText();
```

## 必须静态链接zlib和libpng、否则总是提示libhpdf找不到?
不能使用最新的zlib和libpng  
已经验证过、zlib-1.2.7和libpng-1.2.49的组合是没有问题的  
猜测zlib升级到最新也没有关系、主要应该是libpng的兼容性造成的、毕竟libharu太老了

## 使用CMake编辑libharu的方法
 * libharu最新版本（已经好多年不更新了）
 * libz 1.2.11
 * libpng 1.6.34
 
### 编译libz
![image](https://github.com/sanbrother/sanbrother.github.io/raw/master/images/libz.png)

### 编译libpng
CMakeLists.txt文件需要稍微变更一下
```
-project(libpng ASM C)
+project(libpng C)
```
![image](https://github.com/sanbrother/sanbrother.github.io/raw/master/images/libpng.png)

### 编译libharu
