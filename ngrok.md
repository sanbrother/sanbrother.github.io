## Install TigerVNC
```
sudo apt-get install tigervnc-scraping-server
```

## [How to start a vnc server for the actual display (scraping) with TigerVNC](https://www.howtoforge.com/tutorial/how-to-start-a-vnc-server-for-the-actual-display-scraping-with-tigervnc/)

```
## .xsessionrc
export http_proxy=http://10.1.43.235:3128
export https_proxy=http://10.1.43.235:3128

/usr/bin/startvnc start >/dev/null 2>&1
/root/ngrok tcp 5900 &
```

## [https://hub.docker.com/r/keepwn/ngrok-self-hosting/](https://hub.docker.com/r/keepwn/ngrok-self-hosting/)
## [搭建并配置优雅的 ngrok 服务实现内网穿透](https://yii.im/posts/pretty-self-hosted-ngrokd/)
## [搭建 ngrok 服务实现内网穿透](https://imququ.com/post/self-hosted-ngrokd.html)


```
apt-get install build-essential golang mercurial git
git clone https://github.com/inconshreveable/ngrok.git ngrok
cd ngrok

NGROK_DOMAIN="182.61.137.32"

openssl genrsa -out base.key 2048
openssl req -new -x509 -nodes -key base.key -days 10000 -subj "/CN=$NGROK_DOMAIN" -out base.pem
openssl genrsa -out server.key 2048
openssl req -new -key server.key -subj "/CN=$NGROK_DOMAIN" -out server.csr
openssl x509 -req -in server.csr -CA base.pem -CAkey base.key -CAcreateserial -days 10000 -out server.crt

cp base.pem assets/client/tls/ngrokroot.crt

```

## ~/.ngrok2/ngrok.yml
```
authtoken: THE_TOKEN

tunnels:
  myapp-http:
    addr: 80
    proto: http
    bind_tls: false
  mypp-https:
    addr: 443
    proto: tls
  ssh-access:
    addr: 22
    proto: tcp
```

## startvnc
```
#!/bin/bash
# title             :startvnc
# description       :This script was written for the debian package tigervnc-scraping-server, in order to log in to the actual X session on display :0
# author            :Istvan Sebestyen-Teleki
# date              :2018.10.06.
# version           :0.3
# usage             :bash startvnc
# notes             :install tigervnc-scraping-server (debian stretch)

# What's the script name
SCRIPTNAME="startvnc"

# Where the x0vncserver executable is located, default:
VNCSERVER="/usr/bin/x0vncserver"

# Set home directory
HOMEDIR=${HOME}

# Default VNC User directory
VNCDIR="${HOMEDIR}/.vnc"

# Set log file for debugging
LOGFILE="${VNCDIR}/logfile"

# The vnc passwd file. If it doesn't exist, you need to create it
PASSWDFILE="${VNCDIR}/passwd"

# Leave this on ":0", since we want to log in to the actual session
DISPLAY=":0"

# Set the port (default 5900)
VNCPORT="5900"

# PID of the actual VNC server running
# The PID is actually created this way, so it is compatible with the vncserver command
# if you want to kill the VNC server manually, just type 
# vncserver -kill :0
PIDFILE="${VNCDIR}/${HOSTNAME}${DISPLAY}.pid"

# Add some color to the script
OK="[\033[1;32mok\033[0m]"
FAILED="[\033[1;31mfailed\033[0m]"
RUNNING="[\033[1;32mrunning\033[0m]"
NOTRUNNING="[\033[1;31mnot running\033[0m]"

# Function to get the process id of the VNC Server
fn_pid() {
    CHECKPID=$(ps -fu ${USER} | grep "[x]0vncserver" | awk '{print $2}')
    if [[ ${CHECKPID} =~ ^[0-9]+$ ]] 
    then
        VAR=${CHECKPID}
        return 0
    else
        return 1
    fi
}


if [ ! -d ${VNCDIR} ]
then
    echo -e "Directory ${VNCDIR} doesn't exist. Create it first." ${FAILED}
    echo
    exit 1
fi

if [ ! -f ${PASSWDFILE} ]
then
    echo -e "${PASSWDFILE} doesn't exist. Create VNC password first. ${FAILED}"
    echo "Type \"vncpasswd\" to create passwd file."
    echo
    exit 1
fi

case "$1" in
    start)
        echo -n "Starting VNC Server on display ${DISPLAY} "
        fn_pid
        if [ $? -eq 0 ]
        then
            echo -e ${FAILED}
            echo -e "VNC Server is running (pid: ${VAR})"
	    echo
        else
            ${VNCSERVER} -display ${DISPLAY} -passwordfile ${PASSWDFILE} -rfbport ${VNCPORT} >> ${LOGFILE} 2>&1 &
	    if [ $? -eq 0 ]
	    then
            	fn_pid
            	echo ${VAR} > ${PIDFILE}
            	echo -e ${OK}
	    	echo
	else
		echo -e $FAILED
		echo
		fi

        fi

        ;;
    
    restart)

        echo -n "Restarting VNC Server on display ${DISPLAY} "
        fn_pid
        if [ $? -eq 0 ]
        then
            kill -9 ${VAR}

            if [ $? -eq 0 ]
            then 
                ${VNCSERVER} -display ${DISPLAY} -passwordfile ${PASSWDFILE} -rfbport ${VNCPORT} >> ${LOGFILE} 2>&1 &
                echo -e ${OK}
		echo
                fn_pid 
                echo ${VAR} > ${PIDFILE}
                exit 0
            else
                echo -e ${FAILED}
                echo "Couldn't stop VNC Server. Exiting."
		echo
                exit 1
            fi

        else

            ${VNCSERVER} -display ${DISPLAY} -passwordfile ${PASSWDFILE} -rfbport ${VNCPORT} >> ${LOGFILE} 2>&1 &
            if [ $? -eq 0 ]
            then
                echo -e ${OK}
		echo
                fn_pid
                echo ${VAR} > ${PIDFILE}
            else
                echo -e ${FAILED}
                echo "Couldn't start VNC Server. Exiting."
		echo
                exit 1
            fi
        fi
    ;;

    stop)
    
        echo -n "Stopping VNC Server: "
        fn_pid
        if [ $? -eq 0 ]
        then
            kill -9 ${VAR}
            echo -ne ${OK}
            echo -e " (pid: ${VAR})"
	    echo
        else
            echo -e ${FAILED}
            echo -e "VNC Server is not running."
	    echo
            exit 1
        fi
    ;;

    status)
        echo -n "Status of the VNC server: "
        fn_pid
        if [ $? -eq 0 ]
        then
            echo -e "$RUNNING (pid: $VAR)"
	    echo
            exit 0
        else
            echo -e $NOTRUNNING
	    echo
        fi
        ;;

    *)
        echo
        echo "Usage: $0 start|stop|restart|status"
        echo
        exit 1
    ;;
esac
```
