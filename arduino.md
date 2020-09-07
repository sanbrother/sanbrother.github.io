---
title: Arduino
---

## Arduino Uno Rev3

| Parameter | Value |
| --- | --- |
| Microcontroller | ATmega328P |
| Operating Voltage | 5V |
| Input Voltage (recommended) | 7-12V |
| Input Voltage (limit) | 6-20V |
| Digital I/O Pins | 14 (of which 6 provide PWM output) |
| PWM Digital I/O Pins | 6 |
| Analog Input Pins | 6 |
| DC Current per I/O Pin | 20 mA |
| DC Current for 3.3V Pin | 50 mA |
| Flash Memory | 32 KB (ATmega328P) of which 0.5 KB used by bootloader |
| SRAM | 2 KB (ATmega328P) |
| EEPROM | 1 KB (ATmega328P) |
| Clock Speed | 16 MHz |
| LED_BUILTIN | 13 |
| Length | 68.6 mm |
| Width | 53.4 mm |
| Weight | 25 g |

## Arduino IDE(s)
- [Sloeber (Eclipse based)](http://eclipse.baeyens.it)

## SG90 Servo
- 舵机三条线定义：
  - 暗灰： GND
  - 红色： VCC 4.8-7.2V
  - 橙黄线： 脉冲输入
- 扭 矩：1.5kg/cm
- 工 作 电 压: 4.2-6V
- 温 度 范 围:0℃--55℃
- 运 行 速 度：0.3秒/60度（实测、在装有超声波测距模块时、竟然能达到0.16秒/60度，如果空载的话、应该能更快）


## Reference
- [Arduino Power Consumption Normal & Sleep](https://www.gadgetmakersblog.com/arduino-power-consumption/)
- [蓝牙小车](http://blog.csdn.net/qq_16775293/article/details/77489166)
- [OLED I2C DISPLAY WITH ARDUINO](http://www.instructables.com/id/Monochrome-096-i2c-OLED-display-with-arduino-SSD13/)
- [Arduino 25V Voltage Sensor Module User Manual](http://henrysbench.capnfatz.com/henrys-bench/arduino-voltage-measurements/arduino-25v-voltage-sensor-module-user-manual/)
- [CAN Bus Library](https://github.com/autowp/arduino-mcp2515)

  ![image](https://i0.wp.com/henrysbench.capnfatz.com/wp-content/uploads/2015/05/Arduino-25V-Sensor-Module.png)
- [Effects of Varying I2C Pull-Up Resistors](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors)

## 基础知识

![](D:\01.Git\github\sanbrother\sanbrother.github.io\images\FI8KJ0RIYGFJDYW.jpg)

使用下拉电阻时、5V电源与输入PIN之间不需要电阻？会不会电流过大？

不会、以下是网友的回复：

```
7-12V is the maximum input voltage you can apply to the external DC input power jack.

The analog input pin voltage is limited to 0V-5V. Anything outside that range will damage your microcontroller.

And to clarify, you do not "input" current into a pin. The pin decides how much current to draw in response to an applied voltage. If your applied voltage is in the range 0V-5V then the amount of current that will flow into the pin is very close to 0. Just make sure you configure the analog pin as an input, and not an output.
```

Arduino的PIN做为输入、可能相当于接了个“无限大的电阻”。如果是输出呢？可能就要小心了