```bash
apt-get install xorgxrdp xrdp
usermod -a -G ssl-cert xrdp
```

### /etc/polkit-1/localauthority.conf.d/02-allow-colord.conf
```
polkit.addRule(function(action, subject) {
 if ((action.id == "org.freedesktop.color-manager.create-device" ||
 action.id == "org.freedesktop.color-manager.create-profile" ||
 action.id == "org.freedesktop.color-manager.delete-device" ||
 action.id == "org.freedesktop.color-manager.delete-profile" ||
 action.id == "org.freedesktop.color-manager.modify-device" ||
 action.id == "org.freedesktop.color-manager.modify-profile") &&
 subject.isInGroup("{users}")) {
 return polkit.Result.YES;
 }
});
```

```bash
xfreerdp /fonts /u:Jenkins /p:password /w:1440 /h:900 /bpp:24 /network:lan /rfx /v:10.1.48.71
```
