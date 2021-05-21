### [Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh)

```
# %UserProfile%\.ssh\config
Host 10.1.43.7
  HostName 10.1.43.7
  User root
  ForwardAgent yes
  IdentityFile ~/.ssh/id_rsa
```

### Starting Java Language Server never ends
```
remove %APPDATA%\Code\User\workspaceStorage\*
```
