---
title: Raspberry Pi
---
* [Android 9 Pie device configuration for Raspbery Pi 3 Model B & B+](https://github.com/brobwind/pie-device-brobwind-rpi3)

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

## Blink
```c
#include <wiringPi.h>
#include <stdio.h>

#define PIN_LED 0
#define PIN_KEY 1

int main(void)
{
  wiringPiSetup();
  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_KEY, INPUT);
  pullUpDnControl(PIN_KEY, PUD_DOWN);

  digitalWrite(PIN_LED, LOW);

  for (;;)
  {
    if (digitalRead(PIN_KEY) == HIGH)
    {
      digitalWrite(PIN_LED, HIGH);
      delay(1000);
      digitalWrite(PIN_LED, LOW);
      delay(1000);
      printf("^_^\n");
    }
  }

  return 0;
}
```

## sysfs poll gpio
```c
/* Copyright (c) 2011, RidgeRun 
 * All rights reserved. 
 *  
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met: 
 * 1. Redistributions of source code must retain the above copyright 
 *    notice, this list of conditions and the following disclaimer. 
 * 2. Redistributions in binary form must reproduce the above copyright 
 *    notice, this list of conditions and the following disclaimer in the 
 *    documentation and/or other materials provided with the distribution. 
 * 3. All advertising materials mentioning features or use of this software 
 *    must display the following acknowledgement: 
 *    This product includes software developed by the RidgeRun. 
 * 4. Neither the name of the RidgeRun nor the 
 *    names of its contributors may be used to endorse or promote products 
 *    derived from this software without specific prior written permission. 
 *  
 * THIS SOFTWARE IS PROVIDED BY RIDGERUN ''AS IS'' AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
 * DISCLAIMED. IN NO EVENT SHALL RIDGERUN BE LIABLE FOR ANY 
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND 
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */  
  
#include <stdio.h>  
#include <stdlib.h>  
#include <string.h>  
#include <errno.h>  
#include <unistd.h>  
#include <fcntl.h>  
#include <poll.h>  
  
 /**************************************************************** 
 * Constants 
 ****************************************************************/  
   
#define SYSFS_GPIO_DIR "/sys/class/gpio"  
#define POLL_TIMEOUT (3 * 1000) /* 3 seconds */  
#define MAX_BUF 64  
  
/**************************************************************** 
 * gpio_export 
 ****************************************************************/  
int gpio_export(unsigned int gpio)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
   
    fd = open(SYSFS_GPIO_DIR "/export", O_WRONLY);  
    if (fd < 0) {  
        perror("gpio/export");  
        return fd;  
    }  
   
    len = snprintf(buf, sizeof(buf), "%d", gpio);  
    write(fd, buf, len);  
    close(fd);  
   
    return 0;  
}  
  
/**************************************************************** 
 * gpio_unexport 
 ****************************************************************/  
int gpio_unexport(unsigned int gpio)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
   
    fd = open(SYSFS_GPIO_DIR "/unexport", O_WRONLY);  
    if (fd < 0) {  
        perror("gpio/export");  
        return fd;  
    }  
   
    len = snprintf(buf, sizeof(buf), "%d", gpio);  
    write(fd, buf, len);  
    close(fd);  
    return 0;  
}  
  
/**************************************************************** 
 * gpio_set_dir 
 ****************************************************************/  
int gpio_set_dir(unsigned int gpio, unsigned int out_flag)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
   
    len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR  "/gpio%d/direction", gpio);  
   
    fd = open(buf, O_WRONLY);  
    if (fd < 0) {  
        perror("gpio/direction");  
        return fd;  
    }  
   
    if (out_flag)  
        write(fd, "out", 4);  
    else  
        write(fd, "in", 3);  
   
    close(fd);  
    return 0;  
}  
  
/**************************************************************** 
 * gpio_set_value 
 ****************************************************************/  
int gpio_set_value(unsigned int gpio, unsigned int value)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
   
    len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/value", gpio);  
   
    fd = open(buf, O_WRONLY);  
    if (fd < 0) {  
        perror("gpio/set-value");  
        return fd;  
    }  
   
    if (value)  
        write(fd, "1", 2);  
    else  
        write(fd, "0", 2);  
   
    close(fd);  
    return 0;  
}  
  
/**************************************************************** 
 * gpio_get_value 
 ****************************************************************/  
int gpio_get_value(unsigned int gpio, unsigned int *value)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
    char ch;  
  
    len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/value", gpio);  
   
    fd = open(buf, O_RDONLY);  
    if (fd < 0) {  
        perror("gpio/get-value");  
        return fd;  
    }  
   
    read(fd, &ch, 1);  
  
    if (ch != '0') {  
        *value = 1;  
    } else {  
        *value = 0;  
    }  
   
    close(fd);  
    return 0;  
}  
  
  
/**************************************************************** 
 * gpio_set_edge 
 ****************************************************************/  
  
int gpio_set_edge(unsigned int gpio, char *edge)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
  
    len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/edge", gpio);  
   
    fd = open(buf, O_WRONLY);  
    if (fd < 0) {  
        perror("gpio/set-edge");  
        return fd;  
    }  
   
    write(fd, edge, strlen(edge) + 1);   
    close(fd);  
    return 0;  
}  
  
/**************************************************************** 
 * gpio_fd_open 
 ****************************************************************/  
  
int gpio_fd_open(unsigned int gpio)  
{  
    int fd, len;  
    char buf[MAX_BUF];  
  
    len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/value", gpio);  
   
    fd = open(buf, O_RDONLY | O_NONBLOCK );  
    if (fd < 0) {  
        perror("gpio/fd_open");  
    }  
    return fd;  
}  
  
/**************************************************************** 
 * gpio_fd_close 
 ****************************************************************/  
  
int gpio_fd_close(int fd)  
{  
    return close(fd);  
}  
  
/**************************************************************** 
 * Main 
 ****************************************************************/  
int main(int argc, char **argv, char **envp)  
{  
    struct pollfd fdset[2];  
    int nfds = 2;  
    int gpio_fd, timeout, rc;  
    char buf[MAX_BUF];  
    unsigned int gpio;  
    int len;  
  
  
  
    if (argc < 2) {  
        printf("Usage: gpio-int <gpio-pin>\n\n");  
        printf("Waits for a change in the GPIO pin voltage level or input on stdin\n");  
        exit(-1);  
    }  
  
    gpio = atoi(argv[1]);  
  
    gpio_export(gpio);  
    gpio_set_dir(gpio, 0);  
    gpio_set_edge(gpio, "rising");  
    gpio_fd = gpio_fd_open(gpio);  
  
    timeout = POLL_TIMEOUT;  
   
    while (1) {  
        memset((void*)fdset, 0, sizeof(fdset));  
  
        fdset[0].fd = STDIN_FILENO;  
        fdset[0].events = POLLIN;  
        
        fdset[1].fd = gpio_fd;  
        fdset[1].events = POLLPRI;  
  
        rc = poll(fdset, nfds, timeout);        
  
        if (rc < 0) {  
            printf("\npoll() failed!\n");  
            return -1;  
        }  
        
        if (rc == 0) {  
            printf(".");  
        }  
              
        if (fdset[1].revents & POLLPRI) {  
            lseek(fdset[1].fd, 0, SEEK_SET);
            len = read(fdset[1].fd, buf, MAX_BUF);  
            printf("\npoll() GPIO %d interrupt occurred, %c\n", gpio, buf[0]);  
        }  
  
        if (fdset[0].revents & POLLIN) {  
            (void)read(fdset[0].fd, buf, 1);  
            printf("\npoll() stdin read 0x%2.2X\n", (unsigned int) buf[0]);  
        }  
  
        fflush(stdout);  
    }  
  
    gpio_fd_close(gpio_fd);  
    return 0;  
}
```
