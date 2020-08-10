# Reference https://wiki.peori.space/page/gpio

## Install && setup
```shell
sudo groupadd gpio
sudo gpasswd -a $USER gpio
```

Create an udev rule to set gpio as GPIO's group:
```
sudo echo ''SUBSYSTEM=="gpio*", PROGRAM="/bin/sh -c \'for path in /sys/class/gpio /sys/devices/platform/soc/*.gpio /sys/devices/platform/gpio*; do chown -R root:gpio $path; chmod -R g+w $path; done\'"'' | sudo tee /etc/udev/rules.d/99-gpio.rules
```

## Build GPIO-mockup
```
# Get kernel:
wget https://www.kernel.org/pub/linux/kernel/v4.x/linux-4.13.11.tar.xz
# Extract it and cd there
...
# Clean it
make clean && make mrproper
# Copy current conf there
cp /usr/lib/modules/$(uname -r)/build/.config ./
cp /usr/lib/modules/$(uname -r)/build/Module.symvers ./
# Enable your module
# write CONFIG_GPIO_MOCKUP=m in .config
...
# Prepare kernel
make prepare; make scripts
# Build module
make M=drivers/gpio
# Gzip it
gzip drivers/gpio//gpio-mockup.ko
# Install it
sudo mkdir /usr/lib/modules/(uname -r)/extramodules
sudo cp drivers/gpio/gpio-mockup.ko.gz /usr/lib/modules/(uname -r)/extramodules/
# Probe all modules
sudo depmod -a
# load it
# sudo modprobe gpio-mockup
sudo modprobe gpio-mockup gpio_mockup_ranges=1,40
```

## Use GPIO
```
# Use a pin:
echo 18 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio18/direction
echo 1 > /sys/class/gpio/gpio18/value

# Stop using it:
echo 18 > /sys/class/gpio/unexport
```
