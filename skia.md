### 配置编译为静态库
```bash
gn gen out/Static --args="is_debug=false is_official_build=true skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false"
```

### 配置编译为动态库
```bash
gn gen out/Shared --args="is_debug=false is_official_build=true is_component_build=true skia_use_system_expat=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false"
```

### build
```bash
ninja -C out/Shared
```
