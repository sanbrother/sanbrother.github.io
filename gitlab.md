### Install
```
proxychains curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh
proxychains bash script.deb.sh
apt install gitlab-ce

gitlab-ctl reconfigure
```

### Uninstall
```
gitlab-ctl uninstall
gitlab-ctl cleanse
gitlab-ctl remove-accounts
dpkg -P gitlab-ce
```
