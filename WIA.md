### https://docs.microsoft.com/en-us/windows-hardware/drivers/image/index

### Self-signed driver?
```
# make certificate
makecert -r -sv C:\DriverCert\myDrivers.pvk -n CN="Cocoa" C:\DriverCert\myDrivers.cer
cert2spc C:\DriverCert\myDrivers.cer C:\DriverCert\myDrivers.spc
# pvk2pfx -pvk C:\DriverCert\myDrivers.pvk -pi P@ss0wrd -spc C:\DriverCert\myDrivers.spc -pfx C:\DriverCert\myDrivers.pfx -po P@ss0wrd
pvk2pfx -pvk C:\DriverCert\myDrivers.pvk -spc C:\DriverCert\myDrivers.spc -pfx C:\DriverCert\myDrivers.pfx

# install certificate
certmgr.exe -add C:\DriverCert\myDrivers.cer -s -r localMachine ROOT
certmgr.exe -add C:\DriverCert\myDrivers.cer -s -r localMachine TRUSTEDPUBLISHER

"C:\Program Files (x86)\Windows Kits\10\bin\x86\inf2cat.exe" /driver:"UNSIGNED_DRIVER_PATH" /os:10_X64 /verbose
signtool sign /f C:\DriverCert\myDrivers.pfx /p P@ss0wrd /v "UNSIGNED_DRIVER_PATH\XX.cat"
```

### 为什么驱动安装失败？
```
pnputil /enum-drivers > drivers.txt
pnputil /delete-driver oemXX.inf
```
