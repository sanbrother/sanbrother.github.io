 * [Guide to JNI (Java Native Interface)](https://www.baeldung.com/jni)
 ### Java Home
 ```bash
 # /etc/profile.d/java_home.sh
export JAVA_HOME=`echo $(dirname $(readlink $(readlink $(which java)))) | sed -e 's/\/bin$//g' | sed -e 's/\/jre$//g'`
```
