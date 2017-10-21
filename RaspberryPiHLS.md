---
title: Raspberry Pi HLS
---

### 从摄像头截图的命令

```bash
ffmpeg -f video4linux2 -s 640x480 -i /dev/video0 -ss 0:0:2 -frames 1 1.jpg
```

### 把视频中的音频转换为HLS

```
ffmpeg -i HDI_ITPro_Technet_mp4video_ChoseYourWorkflow.m4v -vn -b:a 320k -f flv rtmp://localhost/show/stream
```

### 从USB声卡（的MIC）取得音频流

```
ffmpeg -f alsa -ac 1 -i hw:1,0 -f flv rtmp://localhost/show/stream
```



```
ffmpeg -f alsa -f v4l2 -input_format mjpeg -framerate 15 -video_size 1280x720 -i /dev/video0 -vcodec copy -acodec copy -t 10 ~/output.mkv
```



* [Compile FFmpeg with the OpenMAX H.264 GPU acceleration](https://github.com/legotheboss/YouTube-files/wiki/(RPi)-Compile-FFmpeg-with-the-OpenMAX-H.264-GPU-acceleration)

