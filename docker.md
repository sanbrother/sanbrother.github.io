 * [How to build a docker container from scratch (Docker basics — a must know)](https://medium.com/devopslinks/how-to-build-a-docker-container-from-scratch-docker-basics-a-must-know-395cba82897b)
 * [How do I get into a Docker container's shell?](https://stackoverflow.com/questions/30172605/how-do-i-get-into-a-docker-containers-shell)

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

