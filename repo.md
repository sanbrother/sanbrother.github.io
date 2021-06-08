```bash
## as normal user
git config --global user.email "`whoami`@example.com"
git config --global user.name "`whoami`"
git config --global credential.helper store

mkdir -p build_repo && cd build_repo && \
repo init -u http://10.1.46.69/git-repo/manifest.git --repo-url http://10.1.46.69/git-repo/git-repo.git --no-clone-bundle
```
