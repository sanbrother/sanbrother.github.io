 * [How to build a docker container from scratch (Docker basics — a must know)](https://medium.com/devopslinks/how-to-build-a-docker-container-from-scratch-docker-basics-a-must-know-395cba82897b)
 * [How do I get into a Docker container's shell?](https://stackoverflow.com/questions/30172605/how-do-i-get-into-a-docker-containers-shell)
 * [Setup Proxy](https://docs.docker.com/config/daemon/systemd/#httphttps-proxy)
 * [How To Change Docker Storage \ Data Folder On Windows Server 2016](https://www.ntweekly.com/2019/09/20/how-to-change-docker-storage-data-folder-on-windows-server-2016/)

 * Fix permission denied
 ```bash
 sudo usermod -aG docker $USER
 # and then re-login
 ```

```
docker --net=host
```

### Docker从入门到实践

```bash
# To exit shell, use Ctrl + P / Q
docker run -itd --name buster debian:buster
docker exec -it buster bash
```

