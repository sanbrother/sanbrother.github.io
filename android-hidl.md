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

## add 2 empty files to hardware/interfaces/simple/2.0/default:
 * ```android.hardware.simple@2.0-service.rc```
 * ```service.cpp```
