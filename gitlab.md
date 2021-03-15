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

### SMTP
```
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "TODO"
gitlab_rails['smtp_port'] = 587
gitlab_rails['smtp_user_name'] = "TODO"
gitlab_rails['smtp_password'] = "TODO"
gitlab_rails['smtp_domain'] = "TODO"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true

# The magic
gitlab_rails['smtp_openssl_verify_mode'] = 'none'

gitlab_rails['gitlab_email_from'] = 'TODO'
gitlab_rails['gitlab_email_reply_to'] = 'TODO'
```

### Test

```
gitlab-rails console

Notify.test_email('xxx@xxx.com', 'Message Subject', 'Message Body').deliver_now
```
