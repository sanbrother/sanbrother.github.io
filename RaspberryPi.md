---
title: Raspberry Pi
---

* [How to set up up your Raspberry Pi to have a static IP address](https://www.ionos.com/digitalguide/server/configuration/provide-raspberry-pi-with-a-static-ip-address/)  
* [Livestreaming with a Raspberry Pi](https://ant.sr/streaming-webcam-raspi/)  
* [https://elinux.org/RPi_GPIO_Code_Samples](https://elinux.org/RPi_GPIO_Code_Samples)

```
# Edit the file /etc/dhcpcd.conf as follows:
# Type sudo vim /etc/dhcpcd.conf at the command prompt.
# Scroll to the bottom of the script, and add the following lines:

interface eth0

static ip_address=192.168.0.2/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1

interface wlan0

static ip_address=192.168.0.2/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
```

[GPIO](https://www.raspberrypi.org/documentation/usage/gpio/)  
![image](https://cdn.shopify.com/s/files/1/0176/3274/files/Pins_Only_grande.png?2408547127755526599)
 * [RPi GPIO Code Samples](https://elinux.org/RPi_GPIO_Code_Samples)
 * [Setup a Raspberry Pi for headless use with USB serial console](http://www.tal.org/tutorials/raspberry-pi-zero-usb-serial-console)
 * [Raspberry Pi GPIO Programming in C](https://www.bigmessowires.com/2018/05/26/raspberry-pi-gpio-programming-in-c/)

### Enable Serial Port Console
```
# For more options and information see
# http://rpf.io/configtxt
# Some settings may impact device functionality. See link above for details

# uncomment if you get no picture on HDMI for a default "safe" mode
#hdmi_safe=1

# uncomment this if your display has a black border of unused pixels visible
# and your display can output without overscan
#disable_overscan=1

# uncomment the following to adjust overscan. Use positive numbers if console
# goes off screen, and negative if there is too much border
#overscan_left=16
#overscan_right=16
#overscan_top=16
#overscan_bottom=16

# uncomment to force a console size. By default it will be display's size minus
# overscan.
#framebuffer_width=1280
#framebuffer_height=720

# uncomment if hdmi display is not detected and composite is being output
#hdmi_force_hotplug=1

# uncomment to force a specific HDMI mode (this will force VGA)
#hdmi_group=1
#hdmi_mode=1

# uncomment to force a HDMI mode rather than DVI. This can make audio work in
# DMT (computer monitor) modes
#hdmi_drive=2

# uncomment to increase signal to HDMI, if you have interference, blanking, or
# no display
#config_hdmi_boost=4

# uncomment for composite PAL
#sdtv_mode=2

#uncomment to overclock the arm. 700 MHz is the default.
#arm_freq=800

# Uncomment some or all of these to enable the optional hardware interfaces
#dtparam=i2c_arm=on
#dtparam=i2s=on
#dtparam=spi=on

# Uncomment this to enable the lirc-rpi module
#dtoverlay=lirc-rpi

# Additional overlays and parameters are documented /boot/overlays/README

# Enable audio (loads snd_bcm2835)
dtparam=audio=on

# The magic, enable serial port console
enable_uart=1
```
