## 部分汉字显示不正常的问题
/etc/fonts/conf.avail/64-language-selector-prefer.conf

## 解决文件浏览器不能通过键盘快速跳转（而是进行搜索的动作）的问题
```
apt-get remove nautilus

add-apt-repository ppa:lubomir-brindza/nautilus-typeahead
apt-get install nautilus
```

---
title : Linux
---
## Thunderbird Tray
```bash
add-apt-repository ppa:linuxuprising/apps
apt-get update
apt install birdtray
```

## Disable auto sleep
```bash
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

## Java HOME
```bash
# /etc/profile.d/java_home.sh
export JAVA_HOME=`echo $(dirname $(readlink $(readlink $(which java)))) | sed -e 's/\/bin$//g' | sed -e 's/\/jre$//g'`
```

## FreeRDP shortcut
/usr/share/applications/freerdp.desktop
```
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Icon[en_US]=gnome-panel-launcher
Name[en_US]=xfreerdp
Exec=xfreerdp +clipboard /monitors:1 /multimon /fonts /u:user /p:password /v:10.1.43.8
Name=rdp
Icon=gnome-panel-launcher
Comment=1440x800
```

## Fix terminal title after SSH remote logging to another machine
```
# Solution: add some functions ~/.bashrc to do something after ssh and su commands

function title()
{
   # change the title of the current window or tab
   echo -ne "\033]0;$*\007"
}

function ssh()
{
   /usr/bin/ssh "$@"
   # revert the window title after the ssh command
   title $USER@$HOST
}

function su()
{
   /bin/su "$@"
   # revert the window title after the su command
   title $USER@$HOST
}

# And .bash_profile (if necessary)
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi

```

## $USER@$HOST
```
# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
        # We have color support; assume it's compliant with Ecma-48
        # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
        # a case would tend to support setf rather than setaf.)
        color_prompt=yes
    else
        color_prompt=
    fi
fi

TITLEBAR='\[\e]0;\u@\h\a\]'
# Same thing.. but with octal ASCII escape chars
#TITLEBAR='\[\033]2;\u@\h\007\]'

if [ "$color_prompt" = yes ]; then
    PS1="${TITLEBAR}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\W\[\033[00m\]\$ "
else
    PS1="${TITLEBAR}\u@\h:\W\$ "
fi
unset color_prompt force_color_prompt
```

## NTP
```
# chrony
server time.neusoft.com iburst minpoll 8 maxpoll 14
```

## Compile Kernel
```shell
cp /boot/config-xxx .config
make oldconfig
make menuconfig
make EXTRAVERSION=-mock -j$(nproc)
sudo make modules_install
sudo make install
# ???
sudo update-grub
```

## [Color Scheme for Gnome Terminal](https://github.com/Mayccoll/Gogh)
## [Compile kernel module](https://wiki.archlinux.org/index.php/Compile_kernel_module)
## [Are message queues obsolete in linux?](https://stackoverflow.com/questions/967335/are-message-queues-obsolete-in-linux)
## [How to add an extra second hard drive on Linux LVM and increase the size of storage](https://www.cyberciti.biz/faq/howto-add-disk-to-lvm-volume-on-linux-to-increase-size-of-pool/)

## Dummy HCD
 * [https://blog.gimx.fr/dummy_hcd/](https://blog.gimx.fr/dummy_hcd/)

## Open Source Library
### IPC
 * ZeroMQ
 * gRPC
