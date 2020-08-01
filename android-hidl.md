Great thanks to https://devarea.com/android-hidl-and-project-treble/

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
