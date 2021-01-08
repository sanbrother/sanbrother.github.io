 * [Creating a .jar Deployment Package Using Maven and Eclipse IDE (Java)](https://docs.aws.amazon.com/lambda/latest/dg/java-create-jar-pkg-maven-and-eclipse.html)

### ~/.m2/settings.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <proxies>
        <proxy>
            <id>proxy-http</id>
            <active>true</active>
            <protocol>http</protocol>
            <host>10.1.43.235</host>
            <port>3128</port>
        </proxy>
        <proxy>
            <id>proxy-https</id>
            <active>true</active>
            <protocol>https</protocol>
            <host>10.1.43.235</host>
            <port>3128</port>
        </proxy>
    </proxies>
</settings>
```
