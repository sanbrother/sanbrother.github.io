### 自动分区

```
diskpart /s scriptname.txt
```



整体思路：

1. 把Windows分区格式化、重新安装最新版本Windows10及驱动
2. 在Windows PE下、对Windows分区进行备份。（此处、利用了赠送的U盘中的脚本）



关于Windows PE、我利用了AOMEI PE Builder这个工具。制作好的PE直接写入到U盘、并且把Capture.cmd文件复制到U盘、重启后押下F12、从U盘启动就进入到Windows PE了



在执行Capture.cmd之前、还需要将各分区的盘符重新分配一下、脚本中是按照以下的方式分配的：

R=Onekey

S=ESP(EFI)

T=WinRE

W=Windows



打开Command Prompt、依次执行：

```
diskpart

select disk 0

select volume 1
remove letter=C
assign letter=W

select volume 3
assign letter=S

select volume 5
remove letter=F
assign letter=R

select volume 6
remove letter=G
assign letter=T
```



在Command Prompt下、执行Capture.cmd、如果顺利就备份成功了

