[Cross-compiling with gst-build and GStreamer](https://www.collabora.com/news-and-blog/blog/2020/05/15/cross-compiling-with-gst-build-and-gstreamer/)

```bash
meson build-cross-arm64 --cross-file aarch64-linux-meson-cross-file.txt
ninja -C build-cross-arm64
```

#### aarch64-linux-meson-cross-file.txt
```
[host_machine]
system = 'linux'
cpu_family = 'aarch64'
cpu = 'arm64'
endian = 'little'

[properties]
c_args = []
cpp_args = []
objc_args = []
objcpp_args = []
c_link_args = []
cpp_link_args = []
objc_link_args = []
objcpp_link_args = []
pkg_config_libdir = ['__no_cross_sysroot__']
sys_root = ''


[binaries]
c = ['aarch64-linux-gnu-gcc']
cpp = ['aarch64-linux-gnu-g++']
ar = ['aarch64-linux-gnu-ar']
pkgconfig = 'pkg-config'
strip = ['aarch64-linux-gnu-strip']
cmake = ['false']
```
