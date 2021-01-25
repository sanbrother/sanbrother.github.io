### 配置编译为静态库
```bash
gn gen out/Static --args="is_debug=false is_official_build=true skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false"

# LLVM (Win)
gn gen out/llvmStatic --args="is_debug=false is_official_build=true skia_use_system_harfbuzz=false skia_use_system_icu=false skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false target_cpu=\"x64\" clang_win=\"D:\Program Files\LLVM\""
```

### 配置编译为动态库
```bash
# gn gen out/Shared --args="is_debug=false is_official_build=true is_component_build=true skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false"

# gn gen out/Shared --args="is_debug=false is_official_build=true is_component_build=true skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false skia_use_system_harfbuzz=false skia_use_system_icu = false"

gn gen out/release -args="is_official_build=true is_component_build=true skia_use_system_expat = false skia_use_system_harfbuzz = false skia_use_system_icu = false skia_use_system_libjpeg_turbo = false skia_use_system_libpng = false skia_use_system_libwebp = false skia_use_system_zlib = false target_cpu=""x64"" win_vc=""C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC"" extra_cflags=[""-MDd""]
```

### build
```bash
call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat" -arch=x64

ninja -C out/Shared
```

### apt
```
apt-get install libjpeg-dev libharfbuzz-dev libicu-dev libpng-dev libwebp-dev libfontconfig1-dev libsdl2-dev
```

### compile SkiaSDLExample
```
# g++ -DSK_GL -std=c++17 SkiaSDLExample.cpp -I.. -I/usr/include/SDL2 -L../out/Shared -lskia -lGL -lSDL2
g++ -DGR_GL_LOG_CALLS=0 -DGR_GL_CHECK_ERROR=0 -DSK_GL -std=c++17 SkiaSDLExample.cpp -I.. -I/usr/include/SDL2 -lGL -lSDL2 "$SKIA_LIB_DIR"/libskia.* -Wl,-rpath -Wl,"$SKIA_LIB_DIR"
```
