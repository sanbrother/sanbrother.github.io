```bash
## as normal user
git config --global user.email "`whoami`@example.com"
git config --global user.name "`whoami`"
git config --global credential.helper store

mkdir -p build_repo && cd build_repo && \
repo init -u http://10.1.46.69/git-repo/manifest.git --repo-url http://10.1.46.69/git-repo/git-repo.git --no-clone-bundle
```

### manifest.git => default.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<manifest>
  <remote name="origin" fetch="http://10.1.46.69" />

  <default revision="refs/heads/master" remote="origin" sync-j="1" />

  <project name="projects/build" remote="origin" path="build" />
</manifest>
```
