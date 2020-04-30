---
title : QT
---

### QStackedWidget
 * [How to use Qstackedwidget in Qt (Switching between multiple views in Qt)](http://qt-articles.blogspot.com/2011/02/how-to-use-qstackedwidget-in-qt.html)
 * [QStackedWidget Class](http://doc.qt.io/qt-5/qstackedwidget.html)
 * [QML Book](https://qmlbook.github.io/)

### Compile Qt5
```
export QT5PREFIX=/opt/Qt/v5.10.0-alpha

./configure -prefix $QT5PREFIX                          \
            -sysconfdir /etc/xdg                        \
            -confirm-license                            \
            -opensource                                 \
            -dbus-linked                                \
            -openssl-linked                             \
            -system-harfbuzz                            \
            -system-sqlite                              \
            -nomake examples                            \
            -no-rpath                                   \
            -skip qtwebengine
make -j$(nproc)
```

```
export QT5PREFIX=/opt/Qt/v5.10.0-alpha

./configure -prefix $QT5PREFIX                          \
            -confirm-license                            \
            -opensource                                 \
            -nomake examples                            \
            -nomake tests                               \
            -syslog
make -j$(nproc)

export QT_LOGGING_TO_CONSOLE=0
```
