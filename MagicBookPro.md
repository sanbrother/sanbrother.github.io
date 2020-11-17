### Office
```
https://account.microsoft.com/services/
```

### 自动分区

```
diskpart /s scriptname.txt
```

### WIM
```
dism /Get-WimInfo /WimFile:install.esd
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

### 重复的文件夹
```
Boot => Config\F10\WinPE\Boot
EFI => Config\F10\WinPE\EFI
```

### 重复的文件
```
- 2 equal files of size 480825168
  "Product\BOHK\InstallPackages\boot.wim"
  "Product\NBLK\InstallPackages\boot.wim"
- 2 equal files of size 350808095
  "Product\HBL\InstallPackages\boot.wim"
  "Product\VLR\InstallPackages\boot.wim"
- 2 equal files of size 3170304
  "Boot\boot.sdi"
  "Config\ChangeBCD\boot.sdi"
- 2 equal files of size 1509688
  "Config\F10\WinPE\bootmgr.efi"
  "bootmgr.efi"
- 2 equal files of size 518144
  "Config\Scanstate\DLManifests\Microsoft-Windows-RasServer-MigPlugin\RasMigPlugin.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-RasServer-MigPlugin\RasMigPlugin.dll"
- 2 equal files of size 409654
  "Config\F10\WinPE\bootmgr"
  "bootmgr"
- 2 equal files of size 343552
  "Config\Scanstate\DLManifests\microsoft-windows-iis-dl\iismig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-IIS-RM\iismig.dll"
- 2 equal files of size 199680
  "Config\Scanstate\DLManifests\Microsoft-Windows-Winsock-Core-Infrastructure-Upgrade\WsUpgrade.dll"
  "Config\Scanstate\ReplacementManifests\microsoft-windows-winsock\WsUpgrade.dll"
- 2 equal files of size 188928
  "Config\Scanstate\DLManifests\Microsoft-Windows-TextServicesFramework-Migration-DL\msctfmig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-TextServicesFramework-Migration\msctfmig.dll"
- 2 equal files of size 121344
  "Config\Scanstate\DLManifests\Microsoft-Windows-DirectoryServices-ADAM-DL\adammigrate.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-DirectoryServices-ADAM-Client\adammigrate.dll"
- 2 equal files of size 120320
  "Config\Scanstate\DLManifests\Microsoft-Windows-TextServicesFramework-Migration-DL\imjpmig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-TextServicesFramework-Migration\imjpmig.dll"
- 2 equal files of size 102912
  "Config\Scanstate\DLManifests\Microsoft-Windows-Bluetooth-Config\BthMigPlugin.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-BTH-USER\BthMigPlugin.dll"
- 2 equal files of size 101376
  "Config\Scanstate\DLManifests\Microsoft-Windows-TextServicesFramework-Migration-DL\ChxMig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-TextServicesFramework-Migration\ChxMig.dll"
- 2 equal files of size 100864
  "Config\Scanstate\DLManifests\Microsoft-Windows-NetworkBridge\BridgeMigPlugin.dll"
  "Config\Scanstate\ReplacementManifests\NetworkBridge\BridgeMigPlugin.dll"
- 2 equal files of size 93696
  "Config\Scanstate\DLManifests\Microsoft-ActiveDirectory-WebServices-DL\adwsmigrate.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-ActiveDirectory-WebServices\adwsmigrate.dll"
- 2 equal files of size 76288
  "Config\Scanstate\DLManifests\Microsoft-Windows-TextServicesFramework-Migration-DL\imkrmig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-TextServicesFramework-Migration\imkrmig.dll"
- 2 equal files of size 68608
  "Config\Scanstate\DLManifests\Microsoft-Windows-TextServicesFramework-Migration-DL\TableTextServiceMig.dll"
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-TextServicesFramework-Migration\TableTextServiceMig.dll"
- 3 equal files of size 13893
  "Config\Scanstate\ReplacementManifests\odbc32dll-Repl.man"
  "Config\Scanstate\ReplacementManifests7\odbc32dll-Repl.man"
  "Config\Scanstate\ReplacementManifests8\odbc32dll-Repl.man"
- 3 equal files of size 11951
  "Config\Scanstate\ReplacementManifests\Application-Experience-Program-Compatibility-Assistant-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\Application-Experience-Program-Compatibility-Assistant-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Application-Experience-Program-Compatibility-Assistant-Replacement.man"
- 2 equal files of size 8089
  "Config\Scanstate\sxs\SetupPlatform.cfg"
  "Config\Scanstate\SetupPlatform.cfg"
- 2 equal files of size 6363
  "Config\Scanstate\ReplacementManifests\PeerDist-Server-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\PeerDist-Server-Migration-Replacement.man"
- 2 equal files of size 6356
  "Config\Scanstate\ReplacementManifests\PeerDist-Client-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\PeerDist-Client-Migration-Replacement.man"
- 2 equal files of size 6131
  "Config\Scanstate\ReplacementManifests\RasBase-Rassstp-Repl.man"
  "Config\Scanstate\ReplacementManifests8\RasBase-Rassstp-Repl.man"
- 2 equal files of size 5955
  "Config\Scanstate\ReplacementManifests\RasBase-Repl.man"
  "Config\Scanstate\ReplacementManifests8\RasBase-Repl.man"
- 2 equal files of size 5929
  "Config\Scanstate\ReplacementManifests7\WindowsSearchEngine-replacement.man"
  "Config\Scanstate\ReplacementManifests8\WindowsSearchEngine-replacement.man"
- 2 equal files of size 4699
  "Config\Scanstate\ReplacementManifests\Internet-Naming-Service-Runtime-Rep.man"
  "Config\Scanstate\ReplacementManifests8\Internet-Naming-Service-Runtime-Rep.man"
- 3 equal files of size 4460
  "Config\Scanstate\ReplacementManifests\Rights-Management-Client-v1-API-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\Rights-Management-Client-v1-API-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Rights-Management-Client-v1-API-Replacement.man"
- 3 equal files of size 3998
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-Fax-Service-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\Microsoft-Windows-Fax-Service-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-Fax-Service-Replacement.man"
- 3 equal files of size 3019
  "Config\Scanstate\ReplacementManifests\ExtensibleAuthenticationProtocolHostService-Rep.man"
  "Config\Scanstate\ReplacementManifests7\ExtensibleAuthenticationProtocolHostService-Rep.man"
  "Config\Scanstate\ReplacementManifests8\ExtensibleAuthenticationProtocolHostService-Rep.man"
- 2 equal files of size 2848
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-IE-PDM-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-IE-PDM-Replacement.man"
- 2 equal files of size 2743
  "Config\Scanstate\ReplacementManifests\TerminalServices-SessionDirectory-Client-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\TerminalServices-SessionDirectory-Client-Replacement.man"
- 2 equal files of size 2423
  "Config\Scanstate\ReplacementManifests\sounds-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\sounds-Migration-Replacement.man"
- 2 equal files of size 2206
  "Config\Scanstate\ReplacementManifests\DisplayConfigSettings_Win7Update.man"
  "Config\Scanstate\ReplacementManifests8\DisplayConfigSettings_Win7Update.man"
- 2 equal files of size 2149
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-Identity-Foundation-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-Identity-Foundation-Migration-Replacement.man"
- 2 equal files of size 2147
  "Config\Scanstate\ReplacementManifests7\WSRM-Service-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\WSRM-Service-Replacement.man"
- 3 equal files of size 2057
  "Config\Scanstate\ReplacementManifests\eudcedit-replacement.man"
  "Config\Scanstate\ReplacementManifests7\eudcedit-replacement.man"
  "Config\Scanstate\ReplacementManifests8\eudcedit-replacement.man"
- 2 equal files of size 1928
  "Config\Scanstate\ReplacementManifests7\TabletPCStickyNotes-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\TabletPCStickyNotes-Replacement.man"
- 2 equal files of size 1814
  "Config\Scanstate\ReplacementManifests\RasRqs-Repl.man"
  "Config\Scanstate\ReplacementManifests8\RasRqs-Repl.man"
- 2 equal files of size 1786
  "Config\Scanstate\ReplacementManifests\VirtualDiskService-Repl.man"
  "Config\Scanstate\ReplacementManifests8\VirtualDiskService-Repl.man"
- 2 equal files of size 1731
  "Config\Scanstate\ReplacementManifests\TerminalServices-LicenseServer-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\TerminalServices-LicenseServer-Replacement.man"
- 2 equal files of size 1700
  "Config\Scanstate\ReplacementManifests7\SysMain-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\SysMain-Replacement.man"
- 2 equal files of size 1557
  "Config\Scanstate\ReplacementManifests\UDFS-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\UDFS-Replacement.man"
- 2 equal files of size 1446
  "Config\Scanstate\ReplacementManifests7\sysdm-replacement.man"
  "Config\Scanstate\ReplacementManifests8\sysdm-replacement.man"
- 2 equal files of size 1416
  "Config\Scanstate\ReplacementManifests7\stickyNotes-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\stickyNotes-Replacement.man"
- 3 equal files of size 1376
  "Config\Scanstate\ReplacementManifests\mmsys-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\mmsys-Migration-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\mmsys-Migration-Replacement.man"
- 2 equal files of size 1220
  "Config\Scanstate\ReplacementManifests7\Printing-LocalPrinting-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Printing-LocalPrinting-Replacement.man"
- 2 equal files of size 1161
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-PowerShell-WS08-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-PowerShell-WS08-Replacement.man"
- 3 equal files of size 1134
  "Config\Scanstate\ReplacementManifests\TerminalServices-AppServer-Licensing-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\TerminalServices-AppServer-Licensing-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\TerminalServices-AppServer-Licensing-Replacement.man"
- 2 equal files of size 1122
  "Config\Scanstate\ReplacementManifests7\shmig-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\shmig-replacement.man"
- 3 equal files of size 1083
  "Config\Scanstate\ReplacementManifests\TerminalServices-RAPWebPart-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\TerminalServices-RAPWebPart-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\TerminalServices-RAPWebPart-Replacement.man"
- 2 equal files of size 1052
  "Config\Scanstate\ReplacementManifests\TerminalServices-Gateway-UI-Package-R-Replacement.man"
  "Config\Scanstate\ReplacementManifests\TerminalServices-Gateway-UI-Package-Replacement.man"
- 2 equal files of size 1039
  "Config\Scanstate\ReplacementManifests\TerminalServices-Gateway-Package-R-Replacement.man"
  "Config\Scanstate\ReplacementManifests\TerminalServices-Gateway-Package-Replacement.man"
- 2 equal files of size 976
  "Config\Scanstate\ReplacementManifests\CertificateEnrollment-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\CertificateEnrollment-Replacement.man"
- 3 equal files of size 911
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-NETFX35CDFComp-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\Microsoft-Windows-NETFX35CDFComp-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-NETFX35CDFComp-Replacement.man"
- 3 equal files of size 865
  "Config\Scanstate\ReplacementManifests\Microsoft-Windows-WCFCoreComp-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\Microsoft-Windows-WCFCoreComp-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Microsoft-Windows-WCFCoreComp-Replacement.man"
- 2 equal files of size 863
  "Config\Scanstate\ReplacementManifests\Netfx4-Policy-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\Netfx4-Policy-Replacement.man"
- 3 equal files of size 860
  "Config\Scanstate\ReplacementManifests\WCF-NonHTTP-Activation-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\WCF-NonHTTP-Activation-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\WCF-NonHTTP-Activation-Replacement.man"
- 3 equal files of size 850
  "Config\Scanstate\ReplacementManifests\WCF-HTTP-Activation-Replacement.man"
  "Config\Scanstate\ReplacementManifests7\WCF-HTTP-Activation-Replacement.man"
  "Config\Scanstate\ReplacementManifests8\WCF-HTTP-Activation-Replacement.man"
- 6 equal files of size 823
  "Product\BOHK\LayoutModification.xml"
  "Product\HBL\LayoutModification.xml"
  "Product\HLY\LayoutModification.xml"
  "Product\KPR\LayoutModification.xml"
  "Product\NBLK\LayoutModification.xml"
  "Product\VLR\LayoutModification.xml"
```
