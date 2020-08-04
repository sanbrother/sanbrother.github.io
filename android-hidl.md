Great thanks to https://devarea.com/android-hidl-and-project-treble/

```
make/target/board/generic_x86_64/BoardConfig.mk:BOARD_VENDORIMAGE_PARTITION_SIZE := 100000000
```

```
cd aosp
mkdir -p hardware/interfaces/simple/2.0/default
```

## Create a hal file in ISimphw.hal in  hardware/interfaces/simple/2.0
```
package android.hardware.simple@2.0;
 
interface ISimphw {
    simpfn(int32_t valueIn) generates (int32_t valueRet);
};
```

## Generate the HAL files
```
PACKAGE=android.hardware.simple@2.0
LOC=~/workspace/aosp/hardware/interfaces/simple/2.0/default/
# make hidl-gen -j64
# Generate C++ code
hidl-gen -o $LOC -Lc++-impl -randroid.hardware:hardware/interfaces -randroid.hidl:system/libhidl/transport $PACKAGE
# Generate Android.bp code (under default/)
hidl-gen -o $LOC -Landroidbp-impl -randroid.hardware:hardware/interfaces -randroid.hidl:system/libhidl/transport $PACKAGE
```

## And to update all makefile (Android.mk, Android.bp) run:
```
./hardware/interfaces/update-makefiles.sh
```

## add 2 empty files to hardware/interfaces/simple/2.0/default:
 * ```android.hardware.simple@2.0-service.rc```
 * ```service.cpp```

# Files modified
## ~/aosp/build/make
```
diff --git a/target/board/generic_x86_64/BoardConfig.mk b/target/board/generic_x86_64/BoardConfig.mk
index 5bcb9ad..0b51cc8 100755
--- a/target/board/generic_x86_64/BoardConfig.mk
+++ b/target/board/generic_x86_64/BoardConfig.mk
@@ -49,7 +49,7 @@ BOARD_USERDATAIMAGE_PARTITION_SIZE := 576716800
 TARGET_COPY_OUT_VENDOR := vendor
 # ~100 MB vendor image. Please adjust system image / vendor image sizes
 # when finalizing them.
-BOARD_VENDORIMAGE_PARTITION_SIZE := 100000000
+BOARD_VENDORIMAGE_PARTITION_SIZE := 120000000
 BOARD_VENDORIMAGE_FILE_SYSTEM_TYPE := ext4
 BOARD_FLASH_BLOCK_SIZE := 512
 TARGET_USERIMAGES_SPARSE_EXT_DISABLED := true
diff --git a/target/product/emulator.mk b/target/product/emulator.mk
index f6e1011..9dd78bd 100644
--- a/target/product/emulator.mk
+++ b/target/product/emulator.mk
@@ -35,6 +35,11 @@ PRODUCT_PACKAGES += \
        iw \
        wificond \

+# SimpleHw
+PRODUCT_PACKAGES += \
+    android.hardware.simple@2.0-impl \
+    android.hardware.simple@2.0-service \
+    mysimptest \

 PRODUCT_PACKAGE_OVERLAYS := device/generic/goldfish/overlay

diff --git a/target/product/vndk/28.txt b/target/product/vndk/28.txt
index 712e91c..ddbed4e 100644
--- a/target/product/vndk/28.txt
+++ b/target/product/vndk/28.txt
@@ -114,6 +114,7 @@ VNDK-core: android.hardware.oemlock@1.0.so
 VNDK-core: android.hardware.power@1.0.so
 VNDK-core: android.hardware.power@1.1.so
 VNDK-core: android.hardware.power@1.2.so
+VNDK-core: android.hardware.power@1.3.so
 VNDK-core: android.hardware.radio.config@1.0.so
 VNDK-core: android.hardware.radio.deprecated@1.0.so
 VNDK-core: android.hardware.radio@1.0.so
@@ -121,6 +122,7 @@ VNDK-core: android.hardware.radio@1.1.so
 VNDK-core: android.hardware.radio@1.2.so
 VNDK-core: android.hardware.secure_element@1.0.so
 VNDK-core: android.hardware.sensors@1.0.so
+VNDK-core: android.hardware.simple@2.0.so
 VNDK-core: android.hardware.soundtrigger@2.0.so
 VNDK-core: android.hardware.soundtrigger@2.0-core.so
 VNDK-core: android.hardware.soundtrigger@2.1.so
diff --git a/target/product/vndk/current.txt b/target/product/vndk/current.txt
index 712e91c..ddbed4e 100644
--- a/target/product/vndk/current.txt
+++ b/target/product/vndk/current.txt
@@ -114,6 +114,7 @@ VNDK-core: android.hardware.oemlock@1.0.so
 VNDK-core: android.hardware.power@1.0.so
 VNDK-core: android.hardware.power@1.1.so
 VNDK-core: android.hardware.power@1.2.so
+VNDK-core: android.hardware.power@1.3.so
 VNDK-core: android.hardware.radio.config@1.0.so
 VNDK-core: android.hardware.radio.deprecated@1.0.so
 VNDK-core: android.hardware.radio@1.0.so
@@ -121,6 +122,7 @@ VNDK-core: android.hardware.radio@1.1.so
 VNDK-core: android.hardware.radio@1.2.so
 VNDK-core: android.hardware.secure_element@1.0.so
 VNDK-core: android.hardware.sensors@1.0.so
+VNDK-core: android.hardware.simple@2.0.so
 VNDK-core: android.hardware.soundtrigger@2.0.so
 VNDK-core: android.hardware.soundtrigger@2.0-core.so
 VNDK-core: android.hardware.soundtrigger@2.1.so
```
