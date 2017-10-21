---
title : USB
---

```
sudo apt-get install libusb-1.0-0-dev
g++ libusb_bulk_read.cpp -o libusb_bulk_read `pkg-config --cflags --libs libusb-1.0`
```
