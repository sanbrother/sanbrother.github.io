[GITLAB ON RASPBERRY PI](https://x-team.com/blog/alternatives-to-github-including-github/)

```
git config core.fileMode false
```

```
#!/usr/bin/env bash

# Install GitLab
echo "Updating OS"
sudo apt-get update
sudo apt-get install curl openssh-server ca-certificates postfix

curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
sudo apt-get install gitlab-ce

sudo nano /etc/gitlab/gitlab.rb
# external_url 'http://localhost:9999'
# nginx['listen_port'] = 9999
# nginx['listen_https'] = false
# unicorn['port'] = 7777

sudo gitlab-ctl reconfigure

# Start all GitLab components
sudo gitlab-ctl start
```
