### 自动分区

```
diskpart /s scriptname.txt
```

### WIM
```
dism /export-image /SourceImageFile:install.esd /SourceIndex:1 /DestinationImageFile:D:\install.wim /Compress:max /CheckIntegrity
dism /Split-Image /ImageFile:D:\install.wim /SWMFile:D:\wim_splitted\install.swm /FileSize:3000
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

### 安装U盘的结构分析
```
.
├── Boot                => Windows 10 ISO根目录下的Boot
├── Config              => 
├── DiskScript          =>
├── EFI                 => Windows 10 ISO根目录下的EFI
├── image               => Windows 10 ISO根目录下的sources目录下的install.esd转换出来的文件
├── Product             => 各机型的驱动
├── sources             => Windows 10 ISO根目录下的sources?(只需要boot.wim?)
├── bootmgr             => Windows 10 ISO根目录下的同名文件
└── bootmgr.efi         => Windows 10 ISO根目录下的同名文件
```
