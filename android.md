---
title: Android
---

## [GDB over ADB](https://wladimir-tm4pda.github.io/porting/debugging_gdb.html)
```bash
gdbserver :5039 --attach `pidof android.hardware.audio@2.0-service`
```

## Where can i find androidmk tool to convert Android.mk to Android.bp?
```
source build/envsetup.sh
make blueprint_tools
# Now you can simply run androidmk and the command will be in your PATH.
androidmk
```

## Debug with Android Studio
```
mmm development/tools/idegen && development/tools/idegen/idegen.sh
open android.ipr from Android Studio
```

 * [Use platform.pk8 and platform.x509.pem to generate Android studio signature files under Windows](https://www.programmersought.com/article/85363994040/)

## Android Build System
 * [Android Build System](https://elinux.org/Android_Build_System)

## Open Source State Machine library
 * http://smc.sourceforge.net/

## Android HIDL
 * https://devarea.com/android-hidl-and-project-treble/
 * https://chendongqi.me/2019/09/08/hidl-binderizd/
 * https://blog.csdn.net/Invoker123/article/details/84868260

## See Move Android Studio AVD folder to a new location
```
# See https://www.mysysadmintips.com/windows/clients/761-move-android-studio-avd-folder-to-a-new-location
ANDROID_SDK_HOME
```

## Install via sdkmanager commandline tools
```
~/tools/bin/sdkmanager --sdk_root=/home/cocoa/Downloads/sdk --proxy=http --proxy_host=10.1.43.235 --proxy_port=3128 --install "system-images;android-28;google_apis;x86_64"
```

## [Aliyun Maven Mirror](https://maven.aliyun.com/mvn/view)

## Gradle config($HOME/.gradle/gradle.properties)
```
# Proxy
org.gradle.jvmargs=-DhttpProxyHost=127.0.0.1 -DhttpProxyPort=1080

# Keystore
RELEASE_STORE_FILE=path_to_key_store
RELEASE_STORE_PASSWORD=password
RELEASE_KEY_ALIAS=alias
RELEASE_KEY_PASSWORD=password
```

 * [Android Asset Studio](https://reiszecke.github.io/AndroidAssetStudioFullsize/index.html)
 * [How to create a release signed apk file using Gradle?](https://stackoverflow.com/a/21020469/2553400)
 * [How To Set Android SDK Path In Windows And Mac](https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/)
 * [使用 Android 模拟器虚拟设备](https://source.android.com/setup/create/avd)
 * [How to mount /system rewritable or read-only? (RW/RO)](https://android.stackexchange.com/questions/110927/how-to-mount-system-rewritable-or-read-only-rw-ro)
 * [Creating a Android/AOSP Build machine on Ubuntu 20.04](https://back2basics.io/2020/05/creating-a-android-aosp-build-machine-on-ubuntu-20-04/)
 ```
 repo init -u https://android.googlesource.com/platform/manifest -b android-9.0.0_r34 --depth=1
 repo sync -j$(nproc)
 
 # ????
 make -j$(nproc) sdk sdk_repo
 ```
