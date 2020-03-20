[WIM Mount工具](https://www.autoitconsulting.com/site/software/gimagex/#Downloads)

### 查看WIM信息

```
dism /get-wiminfo /wimfile:install.wim /index:1
```

### SWM转换成WIM

```
dism /export-image /sourceimagefile:install.swm /swmfile:install*.swm /sourceindex:1 /destinationimagefile:install.wim /Compress:max /CheckIntegrity
```

