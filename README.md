# mComponent
components for mobile

## 调试
npm run dev

## 打包发布
打包并发布到gh-pages
执行bash命令：/bin/bash ./build.sh dist

## 出现编译出来的本地dist版本落后与远程gh-pages问题
1.强制推送
2.先删除gh-pages分支，再推送 git push origin --delete/-d gh-pages
